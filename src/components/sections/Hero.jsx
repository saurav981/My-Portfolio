import sauravGhibliDP from "../../../public/assets/sauravGhibliDP.webp";
import { About } from "./About";
import Experience from "./Experience";
import Skills from "./Skills";

export default function Hero() {
  return (
    <section className="py-20 max-w-xl mx-auto">
      {/* Hero section */}
      <div className="flex items-center gap-8 mb-20">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5">
            {`Hi, I'm Saurav`} <span className="inline-block">👋</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Frontend Developer with Fullstack Experience
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="size-20 md:size-28 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
            <img
              src={sauravGhibliDP}
              alt="Saurav"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-11 md:gap-14 mb-10">
        <About />
        <Experience />
        <Skills />
      </div>
    </section>
  );
}
