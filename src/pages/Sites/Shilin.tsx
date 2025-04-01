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
                    <div className="w-124 h-fit place-self-center">
                        <img src="/shilin.map.jpg" alt="profile-picture" className="h-84 w-full object-cover"/>
                        <div className="text-center py-2 bg-white shadow-md">
                            <p className="mb-2">
                                Dr. Mi Chienkuo
                            </p>
                            <p className="font-medium">
                                Dean of the School of Liberal Arts and Social Sciences
                            </p>
                        </div>
                    </div>

                    <div className="w-124 h-fit place-self-center">
                        <img src="/shilin.jpg" alt="national-picture" className="h-84 w-full object-cover"/>
                        <div className="text-center py-2 bg-white shadow-md">
                            <p className="mb-2">
                                Dr. Mi Chienkuo
                            </p>
                            <p className="font-medium">
                                Dean of the School of Liberal Arts and Social Sciences
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}