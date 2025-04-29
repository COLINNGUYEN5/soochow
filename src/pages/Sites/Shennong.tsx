import ScrollDownButton from "../../components/ScrollDownButton.tsx";
import {ImageModal} from "../../components/ImageModal.tsx";
import Footnote from "../../components/Footnote.tsx";

export default function Shennong() {
    return (
        <div className="overflow-auto">
            <div className="relative w-full h-full overflow-hidden rounded-b shadow">
                <video
                    src="chttps://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/Shilin_B-Roll.mp4"
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
                        Shen Nong Temple
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
                    <h1 className="text-6xl text-center mb-5 px-10 pb-6 border-b-1 border-gray-200"></h1>
                    <div className="mb-6">
                        <figure className="w-[50%] float-left mr-10">
                            <img
                                src="/aboriginal/front.jpg"
                                alt="Front of Shung Ye Museum of Formosan Aborigines"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Front of Shung Ye Museum of Formosan Aborigines, Photographed April 9
                            </figcaption>
                        </figure>
                        <div>
                            <p className="sm:text-lg text-justify">
                                The Shung Ye Museum of Formosan Aborigines (also known as the Aboriginal Museum) is the first private museum that showcases the aborigines' rich culture and history (source).
                                Created to bridge the knowledge and cultural gap between the Aboriginals and the current population, the museum uses many sources of media to bring out the interactivity of their culture.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                When we went to the museum, we realized that the outside architecture closely resembled a house,
                                with its two slopes on the sides. Upon entering, we were greeted by the front desk attendant.
                                We got tickets and an English pamphlet (one of four language options!) that laid out the 4-story building,
                                split by different topics like culture, clothing and housing, and music.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Starting at the bottom floor, we went into a theatre showing an animated film of the aboriginals and their daily life.
                                We caught a bit about the different types of stones they used for cooking, building, etc. Also on the bottom floor,
                                we were able to try out a few of the interactive instruments that they had, like the xylophone and the music band builder,
                                and touch different vases and tools. Several of their displays of instruments and tools that they used for their rituals and festivals were intentionally interactive,
                                which we think is to intrigue as many people as possible.
                            </p>
                            <figure className="w-[47%] float-right ml-15 pt-10">
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
                                Moving up two floors, the next exhibit that caught our eyes was an AR map of one of their meeting halls.
                                They had tablets on a swivel stand that allowed us to move around, and click on points that showed the insides,
                                and what they were for, and what was there. The men’s gathering house of the Tsou people, the Amis hearth,
                                and a life-size Paiwan slate house were a few more of the historic buildings that we saw there.
                                That floor also showcased the intricate designs of their weavings for daily use essentials, like baskets and belts.
                                They also had various vessels made to store and drink wine, and a section of some of their weapons and hunting tools.
                                This floor was a good representation of their daily lives and how they used the surrounding area and materials to create a community.
                            </p>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                We were particularly struck by the variety in art that we saw at the museum.
                                The weaving for baskets and belts was different from their clothing and decoration.
                                The next floor showed us the distinctive features and patterns of the textiles. The difference in material, dress,
                                and decoration was also a good indicator of their status in the community. Some of the things displayed included the copper bell vest,
                                a shell-bead vest, and more. Tattooing was also an important part of their culture, and was used to show various traits,
                                like place of origin, job, coming of age, etc. The tattoos were a social status symbol and were also used to connect with ancestors.
                            </p>
                            <figure className="w-[50%] float-left mt-8 mr-10">
                                <img
                                    src="/shilin/clothes.jpg"
                                    alt="Clothing Stand"
                                    className="w-full h-auto object-cover rounded mb-2"
                                />
                                <figcaption className="text-sm text-center text-gray-600">
                                    Clothing Stand, Photographed April 9
                                </figcaption>
                            </figure>
                            <br/>
                            <p className="sm:text-lg text-justify">
                                Multiple times throughout the year, the government helps host important cultural festivals open to everyone,
                                to educate, but also to include others in a time of celebration. One of these celebrations is the Pasiwali Festival of the Amis tribe.
                                Meaning to go to the east, in the direction of sunrise, the festival is a celebration of tribal music and boats.
                                The harvest festival is one of the many ways that the Amis tribe celebrates the new harvest,
                                and the boat journey is meant to symbolize the ritual cycle of remembrance, renewal, and return.
                                It also carries their ancestors, and they make this journey just as their ancestors once did to honor them
                                <Footnote number={1} href="https://taiwanpasiwalifestival.com/en/home/" tooltip="Source: Taiwan PASIWALI Festival 原住民族國際音樂節, 2023."/>
                                .
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
                        onClick={() => window.open('https://maps.app.goo.gl/nDdXSCjvq16tnMTH6', '_blank')}
                        className="text-blue-500 underline cursor-pointer">No. 74, Qian St, Shilin District, Taipei City, 111

                    </span>
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