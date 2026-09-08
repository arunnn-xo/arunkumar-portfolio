"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Cpu,
  Cloud,
  Smartphone,
  Download,
  Send,
  GraduationCap,
  ArrowUpRight,
  MessageCircle,
  Menu,
  X,
  Briefcase,
  Bot,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Portfolio Data ---
const portfolioData = {
  name: "Arunkumar R",
  role: "Junior Web Developer | Next.js, Express.js & AI-Powered Development",
  profilePicture: "/arun-profile.jpg",
  resumeUrl: "/ARUNR.pdf",
  badge: "Junior Web Developer • Next.js & Modern AI",
  about: {
    title: "I'm Arunkumar, a Junior Web Developer building modern web apps with Next.js & AI",
    description:
      "Currently working as a Junior Web Developer, building responsive, scalable web applications with Next.js and Express.js. I specialize in crafting clean, advance-level frontend UIs and leveraging today's top AI agents and foundation models to deliver fast, intelligent, and seamless web experiences.",
    role: "Junior Web Developer",
    coreStack: "Next.js & Express.js",
    aiFocus: "AI Agents & Modern Models",
    from: "Coimbatore, India",
    degree: "M.Sc. Information Technology",
    email: "arunkumarr09032003@gmail.com",
    phone: "+91 90256 04721",
  },
  contact: {
    email: "arunkumarr09032003@gmail.com",
    phone: "+91 90256 04721",
    whatsapp: "+919025604721",
    location: "Coimbatore, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/charlie-xo?tab=packages",
  },
  services: [
    {
      title: "Next.js & Frontend",
      description: "High-end, responsive web interfaces built with Next.js, React 19, Tailwind CSS, and smooth Framer Motion micro-interactions.",
      icon: <Code2 className="text-[#00DF81]" size={24} />,
    },
    {
      title: "Express.js Backend",
      description: "Clean server architectures, secure RESTful APIs, user authentication, and databases with MySQL & Supabase.",
      icon: <Database className="text-[#00DF81]" size={24} />,
    },
    {
      title: "AI Models & Agents",
      description: "Integrating modern AI models (Claude, OpenAI, Gemini) to build smart web features, automated tools, and dynamic user experiences.",
      icon: <Cpu className="text-[#00DF81]" size={24} />,
    },
    {
      title: "Modern UI/UX Design",
      description: "Crafting modern, creative, and intuitive website designs with clean layouts, dark aesthetic palettes, and subtle animations.",
      icon: <Layout className="text-[#00DF81]" size={24} />,
    },
    {
      title: "Full-Stack Delivery",
      description: "End-to-end web applications engineered from responsive UI design to production cloud deployment on Vercel.",
      icon: <Cloud className="text-[#00DF81]" size={24} />,
    },
    {
      title: "Mobile App-Like UI",
      description: "Pixel-perfect on mobile, tablet, and desktop, optimized for fast loading speeds, clean structure, and seamless usability.",
      icon: <Smartphone className="text-[#00DF81]" size={24} />,
    },
  ],
  liveProjects: [
    {
      title: "Yamora Resorts",
      category: "Live Production • Full-Stack",
      role: "Next.js & Express.js Developer",
      description:
        "Luxury resort and hospitality platform engineered with Next.js on the frontend and Express.js backend. Features interactive booking showcases, dynamic room catalogs, and high-performance asset delivery.",
      tech: ["Next.js", "Express.js", "Tailwind CSS", "REST API"],
      liveLink: "https://yamoraresorts.com/",
    },
    {
      title: "Jams Marine Academy",
      category: "Live Production • Frontend",
      role: "Frontend Next.js Developer",
      description:
        "Modern educational portal and course catalog for a leading maritime academy. Built with responsive Next.js architecture, fast Core Web Vitals, and accessible course inquiry workflows.",
      tech: ["Next.js", "React", "Tailwind CSS", "SEO & UI/UX"],
      liveLink: "https://jamsmarine.edu.in/",
    },
    {
      title: "Naveenam Naturals",
      category: "Live Production • Supporting Role",
      role: "Supporting Web Developer",
      description:
        "Contributed through supporting development tasks for the organic herbal e-commerce storefront. Assisted in frontend UI enhancements, product catalog updates, bug fixes, and mobile checkout optimizations.",
      tech: ["Next.js", "E-Commerce", "Tailwind CSS", "Feature Support"],
      liveLink: "https://naveenamnaturals.com/",
    },
  ],
  academicProjects: [
    {
      title: "Uzhavar Sandhai",
      category: "M.Sc. Academic Project",
      description: "Direct farmer-to-consumer marketplace with secure authentication, listings, and order tracking.",
      tech: ["Next.js", "React", "Supabase", "Tailwind CSS"],
      liveLink: "https://uzhavar-sandhai-cbe.vercel.app",
    },
    {
      title: "Notes Web App",
      category: "Full-Stack Learning Lab",
      description: "Private notes app exploring state management and secure access rules with Supabase Auth.",
      tech: ["Next.js", "Supabase", "Tailwind CSS"],
      liveLink: "https://notes-project-nine.vercel.app/login",
    },
    {
      title: "AI Image Engine",
      category: "Self-Learning Lab",
      description: "Generative AI web experiment creating high-resolution images from natural language text prompts.",
      tech: ["React", "REST API", "DALL-E"],
      liveLink: "#",
    },
    {
      title: "College E-Commerce",
      category: "B.Sc. Academic Project",
      description: "Core web fundamentals project with relational MySQL database, clean cart flow, and product catalog.",
      tech: ["HTML5", "CSS3", "JavaScript", "MySQL"],
      liveLink: "#",
    },
  ],
  education: [
    {
      degree: "M.Sc. Information Technology",
      institution: "Hindusthan College of Arts and Science, Coimbatore",
      period: "2023 - 2025",
      cgpa: "7.9 CGPA",
    },
    {
      degree: "B.Sc. Information Technology",
      institution: "Erode Arts and Science College, Erode",
      period: "2020 - 2023",
      cgpa: "7.5 CGPA",
    },
  ],
};

