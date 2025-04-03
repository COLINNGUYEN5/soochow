import {CarouselWithContent} from "../components/Carousel.tsx";
import {Map} from "../components/Map.tsx";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function Home() {
    const [isMap, setMap] = useState(true);
    const [isClicked, setClicked] = useState(true);
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative h-full w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    {isMap ? (
                        <motion.div
                            key="map"
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className="relative w-full h-full">
                                {loading && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/75 z-50">
                                            <div className="fixed top-0 left-0 right-0 bottom-0 flex place-self-center animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-500" />
                                    </div>
                                )}
                                <Map setLoading={setLoading} />
                                <button
                                    className="absolute bg-black left-2 bottom-2 rounded-lg w-10 h-10 z-10 cursor-pointer"
                                    onClick={() => setMap(false)}
                                >
                                    <img src="/carousel.svg" alt="Carousel Slider" />
                                </button>
                                {isClicked && (
                                    <div
                                        className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black/75 cursor-pointer"
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
