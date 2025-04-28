import { useEffect, useRef, useState } from 'react';
import { Application } from '@pixi/app';
import { Container } from '@pixi/display';
import { Sprite } from '@pixi/sprite';
import { Texture } from '@pixi/core';
import { DisplacementFilter } from '@pixi/filter-displacement';
import { WRAP_MODES } from '@pixi/constants';
import { Assets } from '@pixi/assets'; // ✅ Pixi assets loader
import { gsap } from 'gsap';

interface LiquidDistortionProps {
    sprites: string[];
    displacementImage: string;
    autoPlaySpeed?: [number, number];
    displacementSize?: [number, number];
    distortionIntensity?: [number, number];
}

export default function LiquidDistortion({
                                             sprites,
                                             displacementImage,
                                             autoPlaySpeed = [10, 3],
                                             displacementSize = [200, 200],
                                             distortionIntensity = [200, 70],
                                         }: LiquidDistortionProps) {
    const canvasRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<Application | null>(null);

    const curIndex = useRef(0);
    const slidesContainer = useRef<Container | null>(null);
    const spriteRefs = useRef<Sprite[]>([]);
    const displacementSprite = useRef<Sprite | null>(null);
    const displacementFilter = useRef<DisplacementFilter | null>(null);

    const [loaded, setLoaded] = useState(false);

    // ✅ Step 1: Preload images first
    useEffect(() => {
        const preload = async () => {
            await Assets.load([...sprites, displacementImage]);
            setLoaded(true); // ✅ Mark as ready
        };

        preload();
    }, [sprites, displacementImage]);

    // ✅ Step 2: Create Pixi App only after loaded
    useEffect(() => {
        if (!loaded || !canvasRef.current) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        const canvas = document.createElement('canvas');
        canvasRef.current.appendChild(canvas);

        const app = new Application({
            view: canvas,
            width,
            height,
            backgroundAlpha: 0,
        });

        appRef.current = app;
        const stage = app.stage;

        const container = new Container();
        slidesContainer.current = container;
        stage.addChild(container);

        // Displacement Sprite
        const dispTexture = Texture.from(displacementImage);
        const dispSprite = new Sprite(dispTexture);
        dispSprite.texture.baseTexture.wrapMode = WRAP_MODES.REPEAT;

        dispSprite.width = width;
        dispSprite.height = height;
        dispSprite.anchor.set(0.5);
        dispSprite.x = width / 2;
        dispSprite.y = height / 2;

        displacementSprite.current = dispSprite;
        stage.addChild(dispSprite);

        displacementFilter.current = new DisplacementFilter(dispSprite);
        stage.filters = [displacementFilter.current];

        // Main sprites
        sprites.forEach((src, index) => {
            const texture = Texture.from(src);

            const texWidth = texture.width || window.innerWidth;
            const texHeight = texture.height || window.innerHeight;
            const scale = Math.max(window.innerWidth / texWidth, window.innerHeight / texHeight);

            const sprite = new Sprite(texture);
            sprite.anchor.set(0.5);
            sprite.x = width / 2;
            sprite.y = height / 2;
            sprite.scale.set(scale);
            sprite.alpha = index === 0 ? 1 : 0;

            spriteRefs.current[index] = sprite;
            container.addChild(sprite);
        });

        app.ticker.add(() => {
            if (displacementSprite.current) {
                displacementSprite.current.x += autoPlaySpeed[0] * 0.3;
                displacementSprite.current.y += autoPlaySpeed[1] * 0.3;
                displacementSprite.current.scale.set(
                    displacementSize[0] / 100,
                    displacementSize[1] / 100
                );

                if (displacementFilter.current) {
                    displacementFilter.current.scale.set(
                        distortionIntensity[0],
                        distortionIntensity[1]
                    );
                }
            }
        });

        return () => {
            // ✅ Full cleanup
            if (appRef.current) {
                appRef.current.destroy(true, { children: true, texture: true, baseTexture: true });
                appRef.current = null;
            }
            if (canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }
            spriteRefs.current = [];
            curIndex.current = 0;
        };
    }, [loaded, sprites, displacementImage, autoPlaySpeed, displacementSize, distortionIntensity]);

    // ✅ Transition Animations
    const transitionTo = (index: number) => {
        const current = spriteRefs.current[curIndex.current];
        const next = spriteRefs.current[index];

        if (!current || !next || !displacementFilter.current) return;

        gsap.timeline()
            .to(displacementFilter.current.scale, {
                x: distortionIntensity[0],
                y: distortionIntensity[1],
                duration: 0.6,
            })
            .to(current, { alpha: 0, duration: 0.5 }, 0.2)
            .to(next, { alpha: 1, duration: 0.5 }, 0.2)
            .to(displacementFilter.current.scale, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
            });

        curIndex.current = index;
    };

    const nextSlide = () => {
        const total = sprites.length;
        const nextIndex = (curIndex.current + 1) % total;
        transitionTo(nextIndex);
    };

    const prevSlide = () => {
        const total = sprites.length;
        const prevIndex = (curIndex.current - 1 + total) % total;
        transitionTo(prevIndex);
    };

    return (
        <div className="relative w-full h-screen">
            <div ref={canvasRef} className="absolute inset-0 z-0" />
            <div className="absolute bottom-8 left-8 z-10 space-x-4">
                <button
                    onClick={prevSlide}
                    className="scene-nav scene-nav--prev px-6 py-3 bg-black/70 text-white uppercase tracking-widest hover:bg-black transition rounded-lg"
                >
                    Prev
                </button>
                <button
                    onClick={nextSlide}
                    className="scene-nav scene-nav--next px-6 py-3 bg-black/70 text-white uppercase tracking-widest hover:bg-black transition rounded-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
