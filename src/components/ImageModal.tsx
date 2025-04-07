import { useState } from "react";

type ImageModalItem = {
    src: string;
    alt: string;
    label: string;
};

export function ImageModal({ src, alt, label }: ImageModalItem) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Thumbnail with overlay and label */}
            <div
                className="relative aspect-[3/2] w-[32%] cursor-pointer group"
                onClick={() => setIsOpen(true)}
            >
                <img
                    src={src}
                    className="object-cover w-full h-full"
                    alt={alt}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold">{label}</p>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative bg-white p-4 rounded-lg max-w-[50vw] max-h-[60vh] shadow-xl">
                        <button
                            className="absolute top-2 right-2 text-black text-xl"
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>
                        <img
                            src={src}
                            alt={alt}
                            className="w-full max-h-[50vh] rounded"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
