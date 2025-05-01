import {ImageModal} from "../../components/ImageModal.tsx";
import ScrollDownButton from "../../components/ScrollDownButton.tsx";
import WordHover from "../../components/WordHover.tsx";
import {Link} from "react-router-dom";

export default function Waishuangxi() {
    return (
        <div className="overflow-y-auto">
            <div className="relative w-full h-full overflow-hidden rounded-b shadow">
                <video
                    src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Waishuangxi_B-Roll.mp4"
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
                        Waishuangxi
                    </h1>
                    <h2 className="text-white font-[200] font-newsreader sm:text-lg drop-shadow-lg text-center px-4">
                        “Everything about the history and culture of Shilin was built by the river.”
                        <footer className="mt-2 text-right text-sm not-italic text-white">— Sunny Cheng, 2025</footer>
                    </h2>
                </div>
                <ScrollDownButton targetId="content" />
            </div>
            <div className="py-12 sm:mx-60" id="content">
                <div className="flex flex-col w-fit">
                    <div className="mb-6">
                        <figure className="w-[50%] float-left mr-10">
                            <img
                                src="/waishuangxi/front.jpg"
                                alt="Waishuangxi from Shuangxi Riverside Park"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Waishuangxi from Shuangxi Riverside Park, Photographed April 4
                            </figcaption>
                        </figure>
                        <div>
                            <p className="sm:text-lg text-justify">
                                Given that the Waishuangxi is the heart of our research, our team found it essential to walk along the entire length of the Waishuangxi to truly understand its vibrancy and importance.
                                Unexpectedly, we began to form our own relationship with the river through our 10 or so hours walking alongside the riverbank. Despite the heat,
                                we found ourselves returning to the riverside to people-watch, walk, and look for animals (mostly cats, butterflies, and frogs!).
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                We began our walk at
                                {' '}
                                <WordHover label="Shengren Waterfall" src="/neishuangxi/waterfall.jpg" />
                                , which is actually on the
                                {' '}
                                <Link to="/sites/neishuangxi" className="text-blue-500 underline hover:text-blue-700">
                                    Neishuangxi
                                </Link>
                                . As we walked down the river,
                                we saw stairways where we would approach the riverbank and climb across the rocks. Later on,
                                our interviewee from the
                                {' '}
                                <Link to="/sites/national" className="text-blue-500 underline hover:text-blue-700">
                                    National Palace Museum
                                </Link>
                                ,
                                {' '}
                                <WordHover label="Marissa" src="/collection/marissa.jpg" />
                                , shared that she used to bring her daughter to the river to skip across the
                                {' '}
                                <WordHover label="rocks" src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/rock.MP4" />
                                {' '}
                                when she was young.
                                Her daughter disliked sports, so Marissa found that this was a fun way for her to get some exercise. Technically,
                                although much of the river has been modified through government intervention, the areas with rocks remain mostly natural.
                                In recent years, many of these natural sections have been closed to the public for safety reasons. However,
                                several of our interviewees expressed that they believe the government should make more modifications to allow more of the river to be publicly accessible.
                                For example, our sponsor,
                                {' '}
                                <WordHover label="Dr. Fu-Sheng Shih" src="/collection/hor-shih.jpg" />
                                , spoke in support of reopening the river when reflecting on his favorite memories of having barbecues with friends by the riverside during his college days (learn more with our
                                {' '}
                                <Link to="/collection" className="text-blue-500 underline hover:text-blue-700">
                                    Memory Collection page
                                </Link>
                                ).
                            </p>
                            <br/>
                            <figure className="w-[47%] float-right ml-15 pb-5">
                                <img
                                    src="/waishuangxi/friends.jpg"
                                    alt="Two of our members watching the butterflies on the riverbank"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Two of our members watching the butterflies on the riverbank, Photographed April 4
                                </figcaption>
                            </figure>
                            <p className="sm:text-lg text-justify">
                                Stretching from the start of
                                {' '}
                                <Link to="/sites/soochow" className="text-blue-500 underline hover:text-blue-700">
                                    Soochow University
                                </Link>
                                {' '}

                                all the way down to the merging with the Keelung River,
                                the Waishuangxi Riverside Park follows the river. This park signifies a special place to many different people,
                                and we were fortunate enough to talk to some of them. We came across families enjoying the tranquil nature,
                                elderly couples ballroom dancing under the bridge, people biking on the path, and fishermen taking advantage of a relaxing and warm day.
                                We realized very quickly that the Riverside Park is an ideal third place, allowing people to gather, enjoy nature, and be in a place that isn’t their home or work.
                                As we visited the park more and more, we began to use it in the same way. In fact, we even spent an afternoon teaching one of our team members to bike there!
                            </p>
                            <br/>
                            <figure className="w-[50%] float-left mr-10 pt-5">
                                <img
                                    src="/waishuangxi/far.jpg"
                                    alt="Two of our members standing on the rocks in the river"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Two of our members standing on the rocks in the river, Photographed April 4
                                </figcaption>
                            </figure>
                            <p className="sm:text-lg text-justify">
                                On one of our riverside walks, we passed by a trio of elderly ladies sitting on the park benches that overlook the river.
                                We greeted them and explained to them who we were and why we were disturbing their peaceful time.
                                They laughed and were happy to talk to us, so we spoke to them about our days, the weather, and where we were from.
                                At some point in our conversation, we asked them if the river and park were an important part of their life.
                                They said it was just a nice place, with good scenery and plenty of seating—nothing special. Still, we sat there, laughing and enjoying the river and the park together.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                The park has its own life and identity, created through unique features such as the
                                {' '}
                                <WordHover label="lotus pond" src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/lotus.mp4" />
                                ,
                                courts, exercising equipment, and more. We saw some of these things get used, but others sat untouched.
                                About a fifteen-minute walk from the entrance to the park, there were rainbow stairs. Despite all the interesting attractions,
                                most people there were simply sitting around, talking, and catching up with family and friends
                            </p>
                            <blockquote className="sm:w-[45%] float-right border-l-4 border-gray-300 pl-4 mt-12 italic text-gray-700 text-lg">
                                “Everything about the history and culture of Shilin was built by the river.”
                                <footer className="mt-2 text-right text-sm not-italic text-gray-500">— Sunny Cheng, 2025</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="sm:text-lg text-end p-0 m-0">
                    <span
                        onClick={() => window.open('https://maps.app.goo.gl/qpVMrPrnQcYaFTf67', '_blank')}
                        className="text-blue-500 underline cursor-pointer">外雙溪
                    </span>
                </div>
                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/waishuangxi/front.jpg" alt="Shengren waterfall" label="Shengren waterfall"/>
                        <ImageModal src="/waishuangxi/friends.jpg" alt="Two of our members watching the butterflies on the riverbank" label="Two of our members watching the butterflies on the riverbank"/>
                        <ImageModal src="/waishuangxi/far.jpg" alt="Two of our members standing on the rocks in the river" label="Two of our members standing on the rocks in the river"/>
                        <ImageModal src="/collection/others.jpg" alt="Bike lanes at Waishaungxi Riverside Park" label="Bike lanes at Waishaungxi Riverside Park"/>
                    </div>
                </div>
            </div>
        </div>
    )
}