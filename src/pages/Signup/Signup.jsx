import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import styles from "../Login/AuthLayout.module.css";

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
const FbIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);



export default function Signup() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (form.password.length < 6) e.password = "Min 6 characters";
    if (form.password !== form.confirm) e.confirm = "Passwords do not match";
    if (!form.terms) e.terms = "You must accept terms";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    alert("Account created! Redirecting to login...");
  };

  const field = (name, val, onChange) => ({
    name,
    value: val,
    onChange,
    className: `${styles.input} ${errors[name] ? styles.inputError : ""}`,
  });

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
            background:
              "linear-gradient(135deg, #001a0e 0%, #000d07 60%, #000 100%)",
          }}
        >
          <div
            className={styles.sidebarBlobSignup}
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
          <div className="text-6xl mb-6 relative z-10">🚀</div>
          <h2
            className={styles.heading}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get Started
          </h2>
          <p className={styles.subheading}>
            Join 10,000+ businesses and simplify your tax journey today.
          </p>
        </div>

        {/* Right form */}
        <div className={styles.rightForm}>
          <div className={styles.formHeader}>
            <h1
              className={styles.formTitle}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Create Account
            </h1>
            <p className={styles.formDesc}>
              Already have an account?{" "}
              <Link
                to="/login"
                className={styles.formLink}
              >
                Sign in
              </Link>
            </p>
          </div>

          <form
            id="signup-form"
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <div>
              <label
                className={styles.label}
                htmlFor="su-name"
              >
                Full Name
              </label>
              <input
                id="su-name"
                type="text"
                placeholder="Harsha Vardhan"
                {...field("name", form.name, (e) =>
                  setForm({ ...form, name: e.target.value }),
                )}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-medium text-gray-400 mb-1.5"
                  htmlFor="su-email"
                >
                  Email
                </label>
                <input
                  id="su-email"
                  type="email"
                  placeholder="you@example.com"
                  {...field("email", form.email, (e) =>
                    setForm({ ...form, email: e.target.value }),
                  )}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  className="block text-xs font-medium text-gray-400 mb-1.5"
                  htmlFor="su-phone"
                >
                  Phone
                </label>
                <input
                  id="su-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  {...field("phone", form.phone, (e) =>
                    setForm({ ...form, phone: e.target.value }),
                  )}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className={styles.label}
                  htmlFor="su-pwd"
                >
                  Password
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    id="su-pwd"
                    type={show ? "text" : "password"}
                    placeholder="••••••••"
                    {...field("password", form.password, (e) =>
                      setForm({ ...form, password: e.target.value }),
                    )}
                  />
                  <button
                    type="button"
                    aria-label="Toggle"
                    onClick={() => setShow(!show)}
                    className={styles.toggleBtn}
                  >
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-xs mt-1">{errors.password}</p>
                )}
              </div>
              <div>
                <label
                  className="block text-xs font-medium text-gray-400 mb-1.5"
                  htmlFor="su-confirm"
                >
                  Confirm
                </label>
                <input
                  id="su-confirm"
                  type="password"
                  placeholder="••••••••"
                  {...field("confirm", form.confirm, (e) =>
                    setForm({ ...form, confirm: e.target.value }),
                  )}
                />
                {errors.confirm && (
                  <p className="text-red-400 text-xs mt-1">{errors.confirm}</p>
                )}
              </div>
            </div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 accent-[#00ff88]"
                checked={form.terms}
                onChange={(e) => setForm({ ...form, terms: e.target.checked })}
              />
              <span className="text-xs text-gray-500">
                I agree to the{" "}
                <a href="#" className="text-[#00ff88]">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#00ff88]">
                  Privacy Policy
                </a>
              </span>
            </label>
            {errors.terms && (
              <p className="text-red-400 text-xs">{errors.terms}</p>
            )}
            <button type="submit" className="btn-primary w-full !py-3">
              Create Account
            </button>
          </form>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>
              or sign up with
            </span>
            <div className={styles.dividerLine} />
          </div>
          <div className={styles.socialGrid}>
            {[
              [GoogleIcon, "Google"],
              [FbIcon, "Facebook"],
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
