import React from "react";
import { useEffect } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [about, setAbout] = React.useState(false);
  const [code, setCode] = React.useState(false);
  const [contact, setContact] = React.useState(false);

  useEffect(() => {
    setAbout(false);
    setCode(false);
    setContact(false);
  }, []);

  return (
    <section className="flex flex-row pr-0 bg-slate-800 my-5 p-2 rounded-2xl w-2/3">
      <div className="px-5 flex flex-col py-2">
        <h1 className="text-4xl font-bold">DANIEL LOPEZ</h1>
        <h2 className="text-xl text-justify font-bold text-slate-300 ">
          Junior Software Developer
        </h2>
      </div>
      <nav aria-label="Main" className="grow">
        <ul className="flex flex-row grow mx-12 justify-around h-full">
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
      </nav>
    </section>
  );
};

export default Header;
