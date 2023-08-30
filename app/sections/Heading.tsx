"use client";

import Button from "../components/Button";
import Headline from "../components/heading";
interface HeadingProps {
	popupControl: () => void;
}
const Heading: React.FC<HeadingProps> = ({ popupControl }) => {
	return (
		<div
			className="h-[100vh] w-full bg-cover bg-center mt-[100px]"
			style={{ backgroundImage: "url(/heading.webp)" }}
		>
			<div className="h-5/6 w-12/12 md:w-11/12 flex flex-col justify-center items-center md:items-end">
				<div className="mt-[120px] relative after:p-16 after:content-[''] md:p-16 p-4 after:top-0 after:left-0 after:w-full after:h-full after:bg-[#55E639]/80 after:block after:absolute after:blur-md">
					<div className="z-10 relative m-auto">
						<Headline
							text={"STARTUP ЛАГЕРЬ"}
							size={6}
							heading={3}
							color={"white"}
							weight={"bold"}
						/>
						<p className="text-white text-3xl">
							запусти свой стартап за 1 месяц
							<br /> на базе акселератора стартапов
							<br /> IT MY HUB
						</p>
						<div className="w-full mt-4 flex justify-end">
							<div
								className="h-[32px] w-[120px]"
								style={{ backgroundImage: "url(/arrow.svg)" }}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="m-auto w-64">
				<Button
					color="black"
					type={"fill"}
					label={"Хочу с вами"}
					onClick={popupControl}
				/>
			</div>
		</div>
	);
};

export default Heading;
