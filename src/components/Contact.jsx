import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_ugdav8x";
const TEMPLATE_ID = "template_3az6fjo";
const PUBLIC_KEY = "HeM8Wwaj8T2v-dwm5";

const emptyForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          sender_email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        { publicKey: PUBLIC_KEY }
      );

      setForm(emptyForm);
      setError("");
      setShowThanks(true);
      setTimeout(() => setShowThanks(false), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Oops! Something went wrong ❌");
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>

        <form id="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />

          <div className="contact-feedback" aria-live="polite">
            {error}
          </div>

          <button id="contact-submit" type="submit">
            Send Message
          </button>
        </form>
      </div>

      {showThanks && <div className="toast">🎉 Thanks For Contacting Me</div>}
    </section>
  );
}
