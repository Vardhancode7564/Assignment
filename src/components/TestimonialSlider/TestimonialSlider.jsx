import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../../data/servicesData";
import styles from "./TestimonialSlider.module.css";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title mt-4 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Join thousands of satisfied businesses who trust TaxSafar for their
            compliance needs.
          </p>
        </motion.div>

        <div className={styles.cardWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={styles.card}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.quoteDecor}>"</div>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < t.rating ? "#00ff88" : "none"}
                    className={
                      i < t.rating ? "text-[#00ff88]" : "text-gray-600"
                    }
                  />
                ))}
              </div>
              <p className={styles.quoteText}>{t.quote}</p>
              <p
                className={styles.authorName}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t.name}
              </p>
              <p className={styles.authorRole}>{t.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className={styles.controls}>
            <button onClick={prev} aria-label="Previous" className={styles.navBtn}>
              <ChevronLeft size={18} />
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#00ff88]" : "w-2 bg-gray-700 hover:bg-gray-500"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className={styles.navBtn}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
