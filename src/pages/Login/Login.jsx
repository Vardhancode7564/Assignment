import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import styles from "./AuthLayout.module.css";

const GoogleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);
const AppleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);



export default function Login() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login demo — redirecting...");
  };

  return (
    <div className={styles.container}>
      {/* BG */}
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
            background:
              "linear-gradient(135deg, #001a0e 0%, #000d07 60%, #000 100%)",
          }}
        >
          <div
            className={styles.sidebarBlob}
            style={{
              background: "radial-gradient(circle, #00ff88, transparent)",
              filter: "blur(50px)",
              animation: "float 6s ease-in-out infinite",
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
          <div className="text-6xl mb-6 relative z-10">🔐</div>
          <h2
            className={styles.heading}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Welcome Back!
          </h2>
          <p className={styles.subheading}>
            Access your dashboard to track filings, manage documents, and stay
            compliant with ease.
          </p>
        </div>

        {/* Right form */}
        <div className={styles.rightForm}>
          <div className={styles.formHeader}>
            <h1
              className={styles.formTitle}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Sign In
            </h1>
            <p className={styles.formDesc}>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className={styles.formLink}
              >
                Sign up
              </Link>
            </p>
          </div>

          <form
            id="login-form"
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <div>
              <label
                className={styles.label}
                htmlFor="login-email"
              >
                Email Address
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className={styles.input}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label
                className={styles.label}
                htmlFor="login-password"
              >
                Password
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="login-password"
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
                  aria-label="Toggle password"
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
              Sign In
            </button>
          </form>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>
              or continue with
            </span>
            <div className={styles.dividerLine} />
          </div>

          <div className={styles.socialGrid}>
            {[
              [GoogleIcon, "Google"],
              [AppleIcon, "Apple"],
            ].map(([Icon, label]) => (
              <button
                key={label}
                className={styles.socialBtn}
              >
                <Icon /> {label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
