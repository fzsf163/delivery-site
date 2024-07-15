import { Accordion } from "./accordion";
// import "./faq.css";

type Props = {};

export default function Faq({}: Props) {
  return (
    <div className="mx-auto mt-[168px] flex w-[1320px] items-start justify-center">
      <div className="mx-auto w-fit">
        <p className="plus-jakarta-sans-600 h-[45px] w-[140px] rounded-[32px] bg-[#18347B] pt-[9px] text-center text-[24px] leading-[30.24px] text-white">
          FAQ
        </p>
        <h1 className="plus-jakarta-sans-700 mt-[18px] h-[240px] w-[328px] text-[48px] leading-[60.48px]">
          Do you have anu question? Find answer here.
        </h1>
        <p className="plus-jakarta-sans-400 mt-[24px] h-[75px] w-[533px] text-[18px] leading-[25.2px]">
          Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam laoreet
          est fermentum sed sit. Turpis egestas bibendum tempus aenean en.
        </p>
      </div>
      {/* accordion */}
      <div className="flex flex-col gap-[24px]">
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
