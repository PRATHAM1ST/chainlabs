"use client";
import Image from "next/image";
import { OuterSansOutline } from "../app/fonts";
import { useState } from "react";

type TaglineAndStatsProps = {};

export default function TaglineAndStats(props: TaglineAndStatsProps) {
	const [counter, setCounter] = useState(0);
	return (
		<div className="flex flex-col items-center justify-start w-full h-fit uppercase gap-4">
			<h1 className="text-6xl text-primary text-bold">
				fully 3D-ReADY Primobots
			</h1>
			<h1
				className={`text-6xl ${OuterSansOutline.className} text-primary`}
			>
				A story-driven Web3 brand.
			</h1>
			<div className="flex gap-6 justify-center items-center">
				<h1>555/5555 MINTED</h1>
				<div className="flex gap-4 justify-center items-center">
					<button
						onClick={() => setCounter(counter ? counter - 1 : 0)}
						className="text-xl text-primary outline h-8 w-8 leading-4"
					>
						-
					</button>
					<h1 className="text-xl text-primary w-6 text-center">
						{counter}
					</h1>
					<button
						onClick={() => setCounter(counter + 1)}
						className="text-xl text-primary outline h-8 w-8 leading-4"
					>
						+
					</button>
				</div>
				<button className="text-xl text-primary-background bg-primary px-4 py-1">
					MINT NOW
				</button>
				<h1>0.044 ETH</h1>
			</div>

			<Image
				src={require("@/assets/images/section2.png")}
				alt="primobots"
				width={1980}
				height={require("@/assets/images/section2.png").height}
                className="w-full h-fit px-10"
			/>
		</div>
	);
}
