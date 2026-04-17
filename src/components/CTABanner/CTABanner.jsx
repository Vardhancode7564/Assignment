import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.section} id="cta-section">
      <div className={styles.container}>
        <motion.div
          className={styles.bannerCard}
          style={{
            background:
              "linear-gradient(135deg, #001a0e 0%, #000d07 50%, #000000 100%)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative blobs */}
          <div
            className={styles.blob1}
            style={{
              background: "radial-gradient(circle, #00ff88, transparent)",
              filter: "blur(60px)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <div
            className={styles.blob2}
            style={{
              background: "radial-gradient(circle, #00cc6a, transparent)",
              filter: "blur(60px)",
              animation: "float 8s ease-in-out infinite reverse",
            }}
          />

          <div className={styles.contentWrapper}>
            <h2
              className={styles.heading}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to <span className="gradient-text">Simplify</span> Your
              Taxes?
            </h2>
            <p className={styles.subheading}>
              Join 10,000+ businesses who trust TaxSafar for filing, compliance,
              and financial planning.
            </p>
            <div className={styles.buttonGroup}>
              <Link to="/signup" className="btn-primary">
                Get Started Today <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/919784818899"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
