import { useState } from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Interviewee, IntervieweeCard} from "../components/IntervieweeCard.tsx";

export default function Collection() {
    const [selected, setSelected] = useState<Interviewee | null>(null);

    const interviewees: Interviewee[] = [
        {
            name: 'Marissa Hu',
            title: 'National Palace Museum\nTour Guide',
            image: '/collection/marissa.jpg',
            quote: "Teaching my daughter to skip across the rocks because she didn’t like to do any physical activity.",
            portrait: ""
        },
        {
            name: 'Dr. Shih',
            title: 'Professor of Sociology\nSoochow University',
            image: '/collection/shih.jpg',
            quote: "Society evolves with the people who shape it.",
        },
        {
            name: 'Mr. Zhang',
            title: 'Local Fisherman',
            image: '/collection/fisherman.jpg',
            quote: "The river has always been my home.",
            portrait: "collection/fisherman-portrait.jpg",
            bio: "A local fisherman fishing at Waishuangxi and his thoughts on what makes Waishuangxi special and opening of the river to the public.",
        },
        {
            name: 'Henry and Sherry',
            title: 'Tour Guides\nStunning Taiwan',
            image: '/collection/henry-sherry.jpg',
            quote: "We love showing people the beauty of our country.",
        },
        {
            name: 'Guo Zhao Fu',
            title: 'Linxi Village Chief',
            image: '/collection/chief.jpg',
            quote: "When I was little, I would play in the river with my friends, but it was dangerous, so we didn’t tell our parents because we were afraid of being scolded..",
            portrait: "/collection/chief-portrait.jpg",
            bio: "Guo Zhao Fu and his family has lived in this area for generations. He has been village chief since 2006 in which he assists the community and serves as a bridge between the government and locals. He remembers playing in the rivers with his friends as a kid.",
        },
        {
            name: 'Dr. Ming-Li Yao',
            title: 'Professor of Sociology,\nSoochow University',
            image: '/collection/ming-li.jpg',
            quote: "Education is the key to transformation.",
        },
        {
            name: 'Huang Qing-Zhang',
            title: 'Traditional Chinese tea shop owner',
            image: '/fuyu/collab.jpg',
            quote: "Tea is more than a drink, it’s a lifestyle.",
            portrait: "/fuyu/oolong.jpg",
        },
        {
            name: 'Wayne Liang',
            title: 'Director of International Affairs Center',
            image: '/collection/wayne.jpg',
            quote: "Soochow is famous for its academic records and its faculty and students are very friendly and nice so international students here gets very good education. So this is a place you must come.",
        },
    ];

    return (
        <div className="flex flex-col md:flex-col lg:flex-row min-h-screen overflow-auto sm:overflow-hidden">
            {/* Left side with title */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
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
                                        className="w-60 aspect-[3/4] object-cover rounded-lg shadow-md"
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
            <div className="w-full lg:w-1/2 flex items-center justify-center relative">
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
                                        className="absolute left-1/2 top-1/2"
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
    );
}