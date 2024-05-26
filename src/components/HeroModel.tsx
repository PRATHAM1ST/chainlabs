"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Primobot } from "./Primobot";
import { LayoutCamera, MotionCanvas, motion } from "framer-motion-3d";
import { MotionConfig, useMotionValue } from "framer-motion";

type HeroModelProps = {};

export default function HeroModel(props: HeroModelProps) {
	const [modelClicked, setModelClicked] = useState(false);
	const [mouseX, mouseY] = [useMotionValue(0), useMotionValue(0)];

	return (
		<div className="w-full h-[80vh]">
			<Canvas
				camera={{ fov: 45, zoom: 1.5, near: 1.3, far: 100 }}
				onPointerMove={(e) => {
					mouseX.set(e.clientX / 30 - 23);
					mouseY.set(-e.clientY / 30 + 12);
				}}
				onPointerUp={() => setModelClicked(false)}
			>
				<OrbitControls enableZoom={false} enabled={modelClicked} />
				{/* <motion.pointLight
					whileHover={{
						x: mouseX.get(),
						y: mouseY.get(),
					}}
					intensity={0.5}
					position={[0, 0, 5]}
				/> */}
				<motion.pointLight
					intensity={1}
					color={"white"}
					position={[mouseX, mouseY, 2]}
					castShadow={true}
				/>
				<motion.mesh
					// whileHover={{
					// 	// scale: 1.05,
					// 	rotate: [mouseX.get(), mouseY.get(), 0]
					// }}
					initial={{
						scale: 2,
					}}
					animate={{
						scale: 1,
					}}
					transition={{
						duration: 1,
					}}
					// rotation={[mouseX, mouseY, 0]}
					rotation={[0.45, 0.35, 0]}
				>
					<Primobot
						scale={4.5}
						position={[0, -2, 0]}
						onClick={() => setModelClicked(true)}
						onPointerUp={() => setModelClicked(false)}
					/>
				</motion.mesh>
			</Canvas>
		</div>
	);
}
