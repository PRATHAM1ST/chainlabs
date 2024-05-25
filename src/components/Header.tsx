import Image from "next/image";
import Link from "next/link";

type HeaderProps = {};

export default function Header(props: HeaderProps) {
	return (
		<header className="max-w-[1154px] p-8 px-16 mx-auto bg-primary text-primary-background flex justify-between items-center clip-pathing-header">
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

			<div className="flex justify-center items-center gap-6">
				<Link href="/">STORY</Link>
				<Link href="/">UTILITY</Link>
				<Link href="/">ROADMAP</Link>
				<Link href="/">TEAM</Link>
				<Link href="/">FAQ</Link>
				<Image
					src={require("@/assets/social.svg")}
					alt="Social"
					width={20}
					height={20}
				/>
				<Image
					src={require("@/assets/twitter.svg")}
					alt="Social"
					width={20}
					height={20}
				/>
				<Image
					src={require("@/assets/instagram.svg")}
					alt="Social"
					width={20}
					height={20}
				/>
			</div>
		</header>
	);
}
