import Flag from "../components/Flag";

const Projects = () => {
	return (
		<div className="max-w-[1200px] m-auto p-4">
			<div className="flex flex-col md:flex-row">
				<div className="flex flex-col md:flex-row flex-wrap justify-center gap-[16px]">
					<Flag
						color={"#FCE8D1"}
						headline={"iMidas"}
						text={"сервис для продажи и залога вещей"}
					/>
					<Flag
						color={"#55E639"}
						headline={"Club500"}
						text={"инвестиционная площадка в рамках мобильного приложения"}
					/>
					<Flag
						color={"#55E639"}
						headline={"ASSET"}
						text={"мобильное приложение для жителей коттеджного поселка"}
					/>
					<Flag
						color={"#55E639"}
						headline={"AM Capital"}
						text={"мобильное приложение для инвестиционной платформы"}
					/>
					<Flag
						color={"#55E639"}
						headline={"Everdance"}
						text={"приложение для обучения танцам и похудения"}
					/>
				</div>
				<div className="flex flex-col gap-4 align-center justify-end">
					<div className="h-[24px] w-[24px] bg-black rounded-[24px]" />
					<p className="text-4xl">
						В этих проектах уже <br />
						превращаем цифры <br />
						из бизнес-плана в <b>реальные показатели:</b>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Projects;
