import ScrollDownButton from "../../components/ScrollDownButton.tsx";
import {ImageModal} from "../../components/ImageModal.tsx";
import {Link} from "react-router-dom";
import WordHover from "../../components/WordHover.tsx";

export default function Shennong() {
    return (
        <div className="overflow-auto">
            <div className="relative w-full h-full overflow-hidden rounded-b shadow">
                <video
                    src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Shennong_B-Roll.mp4"
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
                        Shennong Temple
                    </h1>
                    <h2 className="text-white font-[200] font-newsreader sm:text-lg drop-shadow-lg text-center px-4">
                        “The oldest temple in Shilin.”
                        <footer className="mt-2 text-right text-sm not-italic text-white">— Henry and Sherry, 2025</footer>
                    </h2>
                </div>
                <ScrollDownButton targetId="content" />
            </div>
            <div className="py-8 sm:mx-60" id="content">
                <div className="flex flex-col w-fit">
                    <h1 className="text-6xl text-center mb-5 px-10 pb-6 border-b-1 border-gray-200"></h1>
                    <div className="mb-6">
                        <figure className="w-[50%] float-left mr-10">
                            <img
                                src="/shennong/front.jpg"
                                alt="Top of Shennong Temple"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Top of Shennong Temple, photographed April 12
                            </figcaption>
                        </figure>
                        <div>
                            <p className="sm:text-lg text-justify">
                                Our team actually visited Shennong temple twice because of how beautiful it was, especially the insanely detailed roof.
                                Shennong Temple is one of the three main ancient temples in Shilin, along with
                                {' '}
                                <Link to="/sites/zhishanyan" className="text-blue-500 underline hover:text-blue-700">
                                    Zhishanyan’s
                                </Link>
                                {' '}
                                Huiji Temple and Xinjie’s Cixian Temple.
                                While the temple is the oldest, it was rebuilt after originally being destroyed by a flood. The main god of the temple is Shennong,
                                who we learned from tour guides
                                {' '}
                                <WordHover label="Henry and Sherry" src="/collection/henry-sherry.jpg" />
                                , is the god of agriculture, health, and medicine.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                We also learned from Henry and Sherry about some of the architecture and setup in Taoist temples.
                                If you look up at the roof, it’s “like a movie poster,” summarizing the purpose of that temple. Dragons, which represent good luck,
                                that have three or four claws indicate the prayer of gods, while dragons with five or six claws refer to emperors.
                                There are also three major figures painted on the roof of Shennong temple (and many others) for luck, longevity, and wealth — the three main blessings people usually pray for.
                                We also found out that even the gates of Shennong temple have meaning. The left gate is the Dragon Gate (to give you good luck),
                                the right gate is the Tiger Gate (to eat up the bad luck), and the middle gate was reserved for emperors and kings.
                            </p>
                            <br/>
                            <figure className="w-[47%] float-right ml-15 pt-10">
                                <img
                                    src="/shennong/gods.jpg"
                                    alt="Gods in Shennong Temple"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Gods in Shennong Temple, photographed April 12
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                When we first visited, we noticed the many unique details of Shennong Temple, like a giant burner in the back garden and several big stone pillars with hundreds of names engraved in gold.
                                While touring with Henry and Sherry, we were taught that these were names of scholars who donated money or even burned their academic theses in the temple’s
                                {' '}
                                <WordHover label="burner" src="/shennong/burner.jpg" />
                                {' '}
                                as an offering to the gods.
                                This tradition fits perfectly with Shilin’s history, as the district has been known across different dynasties as a center for scholars.
                                Visiting Shennong Temple really showed us how deeply that history is tied to the community. Even inside the temple, we saw statues that students donated as prayers for their studies.
                                Our team also hopes to go back to Shennong Temple for a third time and offer our final report on Waishuangxi before we leave!
                            </p>
                            <blockquote className="sm:w-[45%] float-right border-l-4 border-gray-300 pl-4 mt-12 italic text-gray-700 text-lg">
                                “The oldest temple in Shilin.”
                                <footer className="mt-2 text-right text-sm not-italic text-gray-500">— Henry and Sherry, 2025</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="sm:text-lg text-end p-0 m-0">
                    <span
                        onClick={() => window.open('https://maps.app.goo.gl/nDdXSCjvq16tnMTH6', '_blank')}
                        className="text-blue-500 underline cursor-pointer">No. 74, Qian St, Shilin District, Taipei City, 111

                    </span>
                </div>
                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/shennong/front.jpg" alt="Top of Shennong Temple" label="Top of Shennong Temple"/>
                        <ImageModal src="/shennong/gods.jpg" alt="Gods in Shennong Temple" label="Gods in Shennong Temple"/>
                        <ImageModal src="/shennong/tablets.jpg" alt="Tablets outside Shennong Temple" label="Tablets outside Shennong Temple"/>
                        <ImageModal src="/shennong/burner.jpg" alt="Shennong Temple's burner" label="Shennong Temple's burner"/>
                    </div>
                </div>
            </div>
        </div>
    )
}