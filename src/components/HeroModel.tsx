"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function HeroModel() {
	const Primobot = useGLTF("./models/primobot.gltf");
	return (
		<div className="w-full h-[80vh]">
			<Canvas camera={{ fov: 45, zoom: 1.5, near: 1.3, far: 100 }}>
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={0.5} />
				{/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} /> */}
				<primitive object={Primobot.scene} scale={3.5} position={[0, -1.5, 0]}/>
			</Canvas>
		</div>
	);
}
