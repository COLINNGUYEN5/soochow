import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import React from 'react'
import { Mesh } from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
import { TextureLoader } from 'three'
import {ImageModal} from "../../components/ImageModal.tsx";
import ScrollDownButton from "../../components/ScrollDownButton.tsx";
import Footnote from "../../components/Footnote.tsx";
import WordHover from "../../components/WordHover.tsx";

function ElephantModel() {

    // Load Model and Texture
    const mtl = useLoader(MTLLoader, '/models/Elephant/Elephant.mtl')
    const obj = useLoader(OBJLoader, '/models/Elephant/Elephant.obj', (loader) => {
        mtl.preload()
        loader.setMaterials(mtl)
    })

    const diffuseTexture = useLoader(TextureLoader, '/models/Elephant/tex_u1_v1_diffuse.jpg')
    const normalTexture = useLoader(TextureLoader, '/models/Elephant/tex_u1_v1_normal.jpg')

    const applyTextures = (obj: any) => {
        obj.traverse((child: any) => {
            if (child.isMesh) {
                child.material.map = diffuseTexture
                child.material.normalMap = normalTexture
            }
        })
    }

    if (obj) {
        applyTextures(obj)
    }

    // Animation
    const elephantRef = React.useRef<Mesh>(null)

    useFrame((_state, delta) => {
        if (elephantRef.current) {
            if (elephantRef)
                elephantRef.current.rotation.y += delta * 0.1
        }
    })

    return (
        <primitive
            object={obj}
            ref={elephantRef}
            position={[0, 0, 0]}
            rotation={[0, - 2 * Math.PI / 3, 0]}
        />
    )
}

function DogModel() {

    // Load Model and Texture
    const mtl = useLoader(MTLLoader, '/models/Dog/BetterDog.mtl')
    const obj = useLoader(OBJLoader, '/models/Dog/BetterDog.obj', (loader) => {
        mtl.preload()
        loader.setMaterials(mtl)
    })

    const diffuseTexture = useLoader(TextureLoader, '/models/Dog/tex_u1_v1_diffuse.jpg')
    const normalTexture = useLoader(TextureLoader, '/models/Dog/tex_u1_v1_normal.jpg')

    const applyTextures = (obj: any) => {
        obj.traverse((child: any) => {
            if (child.isMesh) {
                child.material.map = diffuseTexture
                child.material.normalMap = normalTexture
            }
        })
    }

    if (obj) {
        applyTextures(obj)
    }

    // Animation
    const dogRef = React.useRef<Mesh>(null)

    useFrame((_state, delta) => {
        if (dogRef.current) {
            if (dogRef)
                dogRef.current.rotation.y += delta * 0.1
        }
    })

    return (
        <primitive
            object={obj}
            ref={dogRef}
            position={[0, 0, 0]}
            rotation={[0, - 2 * Math.PI / 3, 0]}
        />
    )
}



