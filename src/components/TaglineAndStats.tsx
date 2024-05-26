"use client";
import Image from "next/image";
import { OuterSansOutline } from "../app/fonts";
import { useState } from "react";
import { Button } from "@/stories/LiveButton";

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
					<Button
						onClick={() => setCounter(counter ? counter - 1 : 0)}
						square
						label="-"
					/>
					<h1 className="text-xl text-primary w-6 text-center">
						{counter}
					</h1>
					<Button
						onClick={() => setCounter(counter + 1)}
						square
						label="+"
					/>
				</div>
				<Button 
					primary
					label="MINT NOW"
				/>
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
