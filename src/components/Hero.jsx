
import { personalInfo } from "../data/data";
import avatar from "../assets/Avtar.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-linear-to-br from-[#080b1c] via-[#11143a] to-[#241044] px-4 pb-16 pt-28 text-white sm:px-6 md:pb-20 md:pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="text-center md:text-left">
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-purple-400 sm:mb-4 sm:text-sm sm:tracking-widest">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-purple-400">{personalInfo.name}</span>
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-gray-300 sm:mt-5 sm:text-2xl lg:text-3xl">
            {personalInfo.role}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8 md:mx-0">
            {personalInfo.description}
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4 md:justify-start">
            <a
              href="#projects"
              className="w-full rounded-full bg-purple-600 px-7 py-3 text-center text-sm font-semibold transition hover:bg-purple-500 sm:w-auto sm:text-base"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="w-full rounded-full border border-purple-400 px-7 py-3 text-center text-sm font-semibold transition hover:bg-purple-500 sm:w-auto sm:text-base"
            >
              Download My Resume
            </a>
          </div>
        </div>

        <div className="hero-3d flex justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center sm:h-76 sm:w-76 md:h-84 md:w-84 lg:h-96 lg:w-96">
            {/* Ambient portfolio glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-full bg-linear-to-tr from-purple-600/35 via-fuchsia-500/20 to-sky-500/25 blur-2xl"></div>

            {/* Subtle outer orbital ring with accent dot */}
            <div className="hero-ring-outer absolute -inset-3 rounded-full border border-purple-400/20 sm:-inset-4">
              <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.9)]"></span>
              <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.85)]"></span>
            </div>

            {/* Gradient rotating ring */}
            <div className="hero-ring absolute inset-0 rounded-full"></div>

            {/* Inner dark glass avatar frame */}
            <div className="hero-avatar relative z-10 h-[92%] w-[92%] rounded-full border border-white/15 bg-linear-to-br from-[#161c3d] via-[#0d1229] to-[#1e113a] p-2 shadow-[0_24px_60px_rgba(147,51,234,0.32)] sm:p-2.5">
              <div className="h-full w-full overflow-hidden rounded-full border border-purple-400/30 bg-linear-to-b from-purple-500/15 to-transparent">
                <img
                  src={avatar}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
