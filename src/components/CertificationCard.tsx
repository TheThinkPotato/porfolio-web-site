import Tooltip from "./Tooltip";

interface Certification {
  title: string;
  image: string;
  link?: string;
  description: string;
}

interface CertificationProps {
  props: Certification;
  key: number;
}

const style = {
  width: "100px",
  height: "124px",
};

const CertificationCard = ({ props }: CertificationProps) => {
  return (
    <section
      className="flex border rounded-lg bg-blue-950 mx-auto shadow-xl mb-4 p-1 justify-center"
      style={style}
    >
      <Tooltip text={props.description} position="top">
        <div className="flex flex-col transform transition-transform duration-300 hover:scale-110" onClick={() => window.open(props.link)}>
          <img src={props.image} className="rounded-lg h-24" alt="Logo" />
          <p className="text-center">{props.title}</p>
        </div>
      </Tooltip>
    </section>
  );
};

export default CertificationCard;
