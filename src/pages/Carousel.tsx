import React from 'react';
import LiquidDistortion from '../components/LiquidDistortion';

const sprites = ['/soochow/front.jpg', '/national/national.jpg', '/soka/soka-front.jpg'];

export default function Carousel() {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <LiquidDistortion
                sprites={['/soochow/front.jpg', '/national/national.jpg', '/soka/soka-front.jpg']}
                displacementImage="/clouds.jpg"
                autoPlaySpeed={[10, 3]}
                displacementSize={[200, 270]}
                distortionIntensity={[40, 40]}
            />
        </div>
    );
}