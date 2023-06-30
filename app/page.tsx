import { Button } from "../components/ui/Button";

export default function Page() {
	return (
		<>
			<div className="pt-16 sm:grid:grid-cols-2">
				<div>
					<p className="text-4xl font-medium tracking-tight">
						Hi, I'm <span className="font-bold">Nick Costello</span>
					</p>
					<p className="mt-2">
						A software engineer building{" "}
						<span className="underline underline-offset-4 decoration-red-500">
							reliable
						</span>
						,{" "}
						<span className="underline underline-offset-4 decoration-green-500">
							cost-effective
						</span>
						,{" "}
						<span className="underline underline-offset-4 decoration-blue-500">
							fun-to-use
						</span>{" "}
						systems that scale.
					</p>
					<div className="mt-4">
						{/* <Button variant="primary" text="Hire me" /> */}
						{/* <div className="mt-2"> */}
						<a href="/about">
							<Button variant="primary" text="Learn more" />
						</a>
						{/* </div> */}
					</div>
				</div>
			</div>
		</>
	);
}
