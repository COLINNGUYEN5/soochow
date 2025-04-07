import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoader, useFrame } from "@react-three/fiber";
import { Sprite, TextureLoader, Vector3 } from "three";
import { Html } from "@react-three/drei";

type MapPinProps = {
    textureUrl: string;
    position: [number, number, number];
    label: string;
    route: string;
    baseScale?: number;
    hoverScale?: number;
};

export function MapPin({
                           textureUrl,
                           position,
                           label,
                           route,
                           baseScale = 3,
                           hoverScale = 4
                       }: MapPinProps) {
    const navigate = useNavigate();
    const texture = useLoader(TextureLoader, textureUrl);

    const spriteRef = useRef<Sprite>(null);
    const [hovered, setHovered] = useState(false);

    // Smooth scaling animation
    useFrame(() => {
        if (spriteRef.current) {
            const targetScale = hovered ? hoverScale : baseScale;
            spriteRef.current.scale.lerp(new Vector3(targetScale, targetScale, 1), 0.1);
        }
    });

    return (
        <group position={position}>
            <sprite
                ref={spriteRef}
                onClick={() => navigate(route)}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <spriteMaterial attach="material" map={texture} />
            </sprite>

            {hovered && (
                <Html center distanceFactor={45}>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-12 px-2 py-1 text-xs text-white bg-black rounded opacity-100 transition-opacity pointer-events-none">
                        {label}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                    </div>
                </Html>
            )}
        </group>
    );
}
