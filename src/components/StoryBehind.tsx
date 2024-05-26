"use client";

import { OuterSansBlack, sora } from "@/app/fonts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function StoryBehind() {
	const images = Array.from({ length: 12 }, (_, i) => i + 1);
	const imagesRefArray = useRef<any>({});

	return (
		<div className="bg-primary flex flex-col" id="story">
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
								initial="hidden"
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
					<h1 className="text-6xl font-bold text-white uppercase">
						Here’s The story behind primobots.
					</h1>
					<div className="flex flex-col gap-6 pt-6">
						<div className="flex gap-[80px]">
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
						</div>
						<div className="flex gap-[80px]">
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
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-6 p-4 lg:p-16 pb-16 lg:pb-48 relative overflow-hidden z-0">
				<Image
					src={require(`@/assets/logo.svg`)}
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
