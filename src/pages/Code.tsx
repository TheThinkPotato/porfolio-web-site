import Header from "../components/Header";
import data from "../data/Data";
import CodeCard from "../components/CodeCard";
import { Link } from "react-router-dom";

const Code: React.FC = () => {
  return (
    <article
      className=" bg-slate-950 flex flex-col items-center text-white h-fill content-center "
    >
      <Header />
      <section className="flex flex-col bg-slate-800 pb-10 w-full"
      style={{maxWidth: "1440px",}}>
        <img
          src="images/code.png"
          className="flex w-full"
          alt="Daniel Lopez"
        />

        <div className="">
          <article className="py-2 bg-slate-500 shadow-xl">
            <h2 className="text-3xl font-bold text-center">Code &lt;/&gt;</h2>
          </article>

          <article className="mt-5 mx-4 sm:mx-10">
            <h2 className="text-2xl font-bold mb-5 mx-10 text-center">Web</h2>
            {data.code.map((code) => {
              if (code.type === "web") {
                return <CodeCard key={Math.random()} props={code} />;
              }
              return null;
            })}

            <h2 className="text-2xl font-bold mb-5 mx-10 text-center">
              Desktop
            </h2>
            {data.code.map((code) => {
              if (code.type === "desktop") {
                return <CodeCard key={Math.random()} props={code} />;
              }
              return null;
            })}
          </article>
        </div>
      </section>
    </article>
  );
};

export default Code;
