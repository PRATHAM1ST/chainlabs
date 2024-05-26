"use client";
import Image from "next/image";
import {
	OuterSansBlack,
	OuterSansBlackOutline,
	OuterSansOutline,
} from "../app/fonts";
import { useRef, useState } from "react";
import { Button } from "@/stories/LiveButton";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Counter from "./Counter";
import NumberCounter from "./NumberCounter";

type TaglineAndStatsProps = {};

export default function TaglineAndStats(props: TaglineAndStatsProps) {
	const [counter, setCounter] = useState(0);

	function handleCounterIncrement() {
		setCounter(counter + 1);
	}

	return (
		<motion.div
			animate={{
				y: 0,
			}}
			initial={{
				y: 100,
			}}
			transition={{
				duration: 1,
			}}
			className="flex flex-col items-center justify-start w-full h-fit uppercase gap-4 px-4"
		>
			<motion.h1
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 1 }}
				className={twMerge(
					"text-4xl md:text-6xl text-primary text-center",
					OuterSansBlack.className
				)}
			>
				fully 3D-ReADY Primobots
			</motion.h1>
			<motion.div
				className="overflow-hidden"
				whileInView={{
					overflow: "visible",
				}}
			>
				<motion.h1
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					transition={{ duration: 1 }}
					className={twMerge(
						"text-4xl md:text-6xl text-primary text-center",
						OuterSansBlackOutline.className
					)}
				>
					A story-driven Web3 brand.
				</motion.h1>
			</motion.div>
			<div className="flex flex-wrap gap-6 justify-center items-center">
				<h1>
					<NumberCounter from={0} to={555} />
					/5555 MINTED
				</h1>
				<div className="flex gap-4 justify-center items-center relative h-8">
					<Counter />
				</div>
				<Button
					primary
					label="MINT NOW"
					className="text-lg md:text-xl"
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
		</motion.div>
	);
}
