import {CarouselWithContent} from "../components/Carousel.tsx";
import {Map} from "../components/Map.tsx";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
export default function Home() {
    const [isMap, setMap] = useState(true);
    const [isClicked, setClicked] = useState(true);

    return (
        <div className="relative h-full w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    {isMap ? (
                        <motion.div
                            key="map"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className="relative w-full h-full">
                                <Map />
                                <button
                                    className="absolute bg-black left-2 bottom-2 rounded-lg w-10 h-10 z-10 cursor-pointer"
                                    onClick={() => setMap(false)}
                                >
                                    <img src="/carousel.svg" alt="Carousel Slider" />
                                </button>
                                {isClicked && (
                                    <div
                                        className="absolute inset-0 grid place-items-center bg-black/75 cursor-pointer"
                                        onClick={() => setClicked(false)}>
                                        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-quintessential tracking-[.35em]">
                                            EXPLORE WAISHUANGXI
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="carousel"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 w-full h-full overflow-auto"
                        >
                            <div className="h-full w-full">
                                <button
                                    className="absolute bg-black left-2 bottom-2 rounded-lg w-10 h-10 p-2 z-10 cursor-pointer"
                                    onClick={() => setMap(true)}
                                >
                                    <img src="/map.svg" alt="Map Logo" />
                                </button>
                                <CarouselWithContent />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
        </div>
    );
}
