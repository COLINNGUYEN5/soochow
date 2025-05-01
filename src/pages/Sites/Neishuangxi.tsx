import {ImageModal} from "../../components/ImageModal.tsx";
import ScrollDownButton from "../../components/ScrollDownButton.tsx";
import WordHover from "../../components/WordHover.tsx";
import {Link} from "react-router-dom";

export default function Neishuangxi() {
    return (
        <div className="overflow-y-auto">
            <div className="relative w-full h-full overflow-hidden rounded-b shadow">
                <video
                    src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Neishuangxi_B-Roll.mp4"
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
                        Neishuangxi
                    </h1>
                    <h2 className="text-white font-[200] font-newsreader sm:text-lg drop-shadow-lg text-center px-4">
                        "This place is a nice change of pace compared to the city."
                        <footer className="mt-2 text-right text-sm not-italic text-white">— Colin Nguyen, 2025</footer>
                    </h2>
                </div>
                <ScrollDownButton targetId="content" />
            </div>
            <div className="py-12 sm:mx-60" id="content">
                <div className="flex flex-col w-fit">
                    <div className="mb-6">
                        <figure className="w-[50%] float-left mr-10">
                            <img
                                src="/neishuangxi/waterfall.jpg"
                                alt="Shengren waterfall"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Shengren waterfall, photographed April 1
                            </figcaption>
                        </figure>
                        <div>
                            <p className="sm:text-lg text-justify">
                                Neishuangxi, combined with the Jingquexi river, is the inner part of the
                                {' '}
                                <Link to="/sites/waishuangxi" className="text-blue-500 underline hover:text-blue-700">
                                    Waishuangxi
                                </Link>
                                .
                                There’s only one road that takes you up the mountain, and through walking this path,
                                the team saw a story being depicted of Neishuangxi’s history.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                As the team started traveling down the Neishuangxi from Shengren Waterfall,
                                we noticed that most of the riverside was closed off to the public. This was surprising to us because there were many beautiful,
                                natural spots as we were walking down the river.
                                {' '}
                                <WordHover label="Dr. Shih" src="/collection/hor-shih.jpg" />
                                {' '}
                                told us that an incident occured in the river where 15 students had died because the water treatment plant workers opened the floodgate to get rid of trash.
                            </p>
                            <br/>
                            <figure className="w-[47%] float-right ml-15">
                                <img
                                    src="/neishuangxi/modern.jpg"
                                    alt="Modern house under construction"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Modern house under construction, photographed April 1
                                </figcaption>
                            </figure>
                            <p className="sm:text-lg text-justify">
                                This affected both locals and tourists as it was a popular spot for various reasons.
                                For locals, such as Dr. Shih and
                                {' '}
                                <WordHover label="Chief Guo" src="/collection/chief.jpg" />
                                {' '}
                                of Linxi Village,
                                when they were younger they would always barbeque near the river and hangout with friends.
                                There would also be fishing stores along the river where locals would go shrimp fishing.
                                For tourists, it was not too far from the heart of Taipei, making it a well-liked area to enjoy the scenic view of the river and the nature around it.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Once the team walked further down the Neishuangxi, we noticed that there were a lot of modernized,
                                wealthier houses alongside the river. From Dr. Shih, we were informed that in the past,
                                all the richer people bought the land near the river but have not been able to do any construction due to government intervention.
                                However, the land owners would often find loopholes to bypass these restrictions. These large, upscaled homes were a big contrast to the smaller,
                                more traditional style houses that resided beside it. The juxtaposition displayed shows the process of urbanization happening over Neishuangxi as this area used to be mostly rice plantations.
                            </p>
                            <br/>
                            <figure className="w-[50%] float-left mt-10 mr-10">
                                <img
                                    src="/neishuangxi/trees.jpg"
                                    alt="Forest besides Neishuangxi"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Forest besides Neishuangxi, photographed April 1
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                When we were close to the Waishuangxi, there was a series of large houses with pools that were all connected and gated inside.
                                Dr. Shih told the team that this was Lee Teng-hui’s family house, the fourth president of Taiwan. After hearing this,
                                we recognized that there is a variety of people that use or live in this area which brought up the idea of interconnectedness.
                                It seemed that throughout the time span of Neishuangxi, it had experienced a range of people— from the local residents to the political leaders.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Compared to the busy environment of Taipei right nearby, this area provided a peaceful and soothing atmosphere.
                                To the team, Neishuangxi was a “third place” where anyone could leave their comfort of the cities and relax and bond with the nature around them.
                            </p>
                            <blockquote className="sm:w-[45%] float-right border-l-4 border-gray-300 pl-4 mt-12 italic text-gray-700 text-lg">
                                "This is a nice change of pace compared to the city."
                                <footer className="mt-2 text-right text-sm not-italic text-gray-500">— Colin Nguyen, 2025</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="sm:text-lg text-end p-0 m-0">
                    <span
                        onClick={() => window.open('https://maps.app.goo.gl/JsnvPpn9N8ZmVZKG7', '_blank')}
                        className="text-blue-500 underline cursor-pointer">111, Taipei City, Shilin District
                    </span>
                </div>
                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/neishuangxi/waterfall.jpg" alt="Shengren waterfall" label="Shengren waterfall"/>
                        <ImageModal src="/neishuangxi/modern.jpg" alt="Modern house under construction" label="Modern house under construction"/>
                        <ImageModal src="/neishuangxi/trees.jpg" alt="Forest besides Neishuangxi" label="Forest besides Neishuangxi"/>
                        <ImageModal src="/neishuangxi/pond.jpg" alt="Fish in Neishuangxi" label="Fish in Neishuangxi"/>
                    </div>
                </div>
            </div>
        </div>
    )
}