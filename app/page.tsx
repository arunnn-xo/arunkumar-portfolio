"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Award,
  Briefcase,
  Star,
  Download,
  MessageCircle,
  ExternalLink,
  Code2,
  User,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MusicPlayer from './components/MusicPlayer';

const INTRO_MIN_DURATION = 2600;
const INTRO_MAX_DURATION = 4200;

// --- Portfolio Data ---
const portfolioData = {
  name: "ARUNKUMAR R",
  profilePicture: "/arun-profile.jpg",
  resumeUrl: "/ARUNR.pdf",
  summary: "Detail-oriented M.Sc. IT graduate with hands-on experience in designing and deploying full-stack web applications. Proficient in modern technologies like React, Next.js, and Supabase to build user-centric solutions.",
  contact: {
    email: "arunkumarr09032003@gmail.com",
    phone: "+919025604721",
    whatsapp: "+919025604721",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/charlie-xo?tab=packages",
  },
  skills: {
    intro: "Focused on building responsive, scalable, and user-friendly web applications with the modern React ecosystem.",
    technical: [
      {
        title: "Frontend Engineering",
        items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3"],
      },
      {
        title: "Backend & Data",
        items: ["Node.js", "Supabase", "MySQL", "Authentication", "CRUD Workflows"],
      },
      {
        title: "Deployment & Tools",
        items: ["GitHub", "Vercel", "Responsive UI Development"],
      },
    ],
    soft: ["Analytical Problem Solving", "Attention to Detail", "Collaborative Execution", "Adaptable Learning Mindset"],
  },
  projects: [
    {
      title: "Uzhavar Sandhai - E-commerce App",
      description: "Developed a full-stack e-commerce platform for farmers. Implemented secure user authentication, dynamic product listing, and order management.",
      tech: ["Next.js", "React", "Supabase"],
      liveLink: "https://uzhavar-sandhai-cbe.vercel.app",
    },
    {
      title: "Notes Web Application",
      description: "Designed and built a secure, private notes application. Implemented robust user authentication to ensure each user's notes are private.",
      tech: ["Next.js", "Supabase"],
      liveLink: "https://notes-project-nine.vercel.app/login",
    },
    {
      title: "Text-to-Image Creation",
      description: "Built an application that integrates with the DALL-E API to generate images from user-provided text descriptions.",
      tech: ["React", "DALL-E API"],
    },
    {
      title: "Ecommerce Website",
      description: "Created a functional e-commerce site using fundamental web technologies focusing on a clean user interface with a MySQL backend.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    },
  ],
  education: [
    {
      degree: "M.Sc. Information Technology",
      institution: "Hindusthan College of Arts and Science, Coimbatore",
      period: "2023-2025",
      cgpa: "7.9",
    },
    {
      degree: "B.Sc. Information Technology",
      institution: "Erode Arts and Science College, Erode",
      period: "2020-2023",
      cgpa: "7.5",
    },
  ],
};

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: "easeOut" as any }
  }
};

const attractStrip = [
  "Responsive UI Focus",
  "Modern React Stack",
  "Clean Full-Stack Delivery",
];

const sectionEyebrowClass = "text-[0.7rem] uppercase tracking-[0.35em] text-indigo-300/70";
const openPanelClass = "border-t border-white/10 py-6";

