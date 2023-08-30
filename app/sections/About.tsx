const About = () => {
	return (
		<div className="max-w-[1200px] p-4 m-auto flex flex-col justify-center align-center items-center py-[48px] gap-8">
			<h1 className="text-9xl font-bold">IT MY HUB.</h1>
			<p className="text-3xl text-center">
				холдинг компаний, объединяющий IT и digital-cпециалистов с целью
				внедрения <b>продуктового подхода</b> в любой стартап и бизнес
			</p>
			<div className="flex flex-row flex-wrap justify-start md:justify-center align-center italic font-light my-24 gap-y-16">
				<div className="flex flex-row gap-4 items-center align-center justify-center md:w-1/3">
					<div className="h-[24px] w-[24px] bg-black rounded-[24px]" />
					<p className="text-2xl">
						ведем проекты,
						<br /> начиная с идеи
					</p>
				</div>
				<div className="flex flex-row gap-4 items-center align-center justify-center md:w-1/3">
					<div className="h-[24px] w-[24px] bg-black rounded-[24px]" />
					<p className="text-2xl">
						сотрудничаем
						<br /> с инвесторами
					</p>
				</div>
				<div className="flex flex-row gap-4 items-center align-center justify-center md:w-1/3">
					<div className="h-[24px] w-[24px] bg-black rounded-[24px]" />
					<p className="text-2xl">
						работаем с разными
						<br /> тематиками
					</p>
				</div>
				<div className="flex flex-row gap-4 items-center align-center justify-center md:w-1/3">
					<div className="h-[24px] w-[24px] bg-black rounded-[24px]" />
					<p className="text-2xl">
						консультируем
						<br /> по бухгалтерским
						<br /> и юридическим вопросам
					</p>
				</div>
				<div className="flex flex-row gap-4 items-center align-center justify-center md:w-1/3">
					<div className="h-[24px] w-[24px] bg-black rounded-[24px]" />
					<p className="text-2xl">
						оказываем
						<br /> коммерческую
						<br /> помощь в реализации <br /> проектов
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
