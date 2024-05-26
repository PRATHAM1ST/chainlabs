"use client";
import Header from "@/components/Header";
import HeroModel from "@/components/HeroModel";
import TaglineAndStats from "@/components/TaglineAndStats";

export default function Home() {
	return (
		<main className="bg-primary-background">
			<Header
			links={[
				{ href: '/', label: 'STORY' },
				{ href: '/', label: 'UTILITY' },
				{ href: '/', label: 'ROADMAP' },
				{ href: '/', label: 'TEAM' },
				{ href: '/', label: 'FAQ' },
			]}
		/>
			<HeroModel />
			<TaglineAndStats />
		</main>
	);
}
