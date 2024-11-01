import data from "./../../Utls/company_members.json";
import InfiniteSlidingMembers from "./infinteScroll.tsx";

function PeopleCompany() {
  return (
    <div className="mt-12 h-full w-full space-y-10 p-10">
      <div className="plus-jakarta-sans-600 mx-auto w-fit rounded-full bg-red-600 px-5 py-2 text-white">
        <p className="text-2xl">Meet Our People</p>
      </div>
      <div className="container mx-auto">
        {/* <UPEXMembersDirectory members={data} /> */}
        <InfiniteSlidingMembers members={data}></InfiniteSlidingMembers>
      </div>
    </div>
  );
}

export default PeopleCompany;
