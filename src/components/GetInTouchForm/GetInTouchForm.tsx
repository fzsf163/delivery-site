import { useState } from "react";
import formbg from "../../assets/formbg.png";
import "./getintouch.css";
type Props = {};

export default function GetInTouchForm({}: Props) {
  const [rangeValue, setRangeValue] = useState<number>(0);
  const MIN_VALUE = 0;
  const MAX_VALUE = 100;
  let RATIO = 362 / MAX_VALUE; // 362 is in pixel, width of slider

  return (
    <div
      style={{
        backgroundImage: `url("${formbg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="mt-[130px] h-full w-full xl:h-[656px]"
    >
      <div className="h-full w-full bg-[#18347B80] pt-[27px]">
        <div className="mx-auto flex h-full w-full flex-wrap items-center justify-center gap-10 pb-10 lg:gap-[147px]">
          <div className="space-y-[24px]">
            <h1 className="plus-jakarta-sans-700 mx-auto h-auto w-[90%] text-center text-4xl text-white lg:h-[120px] lg:w-[528px] lg:text-[48px] lg:leading-[60.48px]">
              We always follow the best way of logistics{" "}
            </h1>
            <p className="plus-jakarta-sans-400 mx-auto h-auto w-[80%] text-center text-lg leading-[25.2px] text-white lg:h-[75px] lg:w-[533px] lg:text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam
              laoreet est fermentum sed sit. Turpis egestas bibendum tempus
              aenean en.
            </p>
          </div>
          {/* form */}
          <div className="m-4 h-full w-full rounded-[20px] bg-[#D2D2D28F] p-[30px] text-white lg:h-[593px] lg:w-[645px] lg:p-[33px_58px]">
            <h1 className="plus-jakarta-sans-400 h-[30px] w-[150px] text-[24px] leading-[30.24px]">
              Personal Info
            </h1>
            {/* name box */}
            <div className="mt-[21px] space-y-[10px]">
              <label
                htmlFor="nameForm"
                className="plus-jakarta-sans-400 h-[20px] w-[46px] text-[16px] leading-[20.16px]"
              >
                Name
              </label>
              <input
                type="text"
                name="nameForm"
                id="nameForm"
                className="h-[40px] w-full rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2 lg:w-[529px]"
              />
            </div>
            {/* email and phone div */}
            <div className="flex items-center justify-start gap-[30px]">
              {/* email */}
              <div className="mt-[21px] flex flex-col space-y-[10px]">
                <label
                  htmlFor="emailForm"
                  className="plus-jakarta-sans-400 h-[20px] w-[46px] text-[16px] leading-[20.16px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="emailForm"
                  id="emailForm"
                  className="h-[40px] w-full rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2 lg:w-[250px]"
                />
              </div>
              {/* phone */}
              <div className="mt-[21px] flex flex-col space-y-[10px]">
                <label
                  htmlFor="phoneForm"
                  className="plus-jakarta-sans-400 h-[20px] w-[46px] text-[16px] leading-[20.16px]"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="phoneForm"
                  id="phoneForm"
                  className="h-[40px] w-full rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2 lg:w-[250px]"
                />
              </div>
            </div>
            {/* weight box */}
            <div className="mt-[36px]">
              <label
                htmlFor="weightRange"
                className="plus-jakarta-sans-400 h-[20px] w-[46px] text-[16px] leading-[20.16px]"
              >
                Weight (KG)
              </label>
              <div className="flex items-center justify-start gap-[16px]">
                <div className="relative">
                  <input
                    type="range"
                    name="weightRange"
                    id="weightRange"
                    className="w-[362px] accent-[#18347B]"
                    min={MIN_VALUE}
                    max={MAX_VALUE}
                    value={rangeValue}
                    onChange={(v) => setRangeValue(+v.currentTarget.value)}
                  />
                  <span
                    style={{
                      width: `${rangeValue * RATIO}px`,
                    }}
                    className={`forChrome absolute left-0 top-2 z-10 h-[10px] rounded-[10px] bg-[#18347B]`}
                  ></span>
                  <span
                    style={{
                      width: `${rangeValue * RATIO}px`,
                    }}
                    className={`forFire absolute left-0 top-1 z-10 h-[10px] rounded-[10px] bg-[#18347B]`}
                  ></span>
                </div>
                <input
                  type="number"
                  name="weightForm"
                  id="weightForm"
                  className="h-[40px] w-full rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2 lg:w-[151px]"
                  value={rangeValue}
                  onChange={(v) => setRangeValue(+v.currentTarget.value)}
                />
              </div>
            </div>
            {/* freight & Load */}
            <div className="flex items-center justify-start gap-5 lg:gap-[30px]">
              {/* email */}
              <div className="mt-[21px] flex flex-col space-y-[10px]">
                <label
                  htmlFor="emailForm"
                  className="plus-jakarta-sans-400 h-[20px] w-[94px] text-[16px] leading-[20.16px]"
                >
                  Freight Type
                </label>
                <input
                  type="text"
                  name="freightForm"
                  id="freightForm"
                  className="h-[40px] w-full rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2 lg:w-[250px]"
                />
              </div>
              {/* phone */}
              <div className="mt-[21px] flex flex-col space-y-[10px]">
                <label
                  htmlFor="phoneForm"
                  className="plus-jakarta-sans-400 h-[20px] w-[46px] text-[16px] leading-[20.16px]"
                >
                  Load
                </label>
                <input
                  type="text"
                  name="loadForm"
                  id="loadForm"
                  className="h-[40px] w-full rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2 lg:w-[250px]"
                />
              </div>
            </div>
            {/* button submit */}
            <button className="mt-[60px] h-[50px] w-full rounded-[10px] bg-[#18347B] text-center lg:w-[534px]">
              <p className="plus-jakarta-sans-600 mx-auto h-[23px] w-full text-[18px] leading-[22.68px] lg:w-[132px]">
                Request Quote
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
