interface Skill {
  title: string;
  image: string;
}

interface SkillProps {
  props: Skill;
  key: number;
}

const style = {
  width: "100px",
  height: "124px",
};

const SkillCard = ({ props }: SkillProps) => {
  return (
    <section
      className="flex border rounded-lg bg-blue-950 mx-auto shadow-xl mb-4 p-1 justify-center"
      style={style}
    >
      <div className="flex flex-col transform transition-transform duration-300 hover:scale-110">
        <img src={props.image} className="rounded-lg grow h-20" alt="Logo" />
        <p className="text-center">{props.title}</p>
      </div>
    </section>
  );
};

export default SkillCard;
