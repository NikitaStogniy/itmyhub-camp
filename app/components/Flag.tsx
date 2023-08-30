"use client";

import { useState } from "react";

interface FlagProps {
	color: string;
	headline: string;
	text: string;
}

const Flag: React.FC<FlagProps> = ({ color, headline, text }) => {
	const [isShown, setIsShown] = useState(false);
	return (
		<div className="h-[200px] w-[190px] flex justify-center items-center align-center w-auto mb-[16px] ">
			<svg
				className={`absolute hover:fill-black ease-in-out duration-200`}
				style={isShown ? { fill: "#000000" } : { fill: color }}
				width="160"
				height="192"
				viewBox="0 0 160 192"
				xmlns="http://www.w3.org/2000/svg"
				onMouseEnter={() => setIsShown(true)}
				onMouseLeave={() => setIsShown(false)}
			>
				<path d="M160 192V0L0 0V192L79.5556 149.818L160 192Z" />
			</svg>
			<div className="pointer-events-none z-10 p-4 text-center center">
				{isShown ? (
					<p className="max-w-[190px] p-4 text-white text-md font-light mb-[18px]">
						{text}
					</p>
				) : (
					<p className="w-[190px] text-xl font-bold">{headline}</p>
				)}
			</div>
		</div>
	);
};

export default Flag;
