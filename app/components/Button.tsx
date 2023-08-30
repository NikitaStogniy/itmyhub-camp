"use client";

import { HambergerMenu } from "iconsax-react";

interface ButtonProps {
	type: "fill" | "outline" | "menu";
	label: string;
	color?: "white" | "black" | "green";
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ type, label, color, onClick }) => {
	let classVar =
		"w-fit px-[28px] py-[12px] rounded-xl  text-sm font-medium ease-in-out duration-300 flex flex-row gap-[8px] flex-row whitespace-nowrap flex-nowrap";
	if (type == "fill" && color == "black") {
		classVar +=
			" shadow-2xl w-full bg-black text-white flex justify-center hover:font-bold w-auto hover:bg-gray-700";
	} else if (type == "fill" && color == "white") {
		classVar +=
			" shadow-2xl shadow-white/30 bg-white text-gray-800 hover:shadow-white/90 ";
	} else if (type == "fill" && color == "green") {
		classVar +=
			" shadow-2xl shadow-white/30 bg-[#0D4A42] text-white hover:shadow-[#0D4A42]/90 ";
	} else if (type == "outline") {
		classVar +=
			" border border-[#55E639] text-[#55E639] hover:bg-[#55E639] hover:text-black";
	}

	return (
		<button onClick={onClick} className={classVar}>
			{type == "menu" ? <HambergerMenu size={24} color="#0D4A42" /> : ""}
			{label}
		</button>
	);
};
export default Button;
