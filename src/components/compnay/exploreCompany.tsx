import img from "../../assets/explorecompany/technological-futuristic-holograms-logistics-means-transport.webp";

function ExploreCompany() {
  return (
    <div className="w-full pb-10 pt-20">
      <div className="mx-auto w-fit space-y-6">
        <div className="plus-jakarta-sans-600 mx-auto w-fit rounded-full bg-bg-color px-5 py-2 text-white xl:mx-0">
          <p className="text-2xl">Explore Upex BD</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:gap-10 sm:text-left xl:flex-row">
          <p className="plus-jakarta-sans-700 w-[70%] text-2xl sm:w-[630px] sm:text-5xl">
            Easy Shipping, No Stress – Upex World Makes It Simple!
          </p>
          <p className="plus-jakarta-sans-400 w-[70%] text-sm text-center sm:w-[701px] sm:text-lg">
            Upex World helps you send packages fast and without worry! Whether
            you're sending something nearby or to another country, we make sure
            it arrives safely. You can track your package from the time it
            leaves until it gets to the person. With our service, you never have
            to wonder where your stuff is. We’re here to make shipping easy for
            you!
          </p>
        </div>
        <div className="h-full w-full rounded">
          <img
            src={img}
            alt="company explore image"
            className="mx-auto h-[300px] w-[80%] rounded md:w-full xl:h-[552px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreCompany;
