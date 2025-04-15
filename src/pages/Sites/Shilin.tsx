import ScrollDownButton from "../../components/ScrollDownButton.tsx";
import {ImageModal} from "../../components/ImageModal.tsx";

export default function Shilin() {
    return (
        <div className="overflow-auto">
            <div className="relative w-full h-full overflow-hidden rounded-b shadow">
                <video
                    src="/shilin/Shilin_B-Roll.mp4"
                    autoPlay
                    muted
                    loop
                    disablePictureInPicture
                    className="w-full h-full object-cover"
                >
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4">
                    <h1 className="text-white font-engravers text-4xl sm:text-6xl drop-shadow-lg text-center px-4">
                        Shilin Night Market
                    </h1>
                    <h2 className="text-white font-[200] font-newsreader sm:text-lg drop-shadow-lg text-center px-4">
                        “Everytime I go there, I leave with my pockets empty and my stomach full.”
                        <footer className="mt-2 text-right text-sm not-italic text-white">— Isha Sinha, 2025</footer>
                    </h2>
                </div>
                <ScrollDownButton targetId="content" />
            </div>
            <div className="py-8 sm:mx-60" id="content">
                <div className="flex flex-col w-fit">
                    <h1 className="text-6xl text-center mb-5 px-10 pb-6 border-b-1 border-gray-200">Shilin Night Market</h1>
                    <div className="mb-6">
                        <figure className="w-[50%] float-left mr-10">
                            <img
                                src="/shilin/front.jpg"
                                alt="Shuangix Park Front Grate"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Shuangxi Park Entrance Gate, photographed March 24
                            </figcaption>
                        </figure>
                        <div>
                            <p className="sm:text-lg text-justify">
                                Neighboring many schools such as Soochow University and being nearby the Shilin MRT Station,
                                the Shilin Night Market is very popular among both tourists and local people.
                                The night market holds many different types of businesses that includes restaurants, hawker stalls, clothing stores, and many more.
                                The overwhelming number of shops combining with everything being on the cheaper end, offers a place for everyone visiting.
                                <sup title="Sourced from Taiwan Tourism Bureau">[1]</sup>
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                The Shilin Night Market can be dated back to the 1960-1970s, shortly after the end of World War II.
                                At first, small food stands were set up to serve the locals, but as Taiwan was growing economically in this period,
                                more and more tourists would be drawn to this area and so the stands would multiply, creating a wider range of sold goods.
                            </p>
                            <figure className="w-[45%] float-right ml-15">
                                <img
                                    src="/shilin/candy.jpg"
                                    alt="Lily Pads picture"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Giant Lily Pads, photographed by Josh Ellis, 2017
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Through the Shilin Night Market, the Shilin area became a more popular spot and attracted people to the overall area.
                                This growing population started to modernize the area as places such as the five theaters: the Shilin Theater, Yangming Theater,
                                Lifeng Theater, Minsu Theater, and Kunghua Theater were created as recreational spots for these new faces. The night market not only became a commercial center but also became a cultural hotspot,
                                as it shows the history of Shilin’s urban development through postwar.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                As the team lives in Soochow University, we have been to the Shilin Night Market countless times. From our outside perspectives, we noticed a lot of the different cultures that exist here.
                                Walking around the area, there will be food stands of Japanese influence, Chinese influence, and Taiwanese aboriginal influence.
                            </p>
                            <br/>
                            <figure className="w-[50%] float-left mt-10 mr-15">
                                <img
                                    src="/shilin/clothes.jpg"
                                    alt="Shuangix Park Lily Pads"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Chinese Banyan Tree at Shuangxi Park Entrance, photographed March 24
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                All these aspects of Shilin Night Market creates a story that is not all just about eating but rather a story of Taiwan’s history and identity.
                                We have seen how the night market has been influenced by the past, but it also reflects a lot of modern influence now.
                                From the trending bubble tea, to the hip-hop streetwear shops, the market creates a dynamic cultural space for all generations.
                                On one end, you can see an elderly lady serving traditional Taiwanese food, while just next by, you can hear K-Pop that sells baggy jeans that can fit over one’s torso.
                            </p>
                            <blockquote className="sm:w-[45%] float-right border-l-4 border-gray-300 pl-4 mt-12 italic text-gray-700 text-lg">
                                “Everytime I go there, I leave with my pockets empty and my stomach full.”
                                <footer className="mt-2 text-right text-sm not-italic text-gray-500">— Isha Sinha, 2025</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/shilin/front.jpg" alt="Shuangxi Park Front Gates" label="Shuangxi Park Front Gates"/>
                        <ImageModal src="/shilin/candy.jpg" alt="Shuangxi Park Lily Pads" label="Shuangxi Park Lily Pads"/>
                        <ImageModal src="/shilin/clothes.jpg" alt="Shuangxi Park Tree" label="Shuangxi Park Tree"/>
                        <ImageModal src="/shilin/peanut.jpg" alt="Shuangxi Park Pagoda" label="Shuangxi Park Pagoda"/>
                        <ImageModal src="/shilin/lemon.jpg" alt="Shuangxi Park Bridge" label="Shuangxi Park Bridge"/>
                    </div>
                </div>
            </div>
        </div>
    )
}