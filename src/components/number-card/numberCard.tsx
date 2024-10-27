import img from "../../assets/transport-logisticsproducts1.webp";
import img2 from "../../assets/Maskgroup.png";
import "./numberCard.css";

export default function NumberCard() {
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "border-box",
        backgroundPosition: "center center",
      }}
      className="mx-auto mt-[80px] h-full w-full xl:h-[493px]"
    >
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-[31px] bg-red-800/50 px-2 py-5 text-white">
        <div className="gradient-border h-full w-[186px] rounded-[20px] bg-[#DFDFDF4D] p-[22px] lg:h-[228px] lg:w-[307px]">
          <div className="flex items-center justify-start gap-[15px]">
            <img src={img2} alt="" className="size-[48px] lg:size-[66px]" />
            <p className="plus-jakarta-sans-700 text-3xl leading-[80.64px] lg:text-[64px]">
              50+
            </p>
          </div>
          <p className="plus-jakarta-sans-700 text-xl leading-[33.6px] lg:mt-[26px] lg:text-[24px]">
            Successful Transportation
          </p>
        </div>

        <div className="gradient-border h-full w-[186px] rounded-[20px] bg-[#DFDFDF4D] p-[22px] lg:h-[228px] lg:w-[307px]">
          <div className="flex items-center justify-start gap-[15px]">
            <img src={img2} alt="" className="size-[48px] lg:size-[66px]" />
            <p className="plus-jakarta-sans-700 text-3xl leading-[80.64px] lg:text-[64px]">
              256
            </p>
          </div>
          <p className="plus-jakarta-sans-700 text-xl leading-[33.6px] lg:mt-[26px] lg:text-[24px]">
            Land Freight Transportation
          </p>
        </div>

        <div className="gradient-border h-full w-[186px] rounded-[20px] bg-[#DFDFDF4D] p-[22px] lg:h-[228px] lg:w-[307px]">
          <div className="flex items-center justify-start gap-[15px]">
            <img src={img2} alt="" className="size-[48px] lg:size-[66px]" />
            <p className="plus-jakarta-sans-700 text-3xl leading-[80.64px] lg:text-[64px]">
              25+
            </p>
          </div>
          <p className="plus-jakarta-sans-700 text-xl leading-[33.6px] lg:mt-[26px] lg:text-[24px]">
            Countries of Operations
          </p>
        </div>

        <div className="gradient-border h-full w-[186px] rounded-[20px] bg-[#DFDFDF4D] p-[22px] lg:h-[228px] lg:w-[307px]">
          <div className="flex items-center justify-start gap-[15px]">
            <img src={img2} alt="" className="size-[48px] lg:size-[66px]" />
            <p className="plus-jakarta-sans-700 text-3xl leading-[80.64px] lg:text-[64px]">
              50+
            </p>
          </div>
          <p className="plus-jakarta-sans-700 text-xl leading-[33.6px] lg:mt-[26px] lg:text-[24px]">
            Plane Freight Transportation
          </p>
        </div>
      </div>
    </div>
  );
}
