
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
    <section id="education" className="bg-[#080b1c] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">

        <h2 className="mb-14 mt-3 text-center text-4xl font-bold">
          My Education <span className="text-purple-400">Background</span>
        </h2>

        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-2xl border border-white/10 bg-white/3 p-7"
            >
              <div className="flex gap-5">
                <i className="bi bi-mortarboard-fill text-3xl text-purple-400"></i>

                <div>
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="mt-2 text-gray-400">{item.institute}</p>
                  <p className="mt-2 text-sm text-purple-400">{item.year}</p>
                  <p className="mt-2 text-sm text-purple-400">
                    CGPA: {item.CGPA}
                  </p>
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
