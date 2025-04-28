import {ImageModal} from "../../components/ImageModal.tsx";
import ScrollDownButton from "../../components/ScrollDownButton.tsx";
import WordHover from "../../components/WordHover.tsx";

export default function Fuyu() {
    return (
        <div className="overflow-auto">
            <div className="relative w-full h-full overflow-hidden rounded-b shadow">
                <video
                    src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Fuyu_B-Roll.mp4"
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
                        Fuyu Tea House
                    </h1>
                    <h2 className="text-white font-[200] font-newsreader sm:text-lg drop-shadow-lg text-center px-4">
                        "Everyone that lives here has known each other for a long time. All the generations know each other and everything that happens here."
                        <footer className="mt-2 text-right text-sm not-italic text-white">— Mr.Huang, 2025</footer>
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
                                src="/fuyu/team.jpg"
                                alt="Team Picture at Fuyu Tea House"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Team Picture at Fuyu Tea House, photographed March 25
                            </figcaption>
                        </figure>
                        <div>
                            <p className="sm:text-lg text-justify">
                                Fuyu Tea House (福宇茶莊老字號) is a multi-generational family-owned tea house north of the Shilin MRT station.
                                The tea house is nestled onto a small street next to the main road. They have two locations, one in Shilin, and another one in Taipei.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Inside the store, we talked to the owner of the tea house, Qing-zhang Huang.
                                Mr. Huang has lived in this neighborhood his whole life, and has 2 daughters.
                                He inherited this tea shop from his father, and now one of his daughters is also learning the craftsmanship of tea.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Mr. Huang grew up in the neighborhood, going to the same grade and high schools his father did.
                                At a time of Japanese occupation, his family life was very strict and structured. He still has a sense of respect and obedience towards his mother,
                                who was the main caretaker. Around this time, Western influence, mainly from American tourists started to change his surroundings,
                                and so the Shilin neighborhood started becoming more diverse.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Traditionally, tea plays a significant role in Chinese culture. In the past,
                                moms or daughters in the family would serve tea for guests as a gesture of hospitality.
                                Through these means, people were able to tell how educated one was based on the tea they served.
                            </p>
                            <br/>
                            <figure className="w-[47%] float-right ml-15">
                                <img
                                    src="/fuyu/tea.jpg"
                                    alt="Tea"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Tea at Fuyu Tea House, photographed March 25
                                </figcaption>
                            </figure>
                            <p className="sm:text-lg text-justify">
                                Mr. Huang also has a family tradition of going to Alishan, a mountain in central Taiwan, multiple times a year to pick his own tea leaves.
                                We also had the privilege to go to
                                Alishan
                                {' '}
                                <WordHover label="Alishan" src="/fuyu/alishan.jpg" />
                                {' '}
                                to immerse ourselves into the long-established tea-making process.
                                During our trip, we learned how to pick tea leaves,
                                {' '}
                                <WordHover label="how oxidation of leaves works" src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/oxidation.mp4" />
                                {' '}
                                , and which types of drying or fermentation methods determine the resultant tea.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                For Mr. Huang, tea is not only a family tradition requiring decades to master, but also a means to bond with your close friends. He enjoys the intimacy of meeting face-to-face with his friends and drinking tea, as it is one of the ways he could connect with people in the community.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                During his youth, everyone in the tight-knit community knew everything that happened in the neighborhood.
                                However, he believes the newer generation has shifted away from this, as the introduction of the internet has led to people connecting online instead,
                                as he has seen through his daughter.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                With many businesses opening in Shilin for economic reasons,
                                the community has become less bonded. Tourists coming in are good for small businesses like his tea shop,
                                but it has changed the community which Mr. Huang misses.
                            </p>
                            <figure className="w-[50%] float-left mt-10 mr-10">
                                <img
                                    src="/fuyu/shelf.jpg"
                                    alt="Shuangix Park Lily Pads"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Shelf of Tea Goods, photographed March 25
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                In addition, Mr. Huang has also witnessed change within Shilin’s landscape over the past couple of decades.
                                When he was little, he enjoyed strolling through the mountain areas and viewing the scenery.
                                Now, with
                                {' '}
                                <WordHover label="urbanization" src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/construction.MP4" />
                                {' '}                                , the tall buildings have blocked the views and encouraged the destruction of the green spaces,
                                which used to provide natural shade and absorb heat.
                            </p>
                            <p className="sm:text-lg text-justify">
                                Our conversation with Mr. Huang revealed a lot about modern developments in the Shilin area and his tea shop remains a capsule of Shilin’s past.
                            </p>
                            <blockquote className="sm:w-[45%] float-right border-l-4 border-gray-300 pl-4 mt-12 italic text-gray-700 text-lg">
                                "Everyone that lives here has known each other for a long time. All the generations know each other and everything that happens here."
                                <footer className="mt-2 text-right text-sm not-italic text-gray-500">— Mr.Huang, 2025</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/fuyu/team.jpg" alt="Team Picture at Fuyu Tea House" label="Team Picture at Fuyu Tea House"/>
                        <ImageModal src="/fuyu/tea.jpg" alt="Tea" label="Tea"/>
                        <ImageModal src="/fuyu/shelf.jpg" alt="Shelf of Tea Goods" label="Shelf of Tea Goods"/>
                        <ImageModal src="/fuyu/collab.jpg" alt="Grant & Mr. Huang" label="Grant & Mr. Huang"/>
                        <ImageModal src="/fuyu/oolong.jpg" alt="Oolong" label="Oolong"/>
                    </div>
                </div>
            </div>
        </div>
    )
}