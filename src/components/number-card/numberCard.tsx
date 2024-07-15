import img from "../../assets/transport-logisticsproducts1.png";
import img2 from "../../assets/Maskgroup.png";
import "./numberCard.css";
type Props = {};

export default function NumberCard({}: Props) {
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "border-box",
        backgroundPosition: "center center",
        objectFit: "cover",
      }}
      className="mt-[80px] h-[493px] w-full max-w-[1920px]"
    >
      <div className="flex h-full w-full items-center justify-center gap-[31px] bg-blue-800/50 text-white">
        <div className="gradient-border h-[228px] w-[307px] rounded-[20px] bg-[#DFDFDF4D] p-[22px]">
          <div className="flex items-center justify-start gap-[15px]">
            <img src={img2} alt="" className="size-[66px]" />
            <p className="plus-jakarta-sans-700 text-[64px] leading-[80.64px]">
              50+
            </p>
          </div>
          <p className="plus-jakarta-sans-700 mt-[26px] text-[24px] leading-[33.6px]">
            Successful Transportation
          </p>
        </div>

        <div className="gradient-border h-[228px] w-[307px] rounded-[20px] bg-[#DFDFDF4D] p-[22px]">
          <div className="flex items-center justify-start gap-[15px]">
            <img src={img2} alt="" className="size-[66px]" />
            <p className="plus-jakarta-sans-700 text-[64px] leading-[80.64px]">
              256
            </p>
          </div>
          <p className="plus-jakarta-sans-700 mt-[26px] text-[24px] leading-[33.6px]">
            Land Freight Transportation
          </p>
        </div>

        <div className="gradient-border h-[228px] w-[307px] rounded-[20px] bg-[#DFDFDF4D] p-[22px]">
          <div className="flex items-center justify-start gap-[15px]">
            <img src={img2} alt="" className="size-[66px]" />
            <p className="plus-jakarta-sans-700 text-[64px] leading-[80.64px]">
              25+
            </p>
          </div>
          <p className="plus-jakarta-sans-700 mt-[26px] text-[24px] leading-[33.6px]">
            Countries of Operations
          </p>
        </div>

        <div className="gradient-border h-[228px] w-[307px] rounded-[20px] bg-[#DFDFDF4D] p-[22px]">
          <div className="flex items-center justify-start gap-[15px]">
            <img src={img2} alt="" className="size-[66px]" />
            <p className="plus-jakarta-sans-700 text-[64px] leading-[80.64px]">
              50+
            </p>
          </div>
          <p className="plus-jakarta-sans-700 mt-[26px] text-[24px] leading-[33.6px]">
            Plane Freight Transportation
          </p>
        </div>
      </div>
    </div>
  );
}
