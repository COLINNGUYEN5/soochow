import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Link } from "react-router-dom";


export function AnimatedMap(){
    return (
        <div className="w-full h-full relative">
            <TransformWrapper
                initialScale={1.75}
                minScale={1}
                maxScale={7}
                wheel={{ step: 50 }}
                doubleClick={{ disabled: false }}
                pinch={{ disabled: false }}
            >
                <TransformComponent
                    wrapperStyle={{ width: "100%", height: "100%" }}
                    contentStyle={{ width: "100%", height: "100%" }}
                >
                    <img src="/animated.jpg" alt="Geography map of Waishuangxi" className="w-full h-full object-cover"/>
                    <Link to={"/sites/national"}>
                        <div
                            className="absolute top-[66%] left-[40%] w-[5%] z-30 cursor-pointer group">
                            <img
                                src="/cartoon/npm.png"
                                alt="National Palace Museum"
                                className="group-hover:scale-120 transition-transform duration-200"/>
                            <div
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                National Palace Museum
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
                            </div>
                        </div>
                    </Link>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default AnimatedMap;