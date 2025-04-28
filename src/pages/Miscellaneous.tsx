import { motion } from "framer-motion";
import Footnote from "../components/Footnote.tsx";
import MiscellaneousCard from "../components/MiscellaneousCard.tsx";

export default function Miscellaneous() {
    return (
        <div
            className="absolute overflow-x-auto inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/miscellaneous/background.jpg')` }}
        >
                <motion.div
                    className="flex justify-start items-center gap-4 h-full w-max px-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                <MiscellaneousCard
                    imgSrc="/shuangxi/bird.jpg"
                    imgAlt="Egret"
                    heading="Egret"
                    caption="Egret, photographed March 24"
                    description={
                        <>
                            During the team’s time in Taiwan, we often saw <b>Egrets</b> flying around both Soochow and the Waishuangxi.
                            They would often show up in the morning during warmer temperatures, standing still, looking at any prey to catch.
                            To identify an Egret, they have all white feathers, with an orange beak and black legs.
                            Their necks are often shaped like the letter ‘S’, and can be seen twisting their neck to catch their prey
                            <Footnote number={1} href="https://www.nationalgeographic.com/animals/birds/facts/great-egret/" tooltip="Source: Great Egret | National Geographic, 2011." />
                            .
                            <br/>
                            Egrets have several different meanings based on region and culture. In Chinese culture,
                            Egrets symbolizes transformation and are linked to carrying one's soul to Heaven. In the Japanese,
                            they are seen as an omen of good luck and as a way to ward off bad luck. For Buddhism, it represents purity, transformation like Chinese culture,
                            and wisdom of the Buddha
                            <Footnote number={2} href="https://birdzpedia.com/egret-symbolism/" tooltip="Source: Huda, 2024." />
                            .
                        </>
                    }
                />

                <MiscellaneousCard
                    imgSrc="/miscellaneous/canal.jpg"
                    imgAlt="Fudeyang Canal System"
                    heading="Fudeyang Canal System"
                    caption="Canal system near Shilin MRT, photographed April 19"
                    description={
                        <>
                            During the Qing Dynasty, local farmers worked together to build the <b>Fudeyang canal system</b> to increase irrigation.
                            The canal starts near Soochow University and its connected canals stretch through all of downtown Shilin.
                            <br/>
                            Some parts of the canal are made with smooth concrete, however older sections of the canal are made with special stones called Qili’an stone,
                            which come from Qili’an, a mountain in Taiwan. These stones were popular during the development of Shilin and today are heavily protected for their historical significance.
                            <br/>
                            To reinforce canal walls, local community members planted trees whose roots would tie the stones in place.
                            In many parts of Shilin, the canal is currently covered up, but the original path of the canals can be traced by following the trees once planted centuries ago.
                            By following the Fudeyang canal, one can see the remnants of Shilin’s past.
                        </>
                    }
                />

                <MiscellaneousCard
                    imgSrc="/miscellaneous/elephant.jpg"
                    imgAlt="Giant Elephant Ear Tree"
                    heading="Giant Elephant Ear Tree"
                    caption="Giant Elephant Tree, photographed March 26"
                    description={
                        <>
                            The <b>Giant Elephant Ear tree</b> also known as Alocasia Macrorrhiza was a very common tree seen  when we were walking through the Waishuangxi area.
                            One of its most notable features to identify the tree is its large arrow-shaped leaves.
                            What’s special about this plant is that it is an edible root vegetable
                            <Footnote number={1} href="https://plantsinsights.com/alocasia-macrorrhiza/" tooltip="Source: Wyatt, 2022." />
                            .
                            <br/>
                            In Chinese culture, the Giant Elephant Ear tree symbolizes good fortune and prosperity. In Feng Shui,
                            it is also said to bring wealth and good fortune
                            <Footnote number={2} href="https://hiddensignificance.com/elephant-ear-plant-spiritual-meaning/" tooltip="Source: Jones, 2024." />
                            (Jones, 2024)
                            .
                        </>
                    }
                />

                <MiscellaneousCard
                    imgSrc="/miscellaneous/mulberry.JPG"
                    imgAlt="Paper Mulberry Tree"
                    heading="Paper Mulberry Tree"
                    caption="Paper Mulberry Tree, photographed March 26"
                    description={
                        <>
                            The <b>Paper Mulberry Tree</b> can often be seen throughout the neighborhood of Soochow and the Shilin District. This tree’s inner bark is often used to make paper, and produces edible berries for humans and animals.
                            <br/>
                            Since the tree is widely used to make paper, there are many symbols that are related to the tree. In Chinese culture, people believe this tree to be a link that connects Earth and the Eastern Heaven, which also acts as a sign of
                            In Japanese culture, since this tree is used for paper and to feed silkworms, it is believed that this tree symbolises self-sacrifice
                            <Footnote number={1} href="https://www.sunsigns.org/mulberry-tree-symbolism-meanings/" tooltip="Source: Dennis, 2021." />
                            .
                        </>
                    }
                />

                <MiscellaneousCard
                    imgSrc="/miscellaneous/qili'an.jpg"
                    imgAlt="Qili'an Stone"
                    heading="Qili'an Stone"
                    caption="Qili’an Stone, photographed April 19"
                    description={
                        <>
                            The <b>Qili’an stone</b>, which comes from Qili’an mountain in Taiwan,
                            can be seen throughout the Fudeyang canal system of Shilin and historical buildings of Taiwan.
                            We were able to tell if it was a Qili’an stone by its unique scratch marking on the stone.
                            This stone was most often used during the Qing Dynasty and Japanese colonial period as it made a solid foundation.
                            <br/>
                            In the 1970s, quarrying was banned, making Qili’an a limited resource
                            <Footnote number={1} href="https://culture.gov.taipei/cp.aspx?n=1CC5890CED2B2051" tooltip="Qilian Quarrying Cultural Display Wall, 2016." />
                            .
                            We were also informed during our Shilin tour that the use of Qili’an stone is now restricted to preserve the history behind it.
                            Both of these reasons contribute to the stone’s value and cultural significance.
                        </>
                    }
                />
                </motion.div>
            </div>
    );
}
