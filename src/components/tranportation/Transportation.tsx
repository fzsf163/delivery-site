import img2 from "../../assets/constraints/Rectangle 3(1).webp";

export default function Transportation() {
  return (
    <div className="w- mx-auto flex max-w-[1320px] flex-wrap items-center justify-center lg:flex-nowrap">
      <div>
        <div className="mx-auto h-[45px] w-fit rounded-[36px] bg-red-600 text-center lg:w-[370px]">
          <p className="plus-jakarta-sans-600 text-md px-4 py-3 text-white sm:p-[5px_20px_10px_15px] sm:text-[24px] sm:leading-[30.24px]">
            Our constrain Transportation
          </p>
        </div>
        <div className="mt-[19px]">
          <h1 className="plus-jakarta-sans-700 h-auto w-full text-center text-3xl lg:h-[120px] lg:w-[498px] lg:text-[48px] lg:leading-[60.48px]">
            We'll keep your items damage free
          </h1>
        </div>
        <p className="plus-jakarta-sans-400 mt-[24px] h-auto w-full text-center text-[18px] leading-[25.2px] lg:h-[75px] lg:w-[533px]">
          Our reliable packaging and careful handling ensure everything arrives
          in perfect condition. You can trust us to protect your shipments every
          step of the way.
        </p>

        <div className="-before:bottom-10 relative mx-auto mt-[24px] h-auto w-fit rounded-[15px] bg-[#ffffff] pb-4 pr-5 before:absolute before:h-full before:w-[14px] sm:before:rounded-[15px_0px_0px_15px] sm:before:bg-red-600 lg:h-[175px] lg:w-[533px] lg:pb-0 lg:pr-0">
          {" "}
          <ul className="plus-jakarta-sans-600 row-span-3 ml-12 grid w-fit list-disc grid-cols-12 gap-5 text-wrap break-words pt-4 text-xs leading-[25.2px] marker:text-[#18347B] md:gap-x-10 md:gap-y-5 md:pt-[25px] md:text-xl lg:text-[18px]">
            <li className="col-span-6">Guaranteed safety.</li>
            <li className="col-span-6">Careful handling</li>
            <li className="col-span-6">Always protected</li>
            <li className="col-span-6">Secure delivery</li>
            <li className="col-span-6">Handled safely</li>
            <li className="col-span-6">Zero damage</li>
          </ul>
        </div>
        <div className="mx-auto mt-[54px] w-fit lg:w-full">
          <a href="#getQuote">
            <button className="plus-jakarta-sans-600 h-[45px] w-[158px] rounded-[10px] bg-red-600 p-[10px_20px_10px_20px] leading-[25.2px] text-white">
              Get a Quota
            </button>
          </a>
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
