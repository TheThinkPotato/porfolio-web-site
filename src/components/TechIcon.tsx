import React from "react";

const techIcon = {
  React: "../images/react-logo.svg",  
  TailWind: "../images/tailwind-logo.svg",
  TypeScript: "../images/typescript-logo.svg",
  JavaScript: "../images/js-logo.svg",
  P5JS: "../images/p5js-logo.svg",
  Csharp: "../images/csharp-logo.svg",
  C: "../images/c-logo.svg",
  Java: "../images/java-logo.svg",
  SQL: "../images/sql-logo.svg",
  MongoDB: "../images/mongo-logo.svg",
  CSS: "../images/css-logo.svg",
  HTML: "../images/html-logo.svg",
};
interface TechProps {
  props: string;
  key: number;
}

const TechIcon: React.FC<TechProps> = ({ props }) => {
  return (
    <div className="flex flex-row justify-center w-16 h-16 my-2 mx-2 bg-slate-600 border-white border-2 rounded-md">
      {(() => {
        switch (props) {
          case "React":
            return <img src={techIcon.React} alt={props} className="rounded-sm" />;
          case "MongoDB":
            return <img src={techIcon.MongoDB} alt={props} className="rounded-sm" />;
          case "TailWind":
            return <img src={techIcon.TailWind} alt={props} className="rounded-sm" />;
          case "TypeScript":
            return <img src={techIcon.TypeScript} alt={props} className="rounded-sm" />;
          case "JavaScript":
            return <img src={techIcon.JavaScript} alt={props} className="rounded-sm" />;
          case "P5JS":
                return <img src={techIcon.P5JS} alt={props} className="rounded-sm" />;
          case "Csharp":
            return <img src={techIcon.Csharp} alt={props} className="rounded-sm" />;
            case "Java":
                return <img src={techIcon.Java} alt={props} className="rounded-sm" />;   
            case "C":
                return <img src={techIcon.C} alt={props} className="rounded-sm" />;           
        case "SQL":
            return <img src={techIcon.SQL} alt={props} className="rounded-sm" />;
        case "CSS":
            return <img src={techIcon.CSS} alt={props} className="rounded-sm" />;
        case "HTML":
            return <img src={techIcon.HTML} alt={props} className="rounded-sm" />;            
          default:
        }
      })()}
    </div>
  );
};

export default TechIcon;
