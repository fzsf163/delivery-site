import img2 from "../../assets/constraints/Rectangle 3(1).png";

type Props = {};

export default function Transportation({}: Props) {
  return (
    <div className="mx-auto flex w-[1320px] items-center justify-center">
      <div>
        <div className="h-[45px] w-[370px] rounded-[36px] bg-[#18347B] text-center">
          <p className=".plus-jakarta-sans-600 p-[5px_20px_10px_15px] text-[24px] leading-[30.24px] text-white">
            Our constrain Transportation
          </p>
        </div>
        <div className="mt-[19px]">
          <h1 className="plus-jakarta-sans-700 h-[120px] w-[498px] text-[48px] leading-[60.48px]">
            We'll keep your items damage free
          </h1>
        </div>
        <p className="plus-jakarta-sans-400 mt-[24px] h-[75px] w-[533px] text-[18px] leading-[25.2px]">
          Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam laoreet
          est fermentum sed sit. Turpis egestas bibendum tempus aenean en.
        </p>

        <div className="-before:bottom-10 relative mt-[24px] h-[175px] w-[533px] rounded-[15px] bg-[#ffffff] before:absolute before:h-full before:w-[14px] before:rounded-[15px_0px_0px_15px] before:bg-[#18347B]">
          {" "}
          <ul className="plus-jakarta-sans-600 row-span-3 ml-12 grid w-fit list-disc grid-cols-12 gap-x-10 gap-y-5 pt-[25px] text-[18px] leading-[25.2px] marker:text-[#18347B]">
            <li className="col-span-6">Intermodal Shipping</li>
            <li className="col-span-6">Freeze product Shipping</li>
            <li className="col-span-6">Hot Shot Trucking</li>
            <li className="col-span-6">Intermodal Shipping</li>
            <li className="col-span-6">Freeze product Shipping</li>
            <li className="col-span-6">Hot Shot Trucking</li>
          </ul>
        </div>
        <div className="mt-[54px]">
          <button className="plus-jakarta-sans-600 h-[45px] w-[158px] rounded-[10px] bg-[#18347B] p-[10px_20px_10px_20px] leading-[25.2px] text-white">
            Get a Quota
          </button>
        </div>
      </div>
      <div>
        <img src={img2} alt="truck and ship" className="h-full w-full ml-[100px]" />
      </div>
    </div>
  );
}
