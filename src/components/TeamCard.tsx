export function TeamCard() {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="w-72 h-fit place-self-center">
                <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" className="h-70 w-full object-cover"/>
                <div className="text-center py-2 bg-white shadow-md">
                    <p className="mb-2">
                        Colin Nguyen
                    </p>
                    <p className="blue-gray font-medium">
                        Computer Science
                    </p>
                </div>
            </div>

            <div className="w-72 h-fit place-self-center">
                <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" className="h-70 w-full object-cover"/>
                <div className="text-center py-2 bg-white shadow-md">
                    <p className="mb-2">
                        Kaven Lin
                    </p>
                    <p className="font-medium blue-gray">
                        Management Engineering
                    </p>
                </div>
            </div>

            <div className="w-72 h-fit place-self-center">
                <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" className="h-70 w-full object-cover"/>
                <div className="bg-white text-center py-2 shadow-md">
                    <p className="mb-2">
                        Sean Okamoto
                    </p>
                    <p className="blue-gray font-medium">
                        Aerospace Engineer
                    </p>
                </div>
            </div>

            <div className="w-72 h-fit place-self-center">
                <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" className="h-70 w-full object-cover"/>
                <div className="text-center py-2 bg-white shadow-md">
                    <p className="mb-2">
                        Aishwarya Sinha
                    </p>
                    <p className="font-medium blue-gray">
                        Data Science
                    </p>
                </div>
            </div>

        </div>
    );
}