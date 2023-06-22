import React from "react";

interface Skill {
  title: string;
  image: string;
}

interface SkillProps {
  props: Skill;
  key: number;
}

const style: React.CSSProperties = {
  width: "100px",
  height: "124px",  
};

const SkillCard: React.FC<SkillProps> = ({ props }) => {
  return (
    <section
      className="flex border rounded-lg bg-slate-700 mx-auto shadow-xl mb-4 p-1 justify-center"      
      style={style}
    >
      <div className="flex flex-col">
        <img
          src={props.image}
          className="rounded-lg grow h-20"
          alt="Logo"
        />              
      <p className="text-center">{props.title}</p>
    </div>
    </section>
  );
};

export default SkillCard;
