interface ServiceBlockPrps {
  bgImage: string;
  name: string;
  sub: string;
  body: string;
}

function ServiceBlock({ bgImage, body, name, sub }: ServiceBlockPrps) {
  return (
    <div
      style={{
        backgroundImage: `url("${bgImage}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      className="relative h-[513px] w-[420px] rounded-[20px] sm:m-2"
    >
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-red-500/20 to-red-600/70"></div>
      <div className="absolute bottom-0 left-0 flex flex-col items-start gap-5 rounded-[20px] p-[40px_20px] text-white">
        <p className="plus-jakarta-sans-700 h-[47px] w-[109px] rounded-[32px] bg-red-600 pt-[9px] text-center text-[24px] uppercase leading-[30.24px]">
          {name}
        </p>
        <p className="plus-jakarta-sans-700 text-[24px] capitalize leading-[30.24px]">
          {sub}
        </p>
        <p className="plus-jakarta-sans-400 text-[18px] leading-[25.2px]">
          {body}
        </p>
      </div>
    </div>
  );
}

export default ServiceBlock;
