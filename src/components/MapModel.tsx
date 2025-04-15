import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { MapPin } from "./MapPin";

type MapModelProps = {
    onLoadComplete: () => void;
    onPinSelect: (pin: {
        textureUrl: string;
        label: string;
        route: string;
        position: [number, number, number];
    }) => void;
};

export function MapModel({ onLoadComplete, onPinSelect }: MapModelProps) {
    const { scene } = useGLTF('/models/WSXMap.glb');

    useEffect(() => {
        console.log('✅ GLB loaded');
        onLoadComplete();
    }, [onLoadComplete]);

    return (
        <group>
            <primitive object={scene} />

            <MapPin
                textureUrl="/pins/fuyu-pin.png"
                position={[33, 2.3, 74.5]}
                label="Fuyu Tea House"
                route="/sites/fuyu"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="/pins/national-pin.png"
                position={[59, 2.3, 69.5]}
                label="National Palace Museum"
                route="/sites/national"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="/pins/soka-pin.png"
                position={[62, 2.3, 71.5]}
                label="Soka Art Museum"
                route="/sites/soka"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="/pins/shilin-pin.png"
                position={[33, 2.3, 85]}
                label="Shilin Night Market"
                route="/sites/shilin"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="/pins/shuangxi-pin.png"
                position={[46, 2.3, 73.5]}
                label="Shuangxi Park"
                route="/sites/shuangxi"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="/pins/zhishanyan-pin.png"
                position={[41, 2.3, 68]}
                label="Zhishanyan"
                route="/sites/zhishanyan"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="/pins/egret.png"
                position={[46, 4.5, 82]}
                label="Egret" route="/sites/shuangxi"
                onSelect={onPinSelect}
                width={2}
                height={2}
                hoverScale={4}
            />
            <MapPin
                textureUrl="/pins/soochow.png"
                position={[56, 2.3, 77]}
                label="Soochow University" route="/sites/shuangxi"
                onSelect={onPinSelect}
            />
        </group>
    );
}
