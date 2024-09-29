import img from "../../assets/contact/aerial-view-container-cargo-ship-sea 2.webp";

function ServiceHero() {
  return (
    <div className="grid h-[20rem] w-full sm:h-full">
      <img
        src={img}
        alt=""
        className="col-span-full col-start-1 row-start-1 h-full w-full"
      />
      <div className="col-span-full col-start-1 row-start-1 flex h-full w-full items-center justify-center bg-black/30 lg:justify-start lg:pl-[20rem]">
        <p className="plus-jakarta-sans-700 w-fit text-4xl text-white sm:text-6xl">
          Service
        </p>
      </div>
    </div>
  );
}

export default ServiceHero;
