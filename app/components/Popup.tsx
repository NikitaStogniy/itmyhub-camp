"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { CloseCircle } from "iconsax-react";
interface Popup {
	popupControl: () => void;
}

type Inputs = {
	name: string;
	email: string;
	message: string;
	phone: string;
};
const Popup: React.FC<Popup> = ({ popupControl }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const sendContactForm = async (data: any) =>
		await fetch("/api/mail", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json; charset=utf8",
			},
			body: JSON.stringify(data),
		}).then((res) => {});

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		popupControl();
		sendContactForm(data);
	};
	const inputClass =
		"rounded-xl bg-[#fafafa] border border-[#cccccc] p-4 w-full ease-in-out duration-300 hover:bg-[#fcfcfc] hover:border-[#222222]";
	return (
		<div className="top-20 z-50 fixed w-full h-[100vh] bg-white/30 flex flex-col justify-center items-center backdrop-blur-md">
			<div className="bg-white  mx-8 rounded-xl px-8 pb-16 pt-4 flex flex-col justify-center items-center border border-[#cfcfcf]">
				<div className="flex flex-row-reverse w-full mb-4">
					<div className="cursor-pointer" onClick={popupControl}>
						<CloseCircle size="32" color="#55E639" />
					</div>
				</div>
				<h1 className="text-3xl font-bold mb-10">Отправьте нам заявку!</h1>
				<form
					className={"flex flex-col w-[300px] gap-2"}
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						role="name"
						className={inputClass}
						placeholder="Ваше имя"
						{...register("name", { required: true })}
					/>
					{/* errors will return when field validation fails  */}
					{errors.name && <span>Это поле обязательно</span>}

					<input
						role="email"
						className={inputClass}
						placeholder="Ваше email"
						{...register("email", { required: true })}
					/>
					{/* errors will return when field validation fails  */}
					{errors.email && <span>Это поле обязательно</span>}

					<input
						role="phone"
						className={inputClass}
						placeholder="Ваше телефон"
						{...register("phone", { required: true })}
					/>
					{/* errors will return when field validation fails  */}
					{errors.phone && <span>Это поле обязательно</span>}

					<textarea
						role="message"
						className={inputClass}
						placeholder="Ваше сообщение нам"
						{...register("message", { required: true })}
					/>
					{/* errors will return when field validation fails  */}
					{errors.message && <span>Это поле обязательно</span>}

					<input
						defaultValue="Отправить"
						placeholder="Отправить"
						className="rounded-xl p-4 ease-in-out duration-150 cursor-pointer shadow-2xl bg-[#55E639] text-white   hover:shadow-[#55E639]/90"
						type="submit"
					/>
				</form>
			</div>
		</div>
	);
};

export default Popup;
