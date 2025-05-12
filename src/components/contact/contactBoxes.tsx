import closeUpOffice from "../../assets/contact/boxes_imag/closeup-image-office-phone (1).webp";
import emailMsg from "../../assets/contact/boxes_imag/message-online-chat-social-text-concept 1.webp";
import twoGuys from "../../assets/contact/boxes_imag/two-indian-business-man-suits-sitting-office-cafe-looking-laptop-drinking-coffee (1).webp";

const boxes = [
  {
    img: emailMsg,
    titleText: "Send us mail",
    des: "info@upexbd.com",
    des2: "contact@upexbd.com",
  },
  {
    img: closeUpOffice,
    titleText: "Call us",
    des: "+880 17114 73954",
    des2: "+880 1896 005890",
  },
  {
    img: twoGuys,
    titleText: "Visit our office",
    des: "House 4. Road 5. Sector 1. Uttara Dhaka 1230",
  },
];

function BoxForContact() {
  return (
    <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center gap-8 p-3 xl:w-[70%]">
      {boxes.map((b) => {
        const key = crypto.randomUUID();
        return (
          <div key={key} className="relative max-w-[20rem]">
            <img src={b.img} className="h-full w-full" alt={""}></img>
            <div className="absolute bottom-0 flex h-[9rem] w-full flex-col items-center justify-center gap-4 rounded-md bg-white p-6 text-center font-bold shadow">
              <p className="text-center text-xl">{b.titleText}</p>
              <div className="w-[80%]">
                <p className="text-sm">{b.des}</p>
                <p className="text-sm">{b.des2}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoxForContact;
