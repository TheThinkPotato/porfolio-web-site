import Header from "../components/Header";
import EducationCard from "../components/CardEducation";
import SkillCard from "../components/SkillCard";

import image from "../logo.svg";
import data from "../data/Data";

const Home: React.FC = () => {
  return (
    <article
      className=" bg-cyan-700 flex flex-col items-center text-white h-full content-center "
      style={{
        backgroundImage: "url('images/code2.jpg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* {squares.map((square) => square)} */}
      <Header />
      <section className="flex flex-col pr-0 bg-slate-800 my-5 py-2 w-5/6 rounded-md">
        <img
          src={image}
          className="flex m-auto w-1/2 mt-0"
          alt="Daniel Lopez"
        />
        <div className="bg-red-800 px-10 py-2">
          <h2 className="text-2xl font-bold">Junior Software Developer</h2>
          <p className="mb-4 text-justify text-neutral-200">
            Hello, I'm Daniel Lopez, a junior software developer located in
            Brisbane, Australia. I have a strong attention to detail and a
            passion for all things technical, ranging from software development
            to hardware and electronics. With experience in React JS,
            TypeScript, Figma, Node.js, C#, Express, and AWS Cloud, I enjoy
            working with a diverse set of technologies to bring ideas to life.
          </p>
        </div>

        <div className="mx-10 mt-5">
          <article>
            <h2 className="text-2xl font-bold mb-2">Skills</h2>
            <div className="flex flex-wrap justify-between">
            {data.skills.map((skills) => (
                <SkillCard key={Math.random()} props={skills} />
              ))}
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-bold mb-2">Education</h2>
            <div className="flex flex-wrap justify-between">
              {data.education.map((education) => (
                <EducationCard key={Math.random()} props={education} />
              ))}
            </div>
          </article>

          <h2 className=" text-2xl font-bold">Experience</h2>
          <p className="mb-4 text-justify text-neutral-300">blah blah blah</p>
        </div>
      </section>
    </article>
  );
};

export default Home;
