import React from "react";
import Navbar from "../components/Navbar";

const PageOne = () => {
  return (
    <>
      <div className="bg-circle flex h-screen w-full justify-center" id="home">
        <div className="relative h-screen w-full max-w-screen-xl snap-center p-10">
          <Navbar />
          <div className="absolute inset-0 z-0 flex h-screen w-full flex-col items-center justify-center">
            <div className="relative flex w-[90%] flex-col gap-5">
              <div className="font-press text-center text-xl ">
                <div className="absolute left-0 animate-ping cursor-pointer duration-700 sm:text-3xl">
                  &#10084;
                </div>
                <div className="absolute right-0 top-0 animate-ping cursor-pointer sm:text-3xl">
                  &#10084;
                </div>
                <div className="absolute bottom-0 -mb-10 animate-ping cursor-pointer sm:text-3xl">
                  &#10084;
                </div>
                <div className="absolute bottom-0 right-0 -mb-10 animate-ping cursor-pointer sm:text-3xl">
                  &#10084;
                </div>
                <div className="flex  justify-center gap-2">
                  <p className="cursor-pointer hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100">
                    I
                  </p>
                  <p className="cursor-pointer hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100">
                    AM
                  </p>
                </div>
              </div>

              <p className="font-press mx-auto w-fit cursor-pointer text-center text-5xl hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100 sm:text-7xl md:text-9xl">
                CAHYA
              </p>

              <div className="font-press item-center relative mx-auto flex w-fit flex-col justify-center gap-2 text-center text-xl">
                <div className="-mx-6 flex animate-bounce justify-between">
                  <div className="cursor-pointer">&#9733;</div>
                  <div className="cursor-pointer">&#9733;</div>
                </div>
                <div className="flex cursor-pointer justify-center gap-2">
                  <p className="hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100">
                    A
                  </p>
                  <p className="hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100">
                    JUNIOR
                  </p>
                </div>
                <div className="flex cursor-pointer justify-center gap-2">
                  <p className="hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100">
                    WEB
                  </p>
                  <p className="hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100">
                    DEVELOPER
                  </p>
                </div>
                <div className="-mx-6 flex animate-bounce justify-between">
                  <div className="cursor-pointer">&#9733;</div>
                  <div className="cursor-pointer">&#9733;</div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3">
                <a
                  href="https://github.com/rcahya007"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-github cursor-pointer text-2xl hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100"></i>
                </a>
                <a
                  href="https://www.instagram.com/rendycahya_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-instagram cursor-pointer text-2xl hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageOne;
