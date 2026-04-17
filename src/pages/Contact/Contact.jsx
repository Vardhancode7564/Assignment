import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import styles from "./Contact.module.css";

const infoCards = [
  {
    Icon: Mail,
    title: "Email Us",
    content: "support@taxsafar.com",
    href: "mailto:support@taxsafar.com",
  },
  {
    Icon: Phone,
    title: "Call Us",
    content: "+91 97848 18899",
    href: "tel:+919784818899",
  },
  {
    Icon: MapPin,
    title: "Visit Us",
    content: "Swilesure Pvt. Ltd., Jaipur, Rajasthan, India",
    href: null,
  },
];
const hours = [
  ["Monday - Friday", "9:00 AM – 7:00 PM"],
  ["Saturday", "10:00 AM – 4:00 PM"],
  ["Sunday", "Closed"],
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main>
      <section className={styles.heroSection}>
        <div
          className={styles.heroBlob}
          style={{
            background: "radial-gradient(circle, #00ff88, transparent)",
            filter: "blur(80px)",
          }}
        />
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Get in Touch</span>
            <h1
              className="section-title mt-4 mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
            >
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="section-subtitle">
              Have questions? We'd love to hear from you and simplify your tax
              journey together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentGrid}>
          {/* Info cards */}
          <motion.div
            className={styles.infoColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {infoCards.map(({ Icon, title, content, href }) => (
              <div key={title} className={styles.infoCard}>
                <div className={styles.infoIconBox}>
                  <Icon size={20} />
                </div>
                <div>
                  <p
                    className={styles.infoTitle}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {title}
                  </p>
                  {href ? (
                    <a href={href} className={styles.infoLink}>
                      {content}
                    </a>
                  ) : (
                    <p className={styles.infoText}>{content}</p>
                  )}
                </div>
              </div>
            ))}
            <div className={styles.hoursCard}>
              <h3
                className={styles.hoursTitle}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Clock size={15} className="text-[#00ff88]" /> Business Hours
              </h3>
              {hours.map(([day, time]) => (
                <div key={day} className={styles.hoursRow}>
                  <span className="text-gray-400">{day}</span>
                  <span
                    className={`font-medium ${time === "Closed" ? "text-gray-600" : "text-white"}`}
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className={styles.formColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className={styles.formTitle}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Send Us a Message
            </h2>
            <p className={styles.formDesc}>
              We'll get back to you within 24 hours.
            </p>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <div className={styles.formRow}>
                <div>
                  <label className={styles.label} htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className={styles.input}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={styles.input}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="contact-phone">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className={styles.input}
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    className={styles.input}
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className={styles.label} htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className={`${styles.input} resize-none`}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full mt-1">
                <Send size={16} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <div
            className={styles.mapFrame}
            style={{ filter: "brightness(0.65) contrast(1.1) saturate(0.6)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.885141778498727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="TaxSafar Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
