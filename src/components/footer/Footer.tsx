import logo from "../../assets/navbar-logo/upexworld.png";
import mailLogo from "../../assets/footer/tabler_mail.png";
import phoneLogo from "../../assets/footer/bi_phone.png";
import fb from "../../assets/footer/mingcute_facebook-fill.png";
import insta from "../../assets/footer/basil_instagram-solid.png";
import x from "../../assets/footer/prime_twitter.png";
import linkdin from "../../assets/footer/bxl_linkedin.png";

const items = [
  {
    label: "Industry Served",
    id: 1,
    menu: [
      "Forozen Food",
      "Automobile",
      "Machineries",
      "Export Import",
      "Cargo Freight",
    ],
  },
  {
    label: "Company Info",
    id: 2,
    menu: [
      "About Us",
      "Our Expertise",
      "Latest News",
      "Transporters",
      "Terms & Condition",
    ],
  },
  {
    label: "Our Services",
    id: 3,
    menu: [
      "Less Than Truckload",
      "Rail Freight Shipping",
      "Hot Shot Trucking",
      "Less-than-Truckload",
      "Container Freight",
    ],
  },
];
const logos = [
  { label: "fb", src: fb },
  { label: "insta", src: insta },
  { label: "x", src: x },
  { label: "linkdin", src: linkdin },
];
export default function Footer() {
  return (
    <div className="mt-[100px] w-full rounded-[20px] bg-[#FFFFFF] drop-shadow">
      <div className="mx-auto h-[583px] w-[1320px] pt-[92px]">
        <div className="flex items-start justify-center gap-[113px]">
          {/* 1 */}
          <div className="flex flex-col gap-[36px]">
            <img src={logo} alt="" className="h-[58px] w-[265px]" />
            <p className="plus-jakarta-sans-400 h-[100px] w-[335px] text-[18px] leading-[25.2px]">
              Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam
              laoreet est fermentum sed sit. Turpis egestas bibendum tempus
              aenean en.
            </p>
          </div>
          {/* 2 */}
          <div className="flex items-start justify-center gap-[124px]">
            {items.map((item, index) => {
              return (
                <div key={index + item.id}>
                  <p className="plus-jakarta-sans-600 pb-[24px] text-[24px] leading-[30.24px] text-[#18347B]">
                    {item.label}
                  </p>
                  <div>
                    {item.menu.map((options, index) => {
                      return (
                        <p
                          key={index + options}
                          className="plus-jakarta-sans-400 pb-[24px] text-[18px] leading-[25.2px] text-[#212121]"
                        >
                          {options}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* 3 */}
        <div className="flex h-[98px] w-full items-center justify-between rounded-[20px] bg-[#18347B] p-[10px]">
          {/* mail & phone */}
          <div className="flex h-full items-center justify-start gap-[28px]">
            <div className="h-[78px] w-[298px] rounded-[15px] bg-[#FFFFFF5E] p-[23px_21px]">
              <p className="plus-jakarta-sans-500 flex items-center justify-center gap-[10px] text-center text-[18px] leading-[25.2px] text-white">
                <span>
                  <img src={mailLogo} alt="" className="size-[32px]" />
                </span>{" "}
                Info@upexworldbd.com
              </p>
            </div>
            <div className="h-[78px] w-[298px] rounded-[15px] bg-[#FFFFFF5E] p-[23px_21px]">
              <a
                href="tel:+88017258369147"
                className="plus-jakarta-sans-500 flex items-center justify-center gap-[10px] text-center text-[18px] leading-[25.2px] text-white"
              >
                <span>
                  <img src={phoneLogo} alt="" className="size-[32px]" />
                </span>{" "}
                017258369147
              </a>
            </div>
          </div>
          {/* follow */}
          <div className="flex items-center justify-center gap-[12px]">
            <p className="plus-jakarta-sans-600 text-[24px] leading-[30.24px] text-white">
              Follow Us on
            </p>
            <div className="h-[78px] w-[298px] rounded-[15px] bg-[#FFFFFF5E] flex items-center justify-center gap-[15px]">
              {logos.map((logo, index) => {
                return (
                  <div
                    key={index + logo.label}
                    className="size-[38px] rounded-full bg-[#FFFFFF] p-2"
                  >
                    <img
                      src={logo.src}
                      alt={logo.label}
                      className="size-[24px]"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
