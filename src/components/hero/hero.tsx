import placholder from "../../assets/heroimg/transport-logistics-products (1) 1.webp";
import "./hero.css";
function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url("${placholder}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[50rem] w-full"
    >
      <div className="flex h-full w-full items-center justify-center bg-black/30">
        <div className="max-w-[1200px] space-y-6">
          <h1 className="plus-jakarta-sans-700 text-4xl text-white sm:w-[60%] lg:text-6xl">
            Get ready for a wider expansion of your business
          </h1>
          <p className="plus-jakarta-sans-500 text-xl text-white sm:w-[50%]">
            Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam laoreet
            est fermentum sed sit. Turpis egestas bibendum tempus aenean en.
          </p>
          <div className="relative flex h-fit w-fit flex-col gap-7 rounded-lg border border-white/50 bg-[#8E8E8E85] p-10">
            <div className="flex w-fit items-center">
              <label
                htmlFor="trackBox"
                className="plus-jakarta-sans-700 w-fit rounded-md bg-bg-color px-6 py-3 text-xl text-white"
              >
                Tracking Shipment
              </label>
            </div>
            <div className="flex w-fit flex-col gap-4 sm:flex-row xl:gap-10">
              <input
                type="text"
                name="trackBox"
                id="trackBox"
                className="h-12 w-[60dvw] grow rounded-md border border-white/50 bg-[#D9D9D94A] sm:h-auto xl:w-[50rem]"
              />
              <button
                type="button"
                className="plus-jakarta-sans-600 w-fit rounded-md bg-bg-color px-6 py-3 text-xl text-white"
              >
                <span className="hidden xl:block">Track Shipment Now</span>
                <span className="block xl:hidden">Go</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
