import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export function Map(){
    return (
        <div className="w-full h-full">
            <TransformWrapper
                initialScale={1.50}
                minScale={1}
                maxScale={4}
                wheel={{ step: 50 }}
                doubleClick={{ disabled: false }}
                pinch={{ disabled: false }}
            >
                <TransformComponent
                    wrapperStyle={{ width: "100%", height: "100%" }}
                    contentStyle={{ width: "100%", height: "100%" }}
                >
                    <img src="/waishuangxi-gps.png" alt="Geography map of Waishuangxi" className="w-full h-full object-cover"/>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}