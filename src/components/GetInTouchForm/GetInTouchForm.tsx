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
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className="mt-[130px] h-[656px] w-full max-w-[1920px]"
    >
      <div className="h-full w-full bg-[#18347B80] pt-[27px]">
        <div className="mx-auto flex h-fit w-[1320px] items-center justify-center gap-[147px]">
          <div className="space-y-[24px]">
            <h1 className="plus-jakarta-sans-700 h-[120px] w-[528px] text-[48px] leading-[60.48px] text-white">
              We always follow the best way of logistics{" "}
            </h1>
            <p className="leading-[25.2px plus-jakarta-sans-400 h-[75px] w-[533px] text-[18px] text-white">
              Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam
              laoreet est fermentum sed sit. Turpis egestas bibendum tempus
              aenean en.
            </p>
          </div>
          {/* form */}
          <div className="h-[593px] w-[645px] rounded-[20px] bg-[#D2D2D28F] p-[33px_58px] text-white">
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
                className="h-[40px] w-[529px] rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2"
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
                  className="h-[40px] w-[250px] rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2"
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
                  className="h-[40px] w-[250px] rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2"
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
                  className="h-[40px] w-[151px] rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2"
                  value={rangeValue}
                  onChange={(v) => setRangeValue(+v.currentTarget.value)}
                />
              </div>
            </div>
            {/* freight & Load */}
            <div className="flex items-center justify-start gap-[30px]">
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
                  className="h-[40px] w-[250px] rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2"
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
                  className="h-[40px] w-[250px] rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2"
                />
              </div>
            </div>
            {/* button submit */}
            <button className="mt-[60px] h-[50px] w-[534px] rounded-[10px] bg-[#18347B] text-center">
              <p className="plus-jakarta-sans-600 mx-auto h-[23px] w-[132px] text-[18px] leading-[22.68px]">
                Request Quote
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
