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
  console.log("🚀 ~ TrackingData ~ state:", state);
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
    <div className="mt-40 w-full space-y-10 p-3 sm:p-0">
      <div>
        <p className="space-x-3 bg-red-600 p-4 text-center text-xl text-white">
          <span>Tracking Number</span>
          <span className="font-bold">
            {data?.tracking_id != ""
              ? data?.tracking_id
              : "No Tracking Provided"}
          </span>
        </p>
      </div>
      <div className="mx-auto w-fit">
        <div className="inline-flex w-full flex-col items-start gap-5">
          {trackingDetails.map((t) => {
            return (
              <div
                key={t.label}
                className="flex items-start justify-center gap-4"
              >
                <div className="flex flex-col items-center justify-center gap-5">
                  <div
                    className={`mx-auto size-10 rounded-full ${Number(data?.tracking_status) === Number(t.number) ? "animate-pulse" : ""} ${Number(data?.tracking_status) >= Number(t.number) ? (data?.tracking_status === "7" ? "bg-green-600" : "bg-red-600") : "border"}`}
                  >
                    <Iconcheck></Iconcheck>
                  </div>
                  <div
                    className={`h-1 w-full rotate-90 ${t.label === "delivered" ? "hidden" : ""} ${Number(data?.tracking_status) >= Number(t.number) ? "bg-red-600" : "border"}`}
                  ></div>
                </div>
                <p className="mt-3 flex items-start justify-center gap-44 text-xs font-bold capitalize sm:mt-1 sm:text-xl">
                  {t.label}{" "}
                  <span
                    className={`font-normal ${t.label === "created" || t.label === "delivered" ? "text-base text-gray-400" : ""}`}
                  >
                    {t.label === "created" ? (
                      <span className="inline-flex flex-col">
                        Origin{" "}
                        <span className="text-sm">
                          {data?.origin === "" ? "no data" : data?.origin}
                        </span>
                      </span>
                    ) : t.label === "delivered" ? (
                      <span className="inline-flex flex-col">
                        Destination{" "}
                        <span className="text-sm">
                          {data?.destination === ""
                            ? "no data"
                            : data?.destination}
                        </span>
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrackingData;
