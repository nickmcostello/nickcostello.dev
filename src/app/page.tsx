import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "700"]
})

export default function Home() {
	return (
		<>
			<div className="flex justify-center items-center">
				<div className="flex flex-col gap-16 px-8 py-12 max-w-2xl">
					<p className={`${inter.className} font-bold text-2xl`}>Nick Costello</p>
					<div className="flex flex-col gap-4">
						<p>
							I&apos;m a developer living in Langhorne, PA.
						</p>
						<p>
							Today I work on electronic trading systems at <a href="https://www.bloomberg.com/professional" target="_blank" className="text-blue-500 underline underline-offset-2 hover:text-blue-700">Bloomberg</a>. Previously I worked at <a href="https://www.xfinity.com/overview" target="_blank" className="text-blue-500 underline underline-offset-2 hover:text-blue-700">Comcast</a> and <a href="https://www.oracle.com/health/" target="_blank" className="text-blue-500 underline underline-offset-2 hover:text-blue-700">Oracle</a>.
						</p>
					</div>
					<div className={`${inter.className} text-gray-500 text-sm`}>
						<p>© 2024 Nick Costello.</p>
					</div>
				</div>
			</div>
		</>
	);
}
