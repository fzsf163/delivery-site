import { Accordion } from "./accordion";
// import "./faq.css";

export default function Faq() {
  return (
    <div className="mx-auto mt-[168px] flex w-full flex-wrap items-start justify-center xl:w-[1320px] xl:flex-nowrap">
      <div className="mx-auto w-fit">
        <p className="plus-jakarta-sans-600 mx-auto h-[45px] w-[140px] rounded-[32px] bg-[#18347B] pt-[9px] text-center text-[24px] leading-[30.24px] text-white lg:mx-0">
          FAQ
        </p>
        <h1 className="plus-jakarta-sans-700 mx-auto mt-[18px] h-auto w-fit text-center text-xl lg:mx-0 lg:h-fit lg:w-[528px] lg:text-left lg:text-[48px] lg:leading-[60.48px]">
          Questions You Might Have
        </h1>
        <p className="plus-jakarta-sans-400 mx-auto mt-2 h-auto w-[80%] text-center text-[18px] lg:mt-[24px] lg:h-[75px] lg:w-[533px] lg:text-left lg:leading-[25.2px]">
          Here are some common questions to help you understand our services
          better!
        </p>
      </div>
      {/* accordion */}
      <div className="mt-5 flex flex-col gap-[24px] lg:mt-0">
        <Accordion
          title="How do I track my shipment?"
          description="You can easily track your shipment using the tracking number we provide. Just enter it on our website, and you’ll see the real-time status of your package."
        ></Accordion>
        <Accordion
          title="What should I do if my package is delayed?"
          description="If your package is delayed, please contact our customer service team. We’ll help you find out what’s happening and get your package moving as quickly as possible."
        ></Accordion>
        <Accordion
          title="What items can I send with your service?"
          description="You can send a variety of items, including documents, gifts, and packages. However, some items may have restrictions due to customs regulations. Please check our website for a full list of items you can and cannot send."
        ></Accordion>
      </div>
    </div>
  );
}
