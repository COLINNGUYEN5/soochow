import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

export function AdvisorCard() {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-12">
            <Card className="w-72 h-fit place-self-center">
                <CardHeader floated={false} className="h-70">
                    <img src="/drgrant.png" alt="profile-picture" className="h-full w-full object-cover"/>
                </CardHeader>
                <CardBody className="text-center py-2">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Dr. Grant Burrier
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        Associate Professor of Teaching • The Global School
                    </Typography>
                </CardBody>
            </Card>

            <Card className="w-72 h-fit place-self-center">
                <CardHeader floated={false} className="h-70">
                    <img src="/drphil.png" alt="profile-picture" className="h-full w-full object-cover"/>
                </CardHeader>
                <CardBody className="text-center py-2">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Dr. Philip Hultquist
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        DIGS Adjunct Teaching Professor • The Global School
                    </Typography>
                </CardBody>
            </Card>

            <Card className="w-72 h-fit place-self-center">
                <CardHeader floated={false} className="h-70">
                    <img src="/drdu.jpg" alt="profile-picture" className="h-full w-full object-cover"/>
                </CardHeader>
                <CardBody className="text-center py-2">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Dr. Wen-Hua Du
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        Associate Professor of Teaching • Humanities
                    </Typography>
                </CardBody>
            </Card>

        </div>
    );
}