import {Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";

export default function Shilin() {
    return (
        <div className="overflow-auto">
            <img
                src="/shilin.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center items-center py-10 gap-y-10">
                <h1 className="text-6xl font-bold"> Shilin Night Market
                    (士林夜市)</h1>

                <div className="flex flex-col md:flex-row gap-x-48">
                    <Card className="w-124 h-fit place-self-center">
                        <CardHeader floated={false} className="h-84">
                            <img src="/shilin.map.jpg" alt="profile-picture" className="h-full w-full object-cover"/>
                        </CardHeader>
                        <CardBody className="text-center py-2">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Dr. Mi Chienkuo
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                                Dean of the School of Liberal Arts and Social Sciences
                            </Typography>
                        </CardBody>
                    </Card>

                    <Card className="w-124 h-fit place-self-center">
                        <CardHeader floated={false} className="h-84">
                            <img src="/shilin.jpg" alt="national-picture" className="h-full w-full object-cover"/>
                        </CardHeader>
                        <CardBody className="text-center py-2">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Dr. Mi Chienkuo
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                                Dean of the School of Liberal Arts and Social Sciences
                            </Typography>
                        </CardBody>
                    </Card>


                </div>
            </div>
        </div>
    )
}