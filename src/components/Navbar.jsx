import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed inset-x-0 top-5 z-10 mx-auto flex w-full max-w-screen-xl flex-col justify-center gap-1 px-10 sm:top-10 sm:flex-row sm:justify-between">
        <a
          href="#home"
          className="font-press mx-auto w-fit cursor-pointer text-3xl hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100 sm:mx-0"
        >
          CAHYA
        </a>
        <div className="flex items-center justify-center gap-8">
          <a
            href="#projects"
            className="font-press cursor-pointer text-base hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className="font-press cursor-pointer text-base hover:-translate-y-1 hover:border-b-2 hover:border-white hover:duration-100"
          >
            CONTACT
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
