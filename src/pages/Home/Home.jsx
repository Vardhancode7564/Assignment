import { motion } from "framer-motion";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import CTABanner from "../../components/CTABanner/CTABanner";
import { services } from "../../data/servicesData";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className={styles.servicesSection} id="services-section">
        <div className={styles.container}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Services</span>
            <h2 className="section-title mt-4 mb-4">
              Comprehensive <span className="gradient-text">Tax Solutions</span>
            </h2>
            <p className="section-subtitle">
              From return filing to financial planning, we cover every aspect of
              your tax journey.
            </p>
          </motion.div>
          <div className={styles.grid}>
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
      <HowItWorks />
      <TestimonialSlider />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
}
