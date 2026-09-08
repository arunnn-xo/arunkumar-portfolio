"use client";

import React, { useState, useEffect } from "react";
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
      title: "Next.js & Frontend Engineering",
      description: "High-end, responsive web interfaces built with Next.js, React 19, Tailwind CSS, and smooth Framer Motion micro-interactions.",
      icon: <Code2 className="text-[#00DF81]" size={28} />,
    },
    {
      title: "Express.js Backend & APIs",
      description: "Clean server architectures, secure RESTful APIs, user authentication, and databases with MySQL & Supabase.",
      icon: <Database className="text-[#00DF81]" size={28} />,
    },
    {
      title: "AI Models & Smart Features",
      description: "Integrating modern AI models (Claude, OpenAI, Gemini) to build smart web features, automated tools, and dynamic user experiences.",
      icon: <Cpu className="text-[#00DF81]" size={28} />,
    },
    {
      title: "Modern UI/UX Design",
      description: "Crafting modern, creative, and intuitive website designs with clean layouts, dark aesthetic palettes, and subtle animations.",
      icon: <Layout className="text-[#00DF81]" size={28} />,
    },
    {
      title: "Full-Stack Web Delivery",
      description: "End-to-end web applications engineered from responsive UI design to production cloud deployment on Vercel.",
      icon: <Cloud className="text-[#00DF81]" size={28} />,
    },
    {
      title: "Performance & Responsive Design",
      description: "Pixel-perfect on mobile, tablet, and desktop, optimized for fast loading speeds, clean structure, and seamless usability.",
      icon: <Smartphone className="text-[#00DF81]" size={28} />,
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
      category: "Live Production • E-Commerce",
      role: "E-commerce Web Developer",
      description:
        "Direct-to-consumer organic herbal e-commerce storefront. Designed with dynamic product showcase filtering, custom cart workflows, and mobile-first checkout experiences.",
      tech: ["Next.js", "E-Commerce", "Tailwind CSS", "Payment Flows"],
      liveLink: "https://naveenamnaturals.com/",
    },
  ],
  academicProjects: [
    {
      title: "Uzhavar Sandhai - E-commerce App",
      category: "M.Sc. Academic Project",
      description: "Developed a full-stack e-commerce platform for farmers during my Master's program. Implemented secure user authentication, dynamic product listing, and order management.",
      tech: ["Next.js", "React", "Supabase", "Tailwind CSS"],
      liveLink: "https://uzhavar-sandhai-cbe.vercel.app",
    },
    {
      title: "Notes Web Application",
      category: "Full-Stack Learning Lab",
      description: "Designed and built as a practical learning project exploring state management and private notes architecture with Supabase Auth and database rules.",
      tech: ["Next.js", "Supabase Auth", "PostgreSQL"],
      liveLink: "https://notes-project-nine.vercel.app/login",
    },
    {
      title: "Text-to-Image AI Engine",
      category: "Self-Learning API Experiment",
      description: "Built during self-study exploring modern generative AI APIs to generate high-resolution images from natural language text prompts.",
      tech: ["React", "REST API", "DALL-E"],
      liveLink: "#",
    },
    {
      title: "Full-Stack Ecommerce Website",
      category: "B.Sc. College Academic Project",
      description: "Created during undergraduate studies to master core web fundamentals, focusing on clean interface design and relational MySQL operations.",
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
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0e0e11]/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-white font-bold text-xl tracking-wider hover:text-[#00DF81] transition-colors">
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
            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-white/5 text-white border border-white/10 hover:border-[#00DF81] hover:text-[#00DF81] transition-all"
            >
              Resume <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#141418] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm"
            >
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#00DF81]">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00DF81]">About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00DF81]">Services</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00DF81]">Portfolio</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00DF81]">Education</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00DF81]">Contact</a>
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center py-2.5 rounded bg-[#00DF81] text-[#0e0e11] font-bold text-xs uppercase tracking-wider"
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- Hero Section --- */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00DF81]/10 border border-[#00DF81]/25 text-[#00DF81] text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00DF81] animate-pulse" />
              Junior Web Developer • Next.js &amp; Modern AI
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              I am <span className="text-[#00DF81]">{typedRole}</span><span className="text-[#00DF81] animate-pulse font-light">|</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl mb-8 leading-relaxed">
              Engineering clean, responsive web applications with Next.js and Express.js. Leveraging modern AI agents and models to build fast, beautiful, and intelligent web experiences.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-14">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-md bg-[#00DF81] text-[#0e0e11] font-bold text-sm tracking-wide hover:bg-[#00c974] shadow-[0_0_30px_rgba(0,223,129,0.3)] transition-all flex items-center gap-2"
              >
                Contact Me <Send size={16} />
              </a>
              <div className="flex items-center gap-3 ml-2">
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-md bg-white/5 border border-white/10 hover:border-[#00DF81] hover:text-[#00DF81] transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-md bg-white/5 border border-white/10 hover:border-[#00DF81] hover:text-[#00DF81] transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Contact Info Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                <p className="text-sm text-gray-300 font-medium truncate">{portfolioData.contact.email}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Phone</p>
                <p className="text-sm text-gray-300 font-medium">{portfolioData.contact.phone}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Location</p>
                <p className="text-sm text-gray-300 font-medium">{portfolioData.contact.location}</p>
              </div>
            </div>
          </div>

          {/* Hero Portrait Photo */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[460px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
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
      <section id="about" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <img
              src={portfolioData.profilePicture}
              alt={portfolioData.name}
              className="w-full h-80 sm:h-96 object-cover object-top"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/400x500/18181b/ffffff?text=Arun";
              }}
            />
            <div className="absolute inset-0 bg-[#00DF81]/10 mix-blend-overlay" />
          </div>

          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-[#00DF81] font-semibold block mb-2">
              Who am I?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              {portfolioData.about.title}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              {portfolioData.about.description}
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm mb-8 py-6 border-y border-white/10">
              <div>
                <span className="text-gray-500 font-semibold block text-xs uppercase tracking-wider">Current Role:</span>
                <span className="text-white font-medium">{portfolioData.about.role}</span>
              </div>
              <div>
                <span className="text-gray-500 font-semibold block text-xs uppercase tracking-wider">Core Stack:</span>
                <span className="text-white font-medium">{portfolioData.about.coreStack}</span>
              </div>
              <div>
                <span className="text-gray-500 font-semibold block text-xs uppercase tracking-wider">AI Tooling:</span>
                <span className="text-[#00DF81] font-medium">{portfolioData.about.aiFocus}</span>
              </div>
              <div>
                <span className="text-gray-500 font-semibold block text-xs uppercase tracking-wider">Location:</span>
                <span className="text-white font-medium">{portfolioData.about.from}</span>
              </div>
            </div>

            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#00DF81] text-[#0e0e11] font-bold text-sm tracking-wide hover:bg-[#00c974] transition-all"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

        </div>
      </section>

      {/* --- Services / Expertise --- */}
      <section id="services" className="py-24 px-6 relative border-b border-white/5 overflow-hidden">
        {/* Outlined Watermark Text */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[5rem] md:text-[10rem] font-black uppercase text-transparent tracking-widest select-none pointer-events-none opacity-[0.03] [-webkit-text-stroke:2px_white] whitespace-nowrap">
          SERVICES
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-14">
            <span className="text-sm uppercase tracking-[0.25em] text-[#00DF81] font-semibold block mb-2">
              What I Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              My Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.services.map((service, index) => (
              <div
                key={index}
                className="bg-[#141418] border border-white/5 p-8 rounded-xl hover:border-[#00DF81]/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="mb-6 p-3 w-fit rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00DF81] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Live Production & Client Projects --- */}
      <section id="portfolio" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DF81]/10 border border-[#00DF81]/25 text-[#00DF81] text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00DF81] animate-ping" />
                Live Client &amp; Company Projects
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
                Commercial Production Works
              </h2>
              <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                Live web applications and production platforms engineered during my role as a Junior Web Developer, built with Next.js, Express.js, and modern architectures.
              </p>
            </div>
          </div>

          {/* 3 Live Commercial Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {portfolioData.liveProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#141418] border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-[#00DF81]/50 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <span className="text-xs uppercase font-mono tracking-wider text-[#00DF81] bg-[#00DF81]/10 px-3 py-1 rounded-full border border-[#00DF81]/20 font-semibold">
                      {project.category}
                    </span>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-[#00DF81] group-hover:bg-[#00DF81]/10 transition-all"
                      title="Open Live Website"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00DF81] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#00DF81] text-xs font-medium mb-4">
                    Role: {project.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded text-xs font-semibold bg-white/5 text-gray-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-[#00DF81] hover:text-[#0e0e11] hover:border-[#00DF81] transition-all text-xs font-bold uppercase tracking-wider"
                  >
                    View Live Site <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Sub-section: College & Academic Projects */}
          <div className="pt-12 border-t border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-sm uppercase tracking-[0.25em] text-gray-400 font-semibold block mb-2">
                  Academic Foundation &amp; Self-Study
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  College &amp; Hands-On Lab Projects
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.academicProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#141418]/60 border border-white/5 p-7 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs uppercase font-mono tracking-wider text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                        {project.category}
                      </span>
                      {project.liveLink && project.liveLink !== "#" && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md bg-white/5 text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00DF81] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded text-xs font-semibold bg-white/5 text-gray-400"
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
      <section id="education" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <span className="text-sm uppercase tracking-[0.25em] text-[#00DF81] font-semibold block mb-2">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-12">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="bg-[#141418] border border-white/5 p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-4 text-[#00DF81]">
                  <GraduationCap size={22} />
                  <span className="text-xs font-mono tracking-wider text-gray-400">{edu.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-gray-400 text-sm mb-4">{edu.institution}</p>
                <span className="inline-block px-3 py-1 rounded bg-[#00DF81]/10 text-[#00DF81] text-xs font-bold">
                  {edu.cgpa}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-[#00DF81] font-semibold block mb-2">
              Let&apos;s Talk
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Looking for a dedicated developer to build your next web application? Send a message and let&apos;s collaborate.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-white/5 rounded-lg text-[#00DF81]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-white font-medium">{portfolioData.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-white/5 rounded-lg text-[#00DF81]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Phone / WhatsApp</p>
                  <p className="text-white font-medium">{portfolioData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-white/5 rounded-lg text-[#00DF81]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-white font-medium">{portfolioData.contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <form onSubmit={sendWhatsApp} className="bg-[#141418] border border-white/5 p-8 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-2">Your Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full bg-[#0e0e11] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00DF81] transition-colors"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-2">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Hi Arun, I'd like to discuss a project..."
                className="w-full bg-[#0e0e11] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00DF81] transition-colors"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-[#00DF81] text-[#0e0e11] font-bold text-sm tracking-wider uppercase hover:bg-[#00c974] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              Send via WhatsApp <Send size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-8 text-center border-t border-white/5 text-gray-600 text-xs tracking-wider uppercase">
        © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
      </footer>
    </div>
  );
}
