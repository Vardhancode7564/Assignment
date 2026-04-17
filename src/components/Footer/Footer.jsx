import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const serviceLinks = [
  "Return Filing",
  "GST Registration",
  "Virtual Accounting",
  "Consultancy",
  "Loan Assistance",
  "Financial Planning",
];
const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Partner Portal", to: "/partner-login" },
];
const supportLinks = [
  "Help Center",
  "Terms of Use",
  "Privacy Policy",
  "Payment Policy",
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandColumn}>
            <Link
              to="/"
              className={styles.logo}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <img
                src="/logo.png"
                alt="TaxSafar Logo"
                style={{ width: "32px", height: "32px", objectFit: "cover", borderRadius: "8px", mixBlendMode: "screen" }}
              />
              <span>
                Tax<span className="text-[#00ff88]">Safar</span>
              </span>
            </Link>
            <p className={styles.description}>
              Your trusted partner for all tax, compliance, and financial needs
              across India.
            </p>
            <div className={styles.contactInfo}>
              <a
                href="mailto:support@taxsafar.com"
                className={styles.contactLink}
              >
                <Mail size={13} /> support@taxsafar.com
              </a>
              <a
                href="tel:+919784818899"
                className={styles.contactLink}
              >
                <Phone size={13} /> +91 97848 18899
              </a>
              <span className={styles.contactText}>
                <MapPin size={13} /> Jaipur, Rajasthan, India
              </span>
            </div>
            <div className={styles.socialIcons}>
              {[
                [TwitterIcon, "Twitter"],
                [LinkedinIcon, "LinkedIn"],
                [InstagramIcon, "Instagram"],
                [FacebookIcon, "Facebook"],
              ].map(([Icon, label]) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={styles.socialIcon}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className={styles.columnTitle}>
              Services
            </h4>
            <div className={styles.linkGroup}>
              {serviceLinks.map((s) => (
                <Link
                  key={s}
                  to="/services"
                  className={styles.linkItem}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className={styles.columnTitle}>
              Company
            </h4>
            <div className={styles.linkGroup}>
              {companyLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className={styles.linkItem}
                >
                  {label}
                </Link>
              ))}
              {["Blogs", "Careers"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className={styles.linkItem}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Support + Newsletter */}
          <div>
            <h4 className={styles.columnTitle}>
              Support
            </h4>
            <div className={styles.linkGroup}>
              {supportLinks.map((s) => (
                <a
                  key={s}
                  href="#"
                  className={styles.linkItem}
                >
                  {s}
                </a>
              ))}
            </div>
            <h4 className={styles.columnTitle}>
              Newsletter
            </h4>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                id="newsletter-email"
                placeholder="Your email"
                className={styles.input}
              />
              <button
                type="submit"
                className={styles.submitBtn}
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} TaxSafar. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a
              href="#"
              className={styles.legalLink}
            >
              Privacy &amp; Terms
            </a>
            <Link
              to="/contact"
              className={styles.legalLink}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
