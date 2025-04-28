import { useState, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CarouselWithContent = lazy(() => import("../components/Carousel"));
const Map = lazy(() => import("../components/Map"));
const Animated = lazy(() => import("../components/AnimatedMap"));


export default function Home() {
    const [isClicked, setClicked] = useState(true);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState<"map" | "carousel" | "mapTwo">("map");


    return (
        <div className="relative h-full w-full overflow-hidden">
            <AnimatePresence mode="wait">
                {view === "map" && (
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
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-500" />
                                </div>
                            )}
                            <Map setLoading={setLoading} />

                            {/* Buttons */}
                            <div className="absolute left-2 bottom-2 flex gap-2 z-10">
                                <button
                                    className="bg-black rounded-lg w-10 h-10 p-2"
                                    onClick={() => setView("carousel")}
                                >
                                    <img src="/carousel.svg" alt="Carousel" />
                                </button>
                                <button
                                    className="bg-black rounded-lg w-10 h-10 p-2"
                                    onClick={() => setView("mapTwo")}
                                >
                                    <img src="/map.svg" alt="Map Two" />
                                </button>
                            </div>

                            {isClicked && (
                                <div
                                    className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black/75 cursor-pointer"
                                    onClick={() => setClicked(false)}
                                >
                                    <p className="text-3xl md:text-4xl lg:text-5xl text-white font-engravers tracking-[.35em]">
                                        EXPLORE WAISHUANGXI
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}

                {view === "carousel" && (
                    <motion.div
                        key="carousel"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 w-full h-full overflow-auto"
                    >
                        <div className="h-full w-full">
                            <div className="absolute left-2 bottom-2 flex gap-2 z-10">
                                <button
                                    className="bg-black rounded-lg w-10 h-10 p-2"
                                    onClick={() => setView("map")}
                                >
                                    <img src="/globe.svg" alt="Map" />
                                </button>
                                <button
                                    className="bg-black rounded-lg w-10 h-10 p-2"
                                    onClick={() => setView("mapTwo")}
                                >
                                    <img src="/map.svg" alt="Map Two" />
                                </button>
                            </div>
                            <CarouselWithContent />
                        </div>
                    </motion.div>
                )}

                {view === "mapTwo" && (
                    <motion.div
                        key="mapTwo"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <div className="relative w-full h-full">
                            <Animated />
                            <div className="absolute left-2 bottom-2 flex gap-2 z-10">
                                <button
                                    className="bg-black rounded-lg w-10 h-10 p-2"
                                    onClick={() => setView("map")}
                                >
                                    <img src="/globe.svg" alt="Map" />
                                </button>
                                <button
                                    className="bg-black rounded-lg w-10 h-10 p-2"
                                    onClick={() => setView("carousel")}
                                >
                                    <img src="/carousel.svg" alt="Carousel" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
