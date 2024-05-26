"use client";

import { delay, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type HeaderProps = {
	links: {
		href: string;
		label: string;
	}[];
};

export default function Header(props: HeaderProps) {
	const [mobileMenu, setMobileMenu] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref);
	return (
		<motion.div className="overflow-hidden" ref={ref}>
			<motion.header
				animate={{
					y: isInView ? 0 : -110,
					clipPath: isInView
						? "polygon(0 0, 100% 0%, 97% 100%, 3% 100%)"
						: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
				}}
				initial={{
					y: -110,
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
				}}
				transition={{
					duration: 0.5,
					clipPath: { delay: 1, duration: 1 },
				}}
				className="max-w-[1154px] p-8 px-16 mx-auto bg-primary text-primary-background flex justify-between items-center flex-wrap clip-pathing-header"
			>
				<motion.div
					initial={{
						position: "absolute",
						left: "50%",
						x: "-50%",
					}}
					animate={{
						position: "relative",
						left: "0",
						x: 0,
					}}
					transition={{ duration: 1, delay: 1 }}
					
				>
					<Link href="/" className="flex gap-2">
						<Image
							src={require("@/assets/logo.svg")}
							alt="Logo"
							width={30}
							height={30}
						/>

						<Image
							src={require("@/assets/logo-text.svg")}
							alt="Logo"
							width={100}
							height={50}
						/>
					</Link>
				</motion.div>
				<div
					className="flex md:hidden"
					onClick={() => setMobileMenu(!mobileMenu)}
				>
					{/* <Image
						src={require("@/assets/menu.svg")}
						alt="Menu"
						width={20}
						height={20}
					/> */}
					menu
				</div>

				<div
					className={twMerge(
						"hidden md:flex justify-center items-center gap-6 flex-wrap",
						mobileMenu ? "flex mt-4" : "hidden"
					)}
				>
					{props.links.map((link, index) => (
						<Link key={link.label} href={link.href}>
							<motion.div
								key={link.label}
								initial={{ y: -100 }}
								animate={{ y: 0 }}
								transition={{
									duration: 0.5,
									delay: 1.5 + index * 0.1,
								}}
							>
								{link.label}
							</motion.div>
						</Link>
					))}
					<Link href="/">
						<motion.div
							initial={{ y: -100 }}
							animate={{ y: 0 }}
							transition={{
								duration: 0.5,
								delay: 1.5 + props.links.length * 0.1,
							}}
						>
							<Image
								src={require("@/assets/social.svg")}
								alt="Social"
								width={20}
								height={20}
							/>
						</motion.div>
					</Link>
					<Link href="/">
						<motion.div
							initial={{ y: -100 }}
							animate={{ y: 0 }}
							transition={{
								duration: 0.5,
								delay: 1.5 + (props.links.length + 1) * 0.1,
							}}
						>
							<Image
								src={require("@/assets/twitter.svg")}
								alt="Social"
								width={20}
								height={20}
							/>
						</motion.div>
					</Link>
					<Link href="/">
						<motion.div
							initial={{ y: -100 }}
							animate={{ y: 0 }}
							transition={{
								duration: 0.5,
								delay: 1.5 + (props.links.length + 2) * 0.1,
							}}
						>
							<Image
								src={require("@/assets/instagram.svg")}
								alt="Social"
								width={20}
								height={20}
							/>
						</motion.div>
					</Link>
				</div>
			</motion.header>
		</motion.div>
	);
}
