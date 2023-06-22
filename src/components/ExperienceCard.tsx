import React from "react";

interface Exp {
  company: string;
  position: string;
  date: string;
  description: string;  
  image: string;
}

interface ExpProps {
  props: Exp;
  key: number;
}

const style: React.CSSProperties = {
  width: "480px",  
};

const ExperienceCard: React.FC<ExpProps> = ({ props }) => {
  return (
    <section
    className="border rounded-lg bg-slate-700 px-4 py-2 shadow-2xl mb-4 mx-auto"
    style={style}
  >
    <div className="flex flex-row mb-4">
      <img
        src={props.image}
        className="flex m-auto pr-2"
        alt="Logo"
      />
      <div>
        <p className="mt-1">{props.company}</p>
        <p className="text-neutral-400">{props.position}</p>
      </div>
      <div className="grow">
        <p className="text-right mt-1">{props.date}</p>
        {/* <p className="text-right text-neutral-400">{props.date}</p> */}
      </div>
    </div>
    <p className="mt-4">{props.description}</p>
  </section>
  );
};

export default ExperienceCard;
