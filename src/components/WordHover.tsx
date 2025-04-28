import { useState, useEffect } from "react";

type WordHoverProps = {
    label: string;
    src: string; // path to image or video
};

export default function WordHover({ label, src }: WordHoverProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const isVideo = src.match(/\.(mp4|webm|ogg)$/i); // check if the file is a video

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        }
    }, []);

    const toggleOpen = () => {
        if (isTouchDevice) {
            setIsOpen(prev => !prev);
        }
    };

    return (
        <span className="relative group inline-block cursor-pointer">
            {/* Word */}
            <span onClick={toggleOpen} className="text-blue-500">
                {label}
            </span>

            {/* Desktop hover preview */}
            {!isTouchDevice && (
                <div
                    className={`
                        absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 h-48
                        sm:w-[28rem] sm:h-64 md:w-[32rem] md:h-72 lg:w-[36rem] lg:h-80
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

            {/* Mobile full-screen popup (always image) */}
            {isTouchDevice && isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={src}
                        alt={label}
                        className="rounded-lg shadow-lg w-11/12 max-h-[90%] object-contain"
                    />
                </div>
            )}
        </span>
    );
}
