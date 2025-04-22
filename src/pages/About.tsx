import {TeamCard} from "../components/TeamCard.tsx";
import {AdvisorCard} from "../components/AdvisorCard.tsx";
import {SponsorCard} from "../components/SponsorCard.tsx";

export default function About() {
    return (
        <div className="flex flex-col text-center my-10 gap-y-10 overflow-auto">

            <label className="text-6xl font-bold">Meet the Team!</label>
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
