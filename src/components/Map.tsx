import {useEffect} from "react";
import {Canvas, useThree} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";
import {XYPanControls} from "./XYPanControls.tsx";
import {NationalPin} from "./NationalPin.tsx";
import {ShilinPin} from "./ShilinPin.tsx";
import {SokaPin} from "./SokaPin.tsx";
import {ShuangxiPin} from "./ShuangxiPin.tsx";
import {MapPin} from "./MapPin.tsx";


export function MapModel({ onLoadComplete }: { onLoadComplete: () => void }) {
    const { scene } = useGLTF('/models/WSXMap.glb');

    useEffect(() => {
        console.log('✅ GLB loaded');
        onLoadComplete();
    }, [onLoadComplete]);

    return  <group>
        <primitive object={scene} />
        <MapPin
            textureUrl="/fuyu-pin.png"
            position={[33, 2.3, 74.5]}
            label="Fuyu Tea House"
            route="/sites/fuyu"
        />
        <MapPin
            textureUrl="/national-logo.png"
            position={[59, 2.3, 69.5]}
            label="National Palace Museum"
            route="/sites/national"
        />

        <NationalPin />
        <ShilinPin />
        <SokaPin />
        <ShuangxiPin />
    </group>;
}


export function Map({ setLoading }: { setLoading: (loading: boolean) => void }) {
    const handleImageLoad = () => {
        // Force spinner to show for at least 400ms
        setTimeout(() => {
            setLoading(false);
        }, 400);
    };

    function CameraController() {
        const { camera } = useThree();

        useEffect(() => {
            camera.lookAt(60, 0, 20); // 👀 Make the camera look at the origin
        }, [camera]);

        return null;
    }

    return (
        <div className="w-full h-full relative overflow-hidden">
                    <div className="relative w-full h-full">
                        <Canvas style={{ background: "black" }}>
                            <directionalLight position={[0, 2, 1]} intensity={1} />
                            <ambientLight color={0xfcfcfc} intensity={0.5} />
                            <MapModel onLoadComplete={handleImageLoad}/>
                            <XYPanControls />
                            <CameraController />
                        </Canvas>
                    </div>
        </div>
    )
}