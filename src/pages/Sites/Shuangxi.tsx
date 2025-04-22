import {ImageModal} from "../../components/ImageModal.tsx";
import ScrollDownButton from "../../components/ScrollDownButton.tsx";
import WordHover from "../../components/WordHover.tsx";
import Footnote from "../../components/Footnote.tsx";

export default function Shuangxi() {
    return (
        <div className="overflow-auto">
            <div className="relative w-full h-full overflow-hidden rounded-b shadow">
                <video
                    src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Shuangxi_Park_B-Roll.mp4"
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
                        Shuangxi Park
                    </h1>
                    <h2 className="text-white font-[200] font-newsreader sm:text-lg drop-shadow-lg text-center px-4">
                        “I felt quite relaxed in the park and I really liked the pavilion in the middle— you can chill there, enjoy the lake view, or just take a break.”
                        <footer className="mt-2 text-right text-sm not-italic text-white">— Celine Hsu, 2025</footer>
                    </h2>
                </div>
                <ScrollDownButton targetId="content" />
            </div>
            <div className="py-8 sm:mx-60" id="content">
                <div className="flex flex-col w-fit">
                    <h1 className="text-6xl text-center mb-5 px-10 pb-6 border-b-1 border-gray-200">Shuangxi Park</h1>
                    <div className="mb-6">
                        <figure className="w-[50%] float-left mr-10">
                            <img
                                src="/shuangxi/shuangxi-front.jpg"
                                alt="Shuangix Park Front Grate"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Shuangxi Park Entrance Gate, photographed March 24
                            </figcaption>
                        </figure>
                        <div>
                            <p className="sm:text-lg text-justify">
                                We spent an afternoon taking a stroll through Shuangxi Park and Chinese Garden (雙溪公園).
                                Located at the intersection between Fulin Road and Zhishan Road in Shilin,
                                the traditional Chinese-style park spans 3 acres and serves as a tranquil, nature-filled haven in the middle of the city.
                                <Footnote number={1} href="https://www.taipeitravelgeek.com/shuangxi-park-and-chinese-garden" tooltip="Source: Visit the Idyllic Shuangxi Park and Chinese Garden - Taipei Travel Geek, 2019."/>
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Our team discovered that the director of the Yangmingshan Administration Bureau,
                                Pan Qiwu, originally constructed the park for Chiang Kai-Shek’s birthday.
                                <Footnote number={2} href="https://web-ch.scu.edu.tw/artsoc_usr/web_page/10940" tooltip="Source: 雙溪公園, 2023."/>
                                {' '}
                                Opening in 1972, the park today features elements of traditional Chinese gardens, like pavilions,
                                zig-zag bridges, waterfalls, and an artificial hill. It also is named after the merging of two rivers— Jingquexi and Neishuangxi— into Waishuangxi (outer twin-river).
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                At the entrance of the park stands a large gate with engravings of the park’s title.
                                As we entered the gate, we came across a Chinese Banyan tree, which was well-maintained much like the other plants in the park.
                            </p>
                            <figure className="w-[47%] float-right ml-15">
                                <img
                                    src="/shuangxi/tree.JPG"
                                    alt="Lily Pads picture"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Giant Lily Pads, photographed by Josh Ellis, 2017
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                The park has a large variety of plant life throughout the seasons, including pine and palm trees,
                                wisteria, and cherry blossoms.
                                <Footnote number={3} href="https://parks.gov.taipei/parks/en/en_parks.php?pmsid=469" tooltip="Source: 士林區 雙溪公園, n.d."/>
                                {' '}
                                Walking around, we noticed palm trees and lemon-scented gum trees.
                                We also saw
                                {' '}
                                <WordHover label="turtles" src="/shuangxi/Shuangxi_Park_B-Roll.mp4" />
                                {' '}
                                bathing in the sun and swimming, butterflies dancing around the plants, and many different kinds of fish and birds.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                In addition, we found out that in 2013 and 2014, then again in 2017, the Taipei City Government filled the man-made pond in the park with giant lily pads,
                                native to South America, in order to attract more tourism to the site. The park returned to be generally uncrowded once the lily pads were gone.
                                <Footnote number={4} href="https://www.goteamjosh.com/blog/tag/Park" tooltip="Source: Ellis, 2017."/>
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Towards the center of the park, we came across a group of people— one of which was wearing hanfu— filming a scene reminiscent of historic wuxia.
                                We also noticed elderly people taking a light stroll through the park and relaxing on the benches.
                            </p>
                            <figure className="w-[50%] float-left mt-10 mr-10">
                                <img
                                    src="/shuangxi/lily.jpg"
                                    alt="Shuangix Park Lily Pads"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Chinese Banyan Tree at Shuangxi Park Entrance, photographed March 24
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Shuangxi Park is a microcosm of traditional Chinese culture and it serves different purposes for everyone. For local residents, the park’s flora and fauna provide a place of relaxation, recreation, and more, like filming.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Our team found the park to be a notable “third place,” which is a location outside of work or school and home where people can connect with others and form a community.
                                <Footnote number={5} href="https://www.brookings.edu/articles/third-places-as-community-builders/" tooltip="Source: Butler & Diaz, 2016."/>
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Though originally a gift for the president, the park is now a place for the public, sharing Chinese culture with all of Shilin.
                            </p>
                            <blockquote className="sm:w-[45%] float-right border-l-4 border-gray-300 pl-4 mt-5 italic text-gray-700 text-lg">
                                “I felt quite relaxed in the park and I really liked the pavilion in the middle— you can chill there, enjoy the lake view, or just take a break.”
                                <footer className="mt-2 text-right text-sm not-italic text-gray-500">— Celine Hsu, 2025</footer>
                            </blockquote>
                        </div>
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