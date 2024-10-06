import sevendays from "../../assets/serviceicons/7-days.png";
import air from "../../assets/serviceicons/air-freight.png";
import customs from "../../assets/serviceicons/customs.png";
import track from "../../assets/serviceicons/tracking-app.png";
import road from "../../assets/serviceicons/truck.png";
import ch from "../../assets/serviceImg/carefulhandeling.jpeg";
import gs from "../../assets/serviceImg/guarentedsafety.jpeg";
import zdp from "../../assets/serviceImg/zerodmgpromise.jpeg";
import "./service.css";
function ServiceDetails() {
  return (
    <div>
      {" "}
      <h5 className="plus-jakarta-sans-700 mx-auto mt-[39px] p-5 text-center text-2xl leading-relaxed sm:w-[80%] sm:p-0 sm:text-3xl lg:w-[70%] xl:h-[120px] xl:text-[38px] xl:leading-[60.48px]">
        Welcome to Upex World BD! We make shipping your packages and documents
        easy and fast. Here’s what we can do for you.
      </h5>
      <div className="mx-auto mt-10 lg:w-[80%] 2xl:w-[70%]">
        <ul className="list-service xl:[&_img]:size-30 grid auto-rows-fr items-center gap-10 space-y-4 p-5 sm:[&_img]:size-10 lg:[&_img]:size-24 [&_li]:text-2xl [&_li]:font-bold [&_li]:text-text-color [&_p]:text-lg [&_p]:font-medium [&_p]:text-black">
          <div className="gap-3 space-y-4 sm:grid sm:auto-cols-fr sm:grid-flow-col sm:gap-10 sm:space-y-0">
            <div className="mx-auto w-[10rem] sm:w-full">
              <img src={air} className="h-full w-full" alt="" />
            </div>
            <li className="col-span-8">
              Air Freight Services
              <p>
                If you need to send something quickly, our air freight service
                is perfect! We’ll help you get your packages on a plane, so they
                can reach their destination fast.
              </p>
            </li>
          </div>
          <div className="gap-3 space-y-4 sm:grid sm:auto-cols-fr sm:grid-flow-col sm:gap-10 sm:space-y-0">
            <div className="mx-auto w-[10rem] sm:w-full">
              <img src={customs} className="h-full w-full" alt="" />
            </div>
            <li className="col-span-8">
              Customs Clearance{" "}
              <p>
                Shipping items to another country can be complicated, but we are
                here to help! Our team knows how to handle all the rules and
                paperwork, so your packages can pass through customs smoothly.
              </p>
            </li>
          </div>
          <div className="gap-3 space-y-4 sm:grid sm:auto-cols-fr sm:grid-flow-col sm:gap-10 sm:space-y-0">
            <div className="mx-auto w-[10rem] sm:w-full">
              <img src={track} className="h-full w-full" alt="" />
            </div>
            <li className="col-span-8">
              Online Shipment Tracking
              <p>
                Worried about where your package is? Don’t be! With our online
                tracking, you can see exactly where your shipment is at any
                time. Just enter your tracking number, and you’ll have all the
                information you need!
              </p>
            </li>
          </div>
          <div className="gap-3 space-y-4 sm:grid sm:auto-cols-fr sm:grid-flow-col sm:gap-10 sm:space-y-0">
            <div className="mx-auto w-[10rem] sm:w-full">
              <img src={road} className="h-full w-full" alt="" />
            </div>
            <li className="col-span-8">
              Land Transport
              <p>
                For deliveries that don’t need to go by air, we also offer land
                transport. We use trucks to safely get your packages where they
                need to go, whether it’s nearby or far away.
              </p>
            </li>
          </div>
          <div className="gap-3 space-y-4 sm:grid sm:auto-cols-fr sm:grid-flow-col sm:gap-10 sm:space-y-0">
            <div className="mx-auto w-[10rem] sm:w-full">
              <img src={sevendays} className="h-full w-full" alt="" />
            </div>
            <li className="col-span-8">
              7 Days a Week Operations
              <p>
                We know you need to ship things all the time, so we work every
                day of the week! No matter when you need us, we’re here to help
                with your shipping needs.
              </p>
            </li>
          </div>
        </ul>
      </div>
      {/* why us */}
      <div>
        <h5 className="plus-jakarta-sans-700 mx-auto mt-[39px] p-5 text-center text-4xl leading-relaxed sm:w-[80%] sm:p-0 sm:text-3xl lg:w-[70%] xl:text-[38px]">
          Why Choose Upex World BD?
        </h5>
        <ul className="list-service mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-12 p-5 sm:mt-10 md:w-[80%] [&_li]:text-2xl [&_li]:font-bold [&_li]:text-white [&_p]:text-lg [&_p]:font-medium [&_p]:text-white">
          <li className="grid">
            <img
              src={gs}
              alt="image of guarnteed safety"
              className="col-span-full col-start-1 row-start-1 rounded-lg"
            />
            <div className="col-span-full col-start-1 row-start-1 h-full w-full place-content-center rounded-lg p-4 text-center mix-blend-screen backdrop-blur-0 backdrop-brightness-[0.6]">
              Guaranteed Safety:
              <p>
                We promise to take care of your packages and keep them safe.
              </p>
            </div>
          </li>
          <li className="grid">
            <img
              src={ch}
              alt="image of Careful Handling"
              className="col-span-full col-start-1 row-start-1 rounded-lg"
            />
            <div className="col-span-full col-start-1 row-start-1 h-full w-full place-content-center rounded-lg p-4 text-center mix-blend-screen backdrop-blur-0 backdrop-brightness-[0.6]">
              Careful Handling:
              <p>
                Our team is trained to handle your items gently, so nothing gets
              </p>
            </div>
          </li>
          <li className="grid h-full">
            <img
              src={zdp}
              alt="image of Zero Damage Promise"
              className="col-span-full col-start-1 row-start-1 h-full rounded-lg"
            />
            <div className="col-span-full col-start-1 row-start-1 h-full w-full place-content-center rounded-lg p-4 text-center mix-blend-screen backdrop-blur-0 backdrop-brightness-[0.6]">
              Zero Damage Promise:
              <p>
                We use strong packaging to protect your things during shipping.
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* started todaye */}
      <div>
        <h5 className="plus-jakarta-sans-700 mx-auto mt-[39px] p-5 text-center text-4xl leading-relaxed sm:w-[80%] sm:p-0 sm:text-3xl lg:w-[70%] xl:text-[38px] xl:leading-[60.48px]">
          Get Started Today!
        </h5>
        <p className="plus-jakarta-sans-400 mx-auto mt-[9px] p-5 text-justify text-2xl leading-relaxed sm:w-[80%] sm:p-0 sm:text-center sm:text-xl lg:w-[70%] xl:text-[22px]">
          Are you ready to ship your packages? Contact us now for a quick quote
          or to learn more about our services. We’re here to help you send your
          items anywhere in the world!
        </p>
      </div>
    </div>
  );
}

export default ServiceDetails;
