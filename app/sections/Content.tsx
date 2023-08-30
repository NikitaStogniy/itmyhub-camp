const Content = () => {
	return (
		<div
			className="w-full bg-[#FCE8D1] pt-[48px] pb-[344px] bg-contain bg-no-repeat bg-bottom p-4"
			style={{ backgroundImage: "url(/concept-bg-min.png)" }}
		>
			<div className="max-w-[1200px] m-auto">
				<div className="text-3xl mb-[64px]">ПРОГРАММА ЛАГЕРЯ</div>
				<div className="grid grid-cols-2 md:grid-cols-6 gap-0">
					<div className="p-4 bg-[#55E639] col-span-2">
						<p className="font-bold text-6xl">01</p>
						<p>
							<span className="font-bold">Лекции</span> об IT-стартапах,
							венчуре, CustDev, быстром тестировании гипотез, MVP, экономике
							стартапов и др.
						</p>
					</div>
					<div className="p-4 bg-[#ffffff]">
						<p className="font-bold text-6xl">02</p>
						<p>
							<span className="font-bold">Заряженные</span> офлайн-встречи и
							выступления <span className="font-bold">успешных фаундеров</span>
						</p>
					</div>
					<div />
					<div className="p-4 bg-[#000000] text-white">
						<p className="font-bold text-6xl">03</p>
						<p>
							Создание <span className="font-bold">проектной группы</span>
						</p>
					</div>
					<div className="p-4 bg-[#000000] text-white">
						<p className="font-bold text-6xl">04</p>
						<p>
							Мозговой штурм по идее{" "}
							<span className="font-bold">вашего стартапа</span>
						</p>
					</div>
					{/* First row ends */}
					<div className="p-4 bg-[#ffffff]">
						<p className="font-bold text-6xl">05</p>
						<p>
							Описание идеи в{" "}
							<span className="font-bold">подробном backlog</span>
						</p>
					</div>
					<div className="col-span-2" />
					<div className="p-4 bg-[#55E639] col-span-2">
						<p className="font-bold text-6xl">06</p>
						<p>
							Определение <span className="font-bold">целевой аудитории</span>{" "}
							вашего продукта
						</p>
					</div>
					<div className="p-4 bg-[#ffffff]/0">
						<p className="font-bold text-6xl">07</p>
						<p>
							Изучение <span className="font-bold">спроса,</span> анализ{" "}
							<span className="font-bold">конкурентов</span> и{" "}
							<span className="font-bold">рынка</span>
						</p>
					</div>
					{/* Second row ends */}
					<div className="col-span-2" />
					<div className="p-4 bg-[#000000] text-white">
						<p className="font-bold text-6xl">08</p>
						<p>Финансовое моделирование</p>
					</div>
					<div className="p-4 bg-[#55E639]">
						<p className="font-bold text-6xl">09</p>
						<p>
							<span className="font-bold">Работающий MVP</span> на no/low code
						</p>
					</div>
					<div className="p-4 bg-[#55E639]/0">
						<p className="font-bold text-6xl">10</p>
						<p>
							<span className="font-bold">Безбюджетный</span> маркетинг вашего
							продукта
						</p>
					</div>
					<div className="p-4 bg-[#ffffff]">
						<p className="font-bold text-6xl">11</p>
						<p>
							Описание проекта в{" "}
							<span className="font-bold">подробный RoadMap</span>
						</p>
					</div>
					{/* Third row ends */}
					<div className="p-4 bg-[#55E639] col-span-2">
						<p className="font-bold text-6xl">12</p>
						<p>
							<span className="font-bold">Нетворкинг</span> c единомышленниками
							и <span className="font-bold">лучшими спикерами</span> в нашем
							IT-доме в Санкт-Петербурге
						</p>
					</div>
					<div className="p-4 bg-[#000000] text-white col-span-2">
						<p className="font-bold text-6xl">13</p>
						<span className="font-bold">Выпускной</span> с презентацией вашего
						проекта и рождением{" "}
						<span className="font-bold">собственного IT-продукта</span> как{" "}
						<span className="font-bold">прибыльного бизнеса</span>
					</div>
					{/* Forth row ends */}
				</div>
			</div>
		</div>
	);
};

export default Content;
