import {ImageModal} from "../../components/ImageModal.tsx";
import ScrollDownButton from "../../components/ScrollDownButton.tsx";

export default function Soka() {
    return (
        <div className="overflow-auto">
            <div className="relative w-full h-full overflow-hidden rounded-b shadow">
                <video
                    src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Soka_B-Roll.mp4"
                    autoPlay
                    muted
                    loop
                    disablePictureInPicture
                    className="w-full h-full rounded shadow object-cover"
                >
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4">
                    <h1 className="text-white font-engravers text-4xl sm:text-6xl drop-shadow-lg text-center px-4">
                        Soka Art Museum
                    </h1>
                    <h2 className="text-white font-[200] font-newsreader sm:text-lg drop-shadow-lg text-center px-4">
                        "Each life has unlimited potential. How you bring out “Nam Myoho Renge Kyo”, brings out your highest human being in."
                        <footer className="mt-2 text-right text-sm not-italic text-white">— Ms.Ishikawa, 2025</footer>
                    </h2>
                </div>
                <ScrollDownButton targetId="content" />
            </div>
            <div className="py-8 sm:mx-60" id="content">
                <div className="flex flex-col w-fit">
                    <h1 className="text-6xl text-center mb-5 px-10 pb-6 border-b-1 border-gray-200"></h1>
                    <div className="mb-6">
                        <figure className="w-[50%] float-left mr-10 mb-5">
                            <img
                                src="/soka/soka-front.jpg"
                                alt="Shuangix Park Front Grate"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Front of the Soka Art Museum, photographed April 2
                            </figcaption>
                        </figure>
                        <div>
                            <p className="sm:text-lg text-justify">
                                Our team dedicated a morning exploring the Soka Art Museum, which is a small, peaceful,
                                and well-curated art exhibition tucked just across the street from the National Palace Museum.
                                Unlike the grand scale of the National Palace Museum, the Soka Art Museum is an uncrowded space where we could see only one exhibit.
                                In fact, the art center only occupies two floors of the Soka Art Museum and even offers free admission.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                During our visit, the featured exhibition showcased the work of Taiwanese and Buddhist artist Hsiao Chin,
                                who is well known for his abstract style. Today, his artwork is showcased in many places throughout the world including the Metropolitan Museum of Art (New York),
                                M+ Museum (Hong Kong), Musée Guimet (Paris), and many more.

                            </p>
                            <figure className="w-[47%] float-right ml-15 mb-5 mt-5">
                                <img
                                    src="/soka/painting.jpg"
                                    alt="Hsiao Chin's Artwork"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Hsiao Chin's Artwork, photographed April 2
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                As we wandered through the two floors, we noticed that this space encouraged a slower and more reflective approach than a typical museum.
                                Every room in the exhibit featured minimal light with black walls surrounding the area, with only the artworks having a very specific amount of light shining on it.
                                This intentional setup left us with a sense of thoughtfulness, as we slowly analyzed each art piece.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                After sitting down to talk to 4 members of the Soka Gakkai, the group discovered that the remainder of the building is occupied by the cultural headquarters of the Taiwan Soka Association,
                                which is a branch of the Soka Gakkai and is a part of a series of 11 art centers. The Soka Gakkai is a religious international organization founded on Nichiren Daishonin’s Buddhism that promotes peace,
                                culture and education. Their mission is to “create the highest value of life.” In Taiwan, the organization has been recognized extensively for its cultural and educational contributions,
                                receiving awards like the Executive Yuan Award the the Ministry of Culture’s Wenxin Award.
                            </p>
                            <figure className="w-[50%] float-left mr-10 mt-5">
                                <img
                                    src="/soka/team.jpg"
                                    alt="Team & Soka Members"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Team & Soka Members, photographed April 2
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Much like other places by Waishuangxi, our team found that  the Zhishan Art Center is not only a place where people come to view artwork,
                                but also a quiet “third space” in the city to pause, reflect, and connect with deeper parts of Taiwanese culture.
                                Visitors can often be seen slowly moving through the galleries or sitting peacefully in the center’s quiet environment.
                                This museum might not display 1000s of artworks compared to the National Palace Museum, but one can find themselves wandering endlessly here.
                            </p>
                            <blockquote className="sm:w-[45%] float-right border-l-4 border-gray-300 pl-4 mt-12 italic text-gray-700 text-lg">
                                "Each life has unlimited potential. How you bring out “Nam Myoho Renge Kyo”, brings out your highest human being in."
                                <footer className="mt-2 text-right text-sm not-italic text-gray-500">— Ms.Ishikawa, 2025</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/soka/soka-front.jpg" alt="Front of Soka Art Museum" label="Front of Soka Art Museum"/>
                        <ImageModal src="/soka/painting.jpg" alt="Hsiao Chin's Artwork" label="Hsiao Chin's Artwork"/>
                        <ImageModal src="/soka/team.jpg" alt="Team & Soka Members" label="Team & Soka Members"/>
                        <ImageModal src="/soka/gallery.jpg" alt="Gallery of Hsiao Chin's art" label="Gallery of Hsiao Chin's art"/>
                        <ImageModal src="/soka/artwork.jpg" alt="Hsiao Chin's Artwork" label="Hsiao Chin's Artwork"/>
                    </div>
                </div>
            </div>
        </div>
    )
}