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
};
interface TechProps {
  props: string;
  key: number;
  size?: number;
}

const TechIcon = ({ props, size = 10 }: TechProps) => {
  const techIconStyle =
    "rounded-sm hover:scale-110 transition-transform duration-200";

  return (
    <div
      className={`flex flex-row justify-center w-${size} h-${size} my-2 mx-2 bg-slate-600 border-white border-2 rounded-md`}
    >
      {(() => {
        switch (props) {
          case "React":
            return (
              <>
                <img
                  src={techIcon.React}
                  alt={props}
                  className={techIconStyle}
                />
              </>
            );
          case "MongoDB":
            return (
              <img
                src={techIcon.MongoDB}
                alt={props}
                className={techIconStyle}
              />
            );
          case "TailWind":
            return (
              <img
                src={techIcon.TailWind}
                alt={props}
                className={techIconStyle}
              />
            );
          case "TypeScript":
            return (
              <img
                src={techIcon.TypeScript}
                alt={props}
                className={techIconStyle}
              />
            );
          case "JavaScript":
            return (
              <img
                src={techIcon.JavaScript}
                alt={props}
                className={techIconStyle}
              />
            );

          case "Python":
            return (
              <img
                src={techIcon.Python}
                alt={props}
                className={techIconStyle}
              />
            );
          case "P5JS":
            return (
              <img src={techIcon.P5JS} alt={props} className={techIconStyle} />
            );
          case "C#":
            return (
              <img
                src={techIcon.Csharp}
                alt={props}
                className={techIconStyle}
              />
            );
          case "Java":
            return (
              <img src={techIcon.Java} alt={props} className={techIconStyle} />
            );
          case "C":
            return (
              <img src={techIcon.C} alt={props} className={techIconStyle} />
            );
          case "SQL":
            return (
              <img src={techIcon.SQL} alt={props} className={techIconStyle} />
            );
          case "CSS":
            return (
              <img src={techIcon.CSS} alt={props} className={techIconStyle} />
            );
          case "HTML":
            return (
              <img src={techIcon.HTML} alt={props} className={techIconStyle} />
            );
          case "BootStrap":
            return (
              <img
                src={techIcon.BootStrap}
                alt={props}
                className={techIconStyle}
              />
            );
            case "Docker":
              return (
                <img
                  src={techIcon.Docker}
                  alt={props}
                  className={techIconStyle}
                />
              );
          default:
        }
      })()}
    </div>
  );
};

export default TechIcon;
