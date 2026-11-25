
const projects = [
  {
    title: "E-commerce Website",
    description: "A responsive online shopping website.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/devRohini?tab=repositories",
    icon: "bi bi-cart3",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills and projects.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/devRohini/Rohini-Portfolio",
    icon: "bi bi-person-workspace",
  },
  {
    title: "Gifting Platform",
    description:
      "GiftJoy is a modern and responsive gifting platform built with React.js and Tailwind CSS. It allows users to explore curated gift collections for men, women, and kids through an attractive and user-friendly interface.",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML", "Vercel"],
    github: "https://github.com/devRohini?tab=repositories",
    live: "https://giftjoy-jexo.vercel.app/",
    icon: "bi bi-gift",
  },
  {
    title: "17 Cafe Coffee Shop",
    description:
      "A modern and responsive Coffee Shop website designed to showcase coffee products, services, and brand identity through an engaging user interface and smooth user experience.",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML"],
    github: "https://github.com/devRohini?tab=repositories",
    icon: "bi bi-cup-hot",
  },
  {
    title: "User Registration API",
    description:
      "Simple user registration API with authentication.",
    tech: ["Express.js", "Node.js", "JavaScript"],
    github: "https://github.com/devRohini?tab=repositories",
    icon: "bi bi-shield-lock",
  },
  {
    title: "ChaloChale",
    description:
      "Modern travel agency website built with React, Vite, and Tailwind CSS. Features destination showcases, tour packages, responsive design, and a user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/devRohini?tab=repositories",
    live: "https://gleeful-liger-7f32ec.netlify.app",
    icon: "bi bi-airplane",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0b1024] px-4 py-16 text-white sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center md:mb-16">

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            What I Have <span className="text-purple-400">Built</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7">
            Explore my projects where I have applied my technical
            knowledge and creativity to build responsive and
            user-friendly web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group flex flex-col rounded-2xl border border-white/10 bg-[#111832] p-5 transition-all duration-300 hover:border-purple-500/60 sm:p-7"
            >
              {/* Icon and Number */}
              <div className="mb-5 flex items-center justify-between sm:mb-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 transition group-hover:bg-purple-600 sm:h-14 sm:w-14">
                  <i
                    className={`${project.icon} text-2xl text-purple-400 transition group-hover:text-white sm:text-3xl`}
                  ></i>
                </div>

                <span className="text-3xl font-bold text-white/10 sm:text-4xl">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-bold transition group-hover:text-purple-400 sm:mb-4 sm:text-xl">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-5 grow text-sm leading-6 text-gray-400 sm:mb-7 sm:leading-7">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-5 flex flex-wrap gap-2 sm:mb-7">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-purple-500/40 px-4 py-3 text-sm font-semibold text-purple-300 transition hover:bg-purple-600 hover:text-white"
                >
                  <i className="bi bi-github"></i>
                  View Project
                  <i className="bi bi-arrow-up-right"></i>
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
                  >
                    Live Demo
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
