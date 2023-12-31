"use client";
import Image from "next/image";
import Menu from "./sections/Menu";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Heading from "./sections/Heading";
import Product from "./sections/Product";
import Form from "./sections/Form";
import Content from "./sections/Content";
import About from "./sections/About";
import Projects from "./sections/Projects";
import RunningImages from "./sections/RunningImages";
import Cost from "./sections/Cost";
import Cta from "./sections/Cta";
import Popup from "./components/Popup";
import { useState } from "react";

export default function Home() {
	const [popupOpen, setPopupOpen] = useState(false);
	const handlePopup = () => {
		setPopupOpen(!popupOpen);
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-between ">
			{popupOpen ? <Popup popupControl={handlePopup} /> : ""}
			<Menu popupControl={handlePopup} />
			<Heading popupControl={handlePopup} />
			<div id="camp" />
			<Product />
			<Form />
			<div id="program" />
			<Content />
			<div id="expert" />
			<About />

			<Projects />
			<RunningImages />
			<div id="price" />
			<Cost popupControl={handlePopup} />
			<Cta />
			<Footer />
		</main>
	);
}
