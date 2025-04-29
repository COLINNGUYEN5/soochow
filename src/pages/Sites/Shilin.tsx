import ScrollDownButton from "../../components/ScrollDownButton.tsx";
import {ImageModal} from "../../components/ImageModal.tsx";
import Footnote from "../../components/Footnote.tsx";
import WordHover from "../../components/WordHover.tsx";

export default function Shilin() {
    return (
        <div className="overflow-auto">
            <div className="relative w-full h-full overflow-hidden rounded-b shadow">
                <video
                    src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Shilin_B-Roll.mp4"
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
                    <div className="mb-6">
                        <figure className="w-[50%] float-left mr-10">
                            <img
                                src="/shilin/front.jpg"
                                alt="Night Market Entrance"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Night Market Entrance, Photographed April 9
                            </figcaption>
                        </figure>
                        <div>
                            <p className="sm:text-lg text-justify">
                                Neighboring the Shilin MRT Station, the Shilin Night Market is
                                popular among both tourists and local people.
                                The night market holds different types of businesses, including restaurants, hawker stalls, clothing stores,
                                carnival games, and many more. The staggering number of shops combined with everything being on the cheaper end,
                                offers a place for
                                {' '}
                                <WordHover label="everyone" src="/shilin/people.jpg" />
                                {' '}
                                visiting.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Through the Shilin Night Market, the Shilin area became a more popular spot and attracted people to the overall area.
                                This growing population started to modernize the area as places such as the five theaters:
                                the Shilin Theater, Yangming Theater, Lifeng Theater, Minsu Theater, and Kunghua Theater were created as recreational spots for these new faces.
                                The night market not only became a commercial center but also became a cultural hotspot, as it shows the history of Shilin’s urban development through postwar.
                                <Footnote number={1} href="https://travelsetu.com/guide/shilin-night-market-tourism/shilin-night-market-tourism-history" tooltip="Source: Shilin Night Market (Taipei) History, 2025."/>
                            </p>
                            <figure className="w-[47%] float-right ml-15">
                                <img
                                    src="/shilin/candy.jpg"
                                    alt="Tanghulu Stand"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Tanghulu Stand, Photographed April 9
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Given that our team lives in Shilin,
                                {' '}
                                <WordHover label="we" src="/shilin/team.jpg" />
                                {' '}
                                have been to the Shilin Night Market
                                countless times.
                                In fact, everytime one of us needs something, our first thought is to go to the night market.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Our first time visiting the night market, we immediately were drawn to the carnival games and spent a good amount of time and money trying to win the prizes.
                                From our outside perspectives, we noticed a lot of the different cultures that represent themselves in the market connecting to Shilin’s multiculturalism.
                                Walking around the area, we saw food stands of Japanese, Chinese, and Taiwanese aboriginal influence (such as the shrimp tempura, stinky tofu and steamed dumpling stands).
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Surprisingly though, even with all the food stands around, there is never trash on the floor.
                                In Taiwan, there are no public trash cans and there is a culture of the Taiwanese people’s respectful attitude towards the environment,
                                keeping it astoundingly clean. This culture does not only span in the night market as it embodies most of Taiwan.

                            </p>
                            <br/>
                            <figure className="w-[50%] float-left mt-4 mr-10">
                                <img
                                    src="/shilin/clothes.jpg"
                                    alt="Clothing Stand"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Clothing Stand, Photographed April 9
                                </figcaption>
                            </figure>
                            <p className="sm:text-lg text-justify">
                                All these aspects of Shilin Night Market create a story that is not all just about eating but rather a story of Taiwan’s history and identity.
                                We have seen how the night market has been influenced by the
                                {' '}
                                <WordHover label="past" src="/shilin/culture.jpg" />
                                , but it also reflects a lot of modern influence now. From the trending bubble tea,
                                to the hip-hop streetwear shops, the market creates a cultural space for all generations acting as a third place.
                                On one end, you can see an elderly lady serving traditional Taiwanese food. Next door, you can hear a K-Pop store that sells baggy jeans and metallic vintage accessories.
                                Across the street, you can play addicting carnival games to win plushies and lego sets. This is a place where people can not only connect with one another,
                                but can also connect with the different cultures that make up Shilin.
                            </p>
                            <blockquote className="sm:w-[45%] float-right border-l-4 border-gray-300 pl-4 mt-12 italic text-gray-700 text-lg">
                                “Everytime I go there, I leave with my pockets empty and my stomach full.”
                                <footer className="mt-2 text-right text-sm not-italic text-gray-500">— Isha Sinha, 2025</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="sm:text-lg text-end p-0 m-0">
                    <span
                        onClick={() => window.open('https://maps.app.goo.gl/fCCP7YmbQ9yWHxyB6', '_blank')}
                        className="text-blue-500 underline cursor-pointer">No. 101, Jihe Rd, Shilin District, Taipei City, 111
                    </span>
                </div>
                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/shilin/front.jpg" alt="Night Market Entrance" label="Night Market Entrance"/>
                        <ImageModal src="/shilin/candy.jpg" alt="Tanghulu Stand" label="Tanghulu Stand"/>
                        <ImageModal src="/shilin/clothes.jpg" alt="Clothing Stand" label="Clothing Stand"/>
                        <ImageModal src="/shilin/peanut.jpg" alt="Peanut Ice Cream" label="Peanut Ice Cream"/>
                        <ImageModal src="/shilin/lemon.jpg" alt="Orange Lemon Tea" label="Orange Lemon Tea"/>
                    </div>
                </div>
            </div>
        </div>
    )
}