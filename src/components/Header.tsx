import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();
  let pathRoute = location.pathname;
  pathRoute = pathRoute.split("/")[1];

  const [about, setAbout] = React.useState(false);
  const [code, setCode] = React.useState(false);
  const [contact, setContact] = React.useState(false);

  useEffect(() => {
    setAbout(false);
    setCode(false);
    setContact(false);
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setAbout(true);
    } else if (pathRoute === "code") {
      setCode(true);
    } else if (pathRoute === "contact") {
      setContact(true);
    } else {
    }
  }, [about, code, contact, location.pathname, pathRoute]);

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
          {about === true ? (
            <li className="text-3xl font-bold flex flex-col justify-center text-red-500 hover:text-blue-400">
              <Link to="/">About Me</Link>
            </li>
          ) : (
            <li className="text-3xl font-bold flex flex-col justify-center hover:text-blue-400">
              <Link to="/">About Me</Link>
            </li>
          )}
          {code === true ? (
            <li className="text-3xl font-bold flex flex-col justify-center text-red-500 hover:text-blue-400">
              <Link to="/">Code</Link>
            </li>
          ) : (
            <li className="text-3xl font-bold flex flex-col justify-center hover:text-blue-400">
              <Link to="/">Code</Link>
            </li>
          )}
          {contact === true ? (
            <li className="text-3xl font-bold flex flex-col justify-center text-red-500 hover:text-blue-400">
              <Link to="/">Contact</Link>
            </li>
          ) : (
            <li className="text-3xl font-bold flex flex-col justify-center hover:text-blue-400">
              <Link to="/contact">Contact</Link>
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Header;
