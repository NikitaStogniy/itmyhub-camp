interface HeadlineProps {
	text: React.ReactNode;
	size: 1 | 2 | 3 | 4 | 5 | 6;
	heading: 1 | 2 | 3;
	color: "black" | "white";
	weight: "light" | "bold";
}

const Headline: React.FC<HeadlineProps> = ({
	text,
	size,
	color,
	weight,
	heading,
}) => {
	let classNames = "";
	if (weight == "light") {
		classNames += " font-light ";
	} else {
		classNames += " font-bold ";
	}
	if (color == "black") {
		classNames += " text-black ";
	} else {
		classNames += " text-white ";
	}
	if (size == 1) {
		classNames += " text-xl ";
	} else if (size == 2) {
		classNames += " text-2xl ";
	} else if (size == 3) {
		classNames += " text-3xl ";
	} else if (size == 4) {
		classNames += " text-4xl ";
	} else if (size == 5) {
		classNames += " text-5xl ";
	} else if (size == 6) {
		classNames += " text-6xl ";
	}
	switch (heading) {
		case 1:
			return <h1 className={classNames}>{text}</h1>;
		case 2:
			return <h2 className={classNames}>{text}</h2>;
		case 3:
			return <h3 className={classNames}>{text}</h3>;
	}
	return <div></div>;
};

export default Headline;
