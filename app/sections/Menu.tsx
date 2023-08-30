"use client";

import { useState } from "react";
import Button from "../components/Button";

const Menu = () => {
	const links = [
		{ text: "Главная", link: "#" },
		{ text: "О лагере", link: "#" },
		{ text: "Программа", link: "#" },
		{ text: "Экспертность", link: "#" },
		{ text: "Стоимость", link: "#" },
		{ text: "Вопросы", link: "#" },
	];
	const [open, setOpen] = useState(Boolean);
	const handleOpen = () => {
		console.log("open");
		if (!open) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	};
	return (
		<div className="fixed flex-col z-50 w-full bg-black backdrop-blur-sm">
			<div className={open ? "bg-white" : ""}>
				<div className="m-auto px-8 max-w-[1250px] py-8 flex flex-row justify-between w-full align-center items-center px-4">
					<div className="text-5xl font-light text-white ">ITMYHUB</div>
					<ul className="hidden lg:flex flex flex-row gap-8 xl:gap-8">
						{links.map((link) => (
							<li key={link.text}>
								<a
									className="text-gray-400 ease-in-out duration-300 hover:text-gray-600"
									href={link.link}
								>
									{link.text}
								</a>
							</li>
						))}
					</ul>

					<div className="z-100 block lg:hidden">
						<Button onClick={() => handleOpen()} type={"menu"} label={""} />
					</div>
					<div className="hidden lg:block">
						<Button type={"outline"} label={"Присоединиться"} />
					</div>
				</div>
				{open && (
					<div className="block lg:hidden bg-white h-fit rounded-xl w-full">
						<ul className="flex flex-col items-center gap-2  py-4">
							{links.map((link) => (
								<li key={link.text}>
									<a
										className="text-gray-400 ease-in-out duration-300 hover:text-gray-600"
										href={link.link}
									>
										{link.text}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};
export default Menu;
