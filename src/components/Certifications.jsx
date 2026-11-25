
import cer1 from "../assets/cer1.jpeg";
import cer2 from "../assets/cer2.jpeg";
import cer3 from "../assets/cer3.jpeg";

const certificates = [
  {
    title: "STAR Mark Certificate",
    organization: "Bajaj Finserv",
    icon: "bi bi-award-fill",
    image: cer1,
  },
  {
    title: "Junior Software Developer",
    organization: "MSBSVET",
    icon: "bi bi-award-fill",
    image: cer2,
  },
  {
    title: "Aptis ESOL English Certificate",
    organization: "British Council",
    icon: "bi bi-patch-check-fill",
    image: cer3,
  },
];

function Certificates() {
  return (
    <section id="certificates" className="bg-[#080b1c] px-4 py-16 text-white sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
       

        <h2 className="mb-10 mt-2 text-center text-3xl font-bold sm:text-4xl md:mb-14 md:mt-3">
          My <span className="text-purple-400">Achievements</span>
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition hover:border-purple-500/50"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="aspect-4/3 w-full object-cover"
              />
              <div className="flex items-center gap-3.5 p-5 sm:gap-4 sm:p-6">
                <i className={`${certificate.icon} shrink-0 text-2xl text-purple-400 sm:text-3xl`}></i>

                <div className="min-w-0">
                  <h3 className="text-base font-bold sm:text-lg">{certificate.title}</h3>
                  <p className="mt-1 text-sm text-gray-400 sm:text-base">{certificate.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
