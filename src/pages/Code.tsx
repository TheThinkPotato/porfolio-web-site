import Header from "../components/Header";
import { Link } from "react-router-dom";

const Code: React.FC = () => {
  return (
    <article
      className=" bg-cyan-700 flex flex-col items-center text-white h-screen content-center "
      style={{
        backgroundImage: "url('images/code2.jpg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* {squares.map((square) => square)} */}
      <Header />
      <section className="flex flex-col bg-slate-800 my-5 pb-10 w-5/6 rounded-md">
        <img
          src="images/code.png"
          className="flex w-full rounded-t-md"
          alt="Daniel Lopez"
        />

        <div className="">
          <article className="py-2 bg-slate-500 shadow-xl">
            <h2 className="text-3xl font-bold text-center">
            Code &lt;/&gt;
            </h2>
          </article>

          <article className="mt-5 mx-4 sm:mx-10"></article>
        </div>
      </section>
    </article>
  );
};

export default Code;
