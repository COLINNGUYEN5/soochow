import React from "react";

interface MiscellaneousCardProps {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    caption: string;
    description: React.ReactNode; // allows rich text, links, Footnote, etc.
}

export default function MiscellaneousCard({ imgSrc, imgAlt, heading, caption, description }: MiscellaneousCardProps) {
    return (
        <div className="w-80 flex flex-col items-center bg-white rounded-2xl shadow-md p-4 m-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {heading}
            </h2>
            <img
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-auto object-contain rounded-lg"
            />
            <figcaption className="text-xs text-gray-500 italic mt-2">
                {caption}
            </figcaption>
            <div className="mt-4 text-center text-sm text-gray-700 leading-relaxed px-2 max-h-40 overflow-y-auto overflow-x-hidden">
                {description}
            </div>
        </div>
    );
}
