function ContactForm() {
  return (
    <div className="mx-auto w-fit">
      <div className="h-[45px] w-fit rounded-[36px] bg-[#18347B] text-center">
        <p className="plus-jakarta-sans-600 text-md px-4 py-3 text-white sm:p-[5px_20px_10px_15px] sm:text-[24px] sm:leading-[30.24px]">
          Contact Us
        </p>
      </div>
      <div>
        <div>
          <p className="plus-jakarta-sans-700 max-w-[40rem] text-6xl">
            Write Us What you want to know
          </p>
        </div>
        <div>
          <div>
            <form action="#">
              <input type="text" className="outline" />
              <input type="text" className="outline" />
              <textarea className="outline"></textarea>
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
