import img2 from "../../assets/constraints/Rectangle 3(1).webp";

type Props = {};

export default function Transportation({}: Props) {
  return (
    <div className="mx-auto flex w- max-w-[1320px] flex-wrap items-center justify-center lg:flex-nowrap">
      <div>
        <div className="h-[45px] w-fit mx-auto rounded-[36px] bg-[#18347B] text-center lg:w-[370px]">
          <p className="plus-jakarta-sans-600 p-[5px_20px_10px_15px] text-[24px] leading-[30.24px] text-white">
            Our constrain Transportation
          </p>
        </div>
        <div className="mt-[19px]">
          <h1 className="plus-jakarta-sans-700 h-auto w-full text-center text-3xl lg:h-[120px] lg:w-[498px] lg:text-[48px] lg:leading-[60.48px]">
            We'll keep your items damage free
          </h1>
        </div>
        <p className="plus-jakarta-sans-400 mt-[24px] h-auto w-full text-center text-[18px] leading-[25.2px] lg:h-[75px] lg:w-[533px]">
          Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam laoreet
          est fermentum sed sit. Turpis egestas bibendum tempus aenean en.
        </p>

        <div className="-before:bottom-10 relative mt-[24px] h-auto w-fit mx-auto pr-5 lg:pr-0 rounded-[15px] bg-[#ffffff] pb-4 before:absolute before:h-full before:w-[14px] sm:before:rounded-[15px_0px_0px_15px] sm:before:bg-[#18347B] lg:h-[175px] lg:w-[533px] lg:pb-0">
          {" "}
          <ul className="plus-jakarta-sans-600 row-span-3 ml-12 grid w-fit list-disc grid-cols-12 gap-5 text-wrap break-words pt-4 text-xs md:text-xl leading-[25.2px] marker:text-[#18347B] md:gap-x-10 md:gap-y-5 md:pt-[25px] lg:text-[18px]">
            <li className="col-span-6">Intermodal Shipping</li>
            <li className="col-span-6">Freeze product Shipping</li>
            <li className="col-span-6">Hot Shot Trucking</li>
            <li className="col-span-6">Intermodal Shipping</li>
            <li className="col-span-6">Freeze product Shipping</li>
            <li className="col-span-6">Hot Shot Trucking</li>
          </ul>
        </div>
        <div className="mt-[54px]  w-fit mx-auto lg:w-full">
          <button className="plus-jakarta-sans-600 h-[45px] w-[158px] rounded-[10px] bg-[#18347B] p-[10px_20px_10px_20px] leading-[25.2px] text-white">
            Get a Quota
          </button>
        </div>
      </div>
      <div className="mt-6 h-full w-full lg:mt-0">
        <img
          src={img2}
          alt="truck and ship"
          className="h-full w-full max-w-[1000px] object-fill"
        />
      </div>
    </div>
  );
}
