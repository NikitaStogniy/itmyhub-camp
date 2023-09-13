const Footer = () => {
	const links = [
		{ text: "Главная", link: "#" },
		{ text: "О лагере", link: "#camp" },
		{ text: "Программа", link: "#program" },
		{ text: "Экспертность", link: "#expert" },
		{ text: "Стоимость", link: "#price" },
		{ text: "Вопросы", link: "#faq" },
	];
	return (
		<div className="bg-black p-20 w-full text-white/40 flex justify-between flex-col md:flex-row">
			<div className="flex flex-col md:flex-row gap-16">
				<div className="text-white text-4xl font-bold">
					<div className=" md:-rotate-90 md:mt-14">ITMYHUB</div>
				</div>
				<ul className="md:-ml-10 mb-4">
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
			<div className="flex flex-col justify-between">
				<div className="flex flex-col">
					<a href="#">Политика конфеденциальности</a>
					<a href="#">Публичная оферта </a>
				</div>
				<div className="flex flex-col">
					<a href="mailto:sales@itmyhub.ru">sales@itmyhub.ru</a>
					<p>© 2023</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
