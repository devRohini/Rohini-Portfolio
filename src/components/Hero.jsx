
import { personalInfo } from "../data/data";
import avatar from "../assets/Avtar.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-linear-to-br from-[#080b1c] via-[#11143a] to-[#241044] px-6 pt-24 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 font-medium tracking-widest text-purple-400">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Hi, I'm <span className="text-purple-400">{personalInfo.name}</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300 md:text-3xl">
            {personalInfo.role}
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-gray-400">
            {personalInfo.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-purple-600 px-7 py-3 font-semibold transition hover:bg-purple-500"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-purple-400 px-7 py-3 font-semibold transition hover:bg-purple-500"
            >
              Download My Resume
            </a>
          </div>
        </div>

        <div className="hero-3d flex justify-center">
          <div className="hero-avatar relative flex h-72 w-72 items-center justify-center rounded-full border-4 border-purple-500/40 bg-linear-to-br from-purple-500/20 to-blue-500/10 shadow-[0_30px_70px_rgba(147,51,234,.28)] md:h-96 md:w-96">
            <div className="hero-ring absolute -inset-3 rounded-full border-2 border-dashed border-purple-300/70"></div>
            <div className="absolute inset-5 rounded-full border border-white/10"></div>
            <img
              src={avatar}
              alt={personalInfo.name}
              className="relative z-10 h-[88%] w-[88%] rounded-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
