import { Link } from "react-router-dom";

interface MapPinProps {
    to: string;
    icon: string;
    label: string;
    top: string | number; // percent or px
    left: string | number; // percent or px
    width?: string; // optional pin width, default to '5%'
}

export function CartoonPin({ to, icon, label, top, left, width = '5%' }: MapPinProps) {
    return (
        <Link to={to}>
            <div
                className="absolute z-30 cursor-pointer group"
                style={{
                    top: typeof top === "number" ? `${top}%` : top,
                    left: typeof left === "number" ? `${left}%` : left,
                    width,
                    transform: "translate(-50%, -50%)",
                }}
            >
                <img
                    src={icon}
                    alt={label}
                    className="group-hover:scale-110 transition-transform duration-200 w-full"
                />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                </div>
            </div>
        </Link>
    );
}
