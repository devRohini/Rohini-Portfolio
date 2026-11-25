
import avatar from "../assets/Avtar.png";

function About() {
  return (
    <section id="about" className="bg-[#0b1024] px-4 py-16 text-white sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-purple-400 sm:text-sm sm:tracking-[0.32em]">
          About Me
        </p>
        <h2 className="mb-10 mt-2.5 text-center text-3xl font-bold sm:text-4xl md:mb-14 md:mt-3 md:text-5xl">
          Get to know <span className="text-purple-400">Me</span>
        </h2>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="flex justify-center py-4">
            <div className="group relative w-60 sm:w-72 lg:w-80">
              {/* Ambient portfolio glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-linear-to-tr from-purple-600/35 via-fuchsia-500/20 to-sky-500/25 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Tilted glass backdrop frame */}
              <div className="absolute inset-0 rotate-6 rounded-3xl border border-purple-400/25 bg-linear-to-br from-purple-600/20 via-indigo-500/10 to-sky-500/15 transition-transform duration-500 group-hover:rotate-3"></div>

              {/* Main portrait card */}
              <div className="relative aspect-[4/4.3] rounded-3xl bg-linear-to-br from-purple-400/70 via-indigo-400/30 to-sky-400/60 p-[2px] shadow-[0_24px_60px_rgba(147,51,234,0.28)] transition-transform duration-500 group-hover:-translate-y-1.5">
                <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-[#0e142d]">
                  <img
                    src={avatar}
                    alt="Rohini Chaudhari"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle bottom vignette */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#080b1c]/85 via-[#080b1c]/30 to-transparent"></div>
                </div>
              </div>

              {/* Top-left availability badge */}
              <div className="absolute -left-3 top-4 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-[#0d132c]/90 px-3.5 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md sm:-left-5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
                <span>Open to Work</span>
              </div>

              {/* Bottom-right role badge */}
              <div className="absolute -bottom-3 -right-2 z-10 flex items-center gap-2 rounded-2xl border border-purple-400/35 bg-[#111832]/95 px-3.5 py-2 text-xs font-semibold text-purple-200 shadow-xl backdrop-blur-md sm:-right-4 sm:px-4 sm:py-2.5 sm:text-sm">
                <i className="bi bi-code-slash text-purple-400"></i>
                <span>Full Stack Dev</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-xl font-bold sm:mb-5 sm:text-2xl">
              I'm <span className="text-purple-400">Rohini Chaudhari</span>
            </h3>

            <p className="text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              I am a passionate Full Stack Developer with a strong foundation in web development and a keen interest in creating innovative and user-friendly applications. With a solid understanding of both front-end and back-end technologies, I strive to deliver seamless and efficient solutions that meet the needs of users. My goal is to continuously learn and grow as a developer, contributing to impactful projects that make a difference.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 text-left min-[420px]:grid-cols-2 sm:gap-5">
              <div className="rounded-xl border border-white/5 bg-white/2 p-3.5 sm:border-0 sm:bg-transparent sm:p-0">
                <p className="text-xs text-gray-400 sm:text-sm">Name</p>
                <p className="mt-1 text-sm font-semibold sm:text-base">Rohini Chaudhari</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/2 p-3.5 sm:border-0 sm:bg-transparent sm:p-0">
                <p className="text-xs text-gray-400 sm:text-sm">Profession</p>
                <p className="mt-1 text-sm font-semibold sm:text-base">Full Stack Developer</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/2 p-3.5 sm:border-0 sm:bg-transparent sm:p-0">
                <p className="text-xs text-gray-400 sm:text-sm">Location</p>
                <p className="mt-1 text-sm font-semibold sm:text-base">Wardha, Maharashtra</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/2 p-3.5 sm:border-0 sm:bg-transparent sm:p-0">
                <p className="text-xs text-gray-400 sm:text-sm">Availability</p>
                <p className="mt-1 text-sm font-semibold text-green-400 sm:text-base">
                  Open to opportunities
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-purple-600 px-7 py-3 text-sm font-semibold transition hover:bg-purple-500 sm:text-base"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
