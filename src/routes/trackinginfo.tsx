import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
type Track = {
  id: string;
  tracking_id: string;
  tracking_status: string;
  created_at: string;
  updated_at: string;
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

  const seeTrue = (param: string | undefined) => {
    if (param === "1") {
      return "first";
    }
    if (param === "2") {
      return "second";
    }
    if (param === "3") {
      return "third";
    }
    if (param === "4") {
      return "fourth";
    }
    if (param === "5") {
      return "fifth";
    }
    if (param === "6") {
      return "sixth";
    }
  };

  return (
    <div className="mx-auto mt-40 w-fit space-y-6">
      <p className="rounded-full bg-red-700 p-4 text-xl text-white">
        Tracking Number:{" "}
        {data?.tracking_id != "" ? data?.tracking_id : "No Tracking Provided"}
      </p>
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-center gap-4">
          <div
            className={`size-12 rounded-full ${seeTrue(data?.tracking_status) === "first" || seeTrue(data?.tracking_status) === "second" || seeTrue(data?.tracking_status) === "third" || seeTrue(data?.tracking_status) === "fourth" || seeTrue(data?.tracking_status) === "fifth" || seeTrue(data?.tracking_status) === "sixth" ? "bg-red-600" : "border"}`}
          ></div>
          <p className="text-xl font-bold">From</p>
        </div>
        <div
          className={`h-2 w-12 rotate-90 ${seeTrue(data?.tracking_status) === "first" || seeTrue(data?.tracking_status) === "second" || seeTrue(data?.tracking_status) === "third" || seeTrue(data?.tracking_status) === "fourth" || seeTrue(data?.tracking_status) === "fifth" || seeTrue(data?.tracking_status) === "sixth" ? "bg-red-600" : "border"}`}
        ></div>
        <div className="flex items-center gap-4">
          <div
            className={`size-12 rounded-full ${seeTrue(data?.tracking_status) === "second" || seeTrue(data?.tracking_status) === "third" || seeTrue(data?.tracking_status) === "fourth" || seeTrue(data?.tracking_status) === "fifth" || seeTrue(data?.tracking_status) === "sixth" ? "bg-red-600" : "border"}`}
          ></div>
          <p className="text-xl font-bold">We Have Your Package</p>
        </div>
        <div
          className={`h-2 w-12 rotate-90 ${seeTrue(data?.tracking_status) === "second" || seeTrue(data?.tracking_status) === "third" || seeTrue(data?.tracking_status) === "fourth" || seeTrue(data?.tracking_status) === "fifth" || seeTrue(data?.tracking_status) === "sixth" ? "bg-red-600" : "border"}`}
        ></div>
        <div className="flex items-center gap-4">
          <div
            className={`size-12 rounded-full ${seeTrue(data?.tracking_status) === "third" || seeTrue(data?.tracking_status) === "fourth" || seeTrue(data?.tracking_status) === "fifth" || seeTrue(data?.tracking_status) === "sixth" ? "bg-red-600" : "border"}`}
          ></div>
          <p className="text-xl font-bold">In Transit</p>
        </div>
        <div
          className={`h-2 w-12 rotate-90 ${seeTrue(data?.tracking_status) === "third" || seeTrue(data?.tracking_status) === "fourth" || seeTrue(data?.tracking_status) === "fifth" || seeTrue(data?.tracking_status) === "sixth" ? "bg-red-600" : "border"}`}
        ></div>
        <div className="flex items-center gap-4">
          <div
            className={`size-12 rounded-full ${seeTrue(data?.tracking_status) === "fourth" || seeTrue(data?.tracking_status) === "fifth" || seeTrue(data?.tracking_status) === "sixth" ? "bg-red-600" : "border"}`}
          ></div>
          <p className="text-xl font-bold">On The Way</p>
        </div>
        <div
          className={`h-2 w-12 rotate-90 ${seeTrue(data?.tracking_status) === "fourth" || seeTrue(data?.tracking_status) === "fifth" || seeTrue(data?.tracking_status) === "sixth" ? "bg-red-600" : "border"}`}
        ></div>
        <div className="flex items-center gap-4">
          <div
            className={`size-12 rounded-full ${seeTrue(data?.tracking_status) === "fifth" || seeTrue(data?.tracking_status) === "sixth" ? "bg-red-600" : "border"}`}
          ></div>
          <p className="text-xl font-bold">Out For Delivery</p>
        </div>
        <div
          className={`h-2 w-12 rotate-90 ${seeTrue(data?.tracking_status) === "fifth" || seeTrue(data?.tracking_status) === "sixth" ? "bg-red-600" : "border"}`}
        ></div>
        <div className="flex items-center gap-4">
          <div
            className={`size-12 rounded-full ${seeTrue(data?.tracking_status) === "sixth" ? "bg-red-600" : "border"}`}
          ></div>
          <p className="text-xl font-bold">Delivered</p>
        </div>
      </div>
    </div>
  );
}

export default TrackingData;
