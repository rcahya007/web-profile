import React from "react";

import PhotoAldi1 from "../img/aldi-priyanto/Desktop.png";
import PhotoAldi2 from "../img/aldi-priyanto/AldiWebInstagram.png";
import PhotoAldi3 from "../img/aldi-priyanto/Mobile.png";
import Pokedex1 from "../img/pokedex/desktop Ver1.png";
import Pokedex2 from "../img/pokedex/desktop Ver2.png";
import Pokedex3 from "../img/pokedex/mobile Ver.png";
import NotaReact1 from "../img/nota-react/Nota React Dashboard.png";
import NotaReact2 from "../img/nota-react/Nota React Desktop.png";
import NotaReact3 from "../img/nota-react/Nota React Mobile.png";
import NotaLaravel1 from "../img/nota-laravel/Nota Thermal Dashboard.png";
import NotaLaravel2 from "../img/nota-laravel/Nota Thermal Desktop.png";
import NotaLaravel3 from "../img/nota-laravel/Nota Thermal Mobile.png";
import JobList1 from "../img/job-list/JobList-SplashScreen.jpg";
import JobList2 from "../img/job-list/JobList-HomePage.jpg";
import JobList3 from "../img/job-list/JobList-DetailJob.jpg";

const PageTwo = () => {
  const sliderLeft = () => {
    const slider = document.getElementById("slider");
    const persenWidth = slider.clientWidth * 0.6;
    slider.scrollLeft = slider.scrollLeft - persenWidth;
  };
  const sliderRight = () => {
    const slider = document.getElementById("slider");
    const persenWidth = slider.clientWidth * 0.6;
    slider.scrollLeft = slider.scrollLeft + persenWidth;
  };

  const openImage = (data) => {
    console.log(data);
    window.open(data, "_blank").focus();
  };

  const dataProject = [
    {
      name: "Rendy Cahya",
      type: "Mobile Apps",
      photo_project: {
        photo_one: JobList1,
        photo_two: JobList2,
        photo_three: JobList3,
      },
      sub_heading: "Mobile Aplication",
      info: "Mobile aplikasi yang digunakan untuk mencari lowongan kerja. Menggunakan Flutter-Laravel",
      link_web: "https://www.youtube.com/watch?v=T7C1J6vqDig&t=285s",
      link_github: "https://github.com/rcahya007/job-list",
    },
    {
      name: "Aldi Priyanto",
      type: "Website",
      photo_project: {
        photo_one: PhotoAldi1,
        photo_two: PhotoAldi2,
        photo_three: PhotoAldi3,
      },
      sub_heading: "Website Profile",
      info: "Convert landing page from Aldi Priyanto design to Website.",
      link_web: "https://aldipriyanto.rendycahyae.my.id",
      link_github: "https://github.com/rcahya007/aldi-priyanto",
    },
    {
      name: "Rendy Cahya",
      type: "Website",
      photo_project: {
        photo_one: Pokedex1,
        photo_two: Pokedex2,
        photo_three: Pokedex3,
      },
      sub_heading: "Website Pokedex",
      info: 'Get and display data of all pokemon from data API "PokeAPI"',
      link_web: "https://pokedex.rendycahyae.my.id/",
      link_github: "https://github.com/rcahya007/Pokedex-Javascript-Native",
    },
    {
      name: "Rendy Cahya",
      type: "Website",
      photo_project: {
        photo_one: NotaReact1,
        photo_two: NotaReact2,
        photo_three: NotaReact3,
      },
      sub_heading: "Website Inventory",
      info: "Website pencatatan data, penjualan, nota barang. Convert project nota to React.",
      link_web: "https://notareact.rendycahyae.my.id/",
      link_github: "https://github.com/rcahya007/nota-react",
    },
    {
      name: "Rendy Cahya",
      type: "Website",
      photo_project: {
        photo_one: NotaLaravel1,
        photo_two: NotaLaravel2,
        photo_three: NotaLaravel3,
      },
      sub_heading: "Website Inventory",
      info: "Website pencatatan data, penjualan, nota barang dan dapat di print melalui thermal print menggunakan Laravel-Javascript.",
      link_web: "https://nota.rendycahyae.my.id/",
      link_github: "https://github.com/rcahya007/nota_thermal_laravel",
    },
  ];
  return (
    <div className="bg-circle-2 h-full w-full" id="projects">
      <div className="bg-circle-2 relative inset-x-0 mx-auto flex max-w-screen-xl snap-center items-center justify-center px-1 sm:px-5">
        <i
          className="bx bx-chevron-left-circle cursor-pointer text-2xl duration-300 hover:-translate-x-2 lg:text-5xl"
          onClick={sliderLeft}
        ></i>
        <div
          id="slider"
          className="scroll flex h-full w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {dataProject.map((data, index) => (
            <div
              className="inset-x-0 mx-auto mt-10 flex h-screen w-full flex-shrink-0 snap-center flex-col justify-center gap-5 md:gap-10"
              key={index}
            >
              <div className="group mx-auto flex max-w-5xl items-center justify-center gap-[2px] sm:gap-8 lg:gap-16">
                {Object.values(data.photo_project).map((data, index) => {
                  return (
                    <img
                      onClick={() => {
                        openImage(data);
                      }}
                      key={index}
                      src={data}
                      alt={index}
                      className="h-[130px] max-w-[80px] cursor-pointer rounded-xl bg-cover duration-100 hover:!scale-100 hover:!blur-none group-hover:scale-95 group-hover:blur-lg sm:h-[200px] sm:w-[120px] sm:max-w-none md:w-[180px] lg:w-[200px] xl:h-[300px] xl:w-[350px]"
                    />
                  );
                })}
              </div>
              <div className="mx-auto flex flex-col items-center justify-center md:-mb-10">
                <div className="font-press text-center text-xs md:flex md:flex-row lg:text-xl ">
                  <p>{data.name}</p>
                  <p className="mx-1">-</p>
                  <p>{data.type}</p>
                </div>
                <div className="font-press text-xs">{data.sub_heading}</div>
                <div className="font-press text-center text-[9px]">
                  {data.info}
                </div>
                <div className="mt-2 flex flex-col gap-1 sm:flex-row">
                  <a
                    className="font-press mt-1 flex items-center justify-center gap-2 rounded-lg bg-white/50 px-10 py-2 text-[10px] hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100"
                    href={data.link_web}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bx-globe text-xl"></i> View Project
                  </a>
                  <a
                    className="font-press mt-1 flex items-center justify-center gap-2 rounded-lg bg-white/50 px-10 py-2 text-[10px] hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100"
                    href={data.link_github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-github text-xl"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="inset-x-0 mx-auto mt-5 flex h-screen w-full flex-shrink-0 snap-center flex-col justify-center gap-5 md:gap-10 ">
            <div className="flex items-center justify-center gap-1 sm:gap-5 ">
              <h1 className="font-press animate-pulse text-center text-lg duration-100 hover:animate-bounce sm:text-2xl lg:text-5xl">
                COMING
              </h1>
              <h1 className="font-press animate-pulse text-center text-lg duration-100 hover:animate-bounce sm:text-2xl lg:text-5xl">
                SOON
              </h1>
              <h1 className="font-press animate-pulse text-center text-lg duration-100 hover:animate-bounce sm:text-2xl lg:text-5xl">
                ...
              </h1>
            </div>
          </div>
        </div>
        <i
          className="bx bx-chevron-right-circle cursor-pointer text-2xl duration-300 hover:translate-x-2 lg:text-5xl"
          onClick={sliderRight}
        ></i>
      </div>
    </div>
  );
};

export default PageTwo;
