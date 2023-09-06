import Image from "next/image";

const Product = () => {
	return (
		<div className="w-full bg-[#FCE8D1] p-4">
			<div className="max-w-[1200px] m-auto">
				<div className="text-3xl mb-[64px] nt-">ВАМ К НАМ ЕСЛИ</div>
				<div className="w-full flex flex-wrap flex-col md:flex-row gap-4  justify-between m-auto mb-[80px]">
					<div className="flex flex-row justify-start align-start gap-8">
						<div className="font-bold text-5xl">01</div>
						<div
							className="h-[172px] w-[200px] bg-no-repeat bg-center bg-contain py-2"
							style={{ backgroundImage: "url(/flag.svg)" }}
						>
							<div className="ml-[12px] text-2xl font-bold leading-tight">
								у вас есть
								<br /> идея
								<br /> стартапа,
								<span className="text-lg font-normal leading-[1px]">
									но вы
									<br />
									не знаете, как её
									<br /> реализовать
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-start align-start gap-8">
						<div className="font-bold text-5xl">02</div>
						<div
							className="h-[172px] w-[200px] bg-no-repeat bg-center bg-contain py-2"
							style={{ backgroundImage: "url(/flag.svg)" }}
						>
							<div className="ml-[12px] text-2xl font-bold leading-tight">
								у вас есть
								<br /> стартап,
								<span className="text-lg font-normal leading-[1px]">
									но он
									<br />
									неэффективный <br />и хочется довести его до успеха
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-start align-start gap-8">
						<div className="font-bold text-5xl">03</div>
						<div
							className="h-[172px] w-[200px] bg-no-repeat bg-center bg-contain py-2"
							style={{ backgroundImage: "url(/flag.svg)" }}
						>
							<div className="ml-[12px] text-2xl font-bold leading-tight">
								у вас ещё нет
								<br /> чёткой идеи
								<br />
								<span className="text-lg font-normal leading-[1px]">
									стартапа, но есть огромное желание его создать
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex  flex-col md:flex-row gap-4 md:gap-0 justify-between">
					<div className="md:max-w-[35%] flex flex-col gap-[40px] justify-center">
						<div>
							<h3 className="text-3xl mb-[8px]">вожатые:</h3>
							<p>
								команда из бизнес-аналитиков, product-менеджеров, маркетологов,
								дизайнеров и no/low code разработчиков.
							</p>
						</div>
						<div>
							<h3 className="text-3xl mb-[8px]">участники:</h3>
							<p>
								все, кто устал вынашивать IT-идеи в своей голове и хочет их
								реализовать.
							</p>
						</div>
					</div>
					<div className=" flex-col align-center justify-center items-center hidden md:flex">
						<div className=" aspect-square h-[24px] w-[24px] rounded-full bg-[#000000]"></div>
						<div className="h-full w-[2px] bg-[#000000]"></div>
						<div className="aspect-square h-[24px] w-[24px] rounded-[100px] bg-[#000000]"></div>
					</div>
					<div className="md:max-w-[45%] flex flex-col gap-[40px] justify-center">
						{/* <div>
							<p>старт</p>
							<h3 className="lg:text-6xl text-5xl font-bold">17/07/2023</h3>
	</div> */}
						<p className="text-3xl">
							Ровно за 1 месяц превратим вашу идею IT-продукта в готовый
							работающий проект.
						</p>
						{/* <div>
							<p>финиш</p>
							<h3 className="lg:text-6xl text-5xl font-bold">17/08/2023</h3>
						</div> */}
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
					<div className="flex flex-col">
						<Image
							width={"365"}
							height={421}
							src={"/mib.png"}
							alt={"Man on skate flying"}
						/>
					</div>
					<h3 className="md:text-6xl  text-5xl font-bold md:max-w-[60%] mt-[240px]">
						Всё как в настоящем лагере — душевно, сплоченно, весело.
						<br /> Но в нашем ещё и{" "}
						<span className="underline italic">эффективно!</span>
					</h3>
				</div>
			</div>
			<div className="relative bottom-0 left-0">
				<Image height={298} width={488} src={"/kids.png"} alt={"Funny kids"} />
			</div>
		</div>
	);
};

export default Product;
