import { useEffect, useRef, useState } from 'react';
import { Application } from '@pixi/app';
import { Container } from '@pixi/display';
import { Sprite } from '@pixi/sprite';
import { Texture } from '@pixi/core';
import { DisplacementFilter } from '@pixi/filter-displacement';
import { WRAP_MODES } from '@pixi/constants';
import { Assets } from '@pixi/assets';
import { gsap } from 'gsap';

interface Slide {
    image: string;
    title: string;
    quote: string;
    link?: string;
}

interface LiquidDistortionProps {
    slides: Slide[];
    displacementImage: string;
    autoPlaySpeed?: [number, number];
    displacementSize?: [number, number];
    distortionIntensity?: [number, number];
}

export default function LiquidDistortion({
                                             slides,
                                             displacementImage,
                                             autoPlaySpeed = [10, 3],
                                             displacementSize = [200, 200],
                                             distortionIntensity = [200, 70],
                                         }: LiquidDistortionProps) {
    const canvasRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<Application | null>(null);

    const slidesContainer = useRef<Container | null>(null);
    const spriteRefs = useRef<Sprite[]>([]);
    const displacementSprite = useRef<Sprite | null>(null);
    const displacementFilter = useRef<DisplacementFilter | null>(null);

    const [loaded, setLoaded] = useState(false);
    const [curIndex, setCurIndex] = useState(0);

    // Preload images
    useEffect(() => {
        const preload = async () => {
            const imagePaths = slides.map(slide => slide.image);
            await Assets.load([...imagePaths, displacementImage]);
            setLoaded(true);
        };

        preload();
    }, [slides, displacementImage]);

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

        // Displacement setup
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

        const filter = new DisplacementFilter(dispSprite);
        displacementFilter.current = filter;
        stage.filters = [filter];

        // Add slide sprites
        slides.forEach((slide, index) => {
            const texture = Texture.from(slide.image);

            const texWidth = texture.width || width;
            const texHeight = texture.height || height;
            const scale = Math.max(width / texWidth, height / texHeight);

            const sprite = new Sprite(texture);
            sprite.anchor.set(0.5);
            sprite.x = width / 2;
            sprite.y = height / 2;
            sprite.scale.set(scale);
            sprite.alpha = index === 0 ? 1 : 0;

            spriteRefs.current[index] = sprite;
            container.addChild(sprite);
        });

        // Animate displacement
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
            if (appRef.current) {
                appRef.current.destroy(true, {
                    children: true,
                    texture: true,
                    baseTexture: true,
                });
                appRef.current = null;
            }
            if (canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }
            spriteRefs.current = [];
        };
    }, [loaded, slides, displacementImage, autoPlaySpeed, displacementSize, distortionIntensity]);

    const transitionTo = (index: number) => {
        const current = spriteRefs.current[curIndex];
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

        setCurIndex(index);
    };

    const nextSlide = () => {
        const nextIndex = (curIndex + 1) % slides.length;
        transitionTo(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (curIndex - 1 + slides.length) % slides.length;
        transitionTo(prevIndex);
    };

    return (
        <div className="relative w-full h-screen">
            <div ref={canvasRef} className="absolute inset-0 z-0" />
                <div className="absolute inset-0 z-0 bg-black/40" />
                    <div className="flex flex-col items-center justify-center gap-y-4 group h-full text-white">
                        {slides[curIndex]?.link ? (
                            <a href={slides[curIndex]?.link} className="text-white text-center" target="_blank" rel="noopener noreferrer">
                                <h1 className="font-engravers text-4xl sm:text-6xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110 leading-none">
                                    {slides[curIndex]?.title}
                                </h1>
                                <h2 className="font-[200] font-newsreader sm:text-lg drop-shadow-lg transition-transform duration-300 group-hover:scale-105 leading-none">
                                    “{slides[curIndex]?.quote}”
                                </h2>
                            </a>
                        ) : (
                            <>
                                <h1 className="font-engravers text-4xl sm:text-6xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110 leading-none">
                                    {slides[curIndex]?.title}
                                </h1>
                                <h2 className="font-[200] font-newsreader sm:text-lg drop-shadow-lg transition-transform duration-300 group-hover:scale-105 leading-none">
                                    “{slides[curIndex]?.quote}”
                                </h2>
                            </>
                        )}
                    </div>

            <div className="absolute bottom-12 left-8 z-10 space-x-4">
                <button
                    onClick={prevSlide}
                    className="scene-nav scene-nav--prev px-6 py-3 bg-black/70 text-white uppercase tracking-widest hover:bg-black transition rounded-lg">
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
