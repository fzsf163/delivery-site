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
    { label: "collected", number: "3" },
    { label: "departed", number: "2" },
    { label: "in transit", number: "4" },
    { label: "arrived at destination", number: "5" },
    { label: "out for delivery", number: "6" },
    { label: "delivered", number: "7" },
  ];

  return (
    <div className="mx-auto mt-40 w-fit space-y-10">
      <div>
        <p className="space-x-3 rounded-full bg-red-600 p-4 text-xl text-white">
          <span>Tracking Number</span>
          <span className="font-bold">
            {data?.tracking_id != ""
              ? data?.tracking_id
              : "No Tracking Provided"}
          </span>
        </p>
      </div>
      <div className="inline-flex flex-col items-start gap-5">
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
              <p className="text-2xl font-bold capitalize">{t.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrackingData;
