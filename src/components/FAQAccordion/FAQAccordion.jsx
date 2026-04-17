import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../../data/servicesData";
import styles from "./FAQAccordion.module.css";

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section className={styles.section} id="faq-section">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-title mt-4 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`${styles.item} ${open === i ? styles.itemOpen : styles.itemClosed}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <button
                className={styles.trigger}
                style={{ fontFamily: "var(--font-heading)" }}
                onClick={() => setOpen(open === i ? -1 : i)}
                id={`faq-trigger-${i}`}
                aria-expanded={open === i}
              >
                <span>{faq.question}</span>
                <span
                  className={`${styles.toggleIcon} ${open === i ? styles.toggleIconOpen : styles.toggleIconClosed}`}
                >
                  {open === i ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-64" : "max-h-0"}`}
              >
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
