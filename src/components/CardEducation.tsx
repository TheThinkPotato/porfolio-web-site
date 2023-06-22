import React from "react";

interface Education {
  title: string;
  subtitle: string;
  image: string;
  gpa: string;
  date: string;
  major: string;
  minor1: string;
  minor2: string;
}

interface EducationCardProps {
  props: Education;
  key: number;
}

const style: React.CSSProperties = {
  width: "480px",
};

const EducationCard: React.FC<EducationCardProps> = ({ props }) => {
  return (
    <section
      className="border rounded-lg bg-slate-700 px-4 py-2 shadow-2xl mb-4 mx-auto"
      style={style}
    >
      <div className="flex flex-row mb-4">
        <img
          src={props.image}
          className="flex m-auto mt-0 pr-2"
          alt="Daniel Lopez"
        />
        <div>
          <p className="text-justify mt-1">{props.title}</p>
          <p className="text-justify text-neutral-400">{props.subtitle}</p>
        </div>
        <div className="grow">
          <p className="text-right mt-1">{props.gpa}</p>
          <p className="text-right text-neutral-400">{props.date}</p>
        </div>
      </div>
      <p className="text-justify mt-4">{props.major}</p>
      <div className="flex flex-row justify-between">
        <p className="text-justify text-neutral-400">{props.minor1}</p>
        <p className="text-justify text-neutral-400">{props.minor2}</p>
      </div>
    </section>
  );
};

export default EducationCard;
