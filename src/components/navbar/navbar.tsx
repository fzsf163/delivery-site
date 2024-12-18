import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const menuItems = [
  {
    label: "home",
    id: 1,
    href: "/",
  },
  {
    label: "service",
    id: 1,
    href: "service",
  },
  {
    label: "company",
    id: 2,
    href: "company",
  },

  {
    label: "contact",
    id: 5,
    href: "contact",
  },
];
export default function Navbar() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    menuRef.current?.classList.toggle("on");
    setOpen(!open);
  };

  return (
    <div className="fixed left-0 top-0 z-50 h-[68px] w-full bg-[rgba(197,191,191,0.77)] text-white backdrop-blur-sm lg:h-[100px]">
      <div className="mx-auto hidden w-full items-center justify-center gap-5 lg:flex lg:gap-16 xl:gap-[129px]">
        <div className="h-[80px] w-[140px]">
          <Link to="/">
            <img
              src="/UpExLogoSVGBlack-01.svg"
              alt="upexworld logo"
              className="h-full w-full"
            />
          </Link>
        </div>
        <div className="plus-jakarta-sans-600 hidden items-center justify-center gap-12 py-[39px] lg:flex">
          {menuItems.map((menu) => {
            return (
              <Link to={menu.href} key={menu.label + menu.id}>
                <div
                  key={menu.label + menu.id}
                  className="group relative cursor-pointer"
                >
                  <p className="text-[18px] capitalize leading-[22.68px]">
                    {menu.label}
                  </p>
                  <span className="absolute -bottom-2 left-0 h-1 w-0 bg-blue-300 transition-all duration-500 ease-in-out group-hover:w-full" />
                </div>
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <a href={"#getQuote"}>
            <button
              type="button"
              className="plus-jakarta-sans-600 h-[45px] w-[158px] rounded-[10px] bg-red-600 p-[10px_20px_10px_20px] leading-[25.2px]"
            >
              Get a Quota
            </button>
          </a>
        </div>
      </div>
      {/* mobile menu */}
      <div className="relative flex h-full w-full items-center justify-between px-[2rem] lg:hidden">
        <div className="h-[80px] w-[100px]">
          <Link to={"/"}>
            <img
              src="/UpExLogoSVGBlack-01.svg"
              alt="upexworld logo"
              className="h-full w-full"
            />
          </Link>
        </div>
        <div className="size-[44px] cursor-pointer rounded-md">
          <div ref={menuRef} id="toggle" onClick={toggleMenu}>
            <div className="one" />
            <div className="two" />
            <div className="three" />
          </div>
        </div>
        <div
          className={`absolute right-0 top-[4.3rem] z-[9999] h-[150dvh] bg-red-600 transition-all duration-500 ease-in-out ${open ? "fadeIn w-[300px] md:w-[500px]" : "fadeOut w-0"}`}
        >
          {menuItems.map((m) => {
            return (
              <NavLink
                to={m.href}
                key={m.label + m.id}
                onClick={toggleMenu}
                className={({ isActive, isPending }) =>
                  isPending ? "text-blue-400" : isActive ? "text-black" : ""
                }
              >
                <div
                  key={m.id}
                  className="flex flex-col items-start pl-[3rem] pt-[3rem]"
                >
                  <p
                    key={m.id}
                    className={
                      "text-lg font-bold capitalize transition-all duration-500 ease-in-out md:text-[2rem]"
                    }
                  >
                    {m.label}
                  </p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
