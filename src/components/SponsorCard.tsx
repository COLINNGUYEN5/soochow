export function SponsorCard() {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="w-72 h-fit place-self-center">
                <img src="/people/dean-mi.jpg" alt="profile-picture" className="h-70 w-full object-cover"/>
                <div className="text-center py-2 bg-white shadow-md">
                    <p className="mb-2">
                        Dr. Mi Chienkuo
                    </p>
                    <p className="font-medium blue-gray">
                        Dean of the School of Liberal Arts and Social Sciences
                    </p>
                </div>
            </div>

            <div className="w-72 h-fit place-self-center">
                <img src="/people/drshih.jpg" alt="profile-picture" className="h-70 w-full object-cover"/>
                <div className="text-center py-2 bg-white shadow-md">
                    <p className="mb-2">
                        Dr. Fu-sheng Shih
                    </p>
                    <p className="font-medium blue-gray">
                        Assistant Professor in the Department of Sociology
                    </p>
                </div>
            </div>

        </div>
    );
}