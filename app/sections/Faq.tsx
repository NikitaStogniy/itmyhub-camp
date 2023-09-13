"use client";

import { useState } from "react";

const Faq = () => {
	const [opened, setOpened] = useState<null | Number>(null);
	const toggle = (index: Number) => {
		if (opened == index) {
			setOpened(null);
		} else {
			setOpened(index);
		}
	};
	const FaqData = [
		{
			question: "Можно ли оплатить участие в лагере в рассрочку?",
			answer: <p>Да, конечно. У нас действует рассрочка от Tinkoff Bank.</p>,
		},
		{
			question: "Могу ли я участвовать, если совсем новичок?",
			answer: (
				<p>
					Для новичков наш лагерь - отличная возможность обучения и погружения
					во все процессы реализации стартапов.
				</p>
			),
		},
		{
			question:
				"Если я не могу приехать в Санкт-Петербург на офлайн-встречи, я могу участвовать в лагере?”",
			answer: (
				<p>
					Участие возможно. Все офлайн-мероприятия будут доступны в записи для
					любого участника лагеря. Но живое общение, энергию и нетворкинг,
					конечно же, это не заменит.
				</p>
			),
		},
		{
			question: "Если я совсем не разбираюсь в IT, мне можно поучаствовать?",
			answer: (
				<p>
					Даже нужно, возможно, лагерь - ваш старт к успешным кейсам и бизнесу в
					IT-сфере.
				</p>
			),
		},
	];
	const accordion = " text-gray-900 text-xl py-4 ease-in-out duration-300";
	const openedAccordion = "h-fit opacity-100 scale-10" + accordion;
	const closedAccordion = "h-1 opacity-0 scale-0" + accordion;
	return (
		<div id="faq">
			<div className="flex flex-col align-center w-full items-center px-4">
				<h3 className="font-light text-3xl w-full text-left py-4 md:py-8 ">
					ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
				</h3>
				<div>
					{FaqData.map((faq, index) => (
						<div
							className="cursor-pointer w-full flex flex-row gap-[16px] items-center  justify-between"
							key={index}
							onClick={() => toggle(index)}
						>
							<div className="max-w-3xl py-4 w-full">
								<div className="font-semibold text-xl ">{faq.question}</div>
								<div
									className={
										opened === index ? openedAccordion : closedAccordion
									}
								>
									{faq.answer}
								</div>

								<hr className="w-full border-black" />
							</div>
							<div className="-mt-10">
								<div className="text-4xl font-light">
									{opened == index ? "-" : "+"}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Faq;
