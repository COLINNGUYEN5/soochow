import {useNavigate} from "react-router-dom";
import {useFrame, useLoader} from "@react-three/fiber";
import {Sprite, TextureLoader, Vector3} from "three";
import {useRef, useState} from "react";
import {Html} from "@react-three/drei";

export function FuyuPin() {
    const navigate = useNavigate();
    const texture = useLoader(TextureLoader, "/fuyu-pin.png");

    const [hovered, setHovered] = useState(false);
    const spriteRef = useRef<Sprite>(null);

    // Animate scale on hover
    useFrame(() => {
        if (spriteRef.current) {
            const targetScale = hovered ? 4 : 3; // original scale is 5
            const current = spriteRef.current.scale;
            current.lerp(new Vector3(targetScale, targetScale, 1), 0.1);
        }
    });

    return (
        <group position={[33, 2.3, 76]}>
            <sprite
                ref={spriteRef}
                onClick={() => navigate("/sites/shuangxi")}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <spriteMaterial attach="material" map={texture} />
            </sprite>

            {hovered && (
                <Html center distanceFactor={45}>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-12 px-2 py-1 text-xs text-white bg-black rounded opacity-100 transition-opacity pointer-events-none">
                        Fuyu Tea House
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                    </div>
                </Html>
            )}
        </group>
    );
}
