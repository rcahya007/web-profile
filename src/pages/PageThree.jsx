import React from "react";

const PageThree = () => {
  return (
    <div
      className="bg-circle-3 flex h-screen w-full snap-center items-center justify-center text-8xl"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-10">
        <div className="flex items-center justify-center gap-5">
          <h1 className="font-press animate-pulse text-center text-xl duration-100 hover:animate-bounce lg:text-5xl">
            Contact
          </h1>
          <h1 className="font-press animate-pulse text-center text-xl duration-100 hover:animate-bounce lg:text-5xl">
            Me
          </h1>
          <h1 className="font-press animate-pulse text-center text-xl duration-100 hover:animate-bounce lg:text-5xl">
            On
          </h1>
        </div>

        <a
          href="mailto:rendycahya6@gmail.com"
          className="font-press animate-pulse text-center text-sm duration-100 hover:animate-bounce hover:border-b-2 hover:border-white lg:text-2xl"
        >
          rendycahya6@gmail.com
        </a>
      </div>
    </div>
  );
};

export default PageThree;
