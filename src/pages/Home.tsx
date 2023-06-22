import Header from "../components/Header";
import EducationCard from "../components/CardEducation";
import SkillCard from "../components/SkillCard";
import ExperienceCard from "../components/ExperienceCard";

import data from "../data/Data";

const Home: React.FC = () => {
  return (
    <article
      className=" bg-cyan-700 flex flex-col items-center text-white h-fill content-center "
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
          src="images/me.jpg"
          className="flex w-full rounded-t-md"
          alt="Daniel Lopez"
        />
        <div className="px-10 py-2 bg-slate-700">
          <h2 className="text-2xl font-bold">» Junior Software Developer «</h2>
          <p className="my-4 text-justify text-neutral-200">
            Hello, I'm Daniel Lopez, a junior software developer located in
            Brisbane, Australia. I have a strong attention to detail and a
            passion for all things technical, ranging from software development
            to hardware and electronics. With experience in React JS,
            TypeScript, Figma, Node.js, C#, Express, and AWS Cloud, I enjoy
            working with a diverse set of technologies to bring ideas to life.
          </p>
        </div>

        <div className="">
          <article className="py-2 bg-slate-500 shadow-xl">
            <h2 className="text-2xl font-bold mb-5 mx-10">Skills</h2>
            <div className="flex flex-wrap justify-between">
              {data.skills.map((skills) => (
                <SkillCard key={Math.random()} props={skills} />
              ))}
            </div>
          </article>

          <article className="mt-5">
            <h2 className="text-2xl font-bold mb-5 mx-10">Education</h2>
            <div className="flex flex-wrap justify-between">
              {data.education.map((education) => (
                <EducationCard key={Math.random()} props={education} />
              ))}
            </div>
          </article>

          <article className="mt-5">
            <h2 className="text-2xl font-bold mb-5 mx-10">Experience</h2>
            <div className="flex flex-wrap justify-between">
              {data.experience.map((experience) => (
                <ExperienceCard key={Math.random()} props={experience} />
              ))}
            </div>
          </article>
        </div>
      </section>
    </article>
  );
};

export default Home;
