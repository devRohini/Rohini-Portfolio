
import avatar from "../assets/Avtar.png";

function About() {
  return (
    <section id="about" className="bg-[#0b1024] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
         <h2 className="mb-14 mt-3 text-center text-4xl font-bold">
          Get to know <span className="text-purple-400"> Me</span>
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <div className="h-64 w-64 overflow-hidden rounded-3xl border border-purple-500/30 bg-linear-to-br from-purple-600/30 to-blue-600/20 shadow-xl shadow-purple-900/30">
              <img
                src={avatar}
                alt="Rohini Chaudhari"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-bold">
              I'm Rohini Chaudhari
            </h3>

            <p className="leading-8 text-gray-400">
              Full Stack Developer fresher turning ideas into working web applications, combining clean frontend interfaces with practical backend logic.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-5">
              <div>
                <p className="text-sm text-gray-400">Name</p>
                <p className="mt-1 font-semibold">Rohini Chaudhari</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Profession</p>
                <p className="mt-1 font-semibold">Full Stack Developer</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="mt-1 font-semibold">Wardha, Maharashtra</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Availability</p>
                <p className="mt-1 font-semibold text-green-400">
                  Open to opportunities
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-purple-600 px-7 py-3 font-semibold transition hover:bg-purple-500"
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
