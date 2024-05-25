import HeroModel from "../components/HeroModel";
import TaglineAndStats from "../components/TaglineAndStats";
import Header from "../stories/Headering";

export default function Home() {
	return (
		<main className="bg-primary-background">
			<Header />
			{/* <HeroModel /> */}
			<TaglineAndStats />
		</main>
	);
}
