import { motion } from "framer-motion";

interface MapPinProps {
    to: string;
    icon: string;
    label: string;
    top: string | number;
    left: string | number;
    width?: string;
    panTo: (top: number, left: number) => void; // new prop
}

export function CartoonPin({ to, icon, label, top, left, width = '5%', panTo }: MapPinProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent immediate navigation
        if (typeof top === "number" && typeof left === "number") {
            panTo(left, top); // notice left, top order (x, y)
        }
        setTimeout(() => window.location.href = to, 500)
    };

    return (
        <div
            onClick={handleClick}
            className="absolute z-30 cursor-pointer group"
            style={{
                top: typeof top === "number" ? `${top}%` : top,
                left: typeof left === "number" ? `${left}%` : left,
                width,
                transform: "translate(-50%, -50%)",
            }}
        >
            <motion.div
                whileTap={{ scale: 1.4, rotate: 10, boxShadow: "0px 0px 20px 5px rgba(255,255,255,0.6)" }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                    duration: 2.0,
                }}
                className="w-full h-full flex items-center justify-center"
            >
                <img
                    src={icon}
                    alt={label}
                    className="group-hover:scale-110 transition-transform duration-300 w-full"
                />
            </motion.div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
            </div>
        </div>
    );
}
