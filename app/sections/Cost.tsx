import Image from "next/image";
import Button from "../components/Button";
import Faq from "./Faq";

interface CostProps {
	popupControl: () => void;
}

const Cost: React.FC<CostProps> = ({ popupControl }) => {
	return (
		<div className="w-full bg-[#FCE8D1] p-4">
			<div className=" ">
				<div className="flex flex-col justify-between">
					<div className="max-w-[1200px] m-auto text-3xl font-light w-full flex justify-between my-8  flex-col md:flex-row gap-4 md:gap-0">
						<div>формат:</div>
						<div>офлайн + онлайн</div>
					</div>
					<hr className="border-black bg-black" />
					<div className="max-w-[1200px] m-auto text-3xl font-light w-full flex justify-between my-8  flex-col md:flex-row gap-4 md:gap-0">
						<div>стоимость:</div>
						<div className="flex flex-col md:flex-row md:gap-0 gap-4 md:items-center">
							<div className="text-gray-400 mr-4">1 500 000 ₽</div>
							<div className="bg-[#55E639] w-fit px-4 py-2 mr-8">-46%</div>
							<div className="font-bold">800 000 ₽</div>
						</div>
					</div>
					<hr className="border-black bg-black" />
					<div className="max-w-[1200px] m-auto text-3xl font-light w-full flex justify-between my-8 items-center align-center  flex-col md:flex-row gap-4 md:gap-0">
						<div>
							стоимость для первых
							<br /> 3 записавшихся::
						</div>
						<div className="font-bold">400 000 ₽</div>
					</div>
					<hr className="border-black bg-black" />
					<div className="max-w-[1200px] m-auto text-3xl font-light w-full flex justify-between my-8  flex-col md:flex-row gap-4 md:gap-0">
						<div>рассрочка:</div>
						<div>тинькофф</div>
					</div>
					<hr className="border-black bg-black" />
					<div className="max-w-[1200px] m-auto text-3xl font-light w-full flex justify-between my-8 flex-col md:flex-row gap-4 md:gap-0">
						<div>итого:</div>
						<div className="absolute left-0 mt-[14%] hidden md:block">
							<Image
								width={"670"}
								height={600}
								src={"/cost.png"}
								alt={"Man on skate flying"}
							/>
						</div>
						<div className="flex  flex-col md:flex-row  gap-16  hidden md:flex">
							<div className="flex flex-col align-center justify-center items-center">
								<div className="min-h-[24px] w-[24px] rounded-[24px] bg-[#000000]"></div>
								<div className="h-full w-[2px] bg-[#000000]"></div>
								<div className="min-h-[24px] w-[24px] rounded-[24px] bg-[#000000]"></div>
								<div className="h-full w-[2px] bg-[#000000]"></div>
								<div className="min-h-[24px] w-[24px] rounded-[24px] bg-[#000000]"></div>
								<div className="h-full w-[2px] bg-[#000000]"></div>
								<div className="min-h-[24px] w-[24px] rounded-[24px] bg-[#000000]"></div>
								<div className="h-full w-[2px] bg-[#000000]"></div>
								<div className="min-h-[24px] w-[24px] rounded-[24px] bg-[#000000]"></div>
								<div className="h-full w-[2px] bg-[#000000]"></div>
								<div className="min-h-[24px] w-[24px] rounded-[24px] bg-[#000000]"></div>
								<div className="h-full w-[2px] bg-[#000000]"></div>
								<div
									className="min-h-[24px] w-[64px] bg-contain bg-no-repeat -mr-8"
									style={{ backgroundImage: "url(/flag.svg)" }}
								/>
								<div className="h-full w-[2px] bg-[#000000]"></div>
								<div
									className="min-h-[24px] w-[64px] bg-contain bg-no-repeat -mr-8"
									style={{ backgroundImage: "url(/flag.svg)" }}
								/>
								<div className="h-full w-[2px] bg-[#000000]"></div>
								<div
									className="min-h-[24px] w-[64px] bg-contain bg-no-repeat -mr-8"
									style={{ backgroundImage: "url(/flag.svg)" }}
								/>
							</div>
							<div className="flex flex-col gap-[16px]">
								<p className="text-lg">
									<b>мощное комьюнити</b> IT-предпринима
									<br />
									-телей и лидеров рынка
								</p>
								<p className="text-lg">
									<b>плотный нетворкинг</b> <br />с единомышленниками
								</p>
								<p className="text-lg">
									<b>
										подробный обучающий материал <br />и лекции
									</b>
								</p>
								<p className="text-lg">
									много <b>личной практики</b>
									<br /> <b>и командной работы</b>
								</p>
								<p className="text-lg">
									<b>
										сопровождение на каждом этапе
										<br /> нашими опытными сотрудниками
									</b>
								</p>
								<p className="text-lg">
									<b>полное погружение</b> во все этапы
									<br /> реализации стартапа
								</p>
								<p className="text-lg italic underline">
									<b>
										воплощение своей идеи в успешный
										<br /> стартап и прибыльный бизнес
									</b>
								</p>
								<p className="text-lg">
									<b>
										возможность получения startup
										<br />
										-визы
									</b>{" "}
									(с этим готовым проектом) во
									<br /> многие страны мира
								</p>
								<p className="text-lg">
									<b>экономия 700 000 ₽</b>
								</p>
							</div>
						</div>
					</div>

					<div className="max-w-[1200px] m-auto text-3xl font-light w-full flex justify-end my-8">
						<div className="w-[478px]">
							<Button
								onClick={popupControl}
								type={"fill"}
								label={"Занять место в лагере"}
								color="black"
							/>
						</div>
					</div>
					<div className="max-w-[1200px] m-auto text-3xl font-light w-full flex justify-start my-8 mb-[120px]">
						<Faq />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cost;
