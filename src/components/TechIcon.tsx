import Tooltip from "./Tooltip";

const techIcon = {
  React: "../images/react-logo.svg",
  TailWind: "../images/tailwind-logo.svg",
  TypeScript: "../images/typescript-logo.svg",
  JavaScript: "../images/js-logo.svg",
  Python: "../images/python-logo.svg",
  P5JS: "../images/p5js-logo.svg",
  Csharp: "../images/csharp-logo.svg",
  C: "../images/c-logo.svg",
  Java: "../images/java-logo.svg",
  SQL: "../images/sql-logo.svg",
  MongoDB: "../images/mongo-logo.svg",
  CSS: "../images/css-logo.svg",
  HTML: "../images/html-logo.svg",
  BootStrap: "../images/bootstrap-logo.svg",
  Docker: "../images/docker-logo.svg",
  SQLite: "../images/sqlite-logo.svg",
  EntityFramework: "../images/ef-logo.png",
};
interface TechProps {
  props: string;
  key: number;
  size?: number;
}

const TechIcon = ({ props, size = 10 }: TechProps) => {
  const techIconStyle =
    "rounded-sm hover:scale-110 transition-transform duration-200 w-16 h-16 md:w-10 md:h-10";

  return (
    <div
      className={`flex flex-row justify-center w-${size} h-${size} my-2 mx-2 bg-slate-600 border-white border-2 rounded-md`}
    >
      {(() => {
        switch (props) {
          case "React":
            return (
              <Tooltip text="React JS">
                <img
                  src={techIcon.React}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "MongoDB":
            return (
              <Tooltip text="Mongo DB">
                <img
                  src={techIcon.MongoDB}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "TailWind":
            return (
              <Tooltip text="Tail Wind">
                <img
                  src={techIcon.TailWind}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "TypeScript":
            return (
              <Tooltip text="Type Script">
                <img
                  src={techIcon.TypeScript}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "JavaScript":
            return (
              <Tooltip text="Java Script">
                <img
                  src={techIcon.JavaScript}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );

          case "Python":
            return (
              <Tooltip text="Python">
                <img
                  src={techIcon.Python}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "P5JS":
            return (
              <Tooltip text="P5JS">
                <img
                  src={techIcon.P5JS}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "C#":
            return (
              <Tooltip text="C#">
                <img
                  src={techIcon.Csharp}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "Java":
            return (
              <Tooltip text="Java">
                <img
                  src={techIcon.Java}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "C":
            return (
              <Tooltip text="C">
                <img src={techIcon.C} alt={props} className={techIconStyle} />
              </Tooltip>
            );
          case "SQL":
            return (
              <Tooltip text="SQL">
                <img src={techIcon.SQL} alt={props} className={techIconStyle} />
              </Tooltip>
            );
          case "CSS":
            return (
              <Tooltip text="CSS">
                <img src={techIcon.CSS} alt={props} className={techIconStyle} />
              </Tooltip>
            );
          case "HTML":
            return (
              <Tooltip text="HTML">
                <img
                  src={techIcon.HTML}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "BootStrap":
            return (
              <Tooltip text="Boot Strap">
                <img
                  src={techIcon.BootStrap}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "Docker":
            return (
              <Tooltip text="Docker">
                <img
                  src={techIcon.Docker}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "SQLite":
            return (
              <Tooltip text="SQLite">
                <img
                  src={techIcon.SQLite}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          case "EntityFramework":
            return (
              <Tooltip text="Entity Framework">
                <img
                  src={techIcon.EntityFramework}
                  alt={props}
                  className={techIconStyle}
                />
              </Tooltip>
            );
          default:
        }
      })()}
    </div>
  );
};

export default TechIcon;
