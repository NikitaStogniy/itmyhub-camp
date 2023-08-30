const RunningImages = () => {
	const images = [
		"1-min.png",
		"2-min.png",
		"3-min.png",
		"4-min.png",
		"5-min.png",
		"6-min.png",
		"7-min.png",
		"8-min.png",
		"9-min.png",

		// Добавьте здесь все необходимые изображения
	];

	return (
		<div className="bg-black mt-[80px] w-full overflow-hidden">
			<div className="marquee ">
				{images.map((image, index) => (
					<img
						key={index}
						src={`/${image}`}
						alt={`Image ${index + 1}`}
						className="marquee-item"
					/>
				))}
			</div>{" "}
		</div>
	);
};

export default RunningImages;
