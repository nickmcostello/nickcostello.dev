interface ButtonProps {
	variant: string;
	text: string;
}

export const Button = ({ variant, text }: ButtonProps) => {
	const variants = {
		primary: "bg-slate-800 text-white",
		secondary: "bg-slate-800/20 text-slate-800",
	};

	return (
		<>
			<button
				className={`w-full h-12 rounded-md ring-slate-500 active:ring-2 active:ring-offset-2 ${variants[variant]} md:w-fit md:px-8`}
			>
				{text}
			</button>
		</>
	);
};
