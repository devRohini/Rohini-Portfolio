
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
    <section id="contact" className="bg-[#080b1c] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-14 mt-3 text-center text-4xl font-bold">
          Get In <span className="text-purple-400">Touch</span>
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">Let's Work Together</h3>
            <p className="mt-5 leading-8 text-gray-400">
              Have a project idea or an opportunity? Feel free to contact me.
              I would love to hear from you.
            </p>

            <div className="mt-8 space-y-5">
              <p><i className="bi bi-envelope mr-3 text-purple-400"></i> rohinich2439@gmail.com</p>
              <p><i className="bi bi-geo-alt mr-3 text-purple-400"></i>Wardha, Maharashtra</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/3 p-7"
          >
            <input
              required
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#111832] p-4 text-white outline-none focus:border-purple-500"
            />

            <input
              required
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#111832] p-4 text-white outline-none focus:border-purple-500"
            />

            <textarea
              required
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#111832] p-4 text-white outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-purple-600 py-4 font-semibold transition hover:bg-purple-500"
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
