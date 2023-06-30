interface ButtonProps {
	variant: string;
	text: string;
}

export const Button = ({ variant, text }: ButtonProps) => {
	const variants = {
		primary: "bg-blue-500 text-white",
		secondary: "bg-sky-500/20 text-sky-500",
	};

	return (
		<>
			<button
				className={`w-full h-14 rounded-md active:ring-2 active:ring-offset-2 ${variants[variant]} md:w-fit md:px-8`}
			>
				{text}
			</button>
		</>
	);
};
