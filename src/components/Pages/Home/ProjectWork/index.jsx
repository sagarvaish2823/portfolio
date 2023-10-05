import Image from "next/image";
import React from "react";
import TrrinketSs from "@/public/images/trrinketss.png";
import CodingOvenSs from "@/public/images/codingovenSs.png";

const ProjectWork = () => {
  const data = [
    {
      id: 1,
      year: 2021,
      link: "https://codingoven.com/",
      name: "Coding Oven",
      para: "A web design agency website made with Wordpress and Divi.",
      img: CodingOvenSs,
      alt: "codingoven-screenshot",
    },
    {
      id: 2,
      year: 2022,
      link: "https://trrinket.vercel.app/",
      name: "Trrinket",
      para: "An E-commerce website with dashboard for product updation. Products can be added and removed with price and available stock.",
      img: TrrinketSs,
      alt: "trrinket-screenshot",
    },
  ];
  return (
    <section id="myWork" className="mx-8 pb-16 pt-8 lg-1024:mt-16">
      <div>
        <h2 className="page_subHeading">My Work</h2>
      </div>
      <div className="grid grid-cols-[0.2fr,1.8fr] pt-4 lg-1024:pt-8">
        <div className="border-r-2 border-gray-600 dark:border-gray-300"></div>
        <div className="pl-8">
          {data.map((i) => (
            <section key={i.id}>
              <h2 className="pt-8 lg-1024:pt-16">
                <a
                  href={i.link}
                  target="_blank"
                  className="pl-8 text-xl font-bold lg-1024:pl-16 lg-1024:text-4xl"
                >
                  {i.name} 🔗
                </a>
              </h2>
              <div className="pl-8 lg-1024:pl-16">
                <div className="w-[15rem] pt-4 lg-1024:w-[40rem]">
                  <p className="lg-1024:text-lg">{i.para}</p>
                </div>
                <div className="flex items-center justify-center pt-8 lg-1024:pt-16">
                  <div className="lg-1024:w-[40rem]">
                    <Image
                      src={i.img}
                      alt={i.alt}
                      width={1000}
                      height={1000}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectWork;
