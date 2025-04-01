import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import React from 'react'
import { Mesh } from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
import { TextureLoader } from 'three'

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
            <img
                src="/national.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <div className="flex flex-col w-fit py-10 mx-40">
                <h1 className="text-6xl mb-6">National Palace Museum</h1>
                <div>
                    <img
                        src="/national.jpg"
                        alt="national-picture"
                        className="float-left w-168 h-auto mr-6 mb-4 object-cover"
                    />
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus
                        sapien ut lorem egestas, non ultrices nunc cursus. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Proin finibus sapien ut lorem egestas,
                        non ultrices nunc cursus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Proin finibus sapien ut lorem egestas, non ultrices nunc
                        cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                        finibus sapien ut lorem egestas, non ultrices nunc cursus. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Proin finibus sapien ut
                        lorem egestas, non ultrices nunc cursus. finibus sapien ut lorem egestas, non ultrices nunc cursus. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Proin finibus sapien ut
                        lorem egestas, non ultrices nunc cursus.   finibus sapien ut lorem egestas, non ultrices nunc cursus. Lorem ipsum
                    </p>
                </div>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus
                    sapien ut lorem egestas, non ultrices nunc cursus. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Proin finibus sapien ut lorem egestas,
                    non ultrices nunc cursus. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Proin finibus sapien ut lorem egestas, non ultrices nunc
                    cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                    finibus sapien ut lorem egestas, non ultrices nunc cursus. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Proin finibus sapien ut
                    lorem egestas, non ultrices nunc cursus. finibus sapien ut lorem egestas, non ultrices nunc cursus. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Proin finibus sapien ut
                    lorem egestas, non ultrices nunc cursus.   finibus sapien ut lorem egestas, non ultrices nunc cursus. Lorem ipsum
                </p>
            </div>

            <div className="flex justify-center gap-x-4">
                <div className="flex justify-center items-center w-[30%] h-auto aspect-4/3">
                    <Canvas camera={{ position: [0, 0.30, 0.45], fov: 90 }} style={{ background: "black" }}>
                        <directionalLight position={[0, 2, 1]} intensity={1} />
                        <ambientLight color={0xfcfcfc} intensity={0.3} />
                        <ElephantModel />
                    </Canvas>
                </div>

                <div className="flex justify-center items-center w-[30%] h-auto aspect-4/3">
                    <Canvas camera={{ position: [0, 0.4, 0.5], fov: 90 }} style={{ background: "black" }}>
                        <directionalLight position={[0, 2, 1]} intensity={1} />
                        <ambientLight color={0xfcfcfc} intensity={0.3} />
                        <DogModel />
                    </Canvas>
                </div>
            </div>

        </div>
    )
}
