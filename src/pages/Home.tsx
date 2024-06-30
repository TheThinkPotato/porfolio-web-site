import Header from "../components/Header";
import Footer from "../components/Footer";
import EducationCard from "../components/CardEducation";
import SkillCard from "../components/SkillCard";
import ExperienceCard from "../components/ExperienceCard";
import data from "../data/Data";
import React from "react";

const Home: React.FC = () => {
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
            I am a dedicated Web Application Software Developer with a passion
            for creating efficient and effective solutions. My expertise lies in
            utilising modern technologies such as React, JavaScript, TypeScript,
            C#, and .NET Entity Framework. I adhere to Domain-Driven Design
            principles to ensure my applications are robust and scalable.
          </p>
          <p className="px-4 md:px-0 my-4 text-justify">
            For testing, I rely on tools like Jest and Cypress to maintain the
            highest standards of quality in my software. Additionally, I
            prioritise web accessibility and ensure compliance with WCAG 2.2
            guidelines to create inclusive user experiences. I also specialise
            in responsive web application design for desktop, tablet, and mobile
            devices to provide a seamless experience across all platforms.
          </p>
          <p className="px-4 md:px-0 my-4 text-justify">
            Currently, I am working on a school-based app for private schools in
            my role at Patient Zero. This project has allowed me to leverage and
            extend my skills, as well as contribute to an impactful application.
          </p>
        </div>

        <div className="bg-blue-900 pb-10">
          <article className="py-2 bg-blue-500 shadow-xl">
            <h2 className="text-3xl font-bold mb-5 mx-10 text-center">
              Skills
            </h2>
            <div className="flex flex-wrap justify-between">
              {data.skills.map((skills) => (
                <SkillCard key={Math.random()} props={skills} />
              ))}
            </div>
          </article>

          <article className="mt-16">
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
