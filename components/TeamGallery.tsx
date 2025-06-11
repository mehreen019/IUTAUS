"use client";

import Image from "next/image";

// For now, we'll use a static array with the same image.
// In the future, this could come from a CMS or a dedicated data file.
const teamMembers = [
  {
    id: 1,
    name: "IUT's finest",
    img: "/team.png",
    designation: "Leading the charge",
  },
  {
    id: 2,
    name: "IUT's finest",
    img: "/team.png",
    designation: "Innovating daily",
  },
  {
    id: 3,
    name: "IUT's finest",
    img: "/team.png",
    designation: "Driving success",
  },
  {
    id: 4,
    name: "IUT's finest",
    img: "/team.png",
    designation: "Behind the scenes",
  },
  {
    id: 5,
    name: "IUT's finest",
    img: "/team.png",
    designation: "Making it happen",
  },
];

const TeamGallery = () => {
  return (
    <section id="team" className="py-20">
      <h1 className="heading">
        Meet the <span className="text-maroon">Dream Team</span>
      </h1>

      <div className="flex flex-col items-center mt-10">
        <div className="w-full flex overflow-x-auto gap-8 py-10 px-4 scrollbar-hide">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-black-200 rounded-2xl w-[80vw] sm:w-[570px] flex-shrink-0
                         transform transition-all duration-300 ease-in-out
                         hover:scale-105 hover:shadow-2xl hover:shadow-maroon/20
                         p-8 flex flex-col justify-between group"
            >
              <div className="relative h-[40vh] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-white-200">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
