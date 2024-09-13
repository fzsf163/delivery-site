import img from "../../assets/explorecompany/technological-futuristic-holograms-logistics-means-transport.webp";

function ExploreCompany() {
  return (
    <div className="w-full pb-10 pt-20">
      <div className="mx-auto w-fit space-y-6">
        <div className="plus-jakarta-sans-600 mx-auto w-fit rounded-full bg-bg-color px-5 py-2 text-white xl:mx-0">
          <p className="text-2xl">Explore Upex BD</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-5 sm:gap-10 text-center sm:text-left xl:flex-row">
          <p className="plus-jakarta-sans-700 w-[70%] text-2xl sm:w-[533px] sm:text-5xl">
            About Loraic, Our love for logistics operation
          </p>
          <p className="plus-jakarta-sans-400 w-[70%] text-sm sm:w-[601px] sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Dapibus dis amet mauris ut
            id eget. Facilisis blandit in auctor mattis a est tristique
            lobortis. Orci ut justo vitae elit nunc a auctor morbi. Sed ornare
            aliquam ornare tincidunt semper nam odio.
          </p>
        </div>
        <div className="h-full w-full rounded">
          <img
            src={img}
            alt="company explore image"
            className="mx-auto w-[80%] rounded xl:h-[552px] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreCompany;
