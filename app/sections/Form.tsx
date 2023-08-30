"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { MouseEvent } from "react";

type Inputs = {
	name: string;
	phone: string;
	email: string;
};

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	return (
		<div className="bg-[#000000] p-4 py-8 md:p-24 w-full text-white">
			<div className="w-3/4 m-auto">
				<form
					className="mb-2 gap-8 flex flex-col xl:flex-row  w-full"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex flex-col w-full">
						<input
							className={`h-[48px] border-b-2 border-[#929292] bg-[#484848] rounded-t-md placeholder:text-[#929292] py-2 px-4 text-white ease-in-out duration-300 ${
								watch("phone") ? " border-2 rounded-md" : ""
							}`}
							defaultValue=""
							placeholder="Имя"
							{...register("phone", { required: true })}
						/>
						{errors.name && <span>Это поле обязательно для заполнения</span>}
					</div>

					<div className="flex flex-col w-full">
						<input
							className={`h-[48px] border-b-2 border-[#929292] bg-[#484848] rounded-t-md placeholder:text-[#929292] py-2 px-4 text-white ease-in-out duration-300 ${
								watch("phone") ? " border-2 rounded-md" : ""
							}`}
							placeholder="Телефон"
							defaultValue=""
							{...register("phone", { required: true })}
						/>
						{errors.phone && <span>Это поле обязательно для заполнения</span>}
					</div>

					<div className="flex flex-col w-full">
						<input
							className={`h-[48px] border-b-2 border-[#929292] bg-[#484848] rounded-t-md placeholder:text-[#929292] py-2 px-4 text-white ease-in-out duration-300 ${
								watch("email") ? " border-2 rounded-md" : ""
							}`}
							placeholder="Email"
							defaultValue=""
							{...register("email", { required: true })}
						/>
						{errors.email && <span>Это поле обязательно для заполнения</span>}
					</div>

					{/* errors will return when field validation fails  */}
					<button className="bg-[#55E639] px-16 h-[48px] rounded-md text-black">
						Присоединиться
					</button>
				</form>
				<p className="text-[#929292]">
					<span className="text-[#55E639]">Отправляя заявку</span>, я даю
					согласие на обработку своих персональных данных
				</p>
			</div>
		</div>
	);
};

export default Form;
