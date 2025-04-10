import { ReactNode, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

type BounceProp = {
    children: ReactNode;
};

export function PinBounce({ children }: BounceProp) {
    const ref = useRef<Group>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (ref.current) {
            ref.current.position.y = Math.sin(t * 2) * 0.2;
            ref.current.rotation.z = Math.sin(t * 1.5) * 0.02;
        }
    });

    return <group ref={ref}>{children}</group>;
}
