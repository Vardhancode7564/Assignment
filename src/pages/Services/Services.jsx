import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "../../data/servicesData";
import CTABanner from "../../components/CTABanner/CTABanner";
import styles from "./Services.module.css";

export default function Services() {
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
            <span className="section-label">What We Offer</span>
            <h1
              className="section-title mt-4 mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
            >
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="section-subtitle">
              Comprehensive tax, compliance, and financial solutions for
              individuals and businesses across India.
            </p>
          </motion.div>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={styles.serviceRow}>
                    <div
                      className={styles.serviceIcon}
                      style={{
                        backgroundColor: `${s.color}18`,
                        color: s.color,
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <div className={styles.serviceContent}>
                      <h2
                        className={styles.serviceTitle}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {s.title}
                      </h2>
                      <p className={styles.serviceTagline}>{s.tagline}</p>
                      <p className={styles.serviceDesc}>{s.description}</p>
                      <ul className={styles.featureList}>
                        {s.features.map((f, fi) => (
                          <li key={fi} className={styles.featureItem}>
                            <Check
                              size={13}
                              className={styles.checkIcon}
                              style={{ color: s.color }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
