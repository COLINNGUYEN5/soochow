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
    const { scene } = useGLTF('https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/WSXMap.glb');

    useEffect(() => {
        console.log('✅ GLB loaded');
        onLoadComplete();
    }, [onLoadComplete]);

    return (
        <group>
            <primitive object={scene} />

            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/edited-fuyu.png"
                position={[33, 2.3, 74.5]}
                label="Fuyu Tea House"
                route="/sites/fuyu"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/national-pin.png"
                position={[59, 2.5, 69.5]}
                label="National Palace Museum"
                route="/sites/national"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/edited-soka.png"
                position={[61, 2.5, 72]}
                label="Soka Art Museum"
                route="/sites/soka"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/shilin-pin.png"
                position={[33, 2.3, 85]}
                label="Shilin Night Market"
                route="/sites/shilin"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/edited-shuangxi.png"
                position={[46, 2.3, 73.5]}
                label="Shuangxi Park"
                route="/sites/shuangxi"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/edited-zhishanyan.png"
                position={[41, 2.5, 68]}
                label="Zhishanyan"
                route="/sites/zhishanyan"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Egret-Pin.png"
                position={[46, 3.6, 82]}
                label="Egret" route="/sites/miscellaneous"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Qili'an-Pin.png"
                position={[40, 2.4, 77]}
                label="Qili'an Stone" route="/sites/miscellaneous"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Canal-Pin%20(1).png"
                position={[32, 2.5, 79]}
                label="Fudeyang Canal System" route="/sites/miscellaneous"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Paper-Pin.png"
                position={[52, 2.5, 75]}
                label="Paper Mulberry Tree" route="/sites/miscellaneous"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Elephant-Pin.png"
                position={[67, 2.5, 68]}
                label="Giant Elephant Ear Tree" route="/sites/miscellaneous"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/edited-soochow.png"
                position={[56, 2.5, 77]}
                label="Soochow University" route="/sites/soochow"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/edited-neishuangxi.png"
                position={[80, 3.7, 57]}
                label="Neishuangxi" route="/sites/neishuangxi"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/edited-aboriginal.png"
                position={[63, 2.5, 71]}
                label="Shung Ye Museum of Formosan Aborigines" route="/sites/aboriginal"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/edited-waishuangxi.png"
                position={[69, 3, 64]}
                label="Waishuangxi" route="/sites/waishuangxi"
                onSelect={onPinSelect}
            />
            <MapPin
                textureUrl="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/shennong-pin.png"
                position={[37, 3, 76]}
                label="Shennong temple" route="/sites/shennong"
                onSelect={onPinSelect}
            />
        </group>
    );
}
