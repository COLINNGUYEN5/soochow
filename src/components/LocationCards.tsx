import { Link } from "react-router-dom";

type LocationCardProps = {
    title: string,
    description: string,
    link: string,
    imageSrc: string,
}

export default function LocationCards({ title, description, link, imageSrc } : LocationCardProps)  {
    return (
        <div className="mt-6 w-96 bg-white shadow-md">
            <div className="relative h-56">
                <img
                    src={imageSrc}
                    alt="card-image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <p className="font-bold text-xl mb-2">{title}</p>
                <p >{description}</p>
            </div>
            <div className="p-2">
                <Link to={link}>
                    <button className="bg-black p-2 rounded-lg text-white cursor-pointer">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    );
};
