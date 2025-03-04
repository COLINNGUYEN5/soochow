import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

export function SponsorCard() {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-12">
            <Card className="w-72 h-fit place-self-center">
                <CardHeader floated={false} className="h-70">
                    <img src="/dean-mi.jpg" alt="profile-picture" className="h-full w-full object-cover"/>
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

            <Card className="w-72 h-fit place-self-center">
                <CardHeader floated={false} className="h-70">
                    <img src="/drshih.jpg" alt="profile-picture" className="h-full w-full object-cover"/>
                </CardHeader>
                <CardBody className="text-center py-2">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Dr. Fu-sheng Shih
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        Assistant Professor in the Department of Sociology
                    </Typography>
                </CardBody>
            </Card>

            <Card className="w-72 h-fit place-self-center">
                <CardHeader floated={false} className="h-70">
                    <img src="/jill.jpg" alt="profile-picture" className="h-full w-full object-cover"/>
                </CardHeader>
                <CardBody className="text-center py-2">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Jill Hsiung
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        Secretary in the Department of Sociology
                    </Typography>
                </CardBody>
            </Card>


        </div>
    );
}