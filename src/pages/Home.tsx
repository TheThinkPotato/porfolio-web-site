import Header from "../components/Header";
import Footer from "../components/Footer";
import EducationCard from "../components/CardEducation";
import SkillCard from "../components/SkillCard";
import ExperienceCard from "../components/ExperienceCard";

import data from "../data/Data";

const Home: React.FC = () => {
  return (
    <article
      className="bg-slate-800 flex flex-col items-center text-white content-center w-fill"
    >
      {/* {squares.map((square) => square)} */}
      <Header />
      <section className="flex flex-col pb-10 w-full"
        style={{ maxWidth: "1440px", }}>
        <img
          src="images/me.png"
          className="h-56 md:h-auto w-full object-cover"
          alt="Lego Man Coding"
        />
        <div className="px-2 sm:px-10 md:my-8 py-5 md:py-2">
          <h2 className="text-2xl text-center font-semibold sm:font-bold">» Who Am I «</h2>
          {/* <div className="flex flex-row"> */}
          {/* <img src="../images/headerguy.png" alt="Tired Programmer" className="md:mr-6 mb-2 self-center invisible h-0 w-0 md:w-20 md:h-20 md:visible"/> */}
          <p className="px-4 md:px-0 my-4 text-justify text-neutral-200">
            Originating from an electronics background driven by my fascination with
            computer hardware, I seamlessly transitioned into software development, inspired
            by my love for design and critical thinking. The pandemic disruption provided an
            opportune moment to pursue my passion for software development.
          </p>
          <p className="px-4 md:px-0 my-4 text-justify">
            My diverse experiences sharpened my ownership, communication, and leadership
            skills, enabling me to lead my teams to success. Eager to learn and fueled by
            creativity, I thrive in the complexities of software development. This shift merges
            my skills and passion, empowering me to create real-world software solutions.
          </p>
          {/* </div> */}
        </div>

        <div className="bg-blue-900 pb-10">
          <article className="py-2 bg-blue-500 shadow-xl">
            <h2 className="text-3xl font-bold mb-5 mx-10 text-center">Skills</h2>
            <div className="flex flex-wrap justify-between">
              {data.skills.map((skills) => (
                <SkillCard key={Math.random()} props={skills} />
              ))}
            </div>
          </article>

          <article className="mt-16">
            <h2 className="text-3xl font-bold mb-10 mx-10 text-center">Education</h2>
            <div className="flex flex-wrap justify-between mx-4 2xl:mx-20">
              {data.education.map((education) => (
                <EducationCard key={Math.random()} props={education} />
              ))}
            </div>
          </article>

          <article className="mt-16">
            <h2 className="text-3xl font-bold mb-10 mx-10 text-center">Experience</h2>
            <div className="flex flex-wrap justify-between mx-4 2xl:mx-20">
              {data.experience.map((experience) => (
                <ExperienceCard key={Math.random()} props={experience} />
              ))}
            </div>
          </article>
        </div>
      </section>
      <Footer/>
    </article>
  );
};

export default Home;
