import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import React from 'react'
import { Mesh } from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
import { TextureLoader } from 'three'
import {ImageModal} from "../../components/ImageModal.tsx";
import ScrollDownButton from "../../components/ScrollDownButton.tsx";

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
                    src="/national/NPM_B-Roll.mp4"
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
                        "Each life has unlimited potential. How you bring out “Nam Myoho Renge Kyo”, brings out your highest human being in."
                        <footer className="mt-2 text-right text-sm not-italic text-white">— Ms.Ishikawa, 2025</footer>
                    </h2>
                </div>
                <ScrollDownButton targetId="content" />
            </div>
            <div className="py-8 sm:mx-60" id="content">
                <div className="flex flex-col w-fit">
                    <h1 className="text-6xl text-center mb-5 px-10 pb-6 border-b-1 border-gray-200">National Palace Museum</h1>
                    <div>
                        <img
                            src="/national/national.jpg"
                            alt="national-picture"
                            className="float-left w-168 h-auto mr-6 mb-4 object-cover rounded-lg"
                        />
                        <p className="sm:text-lg text-justify">
                            The National Palace Museum holds deep cultural significance as it symbolizes the Kuomintang ‘s (KMT) legacy and their arrival to Taiwan.
                            Originally opened in Beijing 1925, and then moved to Taiwan in 1948 due to the Chinese Civil War,
                            this museum contains over 700,000 artifacts. The treasury is now primarily composed of pieces from the imperial collection, showcasing art from various dynasties.
                        </p>
                        <br />
                        <p className="sm:text-lg text-justify">
                                Attracting over three million visitors annually, the exhibit will showcase more than six thousand artifacts at any given time.
                                The original building was built in only one year but renovations over time have expanded the space.
                                As you walk through the main gates, you’re greeted by the classical Chinese architecture style.
                                The first floor consists of a gallery from various dynasties, including rare books and religious sculptures.
                                On the second floor, it displays Chinese ceramics from the Neolithic age, alongside calligraphy, painting, and an interactive video area.
                                The third floor is full of jade, bronzes, and jewelry items such as the “Jadeite Cabbage with Insect”, a jade piece from the Qing dynasty.
                            </p>
                        <br />
                        <p className="sm:text-lg text-justify">
                            “In early times Chinese art often served as a means to submit to the will of heaven through ritual and sacrifice.”
                            Over time, as Chinese Art develops, this idea would change into the idea of metaphysics, where it is an expression of humans trying to understand the forces of reality.
                            Chinese art is rich in symbols with elements of nature having various possible meanings. As seen in the third floor of the National Palace Museum, the many jade pieces symbolizes purity and indestructibility.
                            Another common artwork seen were the orchids, which represent purity and loyalty. As these artifacts were primarily composed for the imperial family and special guests, the artwork was designed to showcase the artist’s craftsmanship and to appease the imperial court.
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
                <div>
                    <h1 className="text-6xl text-center mb-6 px-10 pb-10 border-b-1 border-gray-200">Gallery</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                        <ImageModal src="/national/porcelain.JPG" alt="Porcelain" label="Porcelain"/>
                        <ImageModal src="/national/pork.JPG" alt="Meat-Shaped Stone" label="Meat-Shaped Stone"/>
                        <ImageModal src="/national/infinity.JPG" alt="Infinity Rings" label="Infinity Ring"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
