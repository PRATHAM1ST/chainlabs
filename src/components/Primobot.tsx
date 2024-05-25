/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/primobot.gltf -t 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane381: THREE.Mesh
    Plane381_1: THREE.Mesh
    Circle007: THREE.Mesh
    Circle007_1: THREE.Mesh
    Plane069: THREE.Mesh
    Plane069_1: THREE.Mesh
    Headeyes_6033: THREE.Mesh
    Cube029: THREE.Mesh
  }
  materials: {
    ['Jet Black']: THREE.MeshStandardMaterial
    ['Glowing Yellow']: THREE.MeshStandardMaterial
    ['Matte Black']: THREE.MeshStandardMaterial
    ['Bronze OG']: THREE.MeshStandardMaterial
    ['Matte Magenta']: THREE.MeshStandardMaterial
  }
  animations: any[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Primobot(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/primobot.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <directionalLight intensity={5}  position={[-7.163, 10, 7.5]} />
      <directionalLight intensity={2.5} position={[5, 10, 3.79]} />
      <directionalLight intensity={1} position={[-12.914, 3.31, -11.064]} />
      <OrthographicCamera makeDefault={false} position={[0, 0.41, 0.963]} />
      <group position={[0, 0.445, 0.001]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Plane381.geometry} material={materials['Jet Black']} />
        <mesh geometry={nodes.Plane381_1.geometry} material={materials['Glowing Yellow']} />
      </group>
      <group position={[-0.001, 0.505, -0.013]} scale={[0.082, 0.105, 0.082]}>
        <mesh geometry={nodes.Circle007.geometry} material={materials['Matte Black']} />
        <mesh geometry={nodes.Circle007_1.geometry} material={materials['Glowing Yellow']} />
      </group>
      <group position={[0, 0.353, 0.115]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.006, 0.006, 0.006]}>
        <mesh geometry={nodes.Plane069.geometry} material={materials['Bronze OG']} />
        <mesh geometry={nodes.Plane069_1.geometry} material={materials['Glowing Yellow']} />
      </group>
      <mesh geometry={nodes.Headeyes_6033.geometry} material={materials['Matte Magenta']} position={[0, 0.445, 0.001]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube029.geometry} material={materials['Glowing Yellow']} position={[-0.001, 0.418, 0.092]} rotation={[-0.041, 0, 3.137]} scale={[0.021, 0.005, 0.005]} />
    </group>
  )
}

useGLTF.preload('/models/primobot.gltf')