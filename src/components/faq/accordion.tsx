import { useRef, useState } from "react";
import "./faq.css";
type Props = {
  title?: string;
  description?: string;
};

export const Accordion = ({ title, description }: Props) => {
  const [open, setopen] = useState<boolean>(false);
  const plusMinusRef = useRef<SVGSVGElement>(null);
  const toggle = () => {
    if (!plusMinusRef) return;
    plusMinusRef.current?.classList.toggle("minus");
  };
  return (
    <div>
      <div
        onClick={() => {
          toggle();
          setopen(!open);
        }}
        className="flex h-[72px] w-[757px] cursor-pointer items-center justify-center gap-[39px] rounded-[58px] bg-[#FFFFFF] drop-shadow"
      >
        <p className="plus-jakarta-sans-600 h-[30px] w-[612px] text-[24px] leading-[30.24px]">
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
        className={` ${open ? "mt-[24px] h-[170px] w-[757px] rounded-[20px] p-[30px_34px]" : "h-[0px] w-[757px] p-[0px]"} bg-[#FFFFFF] drop-shadow transition-all duration-500 ease-in-out`}
      >
        <p
          className={`plus-jakarta-sans-400 transition-all duration-500 ease-in-out ${open ? "h-[50px] w-[544px] text-[18px] leading-[25.2px]" : "h-[0px] w-[544px] text-[0px] leading-[0px]"} `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
