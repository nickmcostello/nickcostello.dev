import Link from "next/link";
import { Preview } from "../../components/blog/Preview";

export default function Page() {
	return (
		<>
			<div className="flex flex-col space-y-2 w-full text-slate-800">
				<h1>Blog</h1>
				<p>I write words.</p>
				<div className="pt-4 grid grid-cols-1">
					<Link href={"/blog/test"}>
						<Preview title="The Quick Brown Fox Jumps Over The Lazy Dog" />
					</Link>
				</div>
			</div>
		</>
	);
}
