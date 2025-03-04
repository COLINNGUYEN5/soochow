import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

export function TeamCard() {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-12">
            <Card className="w-72 h-fit place-self-center">
                <CardHeader floated={false}>
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center py-2">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Colin Nguyen
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        Computer Science
                    </Typography>
                </CardBody>
            </Card>

            <Card className="w-72 h-fit place-self-center">
                <CardHeader floated={false}>
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center py-2">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Kaven Lin
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        Management Engineering
                    </Typography>
                </CardBody>
            </Card>

            <Card className="w-72 h-fit place-self-center">
                <CardHeader floated={false}>
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center py-2">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Sean Okamoto
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        Aerospace Engineer
                    </Typography>
                </CardBody>
            </Card>

            <Card className="w-72 h-fit place-self-center">
                <CardHeader floated={false}>
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center py-2">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Aishwarya Sinha
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        Data Science
                    </Typography>
                </CardBody>
            </Card>

        </div>
    );
}