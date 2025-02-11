"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import  Image  from "next/image";

const RecentProjects = () => {
  return (
    <section id="events">
    <div className="py-20">
      <h1 className="heading mb-20">
        A small selection of{" "}
        <span className="text-purple">recent events</span>
      </h1>
      <div className="flex items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
           <div
           className="flex-col w-[30vw] lg:w-[40vw]  bg-black-200 p-4 rounded-xl overflow-hidden" 
           key={item.id}
         >
              <div className="relative h-[30vh] lg:h-[40vh] mb-4"> {/* Fixed height for image */}
              <Image
                src="/bg.png"
                fill
                style={{ objectFit: 'cover' }} // Important for scaling
                alt="bgimg"
              />
              <Image
                src={item.img}
                fill
                style={{ objectFit: 'cover' }} // Important for scaling
                alt="cover"
                className="absolute top-0 left-0 z-10"
              />
            </div>

              
            <div className="flex flex-col justify-between"> {/* Distribute space */}
              <h1 className="font-bold lg:text-2xl md:text-xl p-2 text-base">
                {item.title}
              </h1>

              <p
                className="lg:font-normal font-light p-2 text-md"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default RecentProjects;
