
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-[#0b1024] px-4 py-16 text-white sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-10 mt-2 text-center text-3xl font-bold sm:text-4xl md:mb-14 md:mt-3">
          Get In <span className="text-purple-400">Touch</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">Let's Work Together</h3>
            <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
              Have a project idea or an opportunity? Feel free to contact me.
              I would love to hear from you.
            </p>

            <div className="mt-6 space-y-4 text-sm sm:mt-8 sm:space-y-5 sm:text-base">
              <p className="flex items-center gap-3 break-all sm:break-normal">
                <i className="bi bi-envelope shrink-0 text-purple-400"></i>
                <span>rohinich2439@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <i className="bi bi-geo-alt shrink-0 text-purple-400"></i>
                <span>Wardha, Maharashtra</span>
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-5 sm:space-y-5 sm:p-7"
          >
            <input
              required
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#111832] p-3.5 text-sm text-white outline-none focus:border-purple-500 sm:p-4 sm:text-base"
            />

            <input
              required
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#111832] p-3.5 text-sm text-white outline-none focus:border-purple-500 sm:p-4 sm:text-base"
            />

            <textarea
              required
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#111832] p-3.5 text-sm text-white outline-none focus:border-purple-500 sm:p-4 sm:text-base"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-purple-600 py-3.5 text-sm font-semibold transition hover:bg-purple-500 sm:py-4 sm:text-base"
            >
              Send Message <i className="bi bi-send ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
