import {TeamCard} from "../components/TeamCard.tsx";
import {AdvisorCard} from "../components/AdvisorCard.tsx";
import {SponsorCard} from "../components/SponsorCard.tsx";

export default function About() {
    return (
        <div className="flex flex-col text-center my-10 gap-y-10 overflow-auto">

            <label className="text-6xl font-bold">Our Story</label>
            <div className="flex flex-col justify-center container mx-auto px-10 pb-10 border-b-1 border-gray-200">
                <p className="text-xl text-gray-800">
                    In the words of Sunny, “Everything about the history and culture of Shilin was built by the river.”
                    Dating back to the aboriginals, the growth of Shilin has always wrapped around the Waishuangxi.
                    The river was there when the Qing Dynasty came into rule and situated their scholars in Shilin,
                    when the power shifted to the Japanese and Shilin began industrializing, and still when KMT rule began and Shilin became a rich area for agriculture and the residences of high-ranking officials.
                    While the buildings, people, and power in Shilin has changed, Waishuangxi has seen it all, giving it key significance to the area.
                    Using these themes below, we developed a story of Shilin in our map that highlights the importance of the Waishuangxi and its ties to Shilin’s identity.
                </p>
                <br/>
                <div className="flex flex-col w-full h-full">
                    <ul className="flex flex-col sm:flex-row sm:justify-between lg:px-16 text-2xl font-bold">
                        <li>Multiculturalism</li>
                        <li>Interconnectedness</li>
                        <li>Third Place</li>
                    </ul>
                    <br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4SK2D6oUgXg?si=KmxzHGMV3z9m-yCW"
                            title="YouTube video player" frameBorder="0"
                            className="place-self-center"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
            </div>

            <label className="text-6xl font-bold">Meet the Team</label>
            <TeamCard/>
            <div className="flex justify-center container mx-auto px-10 pb-10 border-b-1 border-gray-200">
                <p className="text-xl text-gray-800">
                    Hello, Welcome to our website! We are a dedicated team from Worcester Polytechnic Institute (WPI), in Worcester, Massachusetts
                    in the United States. Working with Soochow University, this project embodies the institution’s commitment to social responsibility.
                    Under the leadership of Dean Mi Chienkuo and Assistant Professor Fu-sheng Shih,the team's goal is to create an informative and interactive
                    resource to bring attention to the Waishuangxi watershed area. This map will serve as a tool for cultural and environmental preservation, education,
                    and engagement with the local community. As a team, we aim to develop a product that reflects the rich history of the area in both an accurate and
                    accessible manner.
                </p>
            </div>

            <label className="text-6xl font-bold">Advisors</label>
            <AdvisorCard/>
            <div className="flex justify-center container mx-auto px-10 pb-10 border-b-1 border-gray-200">
                <p className="text-xl text-gray-800">
                    The team would like to extend our deepest gratitude to our advisors, Dr. Grant Burrier and Dr. Philip Hultquist,
                    for their guidance and expertise which has been invaluable to the success of this project. Their feedback and insights
                    have played a crucial role in shaping the quality of our research and work.
                </p>
            </div>

            <label className="text-6xl font-bold">Sponsors</label>
            <SponsorCard/>
            <div className="flex justify-center container mx-auto px-10 pb-10">
                <p className="text-xl text-gray-800">
                    This project would not have been possible without the help of our sponsors, Dr. Mi Chienkuo, Dr. Fu-sheng Shih.
                    We are very grateful for their initiative of starting this project, and fostering the collaboration between WPI and Soochow University.
                    This experience has been truly memorable, and the experience and insights we have gained of Taiwan will be something we never forget.
                </p>
            </div>

        </div>
    );
}
