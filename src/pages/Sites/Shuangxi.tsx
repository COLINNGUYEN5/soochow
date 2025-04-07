import {ImageModal} from "../../components/ImageModal.tsx";

export default function Shuangxi() {
    return (
        <div className="overflow-auto">
            <video
                src="/shuangxi/Shuangxi_Park_B-Roll.mp4"
                autoPlay
                muted
                loop
                disablePictureInPicture
                className="w-full h-full rounded shadow object-cover"
            >
                Your browser does not support the video tag.
            </video>
            <div className="py-8 sm:mx-60">
                <div className="flex flex-col w-fit">
                    <h1 className="text-6xl text-center mb-5 px-10 pb-6 border-b-1 border-gray-200">National Palace Museum</h1>
                    <div className="mb-6">
                        <img
                            src="/shuangxi/shuangxi-front.jpg"
                            alt="Shuangix Park Front Grate"
                            className="float-left w-168 h-auto mr-6 mb-4 object-cover rounded-lg"
                        />
                        <p className="sm:text-lg text-justify">
                            Shuangxi Park and Chinese Garden is located at the intersection of Fulin road and Zhishan Road in Shilin.
                            It is named after the merging of the Waishuangxi (outer twin-river) and Neishuangxi (inner twin-river).
                            The park’s construction began in 1971 and was completed in 1974, spans about 3 acres, and is designed in the style of a traditional Chinese garden.
                        </p>
                        <br/>
                        <p className="sm:text-lg text-justify">
                            Despite being bordered by two very busy roads, the park remains a peaceful and tranquil space.
                            Our team found that it serves as a “third place” for many locals–a place beyond home or work where people can feel comfortable and unwind.
                            On a given day, visitors are often seen taking quiet walks, eating lunch, or just taking a moment to themselves and appreciating nature.
                            Beyond that, the beauty and serenity of the park provide a great film/photography location. In fact, during our team’s visit, we even witnessed a historical film being shot!
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <p className="sm:text-lg text-justify mb-8">
                                The space is mainly used by locals and rarely crowded with tourists due to its distance from other major tourist spots in Shilin, such as the National Palace Museum. In 2013 and 2014, then again in 2017, the Taipei City Government filled the man-made pond in the park with giant lily pads, native to South America, in order to attract more tourism to the site. The park returned to be generally uncrowded once the lily pads were gone.
                            </p>
                            <p className="sm:text-lg text-justify">
                                The park features elements like pavilions, zig-zag bridges, waterfalls, and an artificial mountain. It also has a variety of plant life throughout the seasons, including pine and palm trees, wisteria, and cherry blossoms.
                            </p>
                        </div>
                        <figure className="w-[500px]">
                            <img
                                src="/shuangxi/lily.jpg"
                                alt="Lily Pads picture"
                                className="w-full h-auto object-cover rounded mb-2"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Giant Lily Pads, photographed by Josh Ellis, 2017
                            </figcaption>
                        </figure>
                    </div>
                    <div className="flex gap-6 items-start">
                        {/* Image with caption */}
                        <figure className="w-[50%]">
                            <img
                                src="/shuangxi/tree.JPG"
                                alt="Shuangix Park Tree"
                                className="w-full h-auto object-cover rounded mb-2"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Chinese Banyan Tree at Shuangxi Park Entrance, photographed March 24
                            </figcaption>
                        </figure>

                        {/* Quote to the right of the image */}
                        <blockquote className="w-[45%] border-l-4 border-gray-300 pl-4 italic text-gray-700 text-lg place-self-center">
                            “I felt quite relaxed in the park and I really liked the pavilion in the middle— you can chill there, enjoy the lake view, or just take a break.”
                            <footer className="mt-2 text-right text-sm not-italic text-gray-500">— Celine Hsu, 2025</footer>
                        </blockquote>
                    </div>
                </div>

                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/shuangxi/shuangxi-front.jpg" alt="Shuangxi Park Front Gates" label="Shuangxi Park Front Gates"/>
                        <ImageModal src="/shuangxi/lily.jpg" alt="Shuangxi Park Lily Pads" label="Shuangxi Park Lily Pads"/>
                        <ImageModal src="/shuangxi/tree.JPG" alt="Shuangxi Park Tree" label="Shuangxi Park Tree"/>
                        <ImageModal src="/shuangxi/pagoda.jpg" alt="Shuangxi Park Pagoda" label="Shuangxi Park Pagoda"/>
                        <ImageModal src="/shuangxi/bridge.jpg" alt="Shuangxi Park Bridge" label="Shuangxi Park Bridge"/>
                        <ImageModal src="/shuangxi/bird.jpg" alt="White Bird" label="White Bird"/>

                    </div>
                </div>
            </div>
        </div>
    )
}