import { useState } from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Interviewee, IntervieweeCard} from "../components/IntervieweeCard.tsx";
import MiscellaneousCard from "../components/MiscellaneousCard.tsx";

export default function Collection() {
    const [selected, setSelected] = useState<Interviewee | null>(null);

    const interviewees: Interviewee[] = [
        {
            name: 'Marissa Hu',
            title: 'National Palace Museum\nTour Guide',
            image: '/collection/marissa.jpg',
            quote: "I showed my daughter how to jump from one big rock to another rock in the river.",
            portrait: "/collection/marissa.jpg",
            bio: "Marissa Hu is a volunteer tour guide for the National Palace Museum (NPM). She loves Chinese calligraphy, and came to volunteer at the NPM because she has a passion for learning more about calligraphy at the museum. Through volunteering, she is exposed to an extensive collection of the history of calligraphy and she enjoys sharing the knowledge she learns at the museum with others."
        },
        {
            name: 'Dr. Fu-sheng Shih',
            title: 'Professor of Sociology\nSoochow University',
            image: '/collection/hor-shih.jpg',
            quote: "Almost every weekend, we went to Waishuangxi River, and we did a barbecue, almost quite often.",
            portrait: "/zhishanyan/stairs.jpg",
            bio: "Dr. Fu-sheng Shih is a professor at Soochow University in the sociology department. Growing up in Lukang, studying in Poland, and later moving back to Taiwan in Beitou, Dr. Shih has learned much about Taiwan’s history and its developments in the past couple of decades."
        },
        {
            name: 'Mr. Zhang',
            title: 'Local Fisherman',
            image: '/collection/hor-fisherman.jpg',
            quote: "I come here whenever the weather is nice. I have been coming here for years, 5 years before retirement.",
            portrait: "collection/fisherman-portrait.jpg",
            bio: "Now retired, Mr. Zhang has spent the last 10 years fishing as a casual hobby. He enjoys fishing in this area because of the shade the bridge has to offer on hot, sunny days. To him, Waishuangxi is an important place of relaxation and recreation.",
        },
        {
            name: 'Henry and Sherry',
            title: 'Tour Guides\nStunning Taiwan',
            image: '/collection/henry-sherry.jpg',
            quote: "I want to share my memories about my hometown.",
            portrait: "collection/henry-sherry.jpg",
            bio: "Henry and Sherry are both tour guides from Stunning Taiwan that specializes in the history of the Shilin District. They both have extensive knowledge of this area as Sherry grew up in Shilin and Henry works there as a tour guide.",
        },
        {
            name: 'Zhao-fu Guo',
            title: 'Linxi Village Chief',
            image: '/collection/chief.jpg',
            quote: "When I was little, I would play in the river with my friends, but it was dangerous, so we didn’t tell our parents because we were afraid of being scolded..",
            portrait: "/collection/chief-portrait.jpg",
            bio: "Guo Zhao-fu is the Linxi Village head in Taiwan. He has taken this role from his father, the previous village head out of love for this land. His main role as the chief is to assist the local residents and act as a bridge between the community and the government.",
        },
        {
            name: 'Dr. Ming-li Yao',
            title: 'Professor of Sociology,\nSoochow University',
            image: '/collection/ming-li.jpg',
            quote: "The history about Waishuangxi River, is the Fudeyang Canal System.",
            bio: "Dr. Ming-Li Yao is a sociology professor at Soochow University, focusing on how to preserve traditions. She has lived Shilin District for 3 years and is motivated to teach in sociology because she loved visiting different places as a kid",
            portrait: '/collection/ming-li.jpg',

        },
        {
            name: 'Qing-zhang Huang',
            title: 'Traditional Tea Shop Owner',
            image: '/fuyu/collab.jpg',
            quote: "There’s this strong, local Shilin bond. Since everyone’s parents knew each other, the cultural expectations were stronger.",
            portrait: "/fuyu/oolong.jpg",
            bio: "Huang Qing-zhang is the owner of a traditional tea shop in the Shilin District. He has lived here his whole life and has inherited this shop from his father. He owns two shops, one in Taipei and the one in Shilin.",
        },
        {
            name: 'Sunny Cheng',
            title: 'Sociology student,\nSoochow University',
            image: '/collection/sunny.jpg',
            portrait: '/collection/sunny.jpg',
            bio: "Sunny Zheng is a freshman in Soochow University majoring in Sociology. He is from Taoyuan,  but he has been living in Shilin for about half a year. His family is Christian but he does not partake in the practices as he started questioning their beliefs around 15 years old.",
            quote: "Everything about the history and culture of Shilin was built by the river.",
        },
    ];

    return (
        <div className="overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col md:flex-col lg:flex-row min-h-screen">
                {/* Left side with title */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-center">
                        We ask each of our interviewee:
                    </h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center p-2 sm:p-8">
                        "What's your favourite memory by the river?"
                    </h1>
                    {selected && (
                        <motion.p
                            key={selected.name + '-quote'}
                            className="text-base sm:text-lg md:text-xl font-medium text-center mt-4 px-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            “{selected.quote}”
                        </motion.p>
                    )}
                    <div className="pt-2 sm:pt-8">
                        <AnimatePresence mode="wait">
                            {selected?.portrait && (
                                <motion.div
                                    key={selected.name + '-bio'}
                                    className="flex flex-col items-center gap-6"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
                                        {selected.name}
                                    </h1>
                                    <div className="flex gap-6">
                                        <img
                                            src={selected.portrait}
                                            alt={selected.name}
                                            className="w-55 aspect-[3/4] object-cover rounded-lg shadow-md"
                                        />
                                        {selected.bio && (
                                            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-sm place-self-center">
                                                {selected.bio}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right side with quote +  large circular gallery */}
                <div className="w-full lg:w-1/2 flex items-center justify-center relative xl:pt-8">
                    <AnimatePresence mode="wait">
                        {selected && (
                            <motion.div
                                key={selected.name}
                                className="absolute z-0 items-center justify-center w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full text-center p-6 max-w-full hidden lg:flex"
                                initial={{ opacity: 0, scale: 0.9}}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xs">
                                    "{selected.quote}"
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="relative w-[min(90vw,600px)] h-[min(90vw,600px)] z-10 hidden lg:block">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                {interviewees.map((person, index) => {
                                    const angle = (360 / interviewees.length) * index;
                                    return (
                                        <div
                                            key={person.name}
                                            className="absolute left-1/2 top-1/2 origin-center"
                                            style={{
                                                transform: `rotate(${angle}deg) translate(calc(min(35vw, 270px))) rotate(-${angle}deg)`
                                            }}
                                        >
                                            <IntervieweeCard
                                                person={person}
                                                isSelected={selected?.name === person.name}
                                                onClick={() => setSelected(person)}
                                                circular={true}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right side with small circular gallery */}
                    <motion.div
                        className="flex flex-wrap justify-center content-center lg:hidden gap-6 py-4 pb-12"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.07 } }
                        }}
                    >
                        {interviewees.map((person) => (
                            <IntervieweeCard
                                key={person.name}
                                person={person}
                                isSelected={selected?.name === person.name}
                                onClick={() => setSelected(person)}
                                circular={false}
                            />
                        ))}
                    </motion.div>

                </div>
            </div>

            <div>
                <motion.div
                    className="flex flex-wrap justify-center items-center gap-4 h-full px-8 xl:px-32 xl:pt-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <MiscellaneousCard
                        imgSrc="/collection/chief.jpg"
                        imgAlt="Chief Guo"
                        heading="Chief Guo"
                        caption="Chief Guo, Linxi Village head, photographed April 10"
                        description={
                            <>
                                <b>Guo Zhao-fu</b> is the Linxi Village head in Taiwan. He has taken this role from his father, the previous village head out of love for this land. His main role as the chief is to assist the local residents and act as a bridge between the community and the government.
                                <br/>
                                After our interview with the chief, the team understood more about how urbanization has directly affected this area in Shilin. We learned about how the National Palace Museum had actually kicked locals out of their homes to construct this building for the KMT. This also led to the widening of the roads to make more space for tourists and cars to go to the NPM.
                            </>
                        }
                    />

                    <MiscellaneousCard
                        imgSrc="/collection/hor-shih.jpg"
                        imgAlt="Dr. Shih"
                        heading="Dr. Shih"
                        caption="Dr. Shih, Professor at SCU, photographed March 31"
                        description={
                            <>
                                <b>Dr. Fu-sheng Shih</b> is a professor at Soochow University in the sociology department. Growing up in Lukang, studying in Poland, and later moving back to Taiwan in Beitou, Dr. Shih has learned much about Taiwan’s history and its developments in the past couple of decades.
                                <br/>
                                During our interview with Dr. Shih, we learned how a lot of the projects in this area were political or business related. A lot of the urban projects here are solely for capital but at the expense of destroying the history here.
                                Dr. Shih also goes into depth about how this area is multicultural and one of the big questions is how do we preserve all the culture here.
                            </>
                        }
                    />

                    <MiscellaneousCard
                        imgSrc="/collection/ming-li.jpg"
                        imgAlt="Dr. Yao"
                        heading="Dr. Yao"
                        caption="Dr. Yao, Professor at SCU, photographed March 26"
                        description={
                            <>
                                <b>Dr. Ming-Li Yao</b> is a sociology professor at Soochow University, focusing on how to preserve traditions. She has lived Shilin District for 3 years and is motivated to teach in sociology because she loved visiting different places as a kid
                                <br/>
                                What the team took away from this interview was that we should be representing all sides of culture in this area. Taiwan, which has Aboriginal, Dutch, Chinese, and Japanese history, is rich with culture and each one of them is part of Taiwanese identity.
                                If we create an interesting story, people would be more inclined to listen and learn about the different cultures here—and in doing so, protect them as well.
                            </>
                        }
                    />

                    <MiscellaneousCard
                        imgSrc="/collection/henry-sherry.jpg"
                        imgAlt="Henry & Sherry"
                        heading="Henry & Sherry"
                        caption="Sherry (left) and Henry (right), photographed April 12"
                        description={
                            <>
                                <b>Henry and Sherry</b> are both tour guides from Stunning Taiwan that specializes in the history of the Shilin District. They both have extensive knowledge of this area as Sherry grew up in Shilin and Henry works there as a tour guide.
                                <br/>
                                During our tour with Henry and Sherry, we learned more about the history of the Shilin District. The Shilin District was built around the Waishuangxi river because the water was an important resource for agriculture and later, for factories such as the paper mills. We also learned about the old and new streets of Shilin, which are two areas where one is more traditional and one is more modern. They believe if the Waishuangxi can be kept safe to be used as a third place, then the river should be kept natural.
                            </>
                        }
                    />

                    <MiscellaneousCard
                        imgSrc="/fuyu/collab.jpg"
                        imgAlt="Mr. Huang"
                        heading="Mr. Huang"
                        caption="Mr. Huang, Fuyu Tea House, photographed March 25"
                        description={
                            <>
                                <b>Huang Qing-zhang</b> is the owner of a traditional tea shop in the Shilin District. He has lived here his whole life and has inherited this shop from his father. He owns two shops, one in Taipei and the one in Shilin.
                                <br/>
                                From this interview, we learned how back then, everyone was connected in this community. He talked about how all the generations knew each other for a long time. However, as time passes, this place has become a place for business and tourists, which is good for his shop but bad for the community. With the rise of social media too, he claims how his daughter is different from him as she talks to her friends through social media, while he likes to talk in person.
                            </>
                        }
                    />

                    <MiscellaneousCard
                        imgSrc="/collection/hor-fisherman.jpg"
                        imgAlt="Mr. Zhang"
                        heading="Mr. Zhang"
                        caption="Mr. Zhang, a fisherman, photographed April 7
"
                        description={
                            <>
                                We found <b>Mr. Zhang</b> fishing at Waishuangxi underneath a bridge. Now retired, he has spent the last 10 years fishing as a casual hobby. He enjoys fishing in this area because of the shade the bridge has to offer on hot, sunny days. To him, Waishuangxi is an important place of relaxation and recreation.
                                <br/>
                                Mr. Zhang is an example of one of the many people who find their own use for the Waishuangxi. For him, the river is a perfect third place for retired people to continue relaxing in the daytime while enjoying the peaceful shade underneath the bridge. If the river were to be opened to the public, many more like Mr. Zhang would be able to find their own purpose at the river and learn to respect the nature in Shilin.
                            </>
                        }
                    />

                    <MiscellaneousCard
                        imgSrc="/collection/marissa.jpg"
                        imgAlt="Mrs. Hu"
                        heading="Mrs. Hu"
                        caption="Marissa Hu, a volunteer at NPM, photographed April 10"
                        description={
                            <>
                                <b>Marissa Hu</b> is a volunteer tour guide for the National Palace Museum (NPM). She loves Chinese calligraphy, and came to volunteer at the NPM because she has a passion for learning more about calligraphy at the museum. Through volunteering, she is exposed to an extensive collection of the history of calligraphy and she enjoys sharing the knowledge she learns at the museum with others.
                                <br/>
                                When talking to Mrs. Hu, we learned much about Chinese identity and Taiwan’s role in preserving the history of China. She believes that Han Taiwanese people should come to appreciate Chinese culture and history as it’s a large part of Taiwan’s origin. By embracing Chinese culture, Taiwanese people of Chinese descent can find harmony within themselves and find peace with the multiculturalism in Taiwan.
                            </>
                        }
                    />

                    <MiscellaneousCard
                        imgSrc="/collection/soka.jpg"
                        imgAlt="Soka Gokkai"
                        heading="Soka Gokkai"
                        caption="Team & Soka Gakkai members, photographed April 2"
                        description={
                            <>
                                The <b>Soka Gakkai group</b> of people we interviewed were part of the Soka Gakkai organization coming from different regions of the world. Ms. Huang and Ms. Tsao are from the Taiwanese branch, Ms. Ishikawa is from the Chicago branch, and Ms. Jeren is from the Singaporean branch.
                                <br/>
                                We learned that the Soka Art Museum was funded by the Soka Gakkai, which is a Nichiren  Buddhist organization that started in Japan. They are in 192 countries and they practice the teaching of “Nam Myoho Renge Kyo” which means that each person has unlimited potential.
                            </>
                        }
                    />

                    <MiscellaneousCard
                        imgSrc="/collection/sunny.jpg"
                        imgAlt="Sunny Cheng"
                        heading="Sunny Cheng"
                        caption="Sunny Cheng, Student at SCU, photographed March 26"
                        description={
                            <>
                                <b>Sunny Zheng</b> is a freshman in Soochow University majoring in Sociology. He is from Taoyuan,  but he has been living in Shilin for about half a year. His family is Christian but he does not partake in the practices as he started questioning their beliefs around 15 years old.
                                <br/>
                                Through this interview, we learned how the younger generation differs from the older generation in terms of thinking, claiming that the older generation had an “old way of thinking.” Sunny also gave us an insight on what locals thought of urbanization. Urbanization helps Shilin by bringing in more business, but it is also destroying the history of Shilin.
                            </>
                        }
                    />

                    <MiscellaneousCard
                        imgSrc="/collection/others.jpg"
                        imgAlt="Others"
                        heading="Others"
                        caption="Shuangxi Riverside park, photographed April 7"
                        description={
                            <>
                                During our walks along the Waishuangxi, we came across <b>multiple groups</b> of people using the riverside park in different ways. We found that each group of people have found a special way to fit the river in their lifestyle. Whether it’s dancing, exercise, or purely enjoying the river itself, the local residents in the Waishuangxi watershed area have found their third place—Waishuangxi.
                                <br/>
                                As we were walking alongside the Shuangxi Riverside park, we saw a lady under the bridge writing in her journal. She likes working under the bridge because she is able to socialize with more people and learn their personal stories. Through these conversations she has with the people around her, she creates a journal full of people’s vibrant lives.
                                <br/>
                                We were on a bridge over the Waishuangxi river and noticed an older man walking along the river, enjoying the view. We learned that he is from Australia visiting his daughter here and he likes to visit this area because it is well-maintained. To him, the Waishuangxi is the perfect location to take in nature in the middle of the city.
                                <br/>
                                We saw groups of elderly people under the bridge nearly every morning. These pairs practice different forms of ballroom dancing for exercise and it was clear to the group that this is a normal activity that has become tradition in the park. When talking to them, they told us that everyone in the dance group knows each other. Through dancing under the Waishuangxi bridges, they form a tight-knit community.
                                <br/>
                                We would often see a group of elderly women exercising near the river. They would come to this area often to exercise and gossip with each other. This seemed like a daily activity in their lives.
                            </>
                        }
                    />

                </motion.div>
            </div>

        </div>
    );
}