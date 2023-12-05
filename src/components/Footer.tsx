import React from "react";
import { Link, useLocation } from "react-router-dom";


interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className=" bg-slate-950 w-full">
            <div className="text-white justify-around self-center w-11/12 md:w-2/3 mx-auto">
                <div className="flex mt-4">
                    <nav className="flex flex-wrap">
                        <ul className="mx-4 mt-4 pb-2">
                            <Link to="/">
                                <button className="underline text-xl hover:text-amber-400">
                                    Home
                                </button>
                            </Link>
                        </ul>
                        <ul className="mx-4 mt-4">
                            <Link to="/Code">
                                <button className="underline text-xl hover:text-amber-400">
                                    Code
                                </button>
                            </Link>
                        </ul>
                        <ul className="mx-4 mt-4">
                            <Link to="/Contact">
                                <button className="underline text-xl hover:text-amber-400">
                                    Contact
                                </button>
                            </Link>
                        </ul>
                    </nav>
                    <div className="grow justify-end mr-5 hidden 2md:flex">
                        <img src="/images/logo-footer.png" alt="OFFbit logo" />
                    </div>
                </div>
                {/* <div className="flex justify-center mt-8 2md:hidden">
                    <img src="/images/logo-footer.png" alt="OFFbit logo" />
                </div> */}
                
                <p className="my-10 text-stone-500 mx-auto w-11/12">
                    Website crafted by Daniel Lopez using React and TypeScript. If you seek a dedicated software developer with a passion for all things tech, let's 
                    <Link to="/contact" className="underline hover:text-amber-400 ml-1">connect. </Link>                    
                </p>

            </div>
        </footer>
    )
}

export default Footer;