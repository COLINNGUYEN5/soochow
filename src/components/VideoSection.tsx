import {
    Timeline, TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography
} from "@material-tailwind/react";
import { ClockIcon } from "@heroicons/react/24/outline";


export default function VideoSection() {
    return (

        <div className="h-full w-full overflow-y-auto py-20">
            <Timeline className="flex flex-col justify-center items-center">
                <TimelineItem>
                    <div className="w-1 h-12 bg-gray-300"></div>
                    <TimelineHeader className="h-3">
                        <TimelineIcon className="bg-blue-500 text-white">
                            <ClockIcon className="h-5 w-5" />
                        </TimelineIcon>
                        <Typography variant="h6" color="blue-gray" className="leading-none">
                            Pre-Taiwan
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/30DBwAsJgM8?si=qRl_HZiOvWdgMcX_"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen loading="lazy"></iframe>
                    </TimelineBody>
                </TimelineItem>

                <TimelineItem>
                    <TimelineConnector className="h-12 w-0.5 bg-gray-300" />
                    <TimelineHeader className="h-3">
                        <TimelineIcon className="bg-blue-500 text-white">
                            <ClockIcon className="h-5 w-5" />
                        </TimelineIcon>
                        <Typography variant="h6" color="blue-gray" className="leading-none">
                            Landing
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/30DBwAsJgM8?si=qRl_HZiOvWdgMcX_"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen loading="lazy"></iframe>
                        </TimelineBody>
                </TimelineItem>

                <TimelineItem>
                    <TimelineConnector className="h-12 w-0.5 bg-gray-300" />
                    <TimelineHeader className="h-3">
                        <TimelineIcon className="bg-blue-500 text-white">
                            <ClockIcon className="h-5 w-5" />
                        </TimelineIcon>
                        <Typography variant="h6" color="blue-gray" className="leading-none">
                            Timeline Title Here.
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/30DBwAsJgM8?si=qRl_HZiOvWdgMcX_"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen loading="lazy"></iframe>
                    </TimelineBody>
                </TimelineItem>

                <TimelineItem>
                    <TimelineConnector className="h-12 bg-gray-300" />
                    <TimelineHeader className="h-3">
                        <TimelineIcon className="bg-blue-500 text-white">
                            <ClockIcon className="h-5 w-5" />
                        </TimelineIcon>                        <Typography variant="h6" color="blue-gray" className="leading-none">
                            Waishuangxi
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/30DBwAsJgM8?si=qRl_HZiOvWdgMcX_"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen loading="lazy"></iframe>
                    </TimelineBody>
                </TimelineItem>

                <TimelineItem>
                    <TimelineHeader className="h-3">
                        <TimelineIcon className="bg-blue-500 text-white">
                            <ClockIcon className="h-5 w-5" />
                        </TimelineIcon>                        <Typography variant="h6" color="blue-gray" className="leading-none">
                            National Palace Museum
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/30DBwAsJgM8?si=qRl_HZiOvWdgMcX_"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen loading="lazy"></iframe>
                    </TimelineBody>
                </TimelineItem>

            </Timeline>
        </div>
    );
}