export default function National() {
    return (
        <div className="overflow-auto">
            <div className="relative w-full h-full overflow-hidden rounded-b shadow">
                <video
                    src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/NPM_B-Roll.mp4"
                    autoPlay
                    muted
                    loop
                    disablePictureInPicture
                    className="w-full h-full rounded shadow object-cover"
                >
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4">
                    <h1 className="text-white font-engravers text-4xl sm:text-6xl drop-shadow-lg text-center px-4">
                        National Palace Museum
                    </h1>
                    <h2 className="text-white font-[200] font-newsreader sm:text-lg drop-shadow-lg text-center px-4">
                        "If you want to keep power and authority, you must have a culture to be associated with."
                        <footer className="mt-2 text-right text-sm not-italic text-white">— Marissa Hu, 2025</footer>
                    </h2>
                </div>
                <ScrollDownButton targetId="content" />
            </div>
            <div className="py-12 sm:mx-60" id="content">
                <div className="flex flex-col w-fit">
                    <div>
                        <figure className="w-[50%] float-left mr-10">
                            <img
                                src="/national/national.jpg"
                                alt="Front Gate of National Palace Museum"
                                className="w-full h-auto mr-6 mb-4 object-cover rounded-lg"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Front Entrance of the National Palace Museum, photographed April 10
                            </figcaption>
                        </figure>
                        <p className="sm:text-lg text-justify">
                            The team has had the opportunity to visit the National Palace Museum (NPM) on several occasions, and during each visit,
                            there was always something new that we had previously missed. Before we entered inside, we were greeted with a grand white gate,
                            which led to a staircase up to the main building. Inside the museum, there were over 700,000 artifacts for the team to explore,
                            primarily composed of pieces from the imperial collection, which showcases the art from various dynasties
                            <Footnote number={1} href="https://www.smithsonianmag.com/sponsored/taipeis-national-palace-museum-180951157/" tooltip="Source: Magazine, n.d."/>
                            .
                        </p>
                        <br />
                        <p className="sm:text-lg text-justify">
                            The team took a tour of the NPM with
                            {' '}
                            <WordHover label="Marissa Hu" src="/collection/marissa.jpg" />
                            {' '}
                            , a volunteer tour guide for English speakers for the NPM.
                            She guided us through each floor, providing us the historical significance and symbolism of each artifact.
                            The first floor consists of a gallery from various dynasties, including rare books and religious sculptures. On the second floor,
                            it displays Chinese ceramics from the Neolithic age, alongside calligraphy, painting, and an interactive video area.
                            The third floor is full of jade, bronzes, and jewelry items such as the “Jadeite Cabbage with Insect”, a jade piece from the Qing dynasty.
                            Unfortunately when we visited, the famous jade cabbage piece wasn’t on display.
                            However, the
                            {' '}
                            <WordHover label="meat stone" src="/national/pork.JPG" />
                            {' '}
                            meat stone
                            was, which was the team’s favorite artwork as it closely resembled a piece of pork belly.
                            </p>
                        <br />
                        <figure className="w-[47%] float-right ml-15">
                            <img
                                src="/national/tea.JPG"
                                alt="Traditional Tea Cup"
                                className="w-full h-auto object-cover rounded mb-2"
                            />
                            <figcaption className="text-sm text-center text-gray-600">
                                Traditional Chinese Tea Cup, photographed April 10
                            </figcaption>
                        </figure>
                        <p className="sm:text-lg text-justify">
                            We noticed that a considerable number of visitors were tourists, interested in learning the history of Chinese culture.
                            The team found out that the NPM attracts over 3,000,000 visitors annually. This observation aligned with the interviews the team had conducted with local residents,
                            who stated that the NPM was one of the main reasons for the urbanization of the Shilin District.
                        </p>
                        <br/>
                        <p className="sm:text-lg text-justify">
                            There are a lot of mixed feelings about urbanization and how it is affecting the Shilin District. On one hand, people like Marissa Hu,
                            love all the tourists and culture that NPM brings. She is able to utilize the resources for her love in calligraphy in the NPM and being able to share the culture to many different people.
                            However there are people like
                            {' '}
                            <WordHover label="Chief Guo" src="/collection/chief.jpg" />
                            , where he had fond memories of this area and how urbanization and the construction of the NPM has gotten rid of the aboriginal history here.
                            Chief Guo used to know people that lived where the NPM is currently located at, but people from the government had forced them to move to build the NPM.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center gap-x-4 pb-10">
                    <div className="flex flex-col justify-center items-center w-[50%] h-auto aspect-4/3">
                        <Canvas camera={{ position: [0, 0.30, 0.45], fov: 90 }} style={{ background: "white" }}>
                            <directionalLight position={[0, 2, 1]} intensity={1} />
                            <ambientLight color={0xfcfcfc} intensity={0.3} />
                            <ElephantModel />
                        </Canvas>
                        <p className="text-justify">18th century, Qing dynasty AD1701-1800</p>
                        <p className="text-justify">Zun in the form of an elephant of peace</p>
                    </div>

                    <div className="flex flex-col justify-center items-center w-[50%] h-auto aspect-4/3">
                        <Canvas camera={{ position: [0, 0.4, 0.5], fov: 90 }} style={{ background: "white" }}>
                            <directionalLight position={[0, 2, 1]} intensity={1} />
                            <ambientLight color={0xfcfcfc} intensity={0.3} />
                            <DogModel />
                        </Canvas>
                        <p className="text-justify">18th century, Qing dynasty AD1701-1800</p>
                        <p className="text-justify">Zun in the form of an elephant of peace</p>
                    </div>
                </div>
                <div className="sm:text-lg text-end p-0 m-0">
                    <span
                        onClick={() => window.open('https://maps.app.goo.gl/PsaqqJqQzhhW6rgr6', '_blank')}
                        className="text-blue-500 underline cursor-pointer">No. 221, Sec 2, Zhi Shan Rd, Shilin District, Taipei City, 111
                    </span>
                </div>
                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/national/national.jpg" alt="Front Entrance of the National Palace Museum" label="Front Entrance of the National Palace Museum"/>
                        <ImageModal src="/national/tea.JPG" alt="Traditional Chinese Tea Cup" label="Traditional Chinese Tea Cup"/>
                        <ImageModal src="/national/pork.JPG" alt="Meat-Shaped Stone" label="Meat-Shaped Stone"/>
                        <ImageModal src="/national/infinity.JPG" alt="Jade Tri-Rings" label="Jade Tri-Rings"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
