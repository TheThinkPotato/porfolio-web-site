import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
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
    <section className="pb-2 md:pb-4 pt-4 w-full bg-blue-600">
      <div
        className="flex flex-col md:flex-row md:w-11/12 mx-auto w-full"
        style={{ maxWidth: "1440px" }}
      >
        <div className="px-5 flex flex-col py-2 text-amber-400 hover:text-amber-300">
          <Link to="/">
            <h1 className="text-4xl font-bold text-center">DANIEL LOPEZ</h1>
            <div className="flex flex-row justify-center text-xl font-bold text-white text-center hover:text-amber-200">
              <h2 className="mr-5">S o f t w a r e</h2>
              <h2>D e v e l o p e r</h2>
            </div>
          </Link>
        </div>

        <nav aria-label="Main" className="grow">
          <ul className="flex flex-col md:flex-row grow justify-around h-full text-center">
            {about === true ? (
              <li className="py-2 md:py-0 text-3xl font-bold flex flex-col justify-center text-slate-100 md:text-amber-400 bg-slate-900 md:bg-inherit hover:text-amber-200 mx-4">
                <Link to="/">About</Link>
              </li>
            ) : (
              <li className="py-2 md:py-0 text-3xl font-bold flex flex-col justify-center hover:text-amber-200 mx-4 md:text-white">
                <Link to="/">About</Link>
              </li>
            )}
            {code === true ? (
              <li className="py-2 md:py-0 text-3xl font-bold flex flex-col justify-center text-slate-100 md:text-amber-400 bg-slate-900 md:bg-inherit hover:text-amber-200 mx-4">
                <Link to="/code">Code</Link>
              </li>
            ) : (
              <li className="py-2 md:py-0 text-3xl font-bold flex flex-col justify-center hover:text-amber-200 mx-4 md:text-white">
                <Link to="/code">Code</Link>
              </li>
            )}
            {contact === true ? (
              <li className="py-2 md:py-0 text-3xl font-bold flex flex-col justify-center text-slate-100 md:text-amber-400 bg-slate-900 md:bg-inherit hover:text-amber-200 mx-4">
                <Link to="/">Contact</Link>
              </li>
            ) : (
              <li className="py-2 md:py-0 text-3xl font-bold flex flex-col justify-center hover:text-amber-200 mx-4 md:text-white">
                <Link to="/contact">Contact</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
