import { Link } from "react-router-dom";
import {useEffect} from "react";
import {Canvas, useThree} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";
import {XYPanControls} from "./XYPanControls.tsx";

function MapModel({ onLoadComplete }: { onLoadComplete: () => void }) {
    const { scene } = useGLTF('/models/WSXMap.glb', true); // the second param enables preloading
    useEffect(() => {
        console.log("✅ GLB loaded");
        onLoadComplete();
    }, [onLoadComplete]);
    return <primitive object={scene} />;
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
                        <Link to={"/sites/national"}>
                            <div
                                className="absolute top-[37%] left-[62%] w-[3%] z-30 cursor-pointer group">
                                <img
                                    src="/national-logo.png"
                                    alt="National Palace Museum"
                                    className="group-hover:scale-120 transition-transform duration-200"/>
                                <div
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    National Palace Museum
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/sites/shilin"}>
                            <div
                                className="absolute top-[75%] left-[28%] w-[3%] z-30 cursor-pointer group">
                                <img
                                    src="/shilin-logo.png"
                                    alt="Shilin Night Market"
                                    className="group-hover:scale-120 transition-transform duration-200"/>
                                <div
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    Shilin Night Market
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
                                </div>
                            </div>
                        </Link>
                    </div>
        </div>
    )
}