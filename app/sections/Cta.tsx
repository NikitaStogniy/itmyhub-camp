const Cta = () => {
	return (
		<div
			className="w-full min-h-[500px] bg-cover text-white font-bold text-6xl p-4"
			style={{ backgroundImage: "url(/cta.png)" }}
		>
			<div className="max-w-[1200px] m-auto mt-[80px]">
				остались вопросы?
				<br />
				напишите нам — <br />
				<span className="underline italic">ответим в течение дня</span>
			</div>
		</div>
	);
};

export default Cta;
