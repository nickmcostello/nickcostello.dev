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
			<body>
				<div className="px-4">{children}</div>
			</body>
		</html>
	);
}
