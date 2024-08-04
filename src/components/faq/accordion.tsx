import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    if (!accordionRef) return;
    if (open === true) {
      accordionRef.current?.classList.add("fadeIn");
      accordionRef.current?.classList.remove("fadeOut");
    }
    if (open === false) {
      accordionRef.current?.classList.remove("fadeIn");
      accordionRef.current?.classList.add("fadeOut");
    }
  }, [open]);
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

      {/* <div
        className={` ${open ? "mx-5 mt-[24px] w-[398px] rounded-[20px] p-[30px_34px] lg:h-[170px] lg:w-[757px]" : "h-[0px] w-[398px] p-[0px] lg:w-[757px]"} bg-[#FFFFFF] drop-shadow transition-all duration-500 ease-in-out`}
      >
        <p
          className={`plus-jakarta-sans-400 transition-all duration-75 ease-in-out ${open ? "h-full w-fit text-[18px] leading-[25.2px] opacity-100 lg:h-[50px] lg:w-[544px]" : "h-[0px] w-full text-[0px] leading-[0px] opacity-0 lg:w-[544px]"} `}
        >
          {description}
        </p>
      </div> */}
      <div
        ref={accordionRef}
        className={`mx-5 mt-[24px] w-[398px] rounded-[20px] bg-[#FFFFFF] p-[30px_34px] drop-shadow lg:h-[170px] lg:w-[757px]`}
      >
        <p
          className={`plus-jakarta-sans-400 h-full w-fit text-[18px] leading-[25.2px] lg:h-[50px] lg:w-[544px]`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
