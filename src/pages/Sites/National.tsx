import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Mesh } from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
import { TextureLoader } from 'three'

function Box(props: any) {
    const meshRef = React.useRef<Mesh>(null)
    const [hovered, setHover] = React.useState(false)
    const [active, setActive] = React.useState(false)

    useFrame((state, delta) => {
        if (meshRef.current) {
            if (!hovered) {
                meshRef.current.rotation.y += delta
            }
        }
    })

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)} >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

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

    useFrame((state, delta) => {
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

export default function National() {
    return (
        <div className="overflow-auto">
            <img
                src="/national.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center items-center py-10 gap-y-10">
                <h1 className="text-6xl font-bold">National Palace Museum (國立故宮博物院)</h1>

                <div className="flex flex-col md:flex-row gap-x-48">
                    <div className="w-124 h-fit place-self-center">
                        <img src="/national-map.png" alt="profile-picture" className="h-84 w-full object-cover" />
                        <div className="text-center py-2 bg-white shadow-md">
                            <p className="mb-2">
                                Dr. Mi Chienkuo
                            </p>
                            <p className="font-medium">
                                Dean of the School of Liberal Arts and Social Sciences
                            </p>
                        </div>
                    </div>

                    <div className="w-124 h-fit place-self-center">
                        <img src="/national.jpg" alt="national-picture" className="h-84 w-full object-cover" />
                        <div className="text-center py-2 bg-white shadow-md">
                            <p className="mb-2">
                                Dr. Mi Chienkuo
                            </p>
                            <p className="font-medium">
                                Dean of the School of Liberal Arts and Social Sciences
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center h-screen py-10 gap-y-10"
                style={{
                    width: '40%',
                    height: 'auto',
                    aspectRatio: '4/3',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto'
                }}>
                <Canvas camera={{ position: [0, 0.4, 0.5], fov: 90 }} style={{ background: "black" }}>
                    <directionalLight position={[0, 2, 1]} intensity={1} />
                    <ambientLight color={0xfcfcfc} intensity={0.3} />
                    <ElephantModel />
                </Canvas>
            </div>

            <div className="flex justify-center items-center h-screen py-10 gap-y-10"
                style={{
                    width: '40%',
                    height: 'auto',
                    aspectRatio: '4/3',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto'
                }}>
                <Canvas camera={{ position: [0, 0.4, 0.5], fov: 90 }} style={{ background: "black" }}>
                    <directionalLight position={[0, 2, 1]} intensity={1} />
                    <ambientLight color={0xfcfcfc} intensity={0.3} />
                    <Box />
                </Canvas>
            </div>

        </div>
    )
}
