import React from "react";
import { Link } from "react-router-dom";
import TechIcon from "./TechIcon";

function truncate(str: string, n: number) {
  if (str.length > n) {
    let temp: string = str.substring(0, n - 1);
    return temp + "...";
  } else {
    return str;
  }
}

interface Code {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  linkDesc: string;
  type: string; //web //desktop //electronics
  videoLink: string;
}

interface CodeCardProps {
  props: Code;
  key: number;
}

const style: React.CSSProperties = {  
};

const CodeCard: React.FC<CodeCardProps> = ({ props }) => {
  return (
    <section
      className="border rounded-lg bg-slate-700 px-4 py-2 shadow-2xl mb-10 mx-auto"
      style={style}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/5 mr-auto">
          <p className="mt-1 text-lg font-bold">{props.title}</p>
          <p className="text-neutral-300">{props.subtitle}</p>
          <h3 className="mt-4 text-white font-semibold">Description:</h3>
          <p className="text-neutral-300 mb-4 md:w-4/5 mr-1">{props.description}</p>

          <p className="mt-4 text-white font-semibold">{props.linkDesc}:</p>
          <Link
            className="hover:text-blue-400 text-neutral-300"
            to={props.link}
            target="_blank"
          >
            <p className="visible sm:invisible sm:h-0">
              {truncate(props.link, 36)}
            </p>
            <p className="invisible sm:visible ">{props.link}</p>
          </Link>

          {props.videoLink !== "" && (
            <div>
              <h3 className="mt-4 text-white font-semibold">Video Link:</h3>
              <Link
                to={props.videoLink}
                target="_blank"
                className="hover:text-blue-400 text-neutral-300"
              >
                <p className="visible sm:invisible sm:h-0">
                  {truncate(props.videoLink, 36)}
                </p>
                <p className="invisible sm:visible ">{props.videoLink}</p>
              </Link>
            </div>
          )}

          <div className="flex flex-row flex-wrap mt-4 invisible lg:visible h-0 lg:h-auto grow">            
            {props.tech.map((tech) => (
              <TechIcon key={Math.random()} props={tech} />
            ))}
          </div>
        
        </div>
        <Link to={props.link} target="_blank" className="my-auto">
          
          <img src={props.image} className="rounded-lg xl:h-72" alt="Screenshot" />
          
        </Link>
        <div className="flex flex-row justify-between flex-wrap mt-4 visible lg:invisible h-auto lg:h-0 lg:w-0">
          {props.tech.map((tech) => (
            <TechIcon key={Math.random()} props={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeCard;
