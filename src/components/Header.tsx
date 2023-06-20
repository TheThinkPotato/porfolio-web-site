import React from "react";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = ({
}) => {

  return (
    <section className="flex flex-row pr-0 bg-slate-800 my-5 p-2 rounded-2xl w-2/3">
      <div className="px-5 flex flex-col py-2">
        <h1 className="text-4xl font-bold">DANIEL LOPEZ</h1>
        <h2 className="text-xl text-justify font-bold">
          Junior Software Developer
        </h2>
      </div>
      <ul className="flex flex-row grow mx-12 justify-between">
        <li className="text-2xl font-bold flex flex-col justify-center">
          About Me
        </li>
        <li className="text-2xl font-bold flex flex-col justify-center">
          Code
        </li>
        <li className="text-2xl font-bold flex flex-col justify-center">
          Contact
        </li>
      </ul>
    </section>
  );
};

export default Header;
