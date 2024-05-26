"use client";
import Header from "@/components/Header";
import HeroModel from "@/components/HeroModel";
import TaglineAndStats from "@/components/TaglineAndStats";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
	return (
		<ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
			<main className="bg-primary-background">
				<Header
					links={[
						{ href: "/", label: "STORY" },
						{ href: "/", label: "UTILITY" },
						{ href: "/", label: "ROADMAP" },
						{ href: "/", label: "TEAM" },
						{ href: "/", label: "FAQ" },
					]}
				/>
				<HeroModel />
				<TaglineAndStats />
			</main>
		</ReactLenis>
	);
}
