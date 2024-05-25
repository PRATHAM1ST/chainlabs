import { Inter, Oooh_Baby } from 'next/font/google'
import localFont from "next/font/local";

export const OuterSans = localFont({
	src: "../assets/fonts/OuterSansRegular.otf",
	weight: "400",
});

// export const gotham = localFont({
// 	src: "../Assets/gotham.otf",
// 	weight: "400",
// });

export const inter = Inter({ subsets: ['latin'] })
export const oooh_baby = Oooh_Baby({ subsets: ['latin'], weight: "400" })