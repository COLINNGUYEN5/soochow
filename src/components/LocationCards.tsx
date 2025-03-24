import {Link} from "react-router-dom";

export function LocationCards() {
    return (
        <div className="overflow-auto flex flex-col text-center my-10">
            <label className="text-6xl font-bold">Locations</label>
            <div className="flex flex-wrap justify-center gap-12 my-5">
                <div className="mt-6 w-96 bg-white shadow-md">
                    <div className="relative h-56">
                        <img
                            src="/waishuangxi.jpg"
                            alt="card-image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <p className="mb-2">
                            Waishuangxi
                        </p>
                        <p>
                            The area does not have government-standardized borders, so what we define as the Waishuangxi watershed area is the area
                            in Shilin west of the start of the Waishuangxi— where Jingquexi and Neishuangxi merge— and east of Keelung River.
                        </p>
                    </div>
                    <div className="p-2">
                        <Link to={"/sites/waishuangxi"}>
                            <button className="bg-black p-2 rounded-lg text-white cursor-pointer">Read More</button>
                        </Link>
                    </div>
                </div>

                <div className="mt-6 w-96 bg-white shadow-md">
                    <div className="relative h-56">
                        <img
                            src="/national.jpg"
                            alt="card-image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <p className="mb-2">
                            National Palace of Museum
                        </p>
                        <p>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </p>
                    </div>
                    <div className="p-2">
                        <Link to={"/sites/national"}>
                            <button className="bg-black p-2 rounded-lg text-white cursor-pointer">Read More</button>
                        </Link>
                    </div>
                </div>

                <div className="mt-6 w-96 bg-white shadow-md">
                    <div className="relative h-56">
                        <img
                            src="/chiang.jpg"
                            alt="card-image"
                            className={"w-full h-full object-cover"}
                        />
                    </div>
                    <div className="p-4">
                        <p className="mb-2">
                            Chiang Kai-Shek Shilin Residence
                        </p>
                        <p>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </p>
                    </div>
                    <div className="p-2">
                        <Link to={"/sites/chiang"}>
                            <button className="bg-black p-2 rounded-lg text-white cursor-pointer">Read More</button>
                        </Link>
                    </div>
                </div>

                    <div className="mt-6 w-96 bg-white shadow-md">
                        <div className="relative h-56">
                            <img
                                src="/shilin.jpg"
                                alt="card-image"
                                className={"w-full h-full object-cover"}
                            />
                        </div>
                        <div className="p-4">
                            <p className="mb-2">
                                Shilin Night Market
                            </p>
                            <p>
                                The place is close to Barceloneta Beach and bus stop just 2 min by
                                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                night life in Barcelona.
                            </p>
                        </div>
                        <div className="p-2">
                            <Link to={"/sites/shilin"}>
                                <button className="bg-black p-2 rounded-lg text-white cursor-pointer">Read More</button>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    );
}