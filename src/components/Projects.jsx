
const projects = [
  {
    title: "E-commerce Website",
    description: "A responsive online shopping website.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "#",
    icon: "bi bi-cart3",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills and projects.",
    tech: ["React", "CSS", "JavaScript"],
    link: "#",
    icon: "bi bi-person-workspace",
  },
  {
    title: "Gifting Platform",
    description:
      "GiftJoy is a modern and responsive gifting platform built with React.js and Tailwind CSS. It allows users to explore curated gift collections for men, women, and kids through an attractive and user-friendly interface.",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML", "Vercel"],
    link: "#",
    icon: "bi bi-gift",
  },
  {
    title: "17 Cafe Coffee Shop",
    description:
      "A modern and responsive Coffee Shop website designed to showcase coffee products, services, and brand identity through an engaging user interface and smooth user experience.",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML"],
    link: "#",
    icon: "bi bi-cup-hot",
  },
  {
    title: "User Registration API",
    description:
      "Simple user registration API with authentication.",
    tech: ["Express.js", "Node.js", "JavaScript"],
    link: "#",
    icon: "bi bi-shield-lock",
  },
  {
    title: "ChaloChale",
    description:
      "Modern travel agency website built with React, Vite, and Tailwind CSS. Features destination showcases, tour packages, responsive design, and a user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    icon: "bi bi-airplane",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0b1024] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold md:text-5xl">
            What I Have <span className="text-purple-400">Built</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Explore my projects where I have applied my technical
            knowledge and creativity to build responsive and
            user-friendly web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group flex flex-col rounded-2xl border border-white/10 bg-[#111832] p-7 transition-all duration-300 hover:border-purple-500/60"
            >
              {/* Icon and Number */}
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 transition group-hover:bg-purple-600">
                  <i
                    className={`${project.icon} text-3xl text-purple-400 transition group-hover:text-white`}
                  ></i>
                </div>

                <span className="text-4xl font-bold text-white/10">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-bold transition group-hover:text-purple-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-7 grow text-sm leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-7 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-purple-500/40 px-5 py-3 text-sm font-semibold text-purple-300 transition hover:bg-purple-600 hover:text-white"
              >
                View Project
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
