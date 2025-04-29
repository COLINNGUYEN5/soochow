import { ReactNode } from "react";
import { motion } from "framer-motion";

type BounceProps = {
    children: ReactNode;
};

export function PinBounce({ children }: BounceProps) {
    return (
        <motion.div
            animate={{
                y: ["0%", "-5%", "0%"],
                rotateZ: ["0deg", "2deg", "-2deg", "0deg"],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            }}
            style={{ display: "inline-block" }}
        >
            {children}
        </motion.div>
    );
}
