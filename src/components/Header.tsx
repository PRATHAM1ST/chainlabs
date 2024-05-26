"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type HeaderProps = {
	links: {
		href: string;
		label: string;
	}[];
};

export default function Header(props: HeaderProps) {
	const [mobileMenu, setMobileMenu] = useState(false);
	return (
		<motion.div className="overflow-hidden">
			<motion.header
				animate={{ y: 0 }}
				exit={{ y: -110 }}
				initial={{ y: -110 }}
				transition={{ duration: 0.5 }}
				className="max-w-[1154px] p-8 px-16 mx-auto bg-primary text-primary-background flex justify-between items-center flex-wrap clip-pathing-header"
			>
				<div className="flex gap-2">
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
				</div>

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
						<motion.div
							key={link.label}
							initial={{ y: -100 }}
							animate={{ y: 0 }}
							transition={{
								duration: 0.5,
								delay: 1 + index * 0.1,
							}}
						>
							<Link key={link.label} href={link.href}>
								{link.label}
							</Link>
						</motion.div>
					))}
					<motion.div
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						transition={{
							duration: 0.5,
							delay: 1 + props.links.length * 0.1,
						}}
					>
						<Image
							src={require("@/assets/social.svg")}
							alt="Social"
							width={20}
							height={20}
						/>
					</motion.div>
					<motion.div
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						transition={{
							duration: 0.5,
							delay: 1 + (props.links.length + 1) * 0.1,
						}}
					>
						<Image
							src={require("@/assets/twitter.svg")}
							alt="Social"
							width={20}
							height={20}
						/>
					</motion.div>
					<motion.div
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						transition={{
							duration: 0.5,
							delay: 1 + (props.links.length + 2) * 0.1,
						}}
					>
						<Image
							src={require("@/assets/instagram.svg")}
							alt="Social"
							width={20}
							height={20}
						/>
					</motion.div>
				</div>
			</motion.header>
		</motion.div>
	);
}
