import Header from "../components/Header";
import Footer from "../components/Footer";
import EducationCard from "../components/CardEducation";
import SkillCard from "../components/SkillCard";
import ExperienceCard from "../components/ExperienceCard";
import data from "../data/Data";
import CertificationCard from "../components/CertificationCard";

const Home = () => {
  return (
    <article className="bg-slate-800 flex flex-col items-center text-white content-center w-fill">
      <Header />
      <section
        className="flex flex-col pb-10 w-full"
        style={{ maxWidth: "1440px" }}
      >
        <img
          src="images/me.png"
          className="h-56 md:h-auto w-full object-cover"
          alt="Lego Man Coding"
        />
        <div className="px-2 sm:px-10 md:my-8 py-5 md:py-2">
          <h2 className="text-2xl text-center font-semibold sm:font-bold">
            » Who Am I «
          </h2>
          <p className="px-4 md:px-0 my-4 text-justify text-neutral-200">
          I’m a full stack developer passionate about building modern, efficient, and  
          user-focused web applications. With over two years of experience in professional 
          software development and a strong academic foundation, I bring creativity, 
          problem-solving, and accountability. 
          </p>
          <p className="px-4 md:px-0 my-4 text-justify">
          I enjoy collaborating in teams to deliver 
          scalable and reliable solutions — combining C#, .NET, and React expertise.
          </p>
        </div>

        <div className="bg-blue-900 pb-10">
          <article className="py-2 bg-blue-500 shadow-xl">
            <h2 className="text-3xl font-bold mb-5 mx-10 text-center">
              Skills
            </h2>
            <div className="flex flex-wrap justify-between gap-2">
              {data.skills.map((skills) => (
                <SkillCard key={Math.random()} props={skills} />
              ))}
            </div>
          </article>

          <article className="pt-2 mx-auto bg-blue-400 pb-2">
            <h2 className="text-3xl font-bold mb-10 mx-10 text-center">
              Certifications
            </h2>
            <div className="flex flex-wrap justify-center w-full md:w-1/3 mx-auto">
              {data.certifications.map((certification) => (
                <CertificationCard key={Math.random()} props={certification} />
              ))}
            </div>
          </article>

          <article className="mt-6">
            <h2 className="text-3xl font-bold mb-10 mx-10 text-center">
              Experience
            </h2>
            <div className="flex flex-wrap justify-between mx-4 2xl:mx-20">
              {data.experience.map((experience) => (
                <ExperienceCard key={Math.random()} props={experience} />
              ))}
            </div>
          </article>

          <article className="mt-16">
            <h2 className="text-3xl font-bold mb-10 mx-10 text-center">
              Education
            </h2>
            <div className="flex flex-wrap justify-between mx-4 2xl:mx-20">
              {data.education.map((education) => (
                <EducationCard key={Math.random()} props={education} />
              ))}
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </article>
  );
};

export default Home;
