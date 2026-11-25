import { experiences } from "../data/data";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#080b1c] px-4 py-16 text-white sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-purple-400 sm:mb-3 sm:text-sm sm:tracking-[0.32em]">
            Career Journey
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            My <span className="text-purple-400">Experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7">
            Practical development experience and hands-on training building modern, responsive web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp) => (
            <div
              key={`${exp.role}-${exp.company}`}
              className="project-card group flex flex-col rounded-2xl border border-white/10 bg-[#111832] p-5 transition-all duration-300 hover:border-purple-500/60 sm:p-7"
            >
              <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 transition group-hover:bg-purple-600 sm:h-14 sm:w-14">
                    <i className="bi bi-briefcase-fill text-2xl text-purple-400 transition group-hover:text-white"></i>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold transition group-hover:text-purple-400 sm:text-xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-purple-300">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-purple-500/25 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                    {exp.duration}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                    {exp.type}
                  </span>
                </div>
              </div>

              <ul className="mb-6 grow space-y-2.5 text-sm leading-6 text-gray-400">
                {exp.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <i className="bi bi-check2-circle mt-0.5 shrink-0 text-purple-400"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
