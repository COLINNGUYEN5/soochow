import {ImageModal} from "../../components/ImageModal.tsx";
import ScrollDownButton from "../../components/ScrollDownButton.tsx";
import Footnote from "../../components/Footnote.tsx";

export default function Zhishanyan() {
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
                        Zhishanyan
                    </h1>
                    <h2 className="text-white font-[200] font-newsreader sm:text-lg drop-shadow-lg text-center px-4">
                        “The hill holds such powerful memories and serves as a remind of Taiwan's complex past.”
                        <footer className="mt-2 text-right text-sm not-italic text-white">— Sean Okamoto, 2025</footer>
                    </h2>
                </div>
                <ScrollDownButton targetId="content" />
            </div>
            <div className="py-12 sm:mx-60" id="content">
                <div className="flex flex-col w-fit">
                    <div className="mb-6">
                        <figure className="w-[50%] float-left mr-10">
                            <img
                                src="/zhishanyan/front.jpg"
                                alt="Zhishanyan Hill Entrance"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Zhishanyan doorway, photographed March 28
                            </figcaption>
                        </figure>
                        <div>
                            <p className="sm:text-lg text-justify">
                                After taking 120 steps to reach the top of the hill, Zhishanyan revealed itself as a hidden gem nestled away in the Shilin District of Taiwan.
                                At the summit, we were greeted with diverging stone paths and elderly people using a public reading room.
                                Right next to the reading room was a large stone monument with gold engravings depicting the story of Zhishanyan.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                In the past, this hill served as both a memorial site for the Japanese and an advantageous defensive point for the KMT,
                                as there was a clear line of sight over Chiang Kai-Shek’s Shilin Residence and Taiwan’s military base
                                <Footnote number={1} href="https://taiwantrailsandtales.com/2019/12/29/zhishanyan-stroll/" tooltip="Source: ZHISHANYAN STROLL (芝山岩), 2019."/>
                                .
                                Throughout the hill, there are stone statues of animals acting as guardians along with various memorials.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                In addition, there are multiple memorials scattered around the hill. One memorial from the 1930s,
                                commemorates 6 Japanese teachers who were killed during the Zhishanyan Incident
                                <Footnote number={2} href="https://spectralcodex.com/shilin-zhishanyan-huiji-temple/" tooltip="Source: Zhishanyan Huiji Temple (芝山巖惠濟宮) - Spectral Codex, 2024."/>
                                .
                                Every year, Japanese teachers would come back to this memorial to pay their respects.                            </p>
                            <figure className="w-[45%] float-right ml-15">
                                <img
                                    src="/zhishanyan/120.jpg"
                                    alt="Zhishanyan Front Stairs"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Zhishanyan front staircase, photographed March 28
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                This area presented itself to us both as a third place and a cultural site.
                                During our visits of Zhishanyan, we consistently came across elderly people using this hill for various reasons.
                                In one case, an elderly man paced back and forth through the paths, reciting Buddhist prayers.
                                In another case, it was a small group of people sitting on a bench, enjoying the view and talking to one another.
                                These different interactions showed us how this hill, a quiet yet widely used place, serves as a “third place” for locals,
                                where people can not only connect with one another but also can connect with their history and culture.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                As the team followed the path that leads toward the middle of the hills, the Zhishiyan Huiji temple appeared,
                                tucked away within the trees. This temple was a traditional Taoist temple that has been renovated over the past years.
                                Inside the temple contains historical remnants that depict a story about the local people of Shilin.
                                Among these remnants is a stone tablet that acts as a memorial for the Shilin people that were killed during the Lin Shuangwen Incident
                                <Footnote number={3} href="https://english.culture.gov.taipei/News_Content.aspx?n=546DBBFFD75F4602&sms=6606BE5E67AD9F4D&s=8F50609FE01FB78F" tooltip="Source: Department of Cultural Affairs, 2009a."/>
                                .
                            </p>
                            <figure className="w-[50%] float-left mt-10 mr-15">
                                <img
                                    src="/zhishanyan/japanese.JPG"
                                    alt="One Zhishanyan memorial site"
                                    className="w-full aspect-[3/2]  object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    One Zhishanyan memorial site, photographed March 28
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                For whatever the reason it may be—whether it is for cultural reasons,
                                or just to socialize—the hill seems to attract people inside. Showing the history of Taiwan from different eras,
                                from the Japanese memorial sites to the local people of Shilin, this area embraces the idea of multiculturalism.
                                Zhishanyan does not only pick one side of history, but rather it shows the entirety of the culture— the Japanese,
                                Taiwanese aborigines, and Chinese— that has shaped Shilin and overall, Taiwan.
                            </p>
                            <blockquote className="sm:w-[45%] float-right border-l-4 border-gray-300 pl-4 mt-12 italic text-gray-700 text-lg">
                                “The hill holds such powerful memories and serves as a remind of Taiwan's complex past.”
                                <footer className="mt-2 text-right text-sm not-italic text-gray-500">— Sean Okamoto, 2025</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="sm:text-lg text-end p-0 m-0">
                    <span
                        onClick={() => window.open('https://maps.app.goo.gl/qmkvzThppAvLQ4vk6', '_blank')}
                        className="text-blue-500 underline cursor-pointer">Section 1, Zhicheng Rd, Shilin District, Taipei City, 111
                    </span>
                </div>
                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/zhishanyan/front.jpg" alt="Zhishanyan Hill Entrance" label="Zhishanyan Hill Entrance"/>
                        <ImageModal src="/zhishanyan/120.jpg" alt="Zhishanyan Front Stairs" label="Zhishanyan Front Stairs"/>
                        <ImageModal src="/zhishanyan/memorial.jpg" alt="One of Zhishanyan memorials" label="One of Zhishanyan memorials"/>
                        <ImageModal src="/zhishanyan/japanese.JPG" alt="Zhishanyan's japanese memorial" label="Zhishanyan's japanese memorial"/>
                        <ImageModal src="/zhishanyan/stairs.jpg" alt="Dr. Shih in Zhishanyan" label="Dr. Shih in Zhishanyan"/>
                    </div>
                </div>
            </div>
        </div>
    )
}