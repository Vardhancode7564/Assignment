import { motion } from "framer-motion";
import { howItWorks } from "../../data/servicesData";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Simple Process</span>
          <h2 className="section-title mt-4 mb-4">
            How <span className="gradient-text">TaxSafar</span> Works
          </h2>
          <p className="section-subtitle">
            Get started in three simple steps. We handle the complexity so you
            don't have to.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Connector line */}
          <div
            className={styles.connector}
            style={{
              background:
                "linear-gradient(90deg, rgba(0,255,136,0.4), rgba(0,255,136,0.2), rgba(0,255,136,0.4))",
            }}
          />

          {howItWorks.map((step, i) => (
            <motion.div
              key={step.step}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className={styles.iconContainer}>
                <div className={styles.iconCircle}>{step.icon}</div>
                <span className={styles.stepBadge}>{step.step}</span>
              </div>
              <h3
                className={styles.stepTitle}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
