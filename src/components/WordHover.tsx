type WordHoverProps = {
    label: string;
    src: string; // path to image or video
};

export default function WordHover({ label, src }: WordHoverProps) {
    const isVideo = src.match(/\.(mp4|webm|ogg)$/i); // basic file type check

    return (
        <span className="relative group inline-block cursor-pointer">
      <span className="text-blue-500">{label}</span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 h-48 sm:w-[28rem] sm:h-64 md:w-[32rem] md:h-72 lg:w-[36rem] lg:h-80 hidden group-hover:flex items-center justify-center z-50">
        {isVideo ? (
            <video
                src={src}
                autoPlay
                muted
                loop
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
    </span>
    );
}