export default function PortfolioPage() {
  const [typedRole, setTypedRole] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "" });

  useEffect(() => {
    const targetText = "Junior Web Developer";
    let charIndex = 0;
    const interval = setInterval(() => {
      setTypedRole(targetText.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === targetText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${portfolioData.contact.whatsapp}?text=Hi Arun, I am ${formData.name}. ${formData.message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#0e0e11] text-[#b3b3b8] min-h-screen font-sans selection:bg-[#00DF81]/30 selection:text-white relative overflow-x-hidden">

      {/* --- Top Navigation Bar --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e11]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <a href="#" className="text-white font-bold text-lg sm:text-xl tracking-wider hover:text-[#00DF81] transition-colors">
            Arunkumar R
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="text-white hover:text-[#00DF81] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#00DF81] transition-colors">About</a>
            <a href="#services" className="hover:text-[#00DF81] transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-[#00DF81] transition-colors">Portfolio</a>
            <a href="#education" className="hover:text-[#00DF81] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#00DF81] transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-white/5 text-white border border-white/10 hover:border-[#00DF81] hover:text-[#00DF81] transition-all"
            >
              Resume <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg bg-white/5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#141418] border-b border-white/10 px-5 py-5 flex flex-col gap-3.5 text-sm shadow-2xl"
            >
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#00DF81] py-1">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#00DF81] py-1">About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#00DF81] py-1">Services</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#00DF81] py-1">Portfolio</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#00DF81] py-1">Education</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#00DF81] py-1">Contact</a>
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-2.5 rounded-lg bg-[#00DF81] text-[#0e0e11] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#00DF81]/20"
              >
                View &amp; Download Resume
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- Hero Section --- */}
      <section id="home" className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 px-3.5 sm:px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center">
          
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#00DF81]/10 border border-[#00DF81]/25 text-[#00DF81] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00DF81] animate-pulse" />
              Junior Web Developer • Next.js &amp; Modern AI
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6">
              I am <span className="text-[#00DF81]">{typedRole}</span><span className="text-[#00DF81] animate-pulse font-light">|</span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-400 font-light max-w-xl mx-auto md:mx-0 mb-6 sm:mb-8 leading-relaxed">
              Engineering clean, responsive web applications with Next.js and Express.js. Leveraging modern AI agents and models to build fast, beautiful, and intelligent web experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-[#00DF81] text-[#0e0e11] font-bold text-xs sm:text-sm tracking-wide hover:bg-[#00c974] shadow-[0_0_25px_rgba(0,223,129,0.3)] transition-all flex items-center gap-2"
              >
                Contact Me <Send size={15} />
              </a>
              <div className="flex items-center gap-2.5">
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00DF81] hover:text-[#00DF81] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00DF81] hover:text-[#00DF81] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Contact Info Strip (Mobile 3-Column Compact Grid) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-5 border-t border-white/10 text-left">
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 sm:border-0 sm:bg-transparent">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-bold mb-0.5">Email</p>
                <p className="text-[11px] sm:text-sm text-gray-300 font-medium truncate" title={portfolioData.contact.email}>
                  {portfolioData.contact.email}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 sm:border-0 sm:bg-transparent">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-bold mb-0.5">Phone</p>
                <p className="text-[11px] sm:text-sm text-gray-300 font-medium truncate">
                  {portfolioData.contact.phone}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 sm:border-0 sm:bg-transparent">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-bold mb-0.5">Location</p>
                <p className="text-[11px] sm:text-sm text-gray-300 font-medium truncate">
                  {portfolioData.about.from}
                </p>
              </div>
            </div>
          </div>

          {/* Hero Portrait Photo (Auto-scaled for Android screens) */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-56 h-72 sm:w-72 sm:h-96 md:w-80 md:h-[440px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={portfolioData.profilePicture}
                alt={portfolioData.name}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x500/18181b/ffffff?text=Arun";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent opacity-80" />
            </div>

            {/* Scroll Mouse Indicator on Side */}
            <div className="hidden lg:flex flex-col items-center gap-2 absolute -right-12 top-1/2 -translate-y-1/2 text-gray-500">
              <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex justify-center pt-1">
                <div className="w-1 h-2 rounded-full bg-[#00DF81] animate-bounce" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- About Me ("Who am I?") --- */}
      <section id="about" className="py-14 sm:py-20 md:py-24 px-3.5 sm:px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#00DF81]/10 border border-[#00DF81]/20 text-[#00DF81] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <Sparkles size={13} />
              <span>Who am I? • Background &amp; Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6">
              {portfolioData.about.title}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0">
              {portfolioData.about.description}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Focused on building fast, production-grade web applications that combine modern frontend precision with Express.js micro-backends and autonomous AI agent workflows. Every project is engineered mobile-first to ensure native-like performance on all devices.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-[#00DF81] text-[#0e0e11] font-bold text-xs sm:text-sm tracking-wide hover:bg-[#00c974] transition-all shadow-lg shadow-[#00DF81]/20"
              >
                <Download size={15} /> Download CV
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs sm:text-sm hover:bg-white/10 hover:border-[#00DF81]/40 transition-all"
              >
                <span>View Live Work</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Credentials / Developer Snapshot Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 text-left">
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#141418] border border-white/5 hover:border-[#00DF81]/30 transition-all group">
                <div className="p-2 w-fit rounded-lg bg-white/5 text-[#00DF81] mb-2.5 group-hover:scale-110 transition-transform">
                  <Briefcase size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-0.5">Role</span>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">{portfolioData.about.role}</h4>
                <p className="text-[11px] text-gray-400">Active IT Developer</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#141418] border border-white/5 hover:border-[#00DF81]/30 transition-all group">
                <div className="p-2 w-fit rounded-lg bg-white/5 text-[#00DF81] mb-2.5 group-hover:scale-110 transition-transform">
                  <Code2 size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-0.5">Core Stack</span>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">{portfolioData.about.coreStack}</h4>
                <p className="text-[11px] text-gray-400">React 19 &amp; Tailwind</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#141418] border border-white/5 hover:border-[#00DF81]/30 transition-all group">
                <div className="p-2 w-fit rounded-lg bg-white/5 text-[#00DF81] mb-2.5 group-hover:scale-110 transition-transform">
                  <Bot size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-0.5">AI Tooling</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#00DF81] mb-0.5">{portfolioData.about.aiFocus}</h4>
                <p className="text-[11px] text-gray-400">Agents &amp; Modern Models</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#141418] border border-white/5 hover:border-[#00DF81]/30 transition-all group">
                <div className="p-2 w-fit rounded-lg bg-white/5 text-[#00DF81] mb-2.5 group-hover:scale-110 transition-transform">
                  <GraduationCap size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-0.5">Education</span>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">{portfolioData.about.degree}</h4>
                <p className="text-[11px] text-gray-400">7.9 CGPA • Coimbatore</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#141418] border border-white/5 hover:border-[#00DF81]/30 transition-all group">
                <div className="p-2 w-fit rounded-lg bg-white/5 text-[#00DF81] mb-2.5 group-hover:scale-110 transition-transform">
                  <MapPin size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-0.5">Location</span>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">{portfolioData.about.from}</h4>
                <p className="text-[11px] text-gray-400">Tamil Nadu, India</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#141418] border border-white/5 hover:border-[#00DF81]/30 transition-all group">
                <div className="p-2 w-fit rounded-lg bg-white/5 text-[#00DF81] mb-2.5 group-hover:scale-110 transition-transform">
                  <Smartphone size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-0.5">Design</span>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Mobile-First UI</h4>
                <p className="text-[11px] text-gray-400">Native App-Like Feel</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Services / Expertise (Mobile 2-Column Responsive Grid) --- */}
      <section id="services" className="py-14 sm:py-20 md:py-24 px-3.5 sm:px-6 relative border-b border-white/5 overflow-hidden">
        {/* Outlined Watermark Text */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[3.5rem] sm:text-[6rem] md:text-[10rem] font-black uppercase text-transparent tracking-widest select-none pointer-events-none opacity-[0.03] [-webkit-text-stroke:2px_white] whitespace-nowrap">
          SERVICES
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-8 sm:mb-12 text-center sm:text-left">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#00DF81] font-semibold block mb-1.5">
              What I Offer
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight">
              My Services &amp; Expertise
            </h2>
          </div>

          {/* 2-Columns on Mobile, 3-Columns on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
            {portfolioData.services.map((service, index) => (
              <div
                key={index}
                className="bg-[#141418] border border-white/5 p-3.5 sm:p-5 md:p-8 rounded-xl sm:rounded-2xl hover:border-[#00DF81]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-start"
              >
                <div className="mb-3 sm:mb-5 p-2 sm:p-3 w-fit rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xs sm:text-base md:text-xl font-bold text-white mb-1.5 sm:mb-3 group-hover:text-[#00DF81] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Live Production & Client Projects --- */}
      <section id="portfolio" className="py-14 sm:py-20 md:py-24 px-3.5 sm:px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DF81]/10 border border-[#00DF81]/25 text-[#00DF81] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00DF81] animate-ping" />
                Live Client &amp; Company Projects
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-3">
                Commercial Production Works
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm max-w-xl leading-relaxed">
                Live web applications and production platforms engineered during my role as a Junior Web Developer, built with Next.js, Express.js, and modern architectures.
              </p>
            </div>
          </div>

          {/* 3 Live Commercial Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 mb-12 sm:mb-20">
            {portfolioData.liveProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#141418] border border-white/10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl flex flex-col justify-between hover:border-[#00DF81]/50 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="flex justify-between items-start mb-3 sm:mb-5">
                    <span className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-[#00DF81] bg-[#00DF81]/10 px-2.5 py-1 rounded-full border border-[#00DF81]/20 font-semibold">
                      {project.category}
                    </span>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-[#00DF81] group-hover:bg-[#00DF81]/10 transition-all"
                      title="Open Live Website"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-[#00DF81] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#00DF81] text-[11px] sm:text-xs font-medium mb-3 sm:mb-4">
                    Role: {project.role}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-white/5 mb-4 sm:mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold bg-white/5 text-gray-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-[#00DF81] hover:text-[#0e0e11] hover:border-[#00DF81] transition-all text-xs font-bold uppercase tracking-wider"
                  >
                    View Live Site <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Sub-section: College & Academic Projects (2-Column Grid on Mobile!) */}
          <div className="pt-10 sm:pt-14 border-t border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-3">
              <div>
                <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-400 font-semibold block mb-1.5">
                  Academic Foundation &amp; Self-Study
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  College &amp; Hands-On Lab Projects
                </h3>
              </div>
            </div>

            {/* 2-Columns on Mobile, 2 on Tablet, 4 on Large Screens */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
              {portfolioData.academicProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#141418]/70 border border-white/5 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2.5">
                      <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 truncate max-w-[85%]">
                        {project.category}
                      </span>
                      {project.liveLink && project.liveLink !== "#" && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded bg-white/5 text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>

                    <h4 className="text-xs sm:text-base font-bold text-white mb-1.5 group-hover:text-[#00DF81] transition-colors leading-snug">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed mb-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2.5 border-t border-white/5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold bg-white/5 text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- Education Section --- */}
      <section id="education" className="py-14 sm:py-20 md:py-24 px-3.5 sm:px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#00DF81] font-semibold block mb-1.5">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-8 sm:mb-12">
            Education
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="bg-[#141418] border border-white/5 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                <div className="flex items-center gap-2.5 mb-3 text-[#00DF81]">
                  <GraduationCap size={20} />
                  <span className="text-[11px] sm:text-xs font-mono tracking-wider text-gray-400">{edu.period}</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white mb-1.5">{edu.degree}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3">{edu.institution}</p>
                <span className="inline-block px-2.5 py-1 rounded bg-[#00DF81]/10 text-[#00DF81] text-[11px] sm:text-xs font-bold">
                  {edu.cgpa}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-14 sm:py-20 md:py-24 px-3.5 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#00DF81] font-semibold block mb-1.5">
              Let&apos;s Talk
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
              Looking for a dedicated developer to build your next web application? Send a message and let&apos;s collaborate.
            </p>

            <div className="space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-3.5 text-gray-300">
                <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl text-[#00DF81]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-white text-xs sm:text-sm font-medium">{portfolioData.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-gray-300">
                <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl text-[#00DF81]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-semibold">Phone / WhatsApp</p>
                  <p className="text-white text-xs sm:text-sm font-medium">{portfolioData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-gray-300">
                <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl text-[#00DF81]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-white text-xs sm:text-sm font-medium">{portfolioData.contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <form onSubmit={sendWhatsApp} className="bg-[#141418] border border-white/5 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl space-y-3.5 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Send a Message</h3>
            <div>
              <label className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-1.5">Your Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full bg-[#0e0e11] border border-white/10 rounded-lg px-3.5 py-2.5 sm:py-3 text-white placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-[#00DF81] transition-colors"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-1.5">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Hi Arun, I'd like to discuss a project..."
                className="w-full bg-[#0e0e11] border border-white/10 rounded-lg px-3.5 py-2.5 sm:py-3 text-white placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-[#00DF81] transition-colors"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#00DF81] text-[#0e0e11] font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#00c974] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#00DF81]/20"
            >
              Send via WhatsApp <Send size={15} />
            </button>
          </form>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-6 sm:py-8 text-center border-t border-white/5 text-gray-600 text-[10px] sm:text-xs tracking-wider uppercase">
        © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
      </footer>
    </div>
  );
}
