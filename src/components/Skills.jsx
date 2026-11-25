
import { skills } from "../data/data";
import SkillIcon from "./SkillIcon";

const skillCategories = {
  HTML: "Frontend",
  CSS: "Frontend",
  JavaScript: "Frontend",
  "React.js": "Frontend",
  "Tailwind CSS": "Frontend",
  Bootstrap: "Frontend",
  "Node.js": "Backend",
  "Express.js": "Backend",
  MongoDB: "Database",
  Git: "Tools",
  GitHub: "Tools",
  Postman: "Tools",
  Vercel: "Deployment",
  Netlify: "Deployment",
};

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080b1c] px-4 py-16 text-white sm:px-6 md:py-24"
    >
      <div className="skills-glow skills-glow-left"></div>
      <div className="skills-glow skills-glow-right"></div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-purple-400 sm:mb-3 sm:text-sm sm:tracking-[0.32em]">
            My Toolkit
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            What I <span className="text-purple-400">Know</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7">
            Technologies I use to design, build, test, and deploy complete web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="skill-card group relative flex min-h-36 flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-white/[0.07] via-[#111832] to-purple-950/20 p-4 text-center transition-all duration-300 hover:border-purple-400/60 sm:min-h-44 sm:rounded-2xl sm:p-5"
            >
              <div className="skill-card-shine"></div>
              <SkillIcon skill={skill} />
              <h3 className="relative text-sm font-semibold sm:text-base">{skill}</h3>
              <p className="relative mt-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-gray-500 transition-colors group-hover:text-purple-300 sm:mt-2 sm:text-[10px] sm:tracking-[0.18em]">
                {skillCategories[skill]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
