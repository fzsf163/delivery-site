import axios from "axios";
import { useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import placholder from "../../assets/heroimg/transport-logistics-products (1) 1.webp";
import "./hero.css";
function HeroSection() {
  const [tracking, SetTracking] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();
  const handleTracking = async () => {
    if (tracking == "") {
      setError("Tracking number is required");
    }
    if (tracking !== "") {
      try {
        const p = await axios.get(
          `https://api.upexworldbd.com/api/manual_tracking.php?tracking_id=${tracking}`,
        );
        if (p.data) {
          nav("tracking", {
            state: { info: p.data, trackingNumber: tracking },
          });
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 404) setError("Tracking ID not found");
        } else {
          setError(String(error));
        }
      }
    }
  };

  const handleKeyPress = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTracking();
    }
  };
  return (
    <div className="grid h-[40rem] w-full lg:h-[50rem] 2xl:h-fit">
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
          <p className="plus-jakarta-sans-500 text-md text-center text-white sm:w-[60%] sm:text-left sm:text-xl">
            With our fast and easy shipping. Reach more customers around the
            world quickly and safely with our trusted services.
          </p>
          <div className="mx-auto flex h-fit w-full flex-col gap-4 rounded-lg border border-white/50 bg-[#8E8E8E85] p-2 sm:mx-0 sm:p-10">
            <div className="flex w-full items-center text-center sm:w-fit">
              <label
                htmlFor="trackBox"
                className="plus-jakarta-sans-700 w-full rounded-md bg-red-600 px-6 py-3 text-xs text-white sm:w-fit sm:text-xl"
              >
                Tracking Shipment
              </label>
            </div>
            <div className="flex w-full justify-center gap-4 sm:flex-row xl:gap-10">
              <input
                type="text"
                name="trackBox"
                id="trackBox"
                className="h-12 grow rounded-md border border-white/50 bg-[#D9D9D94A] px-2 font-semibold text-white sm:h-auto sm:w-[60dvw] xl:w-[50rem]"
                onChange={(e) => SetTracking(e.currentTarget.value)}
                value={tracking}
                onKeyDown={handleKeyPress}
              />
              <button
                type="button"
                className="plus-jakarta-sans-600 rounded-md bg-red-600 px-6 py-3 text-xl text-white sm:w-fit"
                onClick={handleTracking}
              >
                <span className="hidden text-nowrap xl:inline">
                  Track Shipment Now
                </span>
                <span className="block text-xs sm:text-lg xl:hidden">Go</span>
              </button>
            </div>
            {error && <p className="font-bold text-white">*{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
