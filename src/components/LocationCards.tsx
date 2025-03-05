import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";

export function CardDefault() {
    return (
        <div className="overflow-auto flex flex-col text-center my-10">
            <label className="text-6xl font-bold">Locations</label>
            <div className="flex flex-wrap justify-center gap-12 my-5">
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="/waishuangxi.jpg"
                        alt="card-image"
                        className="w-full h-full object-cover"
                    />
                </CardHeader>
                <CardBody className="p-4">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Waishuangxi
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="p-4">
                    <Link to={"/sites/waishuangxi"}>
                        <Button className="bg-black p-2 rounded-lg">Read More</Button>
                    </Link>
                </CardFooter>
            </Card>

            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="/national.jpg"
                        alt="card-image"
                        className="w-full h-full object-cover"
                    />
                </CardHeader>
                <CardBody className="p-4">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        National Palace of Museum
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="p-4">
                    <Link to={"/sites/national"}>
                        <Button className="bg-black p-2 rounded-lg">Read More</Button>
                    </Link>
                </CardFooter>
            </Card>

            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="/chiang.jpg"
                        alt="card-image"
                        className={"w-full h-full object-cover"}
                    />
                </CardHeader>
                <CardBody className="p-4">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Chiang Kai-Shek Shilin Residence
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="p-4">
                    <Link to={"/sites/chiang"}>
                        <Button className="bg-black p-2 rounded-lg">Read More</Button>
                    </Link>
                </CardFooter>
            </Card>

                <Card className="mt-6 w-96">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src="/shilin.jpg"
                            alt="card-image"
                            className={"w-full h-full object-cover"}
                        />
                    </CardHeader>
                    <CardBody className="p-4">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Shilin Night Markets
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="p-4">
                        <Link to={"/sites/shilin"}>
                            <Button className="bg-black p-2 rounded-lg">Read More</Button>
                        </Link>
                    </CardFooter>
                </Card>



            </div>
        </div>
    );
}