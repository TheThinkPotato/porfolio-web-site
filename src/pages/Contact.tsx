import Header from "../components/Header";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
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
          src="images/contact.png"
          className="flex w-full rounded-t-md"
          alt="Daniel Lopez"
        />

        <div className="">
          <article className="py-2 bg-slate-500 shadow-xl">
            <h2 className="text-3xl font-bold mx-10">Contact Me:</h2>                
          </article>

          <article className="mt-5 mx-10">
            <ul className="flex flex-row flex-wrap justify-between">                
                <Link to="https://www.linkedin.com/in/daniel-lopez-dev" target="_blank" className="mx-4 w-2/5">
                <li className="flex flex-row text-center my-4 text-3xl hover:text-blue-500"><svg className="mr-4 h-10 w-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                www.linkedin.com/in/daniel-lopez-dev
                </li>
                </Link>
                <Link to="https://github.com/TheThinkPotato" target="_blank" className="mx-4 w-2/5">
                <li className="flex flex-row text-center my-4 text-3xl hover:text-blue-500"><svg className="mr-4 h-10 w-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                github.com/TheThinkPotato
                </li>
                </Link>                    
                <Link to="mailto:d__lopez@hotmail.com" className="mx-4 w-2/5">
                <li className="flex flex-row text-center my-4 text-3xl hover:text-blue-500"><svg className="mr-4 h-10 w-10"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                d__lopez@hotmail.com</li>
                </Link>
                <Link to="https://www.youtube.com/c/OFFbitTech" target="_blank" className="mx-4 w-2/5">
                <li className="flex flex-row text-center my-4 text-3xl hover:text-blue-500"><svg className="mr-4 h-10 w-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                www.youtube.com/c/OFFbitTech</li>
                </Link>
            </ul>
           </article>
        </div>
      </section>
    </article>
  );
};

export default Contact;
