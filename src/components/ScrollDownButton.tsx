type ScrollDownButtonProps = {
    targetId: string;
    label?: string;
};

export default function ScrollDownButton({ targetId, label = "↓" }: ScrollDownButtonProps) {
    const handleClick = () => {
        const target = document.getElementById(targetId);
        target?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <button
            onClick={handleClick}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce bg-white/80 text-black px-4 py-2 rounded-full shadow-lg hover:bg-white transition"
        >
            {label}
        </button>
    );
}
