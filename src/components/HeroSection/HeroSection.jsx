import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { stats } from "../../data/servicesData";
import AnimatedCounter from "../StatsCounter/StatsCounter";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section
      className={styles.section}
      id="hero-section"
    >
      {/* BG blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={styles.bgBlob1}
          style={{
            background: "radial-gradient(circle, #00ff88 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className={styles.bgBlob2}
          style={{
            background: "radial-gradient(circle, #00cc6a 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
        {/* Grid overlay */}
        <div
          className={styles.gridOverlay}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,136,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className={styles.container}>
        {/* Left */}
        <motion.div
          className={styles.leftColumn}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="section-label">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse inline-block" />
              Trusted by 10,000+ businesses across India
            </span>
          </motion.div>

          <motion.h1
            className={styles.heading}
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            One Stop for All Your{" "}
            <span className="gradient-text">Tax &amp; Compliance</span> Needs
          </motion.h1>

          <motion.p
            className={styles.subheading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Simplifying compliance, boosting profits — our tech-driven
            consultancy helps your business run smarter and faster. From ITR to
            GST, we've got you covered.
          </motion.p>

          <motion.div
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/contact" className="btn-primary">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            className={styles.popularTags}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span className="text-sm text-gray-500 font-medium">Popular:</span>
            {[
              "Return Filing",
              "GST Registration",
              "Financial Planning",
              "Compliance",
            ].map((tag) => (
              <Link
                key={tag}
                to="/services"
                className={styles.tag}
              >
                {tag}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — stat cards */}
        <motion.div
          className={styles.rightColumn}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.12 }}
              whileHover={{ y: -4 }}
            >
              <div
                className="text-3xl font-bold mb-1 text-[#00ff88]"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className={styles.scrollIndicator}
        style={{ animation: "float 3s ease-in-out infinite" }}
      >
        <div className="w-6 h-9 rounded-xl border-2 border-gray-700 relative">
          <div
            className="w-1 h-2 bg-[#00ff88] rounded-full absolute left-1/2 -translate-x-1/2"
            style={{
              animation: "scrollDot 2s ease-in-out infinite",
              top: "6px",
            }}
          />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
