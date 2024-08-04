import { useRef, useState } from "react";
import upexlog from "../../assets/navbar-logo/upexworld.png";
import "./navbar.css";

type Props = {};

const menuItems = [
  {
    label: "service",
    id: 1,
  },
  {
    label: "company",
    id: 2,
  },
  {
    label: "features",
    id: 3,
  },
  {
    label: "news",
    id: 4,
  },
  {
    label: "contact",
    id: 5,
  },
];
export default function Navbar({}: Props) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setopen] = useState(false);

  const toggleMenu = () => {
    menuRef.current?.classList.toggle("on");
    setopen(!open);
  };
  return (
    <div className="sticky left-0 top-0 z-50 h-[68px] w-full bg-[rgba(106,106,106,0.52)] text-white backdrop-blur-sm lg:h-[100px]">
      <div className="mx-auto hidden w-full items-center justify-center gap-5 lg:flex xl:gap-[129px]">
        <div className="w-fit">
          <img
            src={upexlog}
            alt="upexworld logo"
            className="h-[58px] w-[265px]"
          />
        </div>
        <div className="plus-jakarta-sans-600 hidden items-center justify-center gap-12 py-[39px] lg:flex">
          {menuItems.map((menu, index) => {
            return (
              <div
                key={index + menu.label + menu.id}
                className="group relative cursor-pointer"
              >
                <p className="text-[18px] capitalize leading-[22.68px]">
                  <a href="#logoBox">{menu.label}</a>
                </p>
                <span className="absolute -bottom-2 left-0 h-1 w-0 bg-blue-300 transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <button className="plus-jakarta-sans-600 h-[45px] w-[158px] rounded-[10px] bg-bg-color p-[10px_20px_10px_20px] leading-[25.2px]">
            Get a Quota
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <div className="relative flex h-full w-full items-center justify-between px-[2rem] lg:hidden">
        <div className="w-fit">
          <img
            src={upexlog}
            alt="upexworld logo"
            className="h-[3rem] w-[100%]"
          />
        </div>
        <div className="size-[44px] cursor-pointer rounded-sm bg-bg-color">
          <div ref={menuRef} id="toggle" onClick={toggleMenu}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
        </div>
        <div
          className={`absolute right-0 top-[4rem] z-[9999] h-[150dvh] bg-blue-900 transition-all duration-500 ease-in-out ${open ? "fadeIn w-[300px] md:w-[500px]" : "fadeOut w-0"}`}
        >
          {menuItems.map((m, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-start pl-[3rem] pt-[3rem]"
              >
                <p
                  key={m.id}
                  className={`text-lg capitalize transition-all duration-500 ease-in-out md:text-[4rem]`}
                >
                  {m.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
