import { motion } from "framer-motion";
import AnimatedCounter from "../../components/StatsCounter/StatsCounter";
import CTABanner from "../../components/CTABanner/CTABanner";
import styles from "./About.module.css";

const values = [
  {
    icon: "🎯",
    title: "Mission",
    desc: "To simplify tax compliance for every individual and business in India through technology-driven, affordable, and accessible financial services.",
  },
  {
    icon: "👁️",
    title: "Vision",
    desc: "To become India's most trusted fintech platform for tax, compliance, and financial advisory — empowering millions to grow confidently.",
  },
  {
    icon: "💎",
    title: "Values",
    desc: "Transparency, integrity, and client-first approach. We build long-term trust by delivering honest, timely, and expert-level services.",
  },
];
const milestones = [
  {
    year: "2021",
    title: "Foundation Laid",
    desc: "Swilesure Pvt. Ltd. incorporated with the vision to simplify tax compliance in India.",
  },
  {
    year: "2022",
    title: "TaxSafar Launched",
    desc: "Platform went live, offering ITR and GST filing to individuals and small businesses.",
  },
  {
    year: "2023",
    title: "Vendor Network Expansion",
    desc: "Onboarded 500+ vendor partners including e-Mitra operators across Rajasthan.",
  },
  {
    year: "2024",
    title: "Full-Service Platform",
    desc: "Expanded to company registration, virtual offices, loan assistance, and financial advisory.",
  },
  {
    year: "2025",
    title: "10,000+ Clients Milestone",
    desc: "Crossed 10,000 satisfied clients with a 4.78-star average rating and growing.",
  },
];
const statsData = [
  { value: 10000, suffix: "+", label: "Happy Clients" },
  { value: 500, suffix: "+", label: "Vendor Partners" },
  { value: 15000, suffix: "+", label: "Returns Filed" },
  { value: 50, suffix: "+", label: "Services Offered" },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
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
            <span className="section-label">About TaxSafar</span>
            <h1
              className="section-title mt-4 mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
            >
              Your Trusted <span className="gradient-text">Tax Partner</span>
            </h1>
            <p className="section-subtitle">
              Learn about our mission, story, and the platform behind India's
              growing fintech consultancy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={styles.storyHeading}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our <span className="gradient-text">Story</span>
            </h2>
            {[
              "TaxSafar was born from a simple observation: tax compliance in India was unnecessarily complicated, expensive, and stressful for millions of people.",
              "Founded by Swilesure Pvt. Ltd. in Jaipur, Rajasthan, we set out to build a technology-driven platform that makes tax filing, business registration, and financial planning accessible to everyone.",
              "Today, we serve 10,000+ clients, partner with 500+ vendors, and continue to expand our services to cover every aspect of business compliance and financial growth.",
            ].map((p, i) => (
              <p key={i} className={styles.storyParagraph}>
                {p}
              </p>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.storyImageBox}>🏢</div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {statsData.map((s, i) => (
            <motion.div
              key={s.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className={styles.statValue}
                style={{ fontFamily: "var(--font-accent)" }}
              >
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          <motion.div
            className={styles.valuesHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title mt-4">
              Mission, Vision &amp;{" "}
              <span className="gradient-text">Values</span>
            </h2>
          </motion.div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3
                  className={styles.valueTitle}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {v.title}
                </h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineContainer}>
          <motion.div
            className={styles.timelineHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Journey</span>
            <h2 className="section-title mt-4">
              Key <span className="gradient-text">Milestones</span>
            </h2>
          </motion.div>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className={styles.timelineDot} />
                <span className={styles.timelineYear}>{m.year}</span>
                <h3
                  className={styles.timelineTitle}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {m.title}
                </h3>
                <p className={styles.timelineDesc}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
