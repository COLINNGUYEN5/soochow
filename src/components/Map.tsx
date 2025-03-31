import { Link } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export function Map(){

    return (
        <div className="w-full h-full relative">
            <TransformWrapper
                initialScale={1.5}
                minScale={1}
                maxScale={4}
                wheel={{ step: 50 }}
                doubleClick={{ disabled: false }}
                pinch={{ disabled: false }}
            >
                <TransformComponent
                    wrapperStyle={{ width: "100%", height: "100%" }}
                    contentClass="relative w-full h-full"
                >
                    <div className="relative w-[1600px] aspect-[16/9]">
                        <img src="/map-2.png" alt="Geography map of Waishuangxi" className="w-full h-full"/>
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
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}