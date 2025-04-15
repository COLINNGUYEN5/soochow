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
    panAndZoomTo: (target: [number, number, number], zoomAmount?: number) => void;

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
            if (controlsRef.current) {
                currentTarget.current.copy(controlsRef.current.target);
            }
            desiredTarget.current.set(...newTarget);
            isPanning.current = true;
        },

        panAndZoomTo: (newTarget: [number, number, number], zoomDistance = 8) => {
            if (controlsRef.current) {
                const controls = controlsRef.current;

                // Set current target for smooth pan
                currentTarget.current.copy(controls.target);
                desiredTarget.current.set(...newTarget);
                isPanning.current = true;

                // Calculate the direction from camera to target
                const direction = camera.position.clone().sub(controls.target).normalize();

                // Set new offsetRef based on the desired zoom distance
                offsetRef.current = direction.multiplyScalar(zoomDistance);
            }
        }

    }));


    useEffect(() => {
        const controls = controlsRef.current;
        if (!controls) return;

        // Set initial camera position and orientation
        camera.position.set(60, 20, 80);
        camera.up.set(0, 1, 0); // ✅ Always keep camera upright
        camera.lookAt(currentTarget.current); // ✅ Lock initial orientation toward target

        controls.target.copy(currentTarget.current);
        offsetRef.current = camera.position.clone().sub(controls.target);

        // OrbitControls config
        controls.enableRotate = false;
        controls.enableZoom = true;
        controls.enablePan = true;
        controls.screenSpacePanning = false;

        controls.update();
    }, [camera]);



    useFrame(() => {
        const controls = controlsRef.current;
        if (!controls || !offsetRef.current) return;

        // --- Smooth auto-panning logic ---
        if (isPanning.current) {
            currentTarget.current.lerp(desiredTarget.current, 0.05);
            if (currentTarget.current.distanceTo(desiredTarget.current) < 0.05) {
                isPanning.current = false;
                currentTarget.current.copy(desiredTarget.current);
            }

            const clampedTarget = clampTarget(currentTarget.current);
            controls.target.copy(clampedTarget);

            const newCamPos = clampedTarget.clone().add(offsetRef.current);
            camera.position.copy(clampCamera(newCamPos));
        } else {
            // --- User-controlled panning logic ---
            // 1. Clamp the target
            const clampedTarget = clampTarget(controls.target);
            controls.target.copy(clampedTarget);

            // 2. Recompute offset from clamped target
            const offset = camera.position.clone().sub(controls.target);

            // 3. Clamp camera position based on this offset
            const clampedCamPos = clampCamera(clampedTarget.clone().add(offset));
            camera.position.copy(clampedCamPos);
        }

        // --- Finalize update ---
        controls.update();

        // ✅ Force the camera to stay level and upright
        camera.up.set(0, 1, 0);
        camera.lookAt(controls.target);
    });






    // Clamp the target position within bounds
    function clampTarget(vec: Vector3): Vector3 {
        return new Vector3(
            Math.min(BOUNDS.maxX, Math.max(BOUNDS.minX, vec.x)),
            0, // Y stays level
            Math.min(BOUNDS.maxZ, Math.max(BOUNDS.minZ, vec.z))
        );
    }

    function clampCamera(vec: Vector3): Vector3 {
        return new Vector3(
            Math.min(BOUNDS.maxX + 15, Math.max(BOUNDS.minX - 15, vec.x)),
            vec.y, // ✅ Let user zoom vertically, but don't touch Y for pan
            Math.min(BOUNDS.maxZ + 15, Math.max(BOUNDS.minZ - 15, vec.z))
        );
    }


    return (
        <OrbitControls
            ref={controlsRef}
            enableRotate={false}
            enableZoom={true}
            enablePan={true}
            screenSpacePanning={false}
            minPolarAngle={Math.PI / 5}  // ✅ lock to horizontal view
            maxPolarAngle={Math.PI / 5}  // ✅ lock to horizontal view
            minAzimuthAngle={0}           // ✅ Freeze horizontal rotation
            maxAzimuthAngle={0}
            minDistance={20}
            maxDistance={40}
            mouseButtons={{
                LEFT: MOUSE.PAN,
                MIDDLE: MOUSE.DOLLY,
            }}
        />

    );
});
