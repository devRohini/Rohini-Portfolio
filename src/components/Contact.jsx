import { useState } from "react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: "error",
        text: "EmailJS settings are missing. Copy .env.example to .env and add your Service ID, Template ID, and Public Key.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: {
              name: form.name,
              from_name: form.name,
              email: form.email,
              from_email: form.email,
              reply_to: form.email,
              message: form.message,
              to_name: "Rohini Chaudhari",
            },
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to send email");
      }

      setForm({ name: "", email: "", message: "" });
      setStatus({
        type: "success",
        text: "Message sent! Thank you for reaching out — I'll get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        text: `Could not send your message right now (${error instanceof Error ? error.message : String(error)}). Please try again or email rohinich2439@gmail.com directly.`,
      });
    } finally {
      setSending(false);
    }
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
              <a
                href="mailto:rohinich2439@gmail.com"
                className="flex items-center gap-3 break-all transition hover:text-purple-300 sm:break-normal"
              >
                <i className="bi bi-envelope shrink-0 text-purple-400"></i>
                <span>rohinich2439@gmail.com</span>
              </a>
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
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              disabled={sending}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#111832] p-3.5 text-sm text-white outline-none focus:border-purple-500 disabled:opacity-60 sm:p-4 sm:text-base"
            />

            <input
              required
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              disabled={sending}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#111832] p-3.5 text-sm text-white outline-none focus:border-purple-500 disabled:opacity-60 sm:p-4 sm:text-base"
            />

            <textarea
              required
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              disabled={sending}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#111832] p-3.5 text-sm text-white outline-none focus:border-purple-500 disabled:opacity-60 sm:p-4 sm:text-base"
            />

            {status.text && (
              <p
                role="status"
                className={`rounded-xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-green-500/30 bg-green-500/10 text-green-300"
                    : "border-rose-500/30 bg-rose-500/10 text-rose-300"
                }`}
              >
                {status.text}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-xl bg-purple-600 py-3.5 text-sm font-semibold transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60 sm:py-4 sm:text-base"
            >
              {sending ? "Sending..." : "Send Message"}{" "}
              <i className={`bi ${sending ? "bi-hourglass-split" : "bi-send"} ml-2`}></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
