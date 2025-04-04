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

const style = {
  width: "480px",
};

const EducationCard = ({ props }: EducationCardProps) => {
  return (
    <section
      className="border rounded-lg bg-blue-950 px-4 py-2 shadow-2xl mb-4 mx-auto"
      style={style}
    >
      <div className="flex flex-row mb-0 sm:mb-4">
        <img src={props.image} className="my-auto pr-2" alt="Logo" />
        <div>
          <p className="mt-1">{props.title}</p>
          <p className="text-neutral-400 invisible sm:visible h-0 sm:h-auto">
            {props.subtitle}
          </p>
        </div>
        <div className="grow">
          <p className="text-right mt-1">{props.gpa}</p>
          <p className="text-right text-neutral-400">{props.date}</p>
        </div>
      </div>
      <p className="mt-4 mx-1">{props.major}</p>
      <div className="flex flex-row justify-between">
        <p className="text-neutral-400 mx-1">{props.minor1}</p>
        <p className="text-neutral-400 mx-1">{props.minor2}</p>
      </div>
    </section>
  );
};

export default EducationCard;
