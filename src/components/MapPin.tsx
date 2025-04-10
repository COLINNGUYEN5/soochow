import { useRef, useState, useEffect } from "react";
import { Sprite, TextureLoader, Vector3 } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";

type MapPinProps = {
    textureUrl: string;
    position: [number, number, number];
    label: string;
    route: string;
    baseScale?: number;
    hoverScale?: number;
    width?: number;
    height?: number;
    onSelect?: (pin: { textureUrl: string; label: string; route: string; position: [number, number, number] }) => void;
};


export function MapPin({
                           textureUrl,
                           position,
                           label,
                           route,
                           baseScale = 3,
                           hoverScale = 4,
                           width,
                           height,
                           onSelect
                       }: MapPinProps) {
    const texture = useLoader(TextureLoader, textureUrl);
    const spriteRef = useRef<Sprite>(null);
    const [hovered, setHovered] = useState(false);
    const [aspectRatio, setAspectRatio] = useState(1); // new

    // Get actual image aspect ratio
    useEffect(() => {
        if (texture.image) {
            const img = texture.image;
            setAspectRatio(img.width / img.height);
        }
    }, [texture]);

    useFrame(() => {
        if (spriteRef.current) {
            const scaleMultiplier = hovered ? hoverScale / baseScale : 1;

            const baseWidth = width ?? baseScale * aspectRatio;
            const baseHeight = height ?? baseScale;

            const targetWidth = baseWidth * scaleMultiplier;
            const targetHeight = baseHeight * scaleMultiplier;

            spriteRef.current.scale.lerp(
                new Vector3(targetWidth, targetHeight, 1),
                0.1
            );
        }
    });



    return (
        <group position={position}>
            <sprite
                ref={spriteRef}
                onClick={() => onSelect?.({ textureUrl, label, route, position })}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <spriteMaterial attach="material" map={texture} />
            </sprite>

            {hovered && (
                <Html center distanceFactor={45}>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-12 px-2 py-1 text-xs text-white bg-black rounded pointer-events-none shadow-md whitespace-nowrap max-w-xs truncate">
                        {label}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                    </div>
                </Html>
            )}
        </group>
    );
}
