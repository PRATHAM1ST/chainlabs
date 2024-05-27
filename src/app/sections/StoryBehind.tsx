"use client";

import { OuterSansBlack, sora } from "@/app/fonts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useRef } from "react";

function splitStringusingRegex(inputstring: string): string[] {
	const characters: string[] = [];
	const regex = /[\s\S]/gu;

	let match;
	while ((match = regex.exec(inputstring)) !== null) {
		if (match[0]) {
			characters.push(match[0]);
		}
	}
	return characters;
}

export default function StoryBehind() {
	const headingOfSection = splitStringusingRegex(
		"Here’s The story behind primobots."
	);

	const images = Array.from({ length: 12 }, (_, i) => i + 1);
	const imagesRefArray = useRef<any>({});

	return (
		<div className="bg-primary flex flex-col overflow-hidden" id="story">
			<div className="flex flex-col lg:flex-row p-2">
				<div className="grid grid-cols-3 h-fit lg:w-[40%] gap-2">
					{images.map((_, i) => (
						<div
							className="overflow-hidden"
							key={i}
							ref={(elem) => {
								imagesRefArray.current[i] = elem;
							}}
						>
							<motion.div
								initial={{
									scale: 0,
									opacity: 0,
								}}
								whileInView={{
									scale: 1,
									opacity: 1,
								}}
								viewport={{ once: true }}
								transition={{ duration: 1 }}
							>
								<Image
									src={require(
										`@/assets/images/section3/${i + 1}.png`
									)}
									height={300}
									width={300}
									alt="Story Behind"
									className="aspect-square w-full h-full object-cover"
								/>
							</motion.div>
						</div>
					))}
				</div>
				<div className="p-4 lg:w-[60%] lg:p-16">
					<motion.h1 className="text-4xl lg:text-6xl font-bold text-white uppercase">
						{
							// Splitting the string into characters
							headingOfSection.map((char, index) => (
								<motion.span
									key={index}
									initial={{ opacity: 0, y: 100 }}
									viewport={{ once: true }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 1,
										delay: index * 0.1,
									}}
									className={twMerge(
										"text-4xl lg:text-6xl font-bold text-white uppercase",
										OuterSansBlack.className
									)}
								>
									{char}
								</motion.span>
							))
						}
						{/* Here’s The story behind primobots. */}
					</motion.h1>
					<motion.div className="flex flex-col gap-6 pt-6">
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className="flex gap-[80px]"
						>
							<h3
								className={twMerge(
									"text-white text-3xl",
									OuterSansBlack.className
								)}
							>
								2033
							</h3>
							<p
								className={twMerge(
									"text-white lg:text-2xl font-thin w-[60%]",
									sora.className
								)}
							>
								Two creators known by their initials, BP and IV,
								made great strides in the field of A.I. humanoid
								robots that could help humans in their
								day-to-day life. These robots, named Primobots,
								were intended to protect families and make their
								lives at home easier.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className="flex gap-[80px]"
						>
							<h3
								className={twMerge(
									"text-white text-3xl",
									OuterSansBlack.className
								)}
							>
								2035
							</h3>
							<p
								className={twMerge(
									"text-white lg:text-2xl font-thin w-[60%]",
									sora.className
								)}
							>
								The public loved Primobots when they saw videos
								of how they could help humans. Wanting to
								achieve their vision of having one of these in
								every home, BP and IV demoed these to Void Sci,
								a tech company they wanted to partner with. Void
								Sci bought their tech and signed a royalty deal
								with the two creators.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
			<div className="flex flex-col gap-6 p-4 lg:p-16 pb-16 lg:pb-48 relative overflow-hidden z-0">
				<Image
					src={require(`@/assets/svgs/logo.svg`)}
					alt="Primobots Logo"
					className="fill-secondary absolute right-0 top-0 translate-x-[25%] opacity-25 lg:opacity-100 -z-10"
					height={300}
					width={300}
				/>
				<p
					className={twMerge(
						"text-white text-2xl font-thin lg:w-[60%]",
						sora.className
					)}
				>
					What were once 500,000 militarized, menacing Primobots are
					now reduced to only 5,555 demilitarized, friendly Primobots.
				</p>

				<h1
					className={twMerge(
						"text-secondary text-5xl lg:text-6xl uppercase lg:w-[70%]",
						OuterSansBlack.className
					)}
				>
					So...what will you do with your primobot?
				</h1>
			</div>
		</div>
	);
}
