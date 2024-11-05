import mailLogo from "../../assets/footer/bi_mail_white (2).png";
import phoneblue from "../../assets/footer/bi_phone.png";
import phoneLogo from "../../assets/footer/bi_phone_white (1).png";
import fb from "../../assets/footer/facebook-color-svgrepo-com.svg";
import insta from "../../assets/footer/instagram-svgrepo-com.svg";
import linkdin from "../../assets/footer/linkedin-svgrepo-com.svg";
import mailBlue from "../../assets/footer/tabler_mail.png";
import youtube from "../../assets/footer/youtube-color-svgrepo-com.svg";

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
    label: "Our Services",
    id: 3,
    menu: [
      "Air Freight Services",
      "Customs Clearance",
      "Online Shipment Tracking",
      "Land Transport",
      "7 Days a Week Operations",
      "Terms & Conditions",
    ],
  },
  {
    label: "Company Info",
    id: 2,
    menu: ["Home", "Service", "Company", "Contact", "Terms & Conditions"],
  },
];
const logos = [
  { label: "fb", src: fb },
  { label: "insta", src: insta },
  { label: "x", src: youtube },
  { label: "linkdin", src: linkdin },
];
export default function Footer() {
  return (
    <div className="mt-[100px] w-full rounded-[20px] rounded-b-none bg-black text-white drop-shadow">
      <div className="mx-auto h-full w-fit max-w-[1320px] py-10 pl-5 lg:px-10 lg:pl-0 lg:pt-[92px] xl:h-[583px]">
        <div className="flex flex-col items-start justify-center gap-10 lg:gap-[113px] xl:flex-row">
          {/* 1 */}
          <div className="flex flex-col items-start gap-8 lg:flex-col lg:gap-[3px]">
            <img
              src="/UpExLogoSVGWhite-01.svg"
              alt=""
              className="mx-auto h-[150px] sm:w-[200px]"
            />
            <p className="plus-jakarta-sans-400 h-auto w-[90%] text-sm leading-[25.2px] sm:text-lg lg:h-[100px] lg:w-[335px] lg:text-[18px]">
              Upex World offers fast and reliable shipping services with
              real-time tracking. We make sure your packages arrive safely, no
              matter where they’re going.
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-wrap items-start justify-start gap-10 lg:justify-center xl:gap-[124px]">
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <p className="plus-jakarta-sans-600 pb-[24px] text-[24px] leading-[30.24px] text-red-600">
                    {item.label}
                  </p>
                  <div>
                    {item.menu.map((options, index) => {
                      return (
                        <p
                          key={index + options}
                          className="plus-jakarta-sans-400 pb-[24px] text-[18px] leading-[25.2px] text-white"
                        >
                          {options}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="flex w-fit flex-col items-start gap-6 pb-3 xl:hidden">
              <p className="plus-jakarta-sans-600 text-[24px] leading-[30.24px] text-text-color">
                Contact
              </p>
              <div className="sm:w-[298px] rounded-[15px]">
                <p className="plus-jakarta-sans-500 flex items-center justify-start gap-[10px] text-wrap text-center text-[18px] leading-[25.2px]">
                  <span>
                    <img src={mailBlue} alt="" className="size-[32px]" />
                  </span>{" "}
                  Info@upexworldbd.com
                </p>
              </div>
              <div className="sm:w-[298px] rounded-[15px]">
                <a
                  href="tel:+8801711473954"
                  className="plus-jakarta-sans-500 flex items-center justify-start gap-[10px] text-center text-[18px] leading-[25.2px]"
                >
                  <span>
                    <img src={phoneblue} alt="" className="size-[32px]" />
                  </span>{" "}
                  +8801711473954
                </a>
              </div>
              {/* follow */}
              <div className="flex flex-col items-start justify-center gap-3">
                <p className="plus-jakarta-sans-600 text-[24px] leading-[30.24px] text-text-color">
                  Follow Us on
                </p>
                <div className="flex items-center justify-center gap-3 rounded-[15px] bg-[#FFFFFF5E] p-3">
                  {logos.map((logo) => {
                    return (
                      <div
                        key={logo.label}
                        className="flex size-[38px] items-center justify-center rounded-full bg-[#FFFFFF]"
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
          {/* contact mobile */}
        </div>
        {/* 3 */}
        <div className="hidden h-[98px] w-full items-center justify-between rounded-[20px] bg-red-600 p-[10px] xl:flex">
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
                href="tel:+8801711473954"
                className="plus-jakarta-sans-500 flex items-center justify-center gap-[10px] text-center text-[18px] leading-[25.2px] text-white"
              >
                <span>
                  <img src={phoneLogo} alt="" className="size-[32px]" />
                </span>{" "}
                +8801711473954
              </a>
            </div>
          </div>
          {/* follow */}
          <div className="flex items-center justify-center gap-[12px]">
            <p className="plus-jakarta-sans-600 text-[24px] leading-[30.24px] text-white">
              Follow Us on
            </p>
            <div className="flex h-[78px] w-[298px] items-center justify-center gap-[15px] rounded-[15px] bg-[#FFFFFF5E]">
              {logos.map((logo) => {
                return (
                  <div
                    key={logo.label}
                    className="rounded-b-none bg-[#FFFFFF] p-2"
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
