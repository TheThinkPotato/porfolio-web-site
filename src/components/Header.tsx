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
    <section className="flex flex-col md:flex-row pr-0 bg-slate-800 my-5 p-2 rounded-2xl w-5/6 xl:w-2/3">
      <div className="px-5 flex flex-col py-2">
        <h1 className="text-4xl font-bold text-center">DANIEL LOPEZ</h1>
        <h2 className="text-xl font-bold text-slate-300 text-center">
          Junior Software Developer
        </h2>
      </div>
      <nav aria-label="Main" className="grow">
        <ul className="flex flex-col md:flex-row grow justify-around h-full text-center">
          {about === true ? (
            <li className="text-3xl font-bold flex flex-col justify-center text-red-500 bg-slate-900 md:bg-slate-800 hover:text-blue-400 mx-4">
              <Link to="/">About</Link>
            </li>
          ) : (
            <li className="text-3xl font-bold flex flex-col justify-center hover:text-blue-400 mx-4">
              <Link to="/">About</Link>
            </li>
          )}
          {code === true ? (
            <li className="text-3xl font-bold flex flex-col justify-center text-red-500 bg-slate-900 md:bg-slate-800 hover:text-blue-400 mx-4">
              <Link to="/code">Code</Link>
            </li>
          ) : (
            <li className="text-3xl font-bold flex flex-col justify-center hover:text-blue-400 mx-4">
              <Link to="/code">Code</Link>
            </li>
          )}
          {contact === true ? (
            <li className="text-3xl font-bold flex flex-col justify-center text-red-500 bg-slate-900 md:bg-slate-800 hover:text-blue-400 mx-4">
              <Link to="/">Contact</Link>
            </li>
          ) : (
            <li className="text-3xl font-bold flex flex-col justify-center hover:text-blue-400 mx-4">
              <Link to="/contact">Contact</Link>
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Header;
