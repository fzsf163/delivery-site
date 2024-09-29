import img3 from "../../assets/jumbo-jet-flying-sky1.png";
import m2 from "../../assets/Mask-group2.png";
import img1 from "../../assets/transport-logistics-concept(1)1.png";
import img2 from "../../assets/transport-logistics-concept1.png";

export default function Services() {
  return (
    <div
      style={{
        backgroundImage: `url("${m2}")`,
        backgroundSize: "74%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        objectFit: "cover",
      }}
      className="h-full w-full bg-[#EFF4FF] pt-[90px] xl:h-[1010px]"
    >
      <div className="mx-auto flex w-fit flex-col items-center">
        <p className="plus-jakarta-sans-600 h-[45px] w-[140px] rounded-[36px] bg-[#18347B] pt-[8px] text-center text-[24px] leading-[30.24px] text-white">
          Services
        </p>
        <h5 className="plus-jakarta-sans-700 mt-[19px] h-[120px] w-fit text-nowrap text-center text-[48px] leading-[60.48px]">
          Our wide range of services
        </h5>
      </div>

      <div className="mt-[20px] flex flex-wrap items-center justify-center gap-[30px] pb-10">
        <div
          style={{
            backgroundImage: `url("${img1}")`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            objectFit: "cover",
          }}
          className="h-[513px] w-[420px] rounded-[20px]"
        >
          <div className="relative h-full rounded-[20px] bg-gradient-to-t from-[#18347B] to-[#D9D9D900]">
            <div className="absolute bottom-0 left-0 flex flex-col items-start gap-5 p-[40px_20px] text-white">
              <p className="plus-jakarta-sans-700 h-[47px] w-[109px] rounded-[32px] bg-[#18347B] pt-[9px] text-center text-[24px] leading-[30.24px]">
                Road
              </p>
              <p className="plus-jakarta-sans-700 text-[24px] leading-[30.24px]">
                Land Freight Transportation
              </p>
              <p className="plus-jakarta-sans-400 text-[18px] leading-[25.2px]">
                For deliveries that don’t need to go by air, we also offer land
                transport. We use trucks to safely get your packages where they
                need to go, whether it’s nearby or far away.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url("${img3}")`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            objectFit: "cover",
          }}
          className="h-[513px] w-[420px] rounded-[20px]"
        >
          <div className="relative h-full rounded-[20px] bg-gradient-to-t from-[#18347B] to-[#D9D9D900]">
            <div className="absolute bottom-0 left-0 flex flex-col items-start gap-5 p-[40px_20px] text-white">
              <p className="plus-jakarta-sans-700 h-[47px] w-[109px] rounded-[32px] bg-[#18347B] pt-[9px] text-center text-[24px] leading-[30.24px]">
                Air
              </p>
              <p className="plus-jakarta-sans-700 text-[24px] leading-[30.24px]">
                Air Freight Transportation
              </p>
              <p className="plus-jakarta-sans-400 text-[18px] leading-[25.2px]">
                If you need to send something quickly, our air freight service
                is perfect! We’ll help you get your packages on a plane, so they
                can reach their destination fast.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url("${img2}")`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            objectFit: "cover",
          }}
          className="h-[513px] w-[420px] rounded-[20px]"
        >
          <div className="relative h-full rounded-[20px] bg-gradient-to-t from-[#18347B] to-[#D9D9D900]">
            <div className="absolute bottom-0 left-0 flex flex-col items-start gap-5 p-[40px_20px] text-white">
              <p className="plus-jakarta-sans-700 h-[47px] w-[109px] rounded-[32px] bg-[#18347B] pt-[9px] text-center text-[24px] leading-[30.24px]">
                Water
              </p>
              <p className="plus-jakarta-sans-700 text-[24px] leading-[30.24px]">
                Ship Freight Transportation
              </p>
              <p className="plus-jakarta-sans-400 text-[18px] leading-[25.2px]">
                Lorem ipsum dolor sit amet consectetur. Scelerisque aliquam
                laoreet est f
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
