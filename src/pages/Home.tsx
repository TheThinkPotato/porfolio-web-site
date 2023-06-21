import Header from "../components/Header";
import image from "../logo.svg";

function Home() {
  //   const squareX = window.innerWidth / 12 - 1;
  //   const squareY = window.innerHeight / 12;
  //   const xOffsetAmount = 12;
  //   let xOffset = 0;
  //   let yOffset = 0;
  //   const squares = [];
  //   for (let i = 0; i < squareX * squareY; i++) {
  //     squares.push(
  //       <Square isLit={false} marginXOffset={xOffset} marginYOffset={yOffset} key={Math.random()} />
  //     );
  //     if (xOffset >= squareX * xOffsetAmount) {
  //       xOffset = 0;
  //       yOffset += xOffsetAmount;
  //     } else xOffset += xOffsetAmount;
  //   }

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
            <h2 className="text-2xl font-bold mb-2">Education</h2>
            <div className="flex flex-wrap justify-between">
              <section className="border rounded-lg bg-slate-700 w-2/5 px-4 py-2 mx-2 shadow-2xl mb-4">
                <div className="flex flex-row mb-4">
                  <img
                    src={"../images/qut-logo.png"}
                    className="flex m-auto mt-0 pr-2"
                    alt="Daniel Lopez"
                  />
                  <div>
                    <p className="text-justify mt-1">
                      Bachelors of Computer Science
                    </p>
                    <p className="text-justify text-neutral-400">
                      Queensland University of Technology
                    </p>
                  </div>
                  <div className="grow">
                    <p className="text-right mt-1">GPA 6.875</p>
                    <p className="text-right text-neutral-400">2020 to 2023</p>
                  </div>
                </div>
                <p className="text-justify mt-4">Computer Science Major</p>
                <div className="flex flex-row justify-between">
                  <p className="text-justify text-neutral-400">
                    Interaction Design Minor
                  </p>
                  <p className="text-justify text-neutral-400">
                    Internet of Things Minor
                  </p>
                </div>
              </section>

              <section className="border rounded-lg bg-slate-700 w-2/5 px-4 py-2 mx-2 shadow-2xl mb-4">
                <div className="flex flex-row mb-4">
                  <img
                    src={"../images/tafe-logo.png"}
                    className="flex m-auto mt-0 pr-2"
                    alt="Daniel Lopez"
                  />
                  <div>
                    <p className="text-justify mt-1">
                      Cert III in Computer Aided Drafting
                    </p>
                    <p className="text-justify text-neutral-400">
                      TAFE Queensland - Mt Gravatt
                    </p>
                  </div>
                  <div className="grow">
                    <p className="text-right mt-1">Competent</p>
                    <p className="text-right text-neutral-400">2010</p>
                  </div>
                </div>
                <p className="text-justify mt-4">AutoCAD</p>
                <div className="flex flex-row justify-between">
                  <p className="text-justify text-neutral-400">
                    AutoCAD Inventor
                  </p>
                  <p className="text-justify text-neutral-400">
                    Manual Drafting
                  </p>
                </div>
              </section>
            
              <section className="border rounded-lg bg-slate-700 w-2/5 px-4 py-2 mx-2 shadow-2xl mb-4">
                <div className="flex flex-row mb-4">
                  <img
                    src={"../images/tafe-logo.png"}
                    className="flex m-auto mt-0 pr-2"
                    alt="Daniel Lopez"
                  />
                  <div>
                    <p className="text-justify mt-1">
                      Advanced Diploma of Engineering
                    </p>
                    <p className="text-justify text-neutral-400">
                      TAFE Queensland - Eagle Farm
                    </p>
                  </div>
                  <div className="grow">
                    <p className="text-right mt-1">Competent</p>
                    <p className="text-right text-neutral-400">2007</p>
                  </div>
                </div>
                <p className="text-justify mt-4">Electrical</p>
                <div className="flex flex-row justify-between">
                  <p className="text-justify text-neutral-400">
                    Digital Electronics
                  </p>
                  <p className="text-justify text-neutral-400">
                    RF Electronics
                  </p>
                </div>
              </section>
            
              <section className="border rounded-lg bg-slate-700 w-2/5 px-4 py-2 mx-2 shadow-2xl mb-4">
                <div className="flex flex-row mb-4">
                  <img
                    src={"../images/tafe-logo.png"}
                    className="flex m-auto mt-0 pr-2"
                    alt="Daniel Lopez"
                  />
                  <div>
                    <p className="text-justify mt-1">
                      Cert III in Electrotechnology
                    </p>
                    <p className="text-justify text-neutral-400">
                      TAFE Queensland - Southbank
                    </p>
                  </div>
                  <div className="grow">
                    <p className="text-right mt-1">Competent</p>
                    <p className="text-right text-neutral-400">2004</p>
                  </div>
                </div>
                <p className="text-justify mt-4">Apprenticeship</p>
                <div className="flex flex-row justify-between">
                  <p className="text-justify text-neutral-400">
                    Radio
                  </p>
                  <p className="text-justify text-neutral-400">
                    Electrical
                  </p>
                </div>
              </section>
            
              <section className="border rounded-lg bg-slate-700 w-2/5 px-4 py-2 mx-2 shadow-2xl mb-4">
                <div className="flex flex-row mb-4">
                  <img
                    src={"../images/tafe-logo.png"}
                    className="flex m-auto mt-0 pr-2"
                    alt="Daniel Lopez"
                  />
                  <div>
                    <p className="text-justify mt-1">
                      Diploma of Engineering
                    </p>
                    <p className="text-justify text-neutral-400">
                      TAFE Queensland - Southbank
                    </p>
                  </div>
                  <div className="grow">
                    <p className="text-right mt-1">Competent</p>
                    <p className="text-right text-neutral-400">2002</p>
                  </div>
                </div>
                <p className="text-justify mt-4">Electronics</p>
                <div className="flex flex-row justify-between">
                  <p className="text-justify text-neutral-400">
                    Digital Electronics
                  </p>
                  <p className="text-justify text-neutral-400">
                    Analog Electronics
                  </p>
                </div>
              </section>

              <section className="border rounded-lg bg-slate-700 w-2/5 px-4 py-2 mx-2 shadow-2xl mb-4">
                <div className="flex flex-row mb-4">
                  <img
                    src={"../images/tafe-logo.png"}
                    className="flex m-auto mt-0 pr-2"
                    alt="Daniel Lopez"
                  />
                  <div>
                    <p className="text-justify mt-1">
                      Cert II in Information Technology
                    </p>
                    <p className="text-justify text-neutral-400">
                      Brisbane Institute of TAFE
                    </p>
                  </div>
                  <div className="grow">
                    <p className="text-right mt-1">Competent</p>
                    <p className="text-right text-neutral-400">1999</p>
                  </div>
                </div>
                <p className="text-justify mt-4">Traineeship</p>
                <div className="flex flex-row justify-between">
                  <p className="text-justify text-neutral-400">
                    Computer Technician
                  </p>
                  <p className="text-justify text-neutral-400">
                    System Administration
                  </p>
                </div>
              </section>


            </div>
          </article>

          <h2 className=" text-2xl font-bold">Experience</h2>
          <p className="mb-4 text-justify text-neutral-300">blah blah blah</p>
          <h2 className=" text-2xl font-bold">Skills</h2>
          <p className="mb-4 text-justify text-neutral-300">blah blah blah</p>
        </div>
      </section>
    </article>
  );
}

export default Home;
