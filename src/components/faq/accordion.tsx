import { useRef, useState } from "react";
import "./faq.css";
type Props = {
  title?: string;
  description?: string;
};

export const Accordion = ({ title, description }: Props) => {
  const [open, setopen] = useState<boolean>(false);
  const plusMinusRef = useRef<SVGSVGElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const toggle = () => {
    if (!plusMinusRef) return;
    plusMinusRef.current?.classList.toggle("minus");
  };

  return (
    <div className="transition-all duration-200 ease-in-out">
      <div
        onClick={() => {
          toggle();
          setopen(!open);
        }}
        className="mx-auto flex w-fit cursor-pointer items-center justify-center gap-2 rounded-[58px] bg-[#FFFFFF] px-5 py-3 drop-shadow lg:h-[72px] lg:w-[757px] lg:gap-[39px]"
      >
        <p className="plus-jakarta-sans-600 text-md w-full text-wrap lg:h-[30px] lg:w-[612px] lg:text-[24px] lg:leading-[30.24px]">
          {title}
        </p>{" "}
        <svg
          ref={plusMinusRef}
          xmlns="http://www.w3.org/2000/svg"
          className="plus"
          viewBox="0 0 160 160"
        >
          <rect className="vertical-line" x="70" width="20" height="160" />
          <rect className="horizontal-line" y="70" width="160" height="20" />
        </svg>
      </div>
      <div
        ref={accordionRef}
        className={`mx-5 mt-[24px] rounded-[20px] bg-[#FFFFFF] drop-shadow transition-all duration-300 ease-in-out ${open ? "fadeIn w-[398px] p-[30px_34px] text-lg leading-[25.2px] lg:w-[700px]" : "h-0 w-0 text-[0px] opacity-0"}`}
      >
        <p className={`plus-jakarta-sans-400`}>{description}</p>
      </div>
    </div>
  );
};
