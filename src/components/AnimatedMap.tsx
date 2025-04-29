import { useEffect, useRef, useState } from "react";
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { CartoonPin } from "./CartoonPin";


export function AnimatedMap() {
    const [initialScale, setInitialScale] = useState(2.5);
    const transformRef = useRef<ReactZoomPanPinchRef | null>(null);

    useEffect(() => {
        const width = window.innerWidth;
        if (width < 480) {
            setInitialScale(10.0);
        } else if (width < 768) {
            setInitialScale(8.0);
        } else if (width < 1024) {
            setInitialScale(3.0);
        } else {
            setInitialScale(3.5);
        }
    }, []);

    const panTo = (xPercent: number, yPercent: number) => {
        if (!transformRef.current) return;

        const container = transformRef.current?.instance.wrapperComponent;
        if (!container) return;

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        const mapWidth = containerWidth;
        const mapHeight = mapWidth * (1076 / 2434); // Aspect ratio you defined

        // Convert percent to actual pixel coordinates
        const x = (xPercent / 100) * mapWidth;
        const y = (yPercent / 100) * mapHeight;

        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;

        const zoomLevel = 4.5;
        const yOffset = 45;

        transformRef.current.setTransform(
            centerX - x * zoomLevel,
            centerY - (y + yOffset) * zoomLevel,
            zoomLevel,
            300 // 300ms animation
        );
    };

    return (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black">
            <TransformWrapper
                initialScale={initialScale}
                initialPositionX={-400}
                initialPositionY={-1000}
                minScale={1}
                maxScale={10}
                wheel={{ step: 50 }}
                doubleClick={{ disabled: false }}
                pinch={{ disabled: false }}
                ref={transformRef}
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
                        <img src="/animated.jpg" alt="Map" className="w-full h-auto object-contain" />

                        {/* Pins */}
                        <CartoonPin
                            to="/sites/national"
                            icon="cartoon/npm.svg"
                            label="National Palace Museum"
                            top={67}
                            left={43}
                            panTo={panTo}
                        />
                        <CartoonPin
                            to="/sites/soochow"
                            icon="cartoon/soochow.svg"
                            label="Soochow University"
                            top={81}
                            left={37}
                            width="7%"
                            panTo={panTo}
                        />
                        <CartoonPin
                            to="/sites/soka"
                            icon="cartoon/soka.svg"
                            label="Soka Art Museum"
                            top={77}
                            left={44}
                            width="3%"
                            panTo={panTo}
                        />
                        <CartoonPin
                            to="/sites/aboriginal"
                            icon="cartoon/aboriginal.svg"
                            label="Shung Ye Museum of Formosan Aborigines"
                            top={72}
                            left={49}
                            width="4%"
                            panTo={panTo}
                        />
                        <CartoonPin
                            to="/sites/shuangxi"
                            icon="cartoon/shuangxi.svg"
                            label="Shuangxi Park"
                            top={75}
                            left={28}
                            width="4%"
                            panTo={panTo}
                        />
                        <CartoonPin
                            to="/sites/miscellaneous"
                            icon="cartoon/canal.svg"
                            label="Canal System"
                            top={60}
                            left={55}
                            width="4%"
                            panTo={panTo}
                        />
                        <CartoonPin
                            to="/sites/shennong"
                            icon="cartoon/shennong.svg"
                            label="Shen Nong Temple"
                            top={75}
                            left={22}
                            width="4%"
                            panTo={panTo}
                        />
                        <CartoonPin
                            to="/sites/waishuangxi"
                            icon="cartoon/waishuangxi.svg"
                            label="Waishuangxi"
                            top={44}
                            left={55}
                            width="4%"
                            panTo={panTo}
                        />
                        <CartoonPin
                            to="/sites/neishuangxi"
                            icon="cartoon/neishuangxi.svg"
                            label="Neishuangxi"
                            top={30}
                            left={63}
                            width="4%"
                            panTo={panTo}
                        />
                        <CartoonPin
                            to="/sites/zhishanyan"
                            icon="cartoon/zhishanyan.svg"
                            label="Zhishanyan"
                            top={62}
                            left={27}
                            width="4%"
                            panTo={panTo}
                        />
                        <CartoonPin
                            to="/sites/shilin"
                            icon="cartoon/shilin.svg"
                            label="Shilin Night Market"
                            top={85}
                            left={15}
                            width="4%"
                            panTo={panTo}
                        />
                        <CartoonPin
                            to="/sites/fuyu"
                            icon="cartoon/fuyu.svg"
                            label="Fuyu Tea House"
                            top={75}
                            left={18}
                            width="3%"
                            panTo={panTo}
                        />
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
}

export default AnimatedMap;
