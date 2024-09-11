import { Accordion } from "./accordion";
// import "./faq.css";

export default function Faq() {
	return (
		<div className="mx-auto mt-[168px] flex w-full flex-wrap items-start justify-center xl:w-[1320px] xl:flex-nowrap">
			<div className="mx-auto w-fit">
				<p className="plus-jakarta-sans-600 mx-auto h-[45px] w-[140px] rounded-[32px] bg-[#18347B] pt-[9px] text-center text-[24px] leading-[30.24px] text-white lg:mx-0">
					FAQ
				</p>
				<h1 className="plus-jakarta-sans-700 mx-auto lg:mx-0 text-center lg:text-left mt-[18px] h-auto w-fit text-xl lg:leading-[60.48px] lg:h-[240px] lg:w-[328px] lg:text-[48px]">
					Do you have anu question? Find answer here.
				</h1>
				<p className="plus-jakarta-sans-400 mx-auto text-center lg:text-left mt-2 lg:mt-[24px] h-auto lg:h-[75px] w-[80%] text-[18px] lg:leading-[25.2px] lg:w-[533px]">
					Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam laoreet
					est fermentum sed sit. Turpis egestas bibendum tempus aenean en.
				</p>
			</div>
			{/* accordion */}
			<div className="flex flex-col gap-[24px] mt-5 lg:mt-0">
				<Accordion
					title="What is the LBS weight cost of goods transportation?"
					description="Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam laoreet
          est fermentum sed sit. Turpis egestas bibendum tempus aenean en."
				></Accordion>
				<Accordion
					title="What is the LBS weight cost of goods transportation?"
					description="Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam laoreet
          est fermentum sed sit. Turpis egestas bibendum tempus aenean en."
				></Accordion>
				<Accordion
					title="What is the LBS weight cost of goods transportation?"
					description="Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam laoreet
          est fermentum sed sit. Turpis egestas bibendum tempus aenean en."
				></Accordion>
			</div>
		</div>
	);
}