// --- Reusable Components ---
const Section = ({ id, title, icon, children }: { id: string; title: string; icon: ReactNode; children: ReactNode }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={containerVariants}
    className="py-12 px-6"
  >
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-8 md:mb-10">
        <div className="p-3 rounded-full border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
          {icon}
        </div>
        <div>
          <motion.p variants={textRevealVariants} className={sectionEyebrowClass}>Selected Details</motion.p>
          <motion.h2 variants={textRevealVariants} className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {title}
          </motion.h2>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-500/40 via-white/10 to-transparent ml-4 hidden md:block" />
      </div>
      {children}
    </div>
  </motion.section>
);

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [canFinishIntro, setCanFinishIntro] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });

  useEffect(() => {
    if (!hasInteracted) return;

    const minTimer = window.setTimeout(() => {
      setCanFinishIntro(true);
    }, INTRO_MIN_DURATION);

    const maxTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, INTRO_MAX_DURATION);

    return () => {
      window.clearTimeout(minTimer);
      window.clearTimeout(maxTimer);
    };
  }, [hasInteracted]);

  useEffect(() => {
    if (canFinishIntro && isVideoReady) {
      setIsLoading(false);
    }
  }, [canFinishIntro, isVideoReady]);

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${portfolioData.contact.whatsapp}?text=Hi Arun, I am ${formData.name}. ${formData.message}`;
    window.open(url, '_blank');
  };

  const sendEmail = () => {
    const mailtoUrl = `mailto:${portfolioData.contact.email}?subject=Inquiry from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen text-gray-300 selection:bg-indigo-500/30 selection:text-white overflow-x-hidden md:p-10">      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712]"
          >
            {hasInteracted ? (
              <>
                <video 
                  autoPlay 
                  loop
                  playsInline
                  onLoadedData={() => setIsVideoReady(true)}
                  className="absolute inset-0 w-full h-full object-cover opacity-75 scale-105"
                >
                  <source src="/BMW.MP4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_45%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
                
                <motion.div 
                   initial={{ opacity: 0, y: 18 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 16 }}
                   transition={{ duration: 0.6, delay: 0.15 }}
                   className="relative z-10 mt-auto mb-14 flex flex-col items-center gap-4"
                >
                   <div className="px-6 py-2 rounded-full backdrop-blur-md bg-black/35 border border-indigo-500/20 text-indigo-200 font-mono text-xs md:text-sm tracking-[0.3em] uppercase">
                     Compiling Assets...
                   </div>
                   <div className="w-36 h-[3px] rounded-full bg-white/10 overflow-hidden">
                     <motion.div
                       className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-white"
                       initial={{ x: "-100%" }}
                       animate={{ x: "100%" }}
                       transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                     />
                   </div>
                </motion.div>
              </>
            ) : (
                <motion.button 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.8 }}
                   onClick={() => setHasInteracted(true)}
                   className="group relative px-8 py-4 rounded-full bg-gray-900/40 border border-indigo-500/30 hover:bg-indigo-500/10 hover:border-indigo-400/50 transition-all font-mono text-sm tracking-[0.1em] uppercase text-indigo-100 overflow-hidden shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] backdrop-blur-md"
                >
                   <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <span className="relative z-10 flex items-center gap-3">
                      Wanna see my portfolio? <Code2 size={18} className="text-cyan-400" />
                   </span>
                </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <MusicPlayer
        autoplayEnabled={!isLoading}
        className={`fixed right-4 md:right-8 top-[85%] md:top-1/2 -translate-y-1/2 z-[100] transition-opacity duration-1000 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      />

      <motion.div
        initial={false}
        animate={{
          opacity: isLoading ? 0 : 1,
          y: isLoading ? 18 : 0,
          filter: isLoading ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={isLoading ? 'h-screen overflow-hidden' : ''}
      >
        <div className="relative max-w-6xl mx-auto">
        {/* --- Bento Container --- */}
        <div className="max-w-4xl mx-auto bg-gray-900/20 backdrop-blur-xl border-x-0 md:border border-gray-800/60 md:rounded-[3rem] shadow-[0_0_100px_-20px_rgba(79,70,229,0.15)] relative overflow-hidden">

          {/* --- Hero Section --- */}
          <header className="relative min-h-[70vh] flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent -z-10" />

          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <div className="relative inline-flex items-center justify-center mb-8 rounded-[2.25rem] border border-white/12 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-3 md:p-4 shadow-[0_30px_90px_-42px_rgba(99,102,241,0.55)] backdrop-blur-xl">
            <div className="absolute inset-0 rounded-[2.25rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_55%)] pointer-events-none" />
            <motion.img
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              src={portfolioData.profilePicture}
              alt={portfolioData.name}
              className="relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-[1.9rem] mx-auto border border-white/10 ring-1 ring-indigo-300/20 object-cover shadow-[0_18px_45px_-24px_rgba(15,23,42,0.85)]"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/200x200/1e293b/818cf8?text=AR'; }}
            />
            <div className="absolute -bottom-2 -right-2 z-20 bg-gradient-to-br from-indigo-500 to-cyan-500 p-3 rounded-2xl shadow-xl border border-white/10">
              <Code2 size={20} className="text-white" />
            </div>
          </div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white tracking-tighter leading-none flex flex-wrap justify-center gap-[0.3em]"
          >
            <div className="flex">
               {portfolioData.name.split(' ')[0].split('').map((char, index) => (
                  <motion.span 
                     key={`first-${index}`} 
                     initial={{ opacity: 0, y: 80, rotateX: -90, filter: "blur(10px)" }}
                     animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                     transition={{ duration: 0.8, delay: 0.2 + index * 0.05, type: "spring", bounce: 0.4 }}
                     className="inline-block hero-name-text"
                  >
                    {char}
                  </motion.span>
               ))}
            </div>
            <div className="flex">
               {portfolioData.name.split(' ').slice(1).join(' ').split('').map((char, index) => (
                  <motion.span 
                     key={`last-${index}`} 
                     initial={{ opacity: 0, y: 80, rotateX: -90, filter: "blur(10px)" }}
                     animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                     transition={{ duration: 0.8, delay: 0.6 + index * 0.05, type: "spring", bounce: 0.4 }}
                     className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-white hero-name-text"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
               ))}
            </div>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10 text-balance"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {portfolioData.summary}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            {attractStrip.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm uppercase tracking-[0.22em] text-white/85 hero-glow-chip"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-5"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href={portfolioData.resumeUrl}
              className="flex items-center gap-2 bg-white text-black px-10 py-4 rounded-2xl font-bold transition-all"
            >
              <Download size={20} /> Resume
            </motion.a>

            <div className="flex items-center gap-3 bg-gray-900/80 backdrop-blur-md p-2 px-4 rounded-2xl border border-gray-800">
              {[
                { icon: <Github size={22} />, link: portfolioData.contact.github },
                { icon: <Linkedin size={22} />, link: portfolioData.contact.linkedin },
                { icon: <Mail size={22} />, link: `mailto:${portfolioData.contact.email}` }
              ].map((social, i) => (
                <a key={i} href={social.link} className="hover:text-indigo-400 transition-colors p-2 text-gray-400" target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </header>

      <main className="pb-20">

        {/* --- Skills --- */}
        <Section id="skills" title="Expertise" icon={<Star size={28} />}>
          <motion.div variants={itemVariants} className="max-w-3xl border-t border-white/10 pt-6">
            <p className={sectionEyebrowClass}>Professional Summary</p>
            <p className="mt-3 text-lg md:text-xl leading-relaxed text-gray-200 scroll-highlight-text">
              {portfolioData.skills.intro}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-[1.45fr_0.85fr] gap-8 md:gap-14 mt-10">
            <motion.div variants={itemVariants} className={openPanelClass}>
              <p className={sectionEyebrowClass}>Engineering Toolkit</p>
              <h3 className="text-xl font-bold text-white mt-3 mb-6 flex items-center gap-2">
                <Code2 size={18} className="text-indigo-400" /> Core Technologies
              </h3>
              <div className="space-y-6">
                {portfolioData.skills.technical.map((group) => (
                  <div key={group.title} className="grid md:grid-cols-[190px_1fr] gap-3 md:gap-6 border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                    <p className="text-sm uppercase tracking-[0.28em] text-indigo-300/75 scroll-accent-label">{group.title}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {group.items.map((skill) => (
                        <span key={skill} className="text-base text-white/90 skill-reveal-item">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className={openPanelClass}>
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-cyan-300/70">Work Approach</p>
              <h3 className="text-xl font-bold text-white mt-3 mb-6 flex items-center gap-2">
                <User size={18} className="text-cyan-400" /> Professional Strengths
              </h3>
              <div className="space-y-4">
                {portfolioData.skills.soft.map((skill) => (
                  <div key={skill} className="border-t border-cyan-400/10 pt-4 first:border-t-0 first:pt-0 text-cyan-100 strength-row">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>

        {/* --- Projects --- */}
        <Section id="projects" title="Featured Work" icon={<Briefcase size={28} />}>
          <div className="space-y-10">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group grid md:grid-cols-[150px_1fr_auto] gap-4 md:gap-8 items-start border-t border-white/10 pt-8"
              >
                <div className="text-sm uppercase tracking-[0.35em] text-indigo-300/65">
                  Project {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors project-focus-title">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed max-w-2xl">{project.description}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                    {project.tech.map(t => <span key={t} className="text-xs uppercase tracking-[0.28em] text-gray-500 font-bold">{t}</span>)}
                  </div>
                </div>
                <div className="pt-1">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold group/link whitespace-nowrap">
                      Explore Project <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* --- Education --- */}
        <Section id="education" title="Education" icon={<Award size={28} />}>
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid md:grid-cols-[150px_1fr_auto] gap-4 md:gap-8 items-start border-t border-white/10 pt-6"
              >
                <span className="text-indigo-300 font-mono text-sm uppercase tracking-[0.25em]">{edu.period}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white project-focus-title">{edu.degree}</h3>
                  <p className="text-gray-400 mt-2">{edu.institution}</p>
                </div>
                <div className="inline-flex items-center justify-start md:justify-end text-sm text-indigo-200 font-bold tracking-[0.2em] uppercase">
                  CGPA: {edu.cgpa}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* --- Contact --- */}
        <Section id="contact" title="Get In Touch" icon={<MessageCircle size={28} />}>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <motion.div variants={itemVariants} className="space-y-6 border-t border-white/10 pt-6">
              <h3 className="text-2xl font-bold text-white project-focus-title">Let&apos;s build something amazing together.</h3>
              <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello!</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <div className="p-3 rounded-full border border-white/10"><Mail size={20} /></div>
                  <span>{portfolioData.contact.email}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <div className="p-3 rounded-full border border-white/10"><Phone size={20} /></div>
                  <span>{portfolioData.contact.phone}</span>
                </div>
              </div>
            </motion.div>

            <motion.form
              variants={itemVariants}
              onSubmit={sendWhatsApp}
              className="border-t border-white/10 pt-6 space-y-4"
            >
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full bg-[#030712] border border-gray-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <textarea
                placeholder="How can I help you?"
                rows={4}
                required
                className="w-full bg-[#030712] border border-gray-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>

              <div className="grid grid-cols-2 gap-4">
                <button type="submit" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 rounded-2xl transition-all shadow-lg text-sm">
                  <MessageCircle size={18} /> WhatsApp
                </button>
                <button type="button" onClick={sendEmail} className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg text-sm">
                  <Mail size={18} /> Gmail
                </button>
              </div>
            </motion.form>
          </div>
        </Section>
      </main>

      <footer className="py-6 text-center border-t border-gray-900/50">
        <p className="text-gray-500 text-sm font-medium">&copy; {new Date().getFullYear()} {portfolioData.name} • Designed for Excellence</p>
      </footer>
        </div>
        </div>
      </motion.div>
    </div>
  );
}
