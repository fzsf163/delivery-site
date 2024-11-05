import curveLine from "../../assets/curve-connect.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";

export default function Process() {
  return (
    <div className="mx-auto mt-[158px] hidden w-[1320px] xl:block">
      <div>
        <p className="plus-jakarta-sans-600 h-[45px] w-[140px] rounded-[32px] bg-red-600 pt-[6px] text-center text-[24px] leading-[30.24px] text-white">
          Process
        </p>
        <h1 className="plus-jakarta-sans-700 mt-[18px] h-[120px] w-[528px] text-[48px] leading-[60.48px]">
          We always follow the best way of logistics{" "}
        </h1>
        <p className="plus-jakarta-sans-400 mt-[24px] h-[50px] w-[544px] text-[18px] leading-[25.2px]">
          Your satisfaction is our priority, ensuring every shipment is handled
          with care and efficiency.
        </p>
      </div>
      <div className="relative mt-[24px] flex h-[700px] items-start justify-between">
        {/* card 1 */}
        <div
          style={{
            backgroundImage: `url('${p1}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
            objectFit: "cover",
          }}
          className="relative top-[98px] z-10 h-[349px] w-[379px] rounded-[20px]"
        >
          <div className="relative h-full w-full rounded-[20px] bg-gradient-to-b from-red-500/20 to-red-600/70 text-white">
            <div className="absolute bottom-0 left-0 flex flex-col items-start gap-5 p-[40px_20px] text-white">
              <p className="plus-jakarta-sans-700 text-[24px] leading-[30.24px]">
                Receive Packages
              </p>
              <p className="plus-jakarta-sans-400 text-[18px] leading-[25.2px]">
                Track your delivery every step of the way to see exactly when it
                arrives!
              </p>
            </div>
            <div className="plus-jakarta-sans-800 absolute -bottom-10 left-[35%] h-[86px] w-[86px] rounded-full bg-red-600 pt-3 text-center text-[48px] leading-[60.48px]">
              1
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div
          style={{
            backgroundImage: `url('${p2}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
            objectFit: "cover",
          }}
          className="relative top-[280px] z-10 h-[349px] w-[379px] rounded-[20px]"
        >
          <div className="relative h-full w-full rounded-[20px] bg-gradient-to-b from-red-500/20 to-red-600/70 text-white">
            <div className="absolute bottom-0 left-0 flex flex-col items-start gap-5 p-[40px_20px] text-white">
              <p className="plus-jakarta-sans-700 text-[24px] leading-[30.24px]">
                Transport Packages
              </p>
              <p className="plus-jakarta-sans-400 text-[18px] leading-[25.2px]">
                Rest easy knowing your packages are on their way, handled with
                care and speed!
              </p>
            </div>
            <div className="plus-jakarta-sans-800 absolute -bottom-10 left-[35%] h-[86px] w-[86px] rounded-full bg-red-600 pt-3 text-center text-[48px] leading-[60.48px]">
              2
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div
          style={{
            backgroundImage: `url('${p3}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
            objectFit: "cover",
          }}
          className="z-10 h-[349px] w-[379px] rounded-[20px]"
        >
          <div className="relative h-full w-full rounded-[20px] bg-gradient-to-b from-red-500/20 to-red-600/70 text-white">
            <div className="absolute bottom-0 left-0 flex flex-col items-start gap-5 p-[40px_20px] text-white">
              <p className="plus-jakarta-sans-700 text-[24px] leading-[30.24px]">
                Deliver Packages
              </p>
              <p className="plus-jakarta-sans-400 text-[18px] leading-[25.2px]">
                Enjoy peace of mind with our quick and safe delivery right to
                your door!
              </p>
            </div>
            <div className="plus-jakarta-sans-800 absolute -bottom-10 left-[35%] h-[86px] w-[86px] rounded-full bg-red-600 pt-3 text-center text-[48px] leading-[60.48px]">
              3
            </div>
          </div>
        </div>
        {/* curve line */}
        <div className="absolute bottom-[160px] left-[225px] z-0">
          <img src={curveLine} alt="" className="w-[966.5px]" />
        </div>
      </div>
    </div>
  );
}
