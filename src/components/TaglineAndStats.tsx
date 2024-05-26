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
	const [count, setCount] = useState(1);
	const [eth, setEth] = useState(0);
	const topTaglineRef = useRef<HTMLHeadingElement>(null);
	const bottomTaglineRef = useRef<HTMLHeadingElement>(null);
	const topTaglineIsInView = useInView(topTaglineRef);
	const bottomTaglineIsInView = useInView(bottomTaglineRef);

	return (
		<motion.div className="flex flex-col items-center justify-start w-full h-fit uppercase gap-4 px-4">
			<motion.div
				ref={topTaglineRef}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="overflow-hidden"
			>
				<motion.h1
					initial={{ y: 100 }}
					animate={{ y: topTaglineIsInView ? 0 : 100 }}
					transition={{ duration: 1 }}
					className={twMerge(
						"text-4xl md:text-6xl text-primary text-center",
						OuterSansBlack.className
					)}
				>
					fully 3D-ReADY Primobots
				</motion.h1>
			</motion.div>

			<motion.div
				ref={bottomTaglineRef}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="overflow-hidden"
			>
				<motion.h1
					initial={{ y: 100 }}
					animate={{
						y: bottomTaglineIsInView ? 0 : 100,
					}}
					viewport={{ once: true }}
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
					<Counter setCount={setCount} count={count} minValue={1} />
				</div>
				<Button
					primary
					label="MINT NOW"
					className="text-lg md:text-xl"
				/>
				<h1 className="w-32">
					<NumberCounter
						float
						from={eth}
						setCurrentCount={setEth}
						to={0.044 * count}
					/>{" "}
					ETH
				</h1>
			</div>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="overflow-hidden"
			>
				<motion.span
					whileInView={{
						opacity: 1,
						// y: 0,
					}}
					initial={{
						opacity: 0,
						// y: 400
					}}
					transition={{ duration: 1.5 }}
				>
					<Image
						src={require("@/assets/images/section2.png")}
						alt="primobots"
						width={1980}
						height={require("@/assets/images/section2.png").height}
						className="w-full h-fit px-10"
					/>
				</motion.span>
			</motion.div>
		</motion.div>
	);
}
