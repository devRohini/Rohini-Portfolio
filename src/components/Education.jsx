
const education = [
  {
    degree: "B.com in Computer Application",
    institute: "G.S college of Commerce, Wardha",
    year: "2026",
    CGPA: "8.5/10",
  },
];

function Education() {
  return (
    <section id="education" className="bg-[#0b1024] px-4 py-16 text-white sm:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">

        <h2 className="mb-10 mt-2 text-center text-3xl font-bold sm:text-4xl md:mb-14 md:mt-3">
          My Education <span className="text-purple-400">Background</span>
        </h2>

        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-2xl border border-white/10 bg-white/3 p-5 sm:p-7"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 sm:h-14 sm:w-14">
                  <i className="bi bi-mortarboard-fill text-2xl text-purple-400 sm:text-3xl"></i>
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold sm:text-xl">{item.degree}</h3>
                  <p className="mt-1.5 text-sm text-gray-400 sm:mt-2 sm:text-base">{item.institute}</p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 sm:text-sm">
                      {item.year}
                    </span>
                    <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 sm:text-sm">
                      CGPA: {item.CGPA}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
