import one from "../../assets/people/1.webp";
import two from "../../assets/people/2.webp";
import three from "../../assets/people/3.jpg";
import four from "../../assets/people/4.webp";

function PeopleCompany() {
  return (
    <div className="mt-12 h-full w-fit space-y-10">
      <div className="plus-jakarta-sans-600 mx-auto w-fit rounded-full bg-red-600 px-5 py-2 text-white">
        <p className="text-2xl">Meet Our People</p>
      </div>
      <div className="mx-auto grid w-[80%] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-20 md:gap-10">
        <div className="p-2">
          <img src={one} className="h-full w-full rounded-lg" alt="" />
          <p className="text-lg font-bold">John MaCafee</p>
          <p className="text-md font-semibold">Production manager</p>
        </div>
        <div className="p-2">
          <img src={two} className="h-full w-full rounded-lg" alt="" />
          <p className="text-lg font-bold">Luna YellowStone</p>
          <p className="text-md font-semibold">Production manager</p>
        </div>
        <div className="p-2">
          <img src={three} className="h-full w-full rounded-lg" alt="" />
          <p className="text-lg font-bold">Jinaa Velvat</p>
          <p className="text-md font-semibold">Production manager</p>
        </div>
        <div className="p-2">
          <img src={four} className="h-full w-full rounded-lg" alt="" />
          <p className="text-lg font-bold">Drika Aluuchi</p>
          <p className="text-md font-semibold">Production manager</p>
        </div>
      </div>
    </div>
  );
}

export default PeopleCompany;
