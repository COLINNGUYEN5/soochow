import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {CartoonPin} from "./CartoonPin.tsx";

export function AnimatedMap() {
    const [initialScale, setInitialScale] = useState(1.5);

    useEffect(() => {
        const width = window.innerWidth;

        if (width < 480) {
            setInitialScale(10.0); // extra zoom on very small phones
        } else if (width < 768) {
            setInitialScale(8.0); // tablets and small devices
        } else if (width < 1024) {
            setInitialScale(1.8); // medium screens
        } else {
            setInitialScale(1.5); // desktops
        }

        const handleResize = () => {
            const newWidth = window.innerWidth;
            if (newWidth < 480) {
                setInitialScale(10.0);
            } else if (newWidth < 768) {
                setInitialScale(8.0);
            } else if (newWidth < 1024) {
                setInitialScale(1.8);
            } else {
                setInitialScale(1.5);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black">
            <TransformWrapper
                initialScale={initialScale}
                minScale={1}
                maxScale={10}
                wheel={{ step: 50 }}
                doubleClick={{ disabled: false }}
                pinch={{ disabled: false }}
            >
                <TransformComponent
                    wrapperStyle={{ width: "100%", height: "100%" }}
                    contentStyle={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <div className="relative aspect-[2434/1076] max-w-full h-auto w-full">
                        <img
                            src="/animated.jpg"
                            alt="Geography map of Waishuangxi"
                            className="w-full h-auto object-contain"
                        />

                        {/* Pins */}
                        <CartoonPin
                            to="/sites/national"
                            icon="cartoon/npm.svg"
                            label="National Palace Museum"
                            top={67}
                            left={43}
                        />
                        <CartoonPin
                            to="/sites/soochow"
                            icon="cartoon/soochow.svg"
                            label="Soochow University"
                            top={81}
                            left={37}
                            width="7%"
                        />
                        <CartoonPin
                            to="/sites/soka"
                            icon="cartoon/soka.svg"
                            label="Soka Art Museum"
                            top={77}
                            left={44}
                            width="3%"
                        />
                        <CartoonPin
                            to="/sites/aboriginal"
                            icon="cartoon/aboriginal.svg"
                            label="Shung Ye Museum of Formosan Aborigines"
                            top={72}
                            left={49}
                            width="4%"
                        />
                        <CartoonPin
                            to="/sites/shuangxi"
                            icon="cartoon/shuangxi.svg"
                            label="Shuangxi Park"
                            top={75}
                            left={28}
                            width="4%"
                        />
                        <CartoonPin
                            to="/sites/shuangxi"
                            icon="cartoon/canal.svg"
                            label="Canal System"
                            top={75}
                            left={28}
                            width="4%"
                        />
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
}

export default AnimatedMap;
