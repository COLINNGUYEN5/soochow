import { Canvas, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { XYPanControls, XYPanControlsHandle } from "./XYPanControls";
import { MapModel } from "./MapModel";

export function Map({ setLoading }: { setLoading: (loading: boolean) => void }) {
    const panControlsRef = useRef<XYPanControlsHandle>(null);
    const navigate = useNavigate();

    const handleImageLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 400);
    };

    const handlePinSelect = (pin: {
        textureUrl: string;
        label: string;
        route: string;
        position: [number, number, number];
    }) => {
        panControlsRef.current?.panAndZoomTo(pin.position, 2);
        // Optional: navigate after short delay to allow smooth pan
        setTimeout(() => {
            navigate(pin.route);
        }, 900);
    };

    function CameraController() {
        const { camera } = useThree();

        useEffect(() => {
            camera.lookAt(60, 0, 70);
        }, [camera]);

        return null;
    }

    return (
        <div className="w-full h-full relative overflow-hidden">
            <div className="relative w-full h-full">
                <Canvas style={{ background: "black" }}>
                    <directionalLight position={[0, 2, 1]} intensity={1} />
                    <ambientLight color={0xfcfcfc} intensity={0.5} />
                    <MapModel onLoadComplete={handleImageLoad} onPinSelect={handlePinSelect} />
                    <XYPanControls ref={panControlsRef} />
                    <CameraController />
                </Canvas>
            </div>
        </div>
    );
}

export default Map;