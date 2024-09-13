import img from "../../assets/compnay/transport-logistics-concept (2) 1.webp";
function CompanyHero() {
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "border-box",
        backgroundPosition: "center center",
      }}
      className="h-[594px]"
    >
      <div className="flex h-full w-full items-center justify-center bg-black/30 lg:justify-start lg:pl-[20rem]">
        <p className="plus-jakarta-sans-700 w-fit text-6xl text-white">
          Company
        </p>
      </div>
    </div>
  );
}

export default CompanyHero;
