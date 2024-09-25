import placholder from "../../assets/heroimg/transport-logistics-products (1) 1.webp";
import "./hero.css";
function HeroSection() {
  return (
    <div className="grid h-[40rem] w-full sm:h-fit">
      <img
        src={placholder}
        alt=""
        className="col-span-full row-start-1 h-full w-full"
      />
      <div className="col-start-1 row-start-1 flex h-full w-full items-center justify-center bg-black/30">
        <div className="w-full space-y-6 px-2 md:p-10 lg:w-[1200px]">
          <h1 className="plus-jakarta-sans-700 text-center text-2xl text-white sm:w-[70%] sm:text-left sm:text-4xl lg:text-6xl">
            Get ready for a wider expansion of your business
          </h1>
          <p className="plus-jakarta-sans-500 text-md text-center text-white sm:w-[50%] sm:text-left sm:text-xl">
            Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam laoreet
            est fermentum sed sit. Turpis egestas bibendum tempus aenean en.
          </p>
          <div className="mx-auto flex h-fit w-full flex-col gap-4 rounded-lg border border-white/50 bg-[#8E8E8E85] p-2 sm:mx-0 sm:p-10">
            <div className="flex w-full items-center text-center sm:w-fit">
              <label
                htmlFor="trackBox"
                className="plus-jakarta-sans-700 w-full rounded-md bg-bg-color px-6 py-3 text-xs text-white sm:w-fit sm:text-xl"
              >
                Tracking Shipment
              </label>
            </div>
            <div className="flex w-full justify-center gap-4 sm:flex-row xl:gap-10">
              <input
                type="text"
                name="trackBox"
                id="trackBox"
                className="h-12 grow rounded-md border border-white/50 bg-[#D9D9D94A] sm:h-auto sm:w-[60dvw] xl:w-[50rem]"
              />
              <button
                type="button"
                className="plus-jakarta-sans-600 rounded-md bg-bg-color px-6 py-3 text-xl text-white sm:w-fit"
              >
                <span className="hidden xl:block">Track Shipment Now</span>
                <span className="block text-xs sm:text-lg xl:hidden">Go</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
