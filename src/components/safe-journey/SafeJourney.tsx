import beda from "../../assets/safe-journey/portrait-delivery-man-holding-cardboard-parcel 1.png";
// import doubleB from "../../assets/safe-journey/double-bar.png";
import b1 from "../../assets/safe-journey/Rectangle37.png";
import b2 from "../../assets/safe-journey/Rectangle38.png";

type Props = {};

export default function SafeJourney({}: Props) {
  return (
    <div className="relative mx-auto mt-[166px] hidden h-[343px] w-[1320px] items-start justify-start gap-[100px] rounded-[20px] bg-[#18347B] text-white xl:flex">
      <div className="p-[39px_51px]">
        <h1 className="plus-jakarta-sans-700 h-[120px] w-[583px] text-[48px] leading-[60.48px]">
          We ensure safe transportation & delivery
        </h1>
        <p className="plus-jakarta-sans-400 mt-[16px] text-[18px] leading-[25.2px]">
          Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam laoreet
          est f
        </p>
        <button className="plus-jakarta-sans-600 mt-[32px] rounded-[10px] bg-white p-[10px_20px_10px_20px] text-[20px] leading-[25.2px] text-[#18347B]">
          Get a Quote
        </button>
      </div>
      <div className="relative h-full w-[400px] overflow-hidden">
        <img
          src={b1}
          alt=""
          className="absolute -top-10 left-14 z-0 h-[274.66px] w-[111.12px] -rotate-[25.6deg]"
        />
        <img
          src={b2}
          alt=""
          className="absolute -bottom-10 right-14 z-0 h-[274.66px] w-[111.12px] -rotate-[25.6deg]"
        />
      </div>
      <img
        src={beda}
        alt=""
        className="absolute -top-[67px] right-[166px] h-[409px] w-[373px]"
      />
    </div>
  );
}
