import grant from "/people/drgrant.png"

export function AdvisorCard() {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-12">

            <div className="w-72 h-fit place-self-center">
                <img src={grant} alt="profile-picture" className="h-70 w-full object-cover"/>
                <div className="bg-white text-center py-2 shadow-md">
                    <p className="mb-2">
                        Dr. Grant Burrier
                    </p>
                    <p className="font-medium blue-gray">
                        Associate Professor of Teaching • The Global School
                    </p>
                </div>
            </div>

            <div className="w-72 h-fit place-self-center">
                <img src="/people/drphil.png" alt="profile-picture" className="h-70 w-full object-cover"/>
                <div className="bg-white text-center py-2 shadow-md">
                    <p className="mb-2">
                        Dr. Philip Hultquist
                    </p>
                    <p className="blue-gray font-medium">
                        DIGS Adjunct Teaching Professor • The Global School
                    </p>
                </div>
            </div>

            <div className="w-72 h-fit place-self-center">
                <img src="/people/drdu.jpg" alt="profile-picture" className="h-70 w-full object-cover"/>
                <div className="bg-white text-center py-2 shadow-md">
                    <p className="mb-2">
                        Dr. Wen-Hua Du
                    </p>
                    <p className="font-medium blue-gray">
                        Associate Professor of Teaching • Humanities
                    </p>
                </div>
            </div>

        </div>
    );
}