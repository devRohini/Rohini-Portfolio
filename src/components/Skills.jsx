
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
      className="relative overflow-hidden bg-[#080b1c] px-6 py-24 text-white"
    >
      <div className="skills-glow skills-glow-left"></div>
      <div className="skills-glow skills-glow-right"></div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-purple-400">
            My Toolkit
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            What I <span className="text-purple-400">Know</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Technologies I use to design, build, test, and deploy complete web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="skill-card group relative flex min-h-44 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.07] via-[#111832] to-purple-950/20 p-5 text-center transition-all duration-300 hover:border-purple-400/60"
            >
              <div className="skill-card-shine"></div>
              <SkillIcon skill={skill} />
              <h3 className="relative text-base font-semibold">{skill}</h3>
              <p className="relative mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 transition-colors group-hover:text-purple-300">
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
