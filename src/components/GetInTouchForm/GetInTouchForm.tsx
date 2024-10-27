import axios from "axios";
import { FormEvent, useRef, useState } from "react";
import formbg from "../../assets/formbg.webp";
import "./getintouch.css";

export default function GetInTouchForm() {
  const [rangeValue, setRangeValue] = useState<number>(0);
  const [ratio, setRatio] = useState(0);
  const MIN_VALUE = 0;
  const MAX_VALUE = 1000;
  const inputRangeRef = useRef<HTMLInputElement>(null);
  const [success, setSuccess] = useState("");
  //   let RATIO = 362 / MAX_VALUE; // 362 is in pixel, width of slider
  async function onSubmit(formdata: FormEvent<HTMLFormElement>) {
    formdata.preventDefault();
    const formData = new FormData(formdata.currentTarget);
    const name = formData.get("nameForm");
    const email = formData.get("emailForm");
    const phone = formData.get("phoneForm");
    const weight = formData.get("weightForm");
    const freightType = formData.get("freightForm");
    const load = formData.get("loadForm");

    const data = JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      weight: `${weight} KGs`,
      freight: freightType,
      load: load,
    });
    try {
      const v = await axios.post("https://api.upexworldbd.com/quota/", data);
      if (v.data.message === "Email sent successfully") {
        setSuccess(v.data.message);
        let count = 10;
        const countdown = setInterval(() => {
          setSuccess(
            v.data.message + " " + "(" + String((count = count - 1)) + ")",
          );
          console.log(count);
          if (count === 0) {
            clearInterval(countdown);
            setSuccess("");
          }
        }, 1000);
      }
    } catch (error) {
      if (error) {
        setSuccess(String(error));
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url("${formbg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="getInTouch mt-[130px] h-full w-full xl:h-[656px]"
      id="getQuote"
    >
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="h-full w-full bg-red-500/40 py-5 sm:p-10 lg:py-4">
          <div className="mx-auto flex h-full w-full flex-wrap items-center justify-center gap-5 xl:gap-[147px]">
            <div className="space-y-[24px]">
              <h1 className="plus-jakarta-sans-700 mx-auto h-auto w-[90%] text-center text-4xl text-white lg:h-[120px] lg:w-[528px] lg:text-[48px] lg:leading-[60.48px]">
                We always follow the best way of logistics{" "}
              </h1>
              <p className="plus-jakarta-sans-400 mx-auto h-auto w-[80%] text-center text-lg leading-[25.2px] text-white lg:h-[75px] lg:w-[533px] lg:text-[18px]">
                We make sure your packages are shipped safely and on time, so
                you can relax and trust us with your deliveries!
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
                  required
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
                    required
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
                    required
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
                <div className="flex flex-col justify-start gap-[16px] py-3 sm:flex-row sm:items-center">
                  <div className="relative">
                    <input
                      type="range"
                      name="weightRange"
                      id="weightRange"
                      ref={inputRangeRef}
                      className="w-[362px] grow accent-[#18347B]"
                      min={MIN_VALUE}
                      max={MAX_VALUE}
                      value={rangeValue}
                      onChange={(v) => {
                        setRangeValue(+v.currentTarget.value);
                        setRatio(
                          inputRangeRef.current?.offsetWidth
                            ? inputRangeRef.current?.offsetWidth / MAX_VALUE
                            : 362 / MAX_VALUE,
                        );
                      }}
                    />
                    <span
                      style={{
                        width: `${rangeValue * ratio}px`,
                        maxWidth: inputRangeRef.current?.offsetWidth,
                      }}
                      className={
                        "forChrome absolute left-0 top-2 z-10 h-[10px] rounded-[10px] bg-red-600"
                      }
                    />
                    <span
                      style={{
                        width: `${rangeValue * ratio}px`,
                        maxWidth: inputRangeRef.current?.offsetWidth,
                      }}
                      className={
                        "forFire left-0 top-1 z-10 hidden h-[10px] rounded-[10px] bg-red-600 sm:absolute"
                      }
                    />
                  </div>
                  <input
                    type="number"
                    name="weightForm"
                    id="weightForm"
                    className="h-[40px] rounded-[10px] border-[1.5px] border-white bg-[#D9D9D94A] px-2 lg:w-[151px]"
                    value={rangeValue}
                    required
                    onChange={(v) => {
                      setRangeValue(+v.currentTarget.value);
                      setRatio(362 / MAX_VALUE);
                    }}
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
                    required
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
                    required
                  />
                </div>
              </div>
              {/* button submit */}
              <button
                type="submit"
                className="mt-[40px] h-[50px] w-full rounded-[10px] bg-red-600 text-center disabled:bg-text-color/50 lg:w-[534px]"
                disabled={success === "" ? false : true}
              >
                {success === "" ? (
                  <p className="plus-jakarta-sans-600 mx-auto h-[23px] w-full text-[18px] leading-[22.68px] lg:w-[132px]">
                    Request Quote
                  </p>
                ) : (
                  <p className="plus-jakarta-sans-600 mx-auto h-[23px] w-full text-nowrap text-[18px] leading-[22.68px]">
                    {success}
                  </p>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
