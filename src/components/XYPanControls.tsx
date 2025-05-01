import { OrbitControls } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import {
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef, useState,
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
        minX: 33.5,
        maxX: 83,
        minZ: 50,
        maxZ: 90,
    };


    const offsetRef = useRef<Vector3 | null>(null);
    const pendingZoomDistance = useRef<number | null>(null);
    const zoomTimeout = useRef<NodeJS.Timeout | null>(null);
    const isPanning = useRef(false);
    const [triggerZoom, setTriggerZoom] = useState(false);
    const isZooming = useRef(false);
    const desiredZoomOffset = useRef<Vector3 | null>(null);
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

        panAndZoomTo: (newTarget: [number, number, number], zoomDistance = 7) => {
            if (controlsRef.current) {
                const controls = controlsRef.current;

                // Start panning
                currentTarget.current.copy(controls.target);
                desiredTarget.current.set(...newTarget);
                isPanning.current = true;

                // Save zoom distance for animation
                pendingZoomDistance.current = zoomDistance;
                // 👇 Force camera to start from far away
                setTriggerZoom(true);

            }
        }


    }));


    useEffect(() => {
        const controls = controlsRef.current;
        if (!controls) return;

        // Set initial camera position and orientation
        camera.position.set(60, 20, 80);
        camera.up.set(0, 1, 0); // Always keep camera upright
        camera.lookAt(currentTarget.current); // Lock initial orientation toward target

        controls.target.copy(currentTarget.current);
        offsetRef.current = camera.position.clone().sub(controls.target);
        const dist = offsetRef.current.length();
        const clamped = Math.min(12, Math.max(10, dist));
        offsetRef.current.setLength(clamped);
        // OrbitControls config
        controls.enableRotate = false;
        controls.enableZoom = true;
        controls.enablePan = true;
        controls.screenSpacePanning = false;
        controls.update();


        return () => {
            if (zoomTimeout.current) {
                clearTimeout(zoomTimeout.current);
            }
        };

    }, [camera]);

    useEffect(() => {
        if (!triggerZoom || pendingZoomDistance.current === null) return;

        console.log("⌛ Starting zoom delay...");
        zoomTimeout.current = setTimeout(() => {
            const controls = controlsRef.current;
            if (!controls) return;

            const direction = camera.position.clone().sub(controls.target).normalize();
            desiredZoomOffset.current = direction.multiplyScalar(pendingZoomDistance.current!);
            isZooming.current = true;

            console.log("Zoom started with distance:", pendingZoomDistance.current);

            pendingZoomDistance.current = null;
            zoomTimeout.current = null;
            setTriggerZoom(false); // Reset the state
        }, 500);
    }, [triggerZoom]);




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
        }

        // Trigger zoom after panning (with delay)

        // Animate zooming by lerping the offset
        if (isZooming.current && desiredZoomOffset.current && offsetRef.current) {
            offsetRef.current.lerp(desiredZoomOffset.current, 0.01);

            console.log("Zooming... offset length:", offsetRef.current.length());

            // Stop when close enough
            if (offsetRef.current.distanceTo(desiredZoomOffset.current) < 0.05) {
                offsetRef.current.copy(desiredZoomOffset.current);
                isZooming.current = false;
                desiredZoomOffset.current = null;
            }

            const camPos = controls.target.clone().add(offsetRef.current);
            camera.position.copy(camPos); // No clamping while zooming
        }

        // ✅ Resume clamping only after zooming
        if (
            !isPanning.current &&
            !isZooming.current &&
            pendingZoomDistance.current === null
        ) {
            const clampedTarget = clampTarget(controls.target);
            controls.target.copy(clampedTarget);

            const offset = camera.position.clone().sub(controls.target);
            const clampedCamPos = clampCamera(clampedTarget.clone().add(offset));
            camera.position.copy(clampedCamPos);
        }

        // --- Final update ---
        controls.update();
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
        const target = controlsRef.current?.target ?? new Vector3(0, 0, 0);
        const direction = vec.clone().sub(target).normalize();
        const distance = vec.distanceTo(target);

        const clampedDistance = Math.min(12, Math.max(7, distance)); // match minDistance/maxDistance

        return target.clone().add(direction.multiplyScalar(clampedDistance));
    }



    return (
        <OrbitControls
            ref={controlsRef}
            enableRotate={false}
            enableZoom={true}
            enablePan={true}
            screenSpacePanning={true}
            minPolarAngle={Math.PI / 5}  // lock to horizontal view
            maxPolarAngle={Math.PI / 5}  // lock to horizontal view
            minAzimuthAngle={0}           // Freeze horizontal rotation
            maxAzimuthAngle={0}
            minDistance={10}
            maxDistance={12}
            mouseButtons={{
                LEFT: MOUSE.PAN,
                MIDDLE: MOUSE.DOLLY,
            }}
        />

    );
});
