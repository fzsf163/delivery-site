import m2 from "../../assets/Mask-group2.png";
import services from "./data.json";
import ServiceBlock from "./showblocks";
export default function Services() {
  return (
    <div
      style={{
        backgroundImage: `url("${m2}")`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        objectFit: "cover",
      }}
      className="h-full w-full bg-[#EFF4FF] pt-[90px] xl:h-[1010px]"
    >
      <div className="mx-auto flex w-fit flex-col items-center">
        <p className="plus-jakarta-sans-600 h-[45px] w-[140px] rounded-[36px] bg-red-600 pt-[8px] text-center text-[24px] leading-[30.24px] text-white">
          Services
        </p>
        <h5 className="plus-jakarta-sans-700 mt-[19px] h-[120px] w-fit text-center text-4xl leading-[60.48px] md:text-nowrap md:text-[48px]">
          Our wide range of services
        </h5>
      </div>

      <div className="mt-[20px] flex flex-wrap items-center justify-center gap-[30px] pb-10">
        {services.map((s) => {
          return (
            <ServiceBlock
              bgImage={s.bgImage}
              name={s.name}
              sub={s.sub}
              body={s.body}
            ></ServiceBlock>
          );
        })}

     
      </div>
    </div>
  );
}
