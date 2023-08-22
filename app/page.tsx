import Link from "next/link";
import { Button } from "../components/ui/Button";

export default function Page() {
	return (
		<div className="selection:bg-indigo-300 selection:text-indigo-800 md:flex md:justify-center">
			<div className="pt-8 m-auto flex flex-col space-y-6 text-slate-800 md:max-w-lg md:items-center">
				<div className="flex flex-col space-y-4">
					<p>
						<span className="font-bold">I'm Nick</span>, a software engineer
						from Langhorne, Pennsylvania.
					</p>
					<p>
						I create products that deliver excellent user and developer
						experiences.
					</p>
					<p>
						I believe that <span className="italic">great software</span> is
						built on the back of{" "}
						<span className="underline underline-offset-4">focus</span>,{" "}
						<span className="underline underline-offset-4">intentionality</span>
						, and{" "}
						<span className="underline underline-offset-4">persistence</span>.
						Software is <span className="font-bold">not</span> naturally great.
					</p>
				</div>
				<div className="flex flex-col space-y-2">
					<Link href={"mailto:nick@nickcostello.dev"}>
						<Button text="Contact me" variant="primary" />
					</Link>

					<Link href={"/about"}>
						<Button text="Learn more" variant="secondary" />
					</Link>
				</div>
			</div>
		</div>
	);
}
