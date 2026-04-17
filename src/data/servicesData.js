import {
  FileText,
  ShieldCheck,
  Building2,
  MapPin,
  Briefcase,
  BookOpen,
  Landmark,
  TrendingUp,
} from "lucide-react";

export const services = [
  {
    id: "return-filing",
    icon: FileText,
    title: "Return Filing",
    tagline: "GST, Income Tax, TDS, FSSAI & more",
    description:
      "Expert-led return filing across all tax types. Ensure compliance with latest tax regulations with fast, accurate, and stress-free submission.",
    features: [
      "Expert-led return filing across all tax types",
      "Ensure compliance with latest tax regulations",
      "Fast, accurate, and stress-free submission",
      "Dedicated support for error resolution and queries",
    ],
    color: "#00D68F",
  },
  {
    id: "assessment",
    icon: ShieldCheck,
    title: "Assessment & Notice Resolution",
    tagline: "Income Tax, GST, Professional Tax & more",
    description:
      "Clear handling of income tax or GST notices. Case-specific consultation with experts for scrutiny, assessments, and appeals.",
    features: [
      "Clear handling of income tax or GST notices",
      "Case-specific consultation with experts",
      "Drafting and filing replies to tax authorities",
      "Support for scrutiny, assessments, and appeals",
    ],
    color: "#6366F1",
  },
  {
    id: "registrations",
    icon: Building2,
    title: "Registrations & Compliance",
    tagline: "Company Incorporation, GST, Trademark & more",
    description:
      "Start-to-finish company and LLP incorporation. Annual filings, registrations for GST, MSME, FSSAI, and comprehensive legal support.",
    features: [
      "Start-to-finish company and LLP incorporation",
      "Annual filings, strike-off, and legal drafting",
      "Registrations for GST, MSME, FSSAI, Copyright, etc.",
      "Comprehensive legal and compliance support",
    ],
    color: "#F59E0B",
  },
  {
    id: "virtual-office",
    icon: MapPin,
    title: "Virtual Office Facilities",
    tagline: "For GST, MCA Registrations & more",
    description:
      "Professional address for registration purposes with pan-India presence. Instant setup with GST/MCA compliant documentation.",
    features: [
      "Professional address for registration purposes",
      "Pan-India presence with instant setup",
      "Courier handling and virtual assistant options",
      "GST/MCA compliant documentation provided",
    ],
    color: "#EC4899",
  },
  {
    id: "consultancy",
    icon: Briefcase,
    title: "Consultancy & Compliances",
    tagline: "Tax, Business, Start-up & more",
    description:
      "Start-up registration and pitch-deck assistance. Business structuring, tax advisory, and ongoing compliance monitoring.",
    features: [
      "Start-up registration and pitch-deck assistance",
      "Business structuring and tax advisory",
      "Ongoing compliance monitoring & strategy",
      "End-to-end growth and legal guidance",
    ],
    color: "#14B8A6",
  },
  {
    id: "accounting",
    icon: BookOpen,
    title: "Virtual Accounting & Bookkeeping",
    tagline: "Cloud & Client Based Services",
    description:
      "Real-time cloud-based bookkeeping systems with data protection. Timely reports and accounts maintenance tailored to your business.",
    features: [
      "Real-time cloud-based bookkeeping systems",
      "Data protection & confidentiality assurance",
      "Timely reports and monthly reconciliation",
      "Accounts maintenance tailored to your business",
    ],
    color: "#8B5CF6",
  },
  {
    id: "loan-assistance",
    icon: Landmark,
    title: "Loan Assistance & Documentation",
    tagline: "Business, Home, Gold, Education & Personal Loans",
    description:
      "Expert help in choosing the best loan offers with documentation and eligibility support for quick approval.",
    features: [
      "Expert help in choosing the best loan offers",
      "Documentation and eligibility support",
      "Quick approval and smooth processing",
      "Customized loan strategies based on need",
    ],
    color: "#F97316",
  },
  {
    id: "financial-planning",
    icon: TrendingUp,
    title: "Financial Planning & Investment Advisory",
    tagline: "Wealth Management & Investment Guidance",
    description:
      "Tax-efficient investment strategies with goal-based financial planning. Mutual funds, ELSS, SIPs & portfolio management.",
    features: [
      "Tax-efficient investment strategies",
      "Goal-based financial planning support",
      "Mutual funds, ELSS, SIPs & portfolio management",
      "Guidance by SEBI-registered advisors",
    ],
    color: "#06B6D4",
  },
];

export const stats = [
  { value: 10000, suffix: "+", label: "Clients Served" },
  { value: 15000, suffix: "+", label: "Returns Filed" },
  { value: 4.78, suffix: "", label: "User Rating", isDecimal: true },
  { value: 5, suffix: "+", label: "Years Experience" },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Business Owner, Jaipur",
    quote:
      "TaxSafar made my GST filing completely stress-free. Their team is professional, responsive, and incredibly thorough. Highly recommended for any business owner!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Freelancer, Mumbai",
    quote:
      "As a freelancer, ITR filing was always confusing. TaxSafar simplified the entire process and even helped me save on taxes. Absolutely wonderful service!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sunil Verma",
    role: "Startup Founder, Delhi",
    quote:
      "From company registration to compliance, TaxSafar has been our one-stop solution. Their consultancy helped us structure our startup the right way.",
    rating: 5,
  },
  {
    id: 4,
    name: "Anita Desai",
    role: "Chartered Accountant, Pune",
    quote:
      "I partnered with TaxSafar as a vendor and it has been a game-changer. Their platform is intuitive and the support team is always available.",
    rating: 4,
  },
];

export const faqs = [
  {
    question: "What services does TaxSafar offer?",
    answer:
      "TaxSafar provides comprehensive tax and compliance services including ITR filing, GST return filing, company registration, virtual office services, bookkeeping, loan assistance, financial planning, and consultancy for businesses and individuals.",
  },
  {
    question: "How do I file my Income Tax Return (ITR) with TaxSafar?",
    answer:
      "Simply register on our platform, book a consultation, submit your documents, and our experts will handle the entire filing process. You can track the status through your dashboard in real-time.",
  },
  {
    question: "Is my financial data safe with TaxSafar?",
    answer:
      "Absolutely. We use bank-grade encryption and follow strict data protection protocols. Your financial information is kept confidential and secure at all times.",
  },
  {
    question: "How much does TaxSafar charge for services?",
    answer:
      "Our pricing varies depending on the service. We offer competitive rates starting from ₹499 for basic ITR filing. Contact us for a detailed quote tailored to your specific needs.",
  },
  {
    question: "Can I become a TaxSafar partner/vendor?",
    answer:
      "Yes! We welcome CA professionals, e-Mitra operators, and tax consultants to partner with us. Visit our Partner Login page or contact us to learn more about our vendor program.",
  },
  {
    question: "What is the turnaround time for services?",
    answer:
      "Most return filings are completed within 24-48 hours. Company registration takes 7-10 working days. Exact timelines depend on the service and government processing times.",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Book a Consultation",
    description:
      "Choose your service, pick a convenient time, and connect with our tax experts for a personalized consultation.",
    icon: "📞",
  },
  {
    step: 2,
    title: "Submit Your Documents",
    description:
      "Upload your documents securely through our platform. Our team reviews everything for accuracy.",
    icon: "📄",
  },
  {
    step: 3,
    title: "Track & Relax",
    description:
      "Monitor your filing status in real-time through your dashboard. We handle everything while you focus on your business.",
    icon: "✅",
  },
];
