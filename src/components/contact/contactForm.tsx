import axios from "axios";
import { FormEvent } from "react";

function ContactForm() {
  async function onSubmit(formdata: FormEvent<HTMLFormElement>) {
    formdata.preventDefault();
    const formData = new FormData(formdata.currentTarget);
    const name = formData.get("fullnameBox");
    const email = formData.get("emailaddressBox");
    const subject = formData.get("subjectBox");
    const message = formData.get("commentBox");
    const data = JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
    try {
      const v = await axios.post("https://api.upexworldbd.com/contact/", data);
      console.log(v.data);
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
  }
  return (
    <div className="mx-auto w-fit space-y-5 p-5 md:p-10 xl:p-0">
      <div className="h-[45px] w-fit rounded-[36px] bg-[#18347B] text-center">
        <p className="plus-jakarta-sans-600 text-md px-4 py-3 text-white sm:p-[5px_20px_10px_15px] sm:text-[24px] sm:leading-[30.24px]">
          Contact Us
        </p>
      </div>
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:gap-0">
        <div>
          <p className="plus-jakarta-sans-700 max-w-[40rem] text-3xl xl:text-6xl">
            Write Us What you want to know
          </p>
        </div>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="space-y-5">
            <div className="space-y-5 [&_input]:p-3 [&_textarea]:p-3">
              <div className="flex flex-row gap-5">
                <input
                  name="fullnameBox"
                  type="text"
                  placeholder="Full Name"
                  className="h-12 w-full rounded-md outline outline-1 outline-[#68686896]"
                />
                <input
                  name="emailaddressBox"
                  type="text"
                  placeholder="Email Address"
                  className="h-12 w-full rounded-md outline outline-1 outline-[#68686896]"
                />
              </div>
              <input
                name="subjectBox"
                type="text"
                placeholder="Subject"
                className="h-12 w-full rounded-md outline outline-1 outline-[#68686896]"
              />
              <textarea
                name="commentBox"
                rows={10}
                cols={40}
                placeholder="Message"
                className="w-full rounded-md outline outline-1 outline-[#68686896]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="plus-jakarta-sans-600 h-[45px] w-[158px] rounded-[10px] bg-bg-color p-[10px_20px_10px_20px] leading-[25.2px] text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
