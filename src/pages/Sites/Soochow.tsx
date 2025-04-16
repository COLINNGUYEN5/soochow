import {ImageModal} from "../../components/ImageModal.tsx";
import ScrollDownButton from "../../components/ScrollDownButton.tsx";
import WordHover from "../../components/WordHover.tsx";

export default function Soochow() {
    return (
        <div className="overflow-auto">
            <div className="relative w-full h-full overflow-hidden rounded-b shadow">
                <video
                    src="/soochow/Soochow_B-Roll.mp4"
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
                        Soochow University
                    </h1>
                    <h2 className="text-white font-[200] font-newsreader sm:text-lg drop-shadow-lg text-center px-4">
                        "Unto a Full-grown Man"
                        <footer className="mt-2 text-right text-sm not-italic text-white">— Mr. Jiang Jieshi, 12th Year of the Republic of China</footer>
                    </h2>
                </div>
                <ScrollDownButton targetId="content" />
            </div>
            <div className="py-8 sm:mx-60" id="content">
                <div className="flex flex-col w-fit">
                    <h1 className="text-6xl text-center mb-5 px-10 pb-6 border-b-1 border-gray-200">Soochow University</h1>
                    <div className="mb-6">
                        <figure className="w-[50%] float-left mr-10">
                            <img
                                src="/soochow/front.jpg"
                                alt="Shuangix Park Front Grate"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Soochow University Gate, photographed March 20
                            </figcaption>
                        </figure>
                        <div>
                            <p className="sm:text-lg text-justify">
                                For two months, our team and 20 of our classmates lived and worked on the Waishuangxi campus of Soochow University (東吳大學).
                                The experience gave us an understanding of the student life and community at the school.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                When we came to the school, we paired with “buddies,” which are current Soochow students.
                                The buddies are the kindest and most welcoming people we’ve ever met. We spend time with them nearly every day and they consistently go out of their way to help us,
                                whether it's showing us around, helping us translate, or just hanging out after class.
                            </p>
                            <br/>

                            <p className="sm:text-lg text-justify">
                                We found a routine on campus pretty quickly. Most days started and ended with a trip to
                                {' '}
                                <WordHover label="7-Eleven" src="/soochow/7-Eleven.MP4" />
                                {' '}
                                for snacks and when we didn’t feel like leaving campus,
                                our other meals would be from the
                                {' '}
                                <WordHover label="cafeteria" src="/soochow/cafe.MP4" />
                                {' '}
                                or the restaurants with street food located by the front gate.
                                {' '}
                            </p>
                            <br/>
                            <figure className="w-[45%] float-right ml-15">
                                <img
                                    src="/soochow/pond.jpg"
                                    alt="Koi Pond"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Koi Pond, photographed April 14
                                </figcaption>
                            </figure>
                            <p className="sm:text-lg text-justify">
                                Because Soochow University is built into the side of a hill, the campus is very vertical and walking up so many stairs just became part of the experience.
                                We spent a lot of our time working at the picnic tables in the Grand Complex, where we could also eat and watch the sunset!
                                Most days, we’d hang out with our Soochow buddies in the academic buildings or dorms as well.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                One of our favorite things about the campus were the animals— there are a large number of
                                {' '}
                                <WordHover label="cats" src="/soochow/Cat_B-Roll.MP4" />
                                {' '}
                                that roam around and get fed by the security guards,
                                as well as a gorgeous koi pond behind the administrative building.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                The campus’s student life is also incredibly lively. Several days of the week we would find big group hip-hop,
                                K-pop, or other styles of dance classes in the center of the Grand Complex. These group dance practices are hosted by student-led clubs and offer classes to their peers.
                                In addition, the students also post and connect with other Soochow students online through an app called Dcard, fostering an engaging and vibrant community on campus.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                What stood out to us while staying at the school was how polite and respectful everyone is on campus.
                                During our first week, one of our buddies told us about elevator etiquette, where everyone needs to respect the direction of the elevator and line up for each individual elevator.
                                In addition, there’s a
                                {' '}
                                <WordHover label="queue" src="/soochow/queue.MP4" />
                                {' '}
                                for the dedicated bus line (557) that stops conveniently in front of the school. In our experience, we have seen every student follow these rules,
                                which is representative of the school’s respectful culture.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Soochow University was the first private university set up in Taiwan.
                                Its main campus in Waishuangxi opened in 1957 and was deeply influential on the development of the surrounding neighborhood,
                                as Chiang Kai-Shek had close ties to the past university administration. Even the main gate of the university has significance,
                                as it was designed by Wang Da-Hong, a famous architect and colleague of I.M. Pei (the designer of the Louvre Pyramid).
                            </p>
                            <figure className="w-[50%] float-left mt-10 mr-15">
                                <video
                                    src="/soochow/Wayne_Video.MP4"
                                    className="w-full h-auto object-cover rounded mb-2"
                                    controls
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Learn about 2025 international opportunities here:
                                    <br/>
                                    <a href="https://www.scu.edu.tw/entrance/anounce/114/H/01Fall/h-book-1.pdf" className="text-blue-500">https://www.scu.edu.tw/entrance/anounce/114/H/01Fall/h-book-1.pdf</a>
                                    <br/>
                                    Learn about international office here:
                                    <br/>
                                    <a href="https://www.scu.edu.tw/icae/" className="text-blue-500">https://www.scu.edu.tw/icae/</a>
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Soochow’s history and importance helps draw in a mix of students, both local and international.
                                The university has a large international and exchange program, which is clearly visible from the diversity when we walk around campus.
                                We also got to know Wayne Liang at the Office of International & Cross-Strait Academic Exchange, who had spoken very passionately about the global outreach and cultural exchange programs at Soochow.
                            </p>
                            <blockquote className="sm:w-[45%] float-right border-l-4 border-gray-300 pl-4 mt-5 italic text-gray-700 text-lg">
                                “Soochow is famous for its academic records and its faculty and students are very friendly and nice, so international students here
                                 gets very good education. So this is a place you must come.”
                                <footer className="mt-2 text-right text-sm not-italic text-gray-500">— Wayne Liang, 2025</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/soochow/front.jpg" alt="Soochow University Gate" label="Soochow University Gate"/>
                        <ImageModal src="/soochow/pond.jpg" alt="Koi Poind" label="Koi Pond"/>
                        <ImageModal src="/soochow/field.jpg" alt="Queue for Bus 557" label="Queue for Bus 557"/>
                        <ImageModal src="/soochow/river.jpg" alt="Waishuangxi Riverside" label="Waishuangxi Riverside"/>
                        <ImageModal src="/soochow/711.jpg" alt="7-Eleven Vending Machine" label="7-Eleven Vending Machine"/>
                        <ImageModal src="/soochow/bus.jpg" alt="Food Bus" label="Food Bus"/>
                        <ImageModal src="/soochow/bridge.jpg" alt="Bridge over Waishuangxi" label="Bridge over Waishuangxi"/>
                        <ImageModal src="/soochow/slogan.jpg" alt="Soochow's Slogan" label="Soochow's Slogan"/>
                    </div>
                </div>
            </div>
        </div>
    )
}