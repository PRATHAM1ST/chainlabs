"use client";
import Header from "@/components/Header";
import HeroModel from "./sections/HeroModel";
import StoryBehind from "./sections/StoryBehind";
import TaglineAndStats from "./sections/TaglineAndStats";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
	return (
		<ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
			<main className="bg-primary-background">
				<Header
					links={[
						{ href: "#story", label: "STORY" },
						{ href: "/", label: "UTILITY" },
						{ href: "/", label: "ROADMAP" },
						{ href: "/", label: "TEAM" },
						{ href: "/", label: "FAQ" },
					]}
				/>
				<HeroModel />
				<TaglineAndStats />
				<StoryBehind />
			</main>
		</ReactLenis>
	);
}
