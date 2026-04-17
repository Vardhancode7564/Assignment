import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Shield } from "lucide-react";
import styles from "../Login/AuthLayout.module.css";



export default function PartnerLogin() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ vendorId: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Partner login — demo portal.");
  };

  return (
    <div className={styles.container}>
      <div className={styles.bgBlobs}>
        <div
          className={styles.blob1}
          style={{
            background: "radial-gradient(circle, #00ff88, transparent)",
            filter: "blur(90px)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className={styles.blob2}
          style={{
            background: "radial-gradient(circle, #00cc6a, transparent)",
            filter: "blur(90px)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className={styles.gridOverlay}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,136,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        className={styles.panelContent}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left branding */}
        <div
          className={styles.leftSidebar}
          style={{
            backgroundColor: "#050f08",
            borderRight: "1px solid rgba(0,255,136,0.1)",
          }}
        >
          <div
            className={styles.sidebarBlob}
            style={{
              background: "radial-gradient(circle, #00ff88, transparent)",
              filter: "blur(60px)",
              animation: "float 7s ease-in-out infinite",
            }}
          />
          <Link
            to="/"
            className={styles.logo}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <img
              src="/logo.png"
              alt="TaxSafar Logo"
              style={{ width: "44px", height: "44px", objectFit: "cover", borderRadius: "12px", mixBlendMode: "screen" }}
            />
            Tax<span className="text-[#00ff88]">Safar</span>
          </Link>
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/25 px-3 py-1.5 rounded-full mb-6 relative z-10">
            <Shield size={12} /> Vendor Portal
          </span>
          <div className="text-6xl mb-5 relative z-10">🤝</div>
          <h2
            className={styles.heading}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Partner Portal
          </h2>
          <p className={styles.subheading}>
            Access your vendor dashboard to manage clients, track filings, and
            grow your business with TaxSafar.
          </p>
        </div>

        {/* Right form */}
        <div className={styles.rightForm}>
          <div className={styles.formHeader}>
            <h1
              className={styles.formTitle}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Partner Sign In
            </h1>
            <p className={styles.formDesc}>
              Access your vendor dashboard and manage your clients.
            </p>
          </div>

          <form
            id="partner-login-form"
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <div>
              <label className={styles.label} htmlFor="partner-id">
                Vendor / Partner ID
              </label>
              <input
                id="partner-id"
                name="vendorId"
                type="text"
                placeholder="e.g., VND-12345"
                className={styles.input}
                value={form.vendorId}
                onChange={(e) =>
                  setForm({ ...form, vendorId: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className={styles.label} htmlFor="partner-password">
                Password
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="partner-password"
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="••••••••"
                  className={styles.input}
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  aria-label="Toggle"
                  onClick={() => setShow(!show)}
                  className={styles.toggleBtn}
                >
                  {show ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>
            <div className={styles.actionRow}>
              <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
                <input type="checkbox" className="accent-[#00ff88]" /> Remember
                me
              </label>
              <a
                href="#"
                className="text-sm text-[#00ff88] hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>
            <button type="submit" className="btn-primary w-full !py-3">
              Sign In to Portal
            </button>
          </form>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>need help?</span>
            <div className={styles.dividerLine} />
          </div>

          <p className="text-sm text-gray-500 text-center">
            Not a partner?{" "}
            <Link
              to="/contact"
              className={styles.formLink}
            >
              Become a Partner
            </Link>
          </p>
          <p className="text-xs text-gray-600 text-center mt-4">
            Contact:{" "}
            <a
              href="mailto:support@taxsafar.com"
              className="text-[#00ff88]/80 hover:text-[#00ff88] transition-colors"
            >
              support@taxsafar.com
            </a>{" "}
            ·{" "}
            <a
              href="tel:+919784818899"
              className="text-[#00ff88]/80 hover:text-[#00ff88] transition-colors"
            >
              +91 97848 18899
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
