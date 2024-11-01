import { FC } from "react";

interface Member {
  name: string;
  post: string;
  id: string;
  image: string;
}

interface UPEXMembersDirectoryProps {
  members: Member[];
}
const InfiniteSlidingMembers: FC<UPEXMembersDirectoryProps> = ({ members }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="animate-slide-right inline-flex">
        {/* Duplicate the array to create seamless infinite loop */}
        {[...members, ...members].map((member, index) => (
          <div
            key={`${index}-${member.name}`}
            className="mx-6 w-[380px] flex-shrink-0"
          >
            <div className="rounded-md px-5 pb-10 shadow">
              <div className="flex items-center justify-center gap-2">
                <div className="size-28">
                  <img className="h-full w-full" src="/upexworld.png" alt="" />
                </div>
                <div className="h-10 w-0.5 rounded bg-black" />
                <p className="text-lg font-bold">Upex World (BD) Ltd.</p>
              </div>
              <div className="ml-12 w-fit">
                <h2
                  className={`font-extrabold ${
                    member.name === "GAZI MOSTAFIJUR RAHMAN (SUJON)"
                      ? "text-sm"
                      : "text-xl"
                  }`}
                >
                  {member.name}
                </h2>
                <h3 className="text-sm font-thin">{member.post}</h3>
              </div>
              <div className="grid place-content-baseline">
                <p className="col-span-full col-start-1 row-start-1 -rotate-90 text-nowrap pr-28 text-center text-xl font-extrabold">
                  {member.id}
                </p>
                <div className="col-span-full col-start-1 row-start-1">
                  <img
                    className="h-full w-full"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlidingMembers;
