import { useState, useEffect } from "react";

type WordHoverProps = {
    label: string;
    src: string; // path to image or video
};

export default function WordHover({ label, src }: WordHoverProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        }
    }, []);

    const isVideo = src.match(/\.(mp4|webm|ogg)$/i);

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <span className="relative group inline-block cursor-pointer">
            <span className="text-blue-500">{label}</span>

            {isTouchDevice && (
                <div
                    className="mt-2 w-20 h-12"
                    onClick={toggleOpen}
                >
                    <img
                        src={src}
                        alt={label}
                        className="rounded-lg shadow-md w-full h-full object-cover"
                    />
                </div>
            )}

            {!isTouchDevice && (
                <div
                    className={`
                        absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 h-48 sm:w-[28rem] sm:h-64 md:w-[32rem] md:h-72 lg:w-[36rem] lg:h-80
                        hidden group-hover:flex
                        items-center justify-center z-50
                    `}
                >
                    {isVideo ? (
                        <video
                            src={src}
                            autoPlay
                            muted
                            loop
                            disablePictureInPicture
                            className="rounded-lg shadow-lg w-full h-full object-cover"
                        />
                    ) : (
                        <img
                            src={src}
                            alt={label}
                            className="rounded-lg shadow-lg w-full h-full object-cover"
                        />
                    )}
                </div>
            )}

            {/* Fullscreen popup when tapped (mobile) */}
            {isTouchDevice && isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={toggleOpen}>
                    {isVideo ? (
                        <video
                            src={src}
                            autoPlay
                            muted
                            loop
                            disablePictureInPicture
                            className="rounded-lg shadow-lg w-11/12 h-auto object-contain"
                        />
                    ) : (
                        <img
                            src={src}
                            alt={label}
                            className="rounded-lg shadow-lg w-11/12 h-auto object-contain"
                        />
                    )}
                </div>
            )}
        </span>
    );
}
