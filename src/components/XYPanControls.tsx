import { OrbitControls } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import {
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
} from 'react';
import { Vector3, MOUSE } from 'three';

export type XYPanControlsHandle = {
    panTo: (target: [number, number, number]) => void;
};

export const XYPanControls = forwardRef<XYPanControlsHandle>((_, ref) => {
    const controlsRef = useRef<any>(null);
    const { camera } = useThree();

    const BOUNDS = {
        minX: 40,
        maxX: 65,
        minZ: 50,
        maxZ: 100,
    };

    const offsetRef = useRef<Vector3 | null>(null);

    const isPanning = useRef(false);
    const currentTarget = useRef(new Vector3(60, 0, 70));
    const desiredTarget = useRef(new Vector3(60, 0, 70));

    useImperativeHandle(ref, () => ({
        panTo: (newTarget: [number, number, number]) => {
            // Sync currentTarget with current controls target before starting animation
            if (controlsRef.current) {
                const actualTarget = controlsRef.current.target;
                currentTarget.current.copy(actualTarget);
            }

            desiredTarget.current.set(...newTarget);
            isPanning.current = true;
        },
    }));


    useEffect(() => {
        const controls = controlsRef.current;
        if (!controls) return;

        camera.position.set(60, 20, 80);
        camera.up.set(0, 1, 0);
        controls.target.copy(currentTarget.current);
        controls.update();

        offsetRef.current = camera.position.clone().sub(controls.target);

        controls.enableRotate = false;
        controls.enableZoom = true;
        controls.screenSpacePanning = false;
    }, [camera]);

    useFrame(() => {
        const controls = controlsRef.current;
        if (!controls || !offsetRef.current) return;

        if (isPanning.current) {
            // 💫 Smooth transition
            currentTarget.current.lerp(desiredTarget.current, 0.02);

            if (currentTarget.current.distanceTo(desiredTarget.current) < 0.05) {
                isPanning.current = false;
            }

            const tgt = clampTarget(currentTarget.current);
            controls.target.copy(tgt);
            camera.position.copy(tgt.clone().add(offsetRef.current));
        } else {
            const tgt = clampTarget(controls.target);
            controls.target.copy(tgt);

            const camOffset = offsetRef.current.clone();
            const newPos = tgt.clone().add(camOffset);
            camera.position.copy(clampCamera(newPos));
        }

        controls.update();
    });


    // Clamp the target position within bounds
    function clampTarget(vec: Vector3): Vector3 {
        return new Vector3(
            Math.min(BOUNDS.maxX, Math.max(BOUNDS.minX, vec.x)),
            vec.y,
            Math.min(BOUNDS.maxZ, Math.max(BOUNDS.minZ, vec.z))
        );
    }

    // Optional: Clamp camera position to ensure it doesn't drift too far
    function clampCamera(vec: Vector3): Vector3 {
        return new Vector3(
            Math.min(BOUNDS.maxX + 15, Math.max(BOUNDS.minX - 15, vec.x)),
            vec.y,
            Math.min(BOUNDS.maxZ + 15, Math.max(BOUNDS.minZ - 15, vec.z))
        );
    }

    return (
        <OrbitControls
            ref={controlsRef}
            enableRotate={false}
            enableZoom={true}
            mouseButtons={{
                LEFT: MOUSE.PAN,
                MIDDLE: MOUSE.DOLLY,
            }}
            minDistance={15}
            maxDistance={15}
        />
    );
});
