"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type HeroModelProps = {};

export default function HeroModel(props: HeroModelProps) {
	const Primobot = useGLTF("./models/primobot.gltf");
	return (
		<div className="w-full h-[80vh]">
			<Canvas camera={{ fov: 45, zoom: 1.5, near: 1.3, far: 100 }}>
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={0.5} />
				{/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} /> */}
				<mesh rotation={[0.45, 0.25, 0]}>
					<primitive
						object={Primobot.scene}
						scale={4.5}
						position={[0, -2, 0]}
					/>
				</mesh>
			</Canvas>
		</div>
	);
}
