import axios from "axios";
import { FormEvent, useState } from "react";

function ContactForm() {
  const [success, setSuccess] = useState("");
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
      if (v.data.message === "Email sent successfully") {
        setSuccess(v.data.message);
        let count = 10;
        const countdown = setInterval(() => {
          setSuccess(
            v.data.message + " " + "(" + String((count = count - 1)) + ")",
          );

          if (count === 0) {
            clearInterval(countdown);
            setSuccess("");
          }
        }, 1000);
      }
    } catch (error) {
      if (error) {
        setSuccess(String(error));
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
    }
  }
  return (
    <div className="mx-auto w-fit space-y-5 p-5 md:p-10 xl:p-0">
      <div className="h-[45px] w-fit rounded-[36px] bg-red-600 text-center">
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
                  required
                />
                <input
                  name="emailaddressBox"
                  type="text"
                  placeholder="Email Address"
                  className="h-12 w-full rounded-md outline outline-1 outline-[#68686896]"
                  required
                />
              </div>
              <input
                name="subjectBox"
                type="text"
                placeholder="Subject"
                className="h-12 w-full rounded-md outline outline-1 outline-[#68686896]"
                required
              />
              <textarea
                name="commentBox"
                rows={10}
                cols={40}
                placeholder="Message"
                className="w-full rounded-md outline outline-1 outline-[#68686896]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="plus-jakarta-sans-600 h-[45px] w-fit rounded-[10px] bg-red-600 p-[10px_20px_10px_20px] leading-[25.2px] text-white disabled:bg-text-color/50"
              disabled={success === "" ? false : true}
            >
              {success === "" ? (
                <p>Submit</p>
              ) : (
                <p className="w-full">{success}</p>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
