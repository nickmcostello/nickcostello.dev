import Image from "next/image";
import { QuestionMark } from "../svg/QuestionMark";

type PreviewProps = {
	title: string;
};

export const Preview = ({ title }: PreviewProps) => {
	return (
		<>
			<article className="group w-full">
				<figure className="group h-60 radius-xl drop-shadow-md overflow-hidden flex items-center justify-center rounded-xl from-transparent to-slate-100 bg-gradient-to-t">
					<QuestionMark className="transition group-hover:scale-125 ease-in-out" />
				</figure>
				<p className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight group-hover:underline group-hover:underline-offset-4">
					{title}
				</p>
			</article>
		</>
	);
};
