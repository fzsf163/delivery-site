import upexlog from "../../assets/navbar-logo/upexworld.png";

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
  return (
    <div className="fixed left-0 top-0 z-50 h-[100px] w-full max-w-[1920px] bg-[rgba(106,106,106,0.52)] text-white backdrop-blur-sm container">
      <div className="mx-auto flex w-[1320px] items-center justify-center gap-[129px]">
        <div className="w-fit">
          <img
            src={upexlog}
            alt="upexworld logo"
            className="h-[58px] w-[265px]"
          />
        </div>
        <div className="plus-jakarta-sans-600 flex items-center justify-center gap-12 py-[39px]">
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
        <div>
          <button className="plus-jakarta-sans-600 h-[45px] w-[158px] rounded-[10px] bg-[#18347B] p-[10px_20px_10px_20px] leading-[25.2px]">
            Get a Quota
          </button>
        </div>
      </div>
    </div>
  );
}
