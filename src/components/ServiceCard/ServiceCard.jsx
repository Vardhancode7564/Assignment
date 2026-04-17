import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      {/* Top accent line */}
      <div
        className={styles.accentLine}
        style={{
          background: `linear-gradient(90deg, ${service.color}, transparent)`,
        }}
      />

      <div
        className={styles.iconBox}
        style={{ backgroundColor: `${service.color}18`, color: service.color }}
      >
        <Icon size={24} />
      </div>

      <div>
        <h3
          className={styles.title}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {service.title}
        </h3>
        <p className={styles.tagline}>{service.tagline}</p>
      </div>

      <ul className={styles.featureList}>
        {service.features.slice(0, 3).map((f, i) => (
          <li key={i} className={styles.featureItem}>
            <Check
              size={13}
              className={styles.checkIcon}
              style={{ color: service.color }}
            />
            {f}
          </li>
        ))}
      </ul>

      <Link
        to="/services"
        className={styles.link}
        style={{ color: service.color }}
      >
        Learn More
        <ArrowRight
          size={15}
          className={styles.linkArrow}
        />
      </Link>
    </motion.div>
  );
}
