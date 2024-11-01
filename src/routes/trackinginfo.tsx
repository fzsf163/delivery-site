import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
type Track = {
  id: string;
  tracking_id: string;
  tracking_status: string;
  created_at: string;
  updated_at: string;
  origin: string;
  destination: string;
};

const Iconcheck = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-check mx-auto mt-1 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
};

function TrackingData() {
  const [data, setData] = useState<Track | null>();

  const loc = useLocation();
  const { state } = loc;

  useEffect(() => {
    if (state) {
      setData(state.info);
    }
  }, [state]);

  const trackingDetails = [
    { label: "created", number: "1" },
    { label: "collected", number: "2" },
    { label: "departed", number: "3" },
    { label: "in transit", number: "4" },
    { label: "arrived at destination", number: "5" },
    { label: "out for delivery", number: "6" },
    { label: "delivered", number: "7" },
  ];

  return (
    <div className="mt-28 w-full space-y-5 p-3 sm:p-0">
      <div className="w-full border">
        <div className="mx-auto h-[150px] w-[200px]">
          <img
            src="/upexworld.png"
            alt="upexworld logo"
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="bg-red-600 p-4 text-base text-white">
        <p className="relative w-fit space-x-3 md:left-[23%] lg:left-[30%] xl:left-[36%] 2xl:left-[42%]">
          <span>Tracking Number</span>
          <span className="font-bold">
            {data?.tracking_id != ""
              ? data?.tracking_id
              : "No Tracking Provided"}
          </span>
        </p>
      </div>
      <div className="mx-auto flex w-fit items-center justify-between gap-10">
        <div className="inline-flex w-full flex-col items-start gap-5">
          {trackingDetails.map((t) => {
            const isCurrentStep =
              Number(data?.tracking_status) === Number(t.number);
            const isReachedStep =
              Number(data?.tracking_status) >= Number(t.number);
            const isDeliveredStep = t.label === "delivered";
            return (
              <div
                key={t.label}
                className="flex items-start justify-center gap-4"
              >
                <div className="flex flex-col items-center justify-center gap-5">
                  <div
                    className={`mx-auto size-10 rounded-full ${isCurrentStep ? "animate-pulse" : ""} ${
                      isDeliveredStep && isCurrentStep
                        ? "bg-green-500"
                        : isReachedStep
                          ? "bg-red-500"
                          : "border"
                    }`}
                  >
                    <Iconcheck></Iconcheck>
                  </div>
                  <div
                    className={`h-1 w-full rotate-90 ${t.label === "delivered" ? "hidden" : ""} ${Number(data?.tracking_status) >= Number(t.number) ? "bg-red-600" : "border"}`}
                  ></div>
                </div>
                <p className="mt-3 flex items-start gap-14 text-xs font-bold capitalize sm:mt-1 sm:text-xl md:gap-44">
                  {t.label}{" "}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex h-[34rem] flex-col items-start justify-between text-red-600">
          <p className="inline-flex flex-col text-xl">
            Origin{" "}
            <span className="text-sm font-semibold text-black">
              {data?.origin === "" ? "no data" : data?.origin}
            </span>
          </p>
          <p className="inline-flex flex-col text-xl">
            Destination{" "}
            <span className="text-sm font-semibold text-black">
              {data?.destination === "" ? "no data" : data?.destination}
            </span>
          </p>
        </div>
      </div>
      <div className="relative left-4 w-fit md:left-[25%] lg:left-[30%] xl:left-[36%] 2xl:left-[42%]">
        <p className="font-semibold text-red-400">Last Updated</p>
        <p
          className={`font-semibold ${data?.tracking_status === "7" ? "block" : "hidden"}`}
        >
          The shipment has been delivered
        </p>
        <p className="text-sm">{data?.updated_at}</p>
      </div>
    </div>
  );
}

export default TrackingData;
