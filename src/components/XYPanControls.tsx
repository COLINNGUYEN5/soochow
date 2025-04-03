import { OrbitControls } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Vector3, MOUSE } from 'three';

export function XYPanControls() {
    const controlsRef = useRef<any>(null);
    const { camera } = useThree();

    const BOUNDS = {
        minX: 40,
        maxX: 65,
        minZ: 50,
        maxZ: 100,
    };

    const offsetRef = useRef<Vector3 | null>(null);

    useEffect(() => {
        const controls = controlsRef.current;
        if (!controls) return;

        camera.position.set(60, 20, 80);
        camera.up.set(0, 1, 0);
        controls.target.set(60, 0, 70);
        controls.update();

        offsetRef.current = camera.position.clone().sub(controls.target);

        controls.enableRotate = false;
        controls.enableZoom = false;
        controls.screenSpacePanning = false;
    }, [camera]);

    useFrame(() => {
        const controls = controlsRef.current;
        if (!controls || !offsetRef.current) return;

        const tgt = controls.target;

        // ✅ Clamp target only
        tgt.x = Math.min(BOUNDS.maxX, Math.max(BOUNDS.minX, tgt.x));
        tgt.z = Math.min(BOUNDS.maxZ, Math.max(BOUNDS.minZ, tgt.z));

        // ✅ Keep camera at fixed offset from clamped target
        camera.position.copy(tgt.clone().add(offsetRef.current));

        controls.update();
    });


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
}
