import img from "../../assets/contact/aerial-view-container-cargo-ship-sea 2.webp";

function ContactHero() {
  return (
    <div className="w-full sm:h-full">
      {/*<img*/}
      {/*  src={img}*/}
      {/*  alt=""*/}
      {/*  className="col-span-full col-start-1 row-start-1 h-full w-full"*/}
      {/*/>*/}
      <div className="flex w-full items-center justify-center bg-black h-[20rem] sm:h-[45rem] lg:justify-start lg:pl-[20rem]">
        <p className="plus-jakarta-sans-700 w-fit text-4xl text-red-600 sm:text-6xl">
          Contact
        </p>
      </div>
    </div>
  );
}

export default ContactHero;
