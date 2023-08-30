import { Metadata } from "next";
import { Inter } from "next/font/google";

import "./global.css";

export const metadata: Metadata = {
	title: "Nick Costello",
	description: "My personal website.",
};

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<body className="selection:bg-indigo-300 selection:text-indigo-800">
				<div className="py-8 px-4 md:flex md:justify-content">{children}</div>
			</body>
		</html>
	);
}
