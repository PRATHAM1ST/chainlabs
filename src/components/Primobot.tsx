/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/primobot.gltf -t 
*/

"use client";

import * as THREE from "three";
import React, { use, useEffect, useRef, useState } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { motion } from "framer-motion-3d";
import { useMotionValue } from "framer-motion";
import { scroll } from "framer-motion";

type GLTFResult = GLTF & {
	nodes: {
		Plane381: THREE.Mesh;
		Plane381_1: THREE.Mesh;
		Circle007: THREE.Mesh;
		Circle007_1: THREE.Mesh;
		Plane069: THREE.Mesh;
		Plane069_1: THREE.Mesh;
		Headeyes_6033: THREE.Mesh;
		Cube029: THREE.Mesh;
	};
	materials: {
		["Jet Black"]: THREE.MeshStandardMaterial;
		["Glowing Yellow"]: THREE.MeshStandardMaterial;
		["Matte Black"]: THREE.MeshStandardMaterial;
		["Bronze OG"]: THREE.MeshStandardMaterial;
		["Matte Magenta"]: THREE.MeshStandardMaterial;
	};
	animations: any[];
};

type ContextType = Record<
	string,
	React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Primobot(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF("/models/primobot.gltf") as GLTFResult;
	const [progress, setProgress] = useState(0);
	const [initialProgressDone, setInitialProgressDone] = useState(false);
	scroll((progress) => setProgress(progress / 10));

	const handleRotate = (progress: number) => {
		if (progress < 0.05) {
			return progress * 130;
		}
		return progress * 180;
	};

	const handleMovementX = (progress: number) => {
		if (progress < 0.05) {
			return progress * 40;
		}
		return 0.05 * 40;
	};

	const handleMovementY = (progress: number) => {
		if (progress < 0.05) {
			return progress - 2;
		}
		return 0.05 - 2 + progress;
	};

	const handleMovementZ = (progress: number) => {
		if (progress < 0.05) {
			return progress;
		}
		return 0.05;
	};

	return (
		// ignore next line ts
		// @ts-ignore: Unreachable code error
		<motion.group
			{...props}
			dispose={null}
			animate={{
				x: handleMovementX(progress),
				y: handleMovementY(progress),
				z: handleMovementZ(progress),
				rotateY: handleRotate(progress),
			}}
			transition={{
				ease: "linear",
			}}
		>
			<motion.directionalLight
				intensity={5}
				position={[-7.163, 10, 7.5]}
			/>
			<motion.directionalLight intensity={2.5} position={[5, 10, 3.79]} />
			<motion.directionalLight
				intensity={1}
				position={[-12.914, 3.31, -11.064]}
			/>
			<OrthographicCamera
				makeDefault={false}
				position={[0, 0.41, 0.963]}
			/>
			<motion.group
				initial={{
					x: 0,
					y: 1,
					z: 0.001,
				}}
				animate={{
					x: 0,
					// y: progress + 0.445,
					y: 0.445,
					z: 0.001,
				}}
				transition={{
					duration: initialProgressDone ? 0.25 : 1,
					onComplete: () => setInitialProgressDone(true),
				}}
				position={[0, 0.445, 0.001]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<mesh
					geometry={nodes.Plane381.geometry}
					material={materials["Jet Black"]}
				/>
				<mesh
					geometry={nodes.Plane381_1.geometry}
					material={materials["Glowing Yellow"]}
				/>
			</motion.group>
			<motion.group
				initial={{
					x: -0.001,
					y: 1,
					z: -0.013,
				}}
				animate={{
					x: -0.001,
					y: progress + 0.505,
					// y: handleMovement(progress),
					z: -0.013,
					rotateY: progress * 30,
					// rotateY: handleRotate(progress),
					scale: progress / 5 + 0.082,
				}}
				transition={{
					duration: initialProgressDone ? 0.25 : 1,
					delay: initialProgressDone ? 0 : 0.2,
				}}
				position={[-0.001, progress + 0.505, -0.013]}
				scale={[0.082, 0.105, 0.082]}
			>
				<mesh
					geometry={nodes.Circle007.geometry}
					material={materials["Matte Black"]}
				/>
				<mesh
					geometry={nodes.Circle007_1.geometry}
					material={materials["Glowing Yellow"]}
				/>
			</motion.group>
			<motion.group
				initial={{
					x: 0,
					y: 0.353,
					z: 1,
				}}
				animate={{
					x: 0,
					y: 0.353,
					// z: progress + 0.115,
					z: 0.115,
				}}
				transition={{
					duration: initialProgressDone ? 0.25 : 1,
				}}
				position={[0, 0.353, progress + 0.115]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[-0.006, 0.006, 0.006]}
			>
				<mesh
					geometry={nodes.Plane069.geometry}
					material={materials["Bronze OG"]}
				/>
				<mesh
					geometry={nodes.Plane069_1.geometry}
					material={materials["Glowing Yellow"]}
				/>
			</motion.group>
			<motion.mesh
				initial={{
					x: 0,
					y: -1,
					z: 0.001,
				}}
				animate={{
					x: 0,
					// y: -progress + 0.445,
					y: 0.445,
					z: 0.001,
				}}
				transition={{
					duration: initialProgressDone ? 0.25 : 1,
				}}
				geometry={nodes.Headeyes_6033.geometry}
				material={materials["Matte Magenta"]}
				position={[0, 0.445, 0.001]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<motion.mesh
				initial={{
					x: -0.001,
					y: 0.418,
					z: 1,
				}}
				animate={{
					x: -0.001,
					y: 0.418,
					// z: progress + 0.092,
					z: 0.092,
				}}
				transition={{
					duration: initialProgressDone ? 0.25 : 1,
				}}
				geometry={nodes.Cube029.geometry}
				material={materials["Glowing Yellow"]}
				position={[-0.001, 0.418, 0.092]}
				rotation={[-0.041, 0, 3.137]}
				scale={[0.021, 0.005, 0.005]}
			/>
		</motion.group>
	);
}

useGLTF.preload("/models/primobot.gltf");
