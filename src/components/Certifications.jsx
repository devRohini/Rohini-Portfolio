
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
    <section id="certificates" className="bg-[#0b1024] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
       

        <h2 className="mb-14 mt-3 text-center text-4xl font-bold">
          My <span className="text-purple-400">Achievements</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="flex items-center gap-4 p-6">
                <i className={`${certificate.icon} text-3xl text-purple-400`}></i>

                <div>
                  <h3 className="text-lg font-bold">{certificate.title}</h3>
                  <p className="mt-1 text-gray-400">{certificate.organization}</p>
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
