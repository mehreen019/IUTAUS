"use client";

import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <section id="events">
      <div className="py-20">
        <h1 className="heading mb-20">
          A small selection of{" "}
          <span className="text-maroon">recent events</span>
        </h1>
        <div className="w-full px-4 mt-10">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {projects.map((item) => (
              <Link href={item.link} key={item.id}>
                <div
                  className="flex-col min-w-[calc(33.333%-1rem)]
                           max-w-[400px] bg-black-200 p-4 rounded-xl overflow-hidden
                           transform transition-all duration-300 ease-in-out
                           hover:scale-105 hover:shadow-2xl hover:shadow-maroon/20
                           cursor-pointer group flex-shrink-0"
                >
                  <div className="relative h-[25vh] mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/bg.png"
                      fill
                      style={{ objectFit: "cover" }}
                      alt="bgimg"
                    />
                    <Image
                      src={item.img}
                      fill
                      style={{ objectFit: "cover" }}
                      alt="cover"
                      className="absolute top-0 left-0 z-10 transition-transform duration-300 
                             group-hover:scale-110"
                    />
                    {/* Overlay that appears on hover */}
                    <div
                      className="absolute inset-0 bg-maroon/20 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300 z-20"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <h1
                      className="font-bold text-lg lg:text-xl p-2
                               transition-colors duration-300"
                    >
                      {item.title}
                    </h1>
                    <p
                      className="font-light p-2 text-sm lg:text-base
                             transition-all duration-300 group-hover:translate-y-[-2px]"
                      style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                      }}
                    >
                      {item.des}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default RecentProjects;
