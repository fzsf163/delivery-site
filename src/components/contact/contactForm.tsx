function ContactForm() {
  return (
    <div className="mx-auto w-fit space-y-5 p-5 md:p-10 xl:p-0">
      <div className="h-[45px] w-fit rounded-[36px] bg-[#18347B] text-center">
        <p className="plus-jakarta-sans-600 text-md px-4 py-3 text-white sm:p-[5px_20px_10px_15px] sm:text-[24px] sm:leading-[30.24px]">
          Contact Us
        </p>
      </div>
      <div className="flex items-start justify-between flex-col gap-5 sm:flex-row sm:gap-0">
        <div>
          <p className="plus-jakarta-sans-700 max-w-[40rem] text-3xl xl:text-6xl">
            Write Us What you want to know
          </p>
        </div>
        <div className="space-y-5">
          <div className="[&_input]:p-3 [&_textarea]:p-3">
            <form action="#" className="space-y-5">
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
            </form>
          </div>
          <button
            type="button"
            className="plus-jakarta-sans-600 h-[45px] w-[158px] rounded-[10px] bg-bg-color p-[10px_20px_10px_20px] leading-[25.2px] text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
