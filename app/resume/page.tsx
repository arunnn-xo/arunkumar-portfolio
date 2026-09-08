'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e11] text-slate-200 selection:bg-[#00DF81]/20 selection:text-[#00DF81] font-sans pb-16">
      
      {/* Top Action Bar (Hidden in Print) */}
      <div className="print:hidden sticky top-0 z-40 bg-[#0e0e11]/90 backdrop-blur-md border-b border-white/5 py-3.5 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-medium text-slate-300 border border-white/10 transition-all cursor-pointer"
            >
              <Printer size={15} />
              <span className="hidden sm:inline">Print Resume</span>
            </button>
            <a
              href="/ARUNR.pdf"
              download="Arunkumar_R_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#00DF81] hover:bg-[#00c773] text-black text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#00DF81]/20"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Resume Sheet Container */}
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 pt-6 sm:pt-10">
        <div className="bg-[#141418] print:bg-white print:text-black border border-white/5 print:border-none rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl">
          
          {/* Header */}
          <header className="border-b border-white/10 print:border-emerald-700 pb-5 sm:pb-6 mb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white print:text-slate-900 tracking-tight mb-1">
                ARUNKUMAR R
              </h1>
              <p className="text-sm sm:text-base font-semibold text-[#00DF81] print:text-emerald-700">
                Junior Web Developer • Next.js &amp; AI-Driven Modern UI
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 print:text-slate-700">
              <div className="flex items-center justify-center sm:justify-end gap-1.5">
                <Mail size={13} className="text-[#00DF81] print:text-emerald-700" />
                <a href="mailto:arunkumarr09032003@gmail.com" className="hover:underline">arunkumarr09032003@gmail.com</a>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-1.5">
                <Phone size={13} className="text-[#00DF81] print:text-emerald-700" />
                <a href="tel:+919025604721" className="hover:underline">+91 90256 04721</a>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-1.5">
                <MapPin size={13} className="text-[#00DF81] print:text-emerald-700" />
                <span>Coimbatore, Tamil Nadu</span>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-3 pt-1">
                <a href="https://arunkumar-portfolio-peach.vercel.app/" target="_blank" rel="noreferrer" className="text-[#00DF81] print:text-emerald-700 hover:underline flex items-center gap-1">
                  <Globe size={12} /> Portfolio
                </a>
                <a href="https://github.com/charlie-xo?tab=packages" target="_blank" rel="noreferrer" className="text-[#00DF81] print:text-emerald-700 hover:underline flex items-center gap-1">
                  <Github size={12} /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#00DF81] print:text-emerald-700 hover:underline flex items-center gap-1">
                  <Linkedin size={12} /> LinkedIn
                </a>
              </div>
            </div>
          </header>

          {/* Section: Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00DF81] print:text-emerald-700 border-b border-white/10 print:border-slate-300 pb-1 mb-2.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              Junior Web Developer skilled in creating clean, modern, and responsive user interfaces using <strong>Next.js</strong> and <strong>AI Agents</strong>. Experienced in building mobile-friendly web layouts, developing backend APIs using <strong>Express.js</strong>, and managing databases with <strong>Supabase</strong> and <strong>MySQL</strong>. Proven track record building live client platforms as well as solid academic and learning projects.
            </p>
          </section>

          {/* Section: Web Development Experience */}
          <section className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00DF81] print:text-emerald-700 border-b border-white/10 print:border-slate-300 pb-1 mb-2.5">
              Web Development Experience
            </h2>
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] print:bg-transparent border border-white/5 print:border-none">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white print:text-slate-900">
                    Junior Web Developer
                  </h3>
                  <p className="text-xs font-medium text-[#00DF81] print:text-emerald-700">Next.js &amp; Modern UI Development</p>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 print:text-slate-600">
                  Coimbatore, India | 2024 – Present
                </div>
              </div>
              <ul className="list-disc list-outside ml-4 mt-2 space-y-1 text-xs text-slate-300 print:text-slate-700 leading-relaxed">
                <li>Build clean, responsive, and mobile-friendly web interfaces using <strong>Next.js</strong> and modern design practices.</li>
                <li>Leverage <strong>AI Agents</strong> (Claude, ChatGPT, Gemini) to design, structure, and refine modern UI components quickly.</li>
                <li>Develop backend APIs using <strong>Express.js</strong> and manage databases using <strong>Supabase</strong> and <strong>MySQL</strong>.</li>
                <li>Contributed to live web projects including <strong>Yamora Resorts</strong>, <strong>Jams Marine Academy</strong>, and supporting tasks on <strong>Naveenam Naturals</strong>.</li>
              </ul>
            </div>
          </section>

          {/* Section: Key Projects (Categorized into Live Client vs College/Learning) */}
          <section className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00DF81] print:text-emerald-700 border-b border-white/10 print:border-slate-300 pb-1 mb-3">
              Projects (Live Client &amp; Academic/Learning)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4">
              
              {/* Category 1: Live Client Projects */}
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00DF81] print:text-emerald-700">
                  <span>🌐</span> Live Client Projects
                </div>

                {/* Yamora */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] print:bg-transparent border border-white/5 print:border-slate-200">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white print:text-slate-900">1. Yamora Resorts</h3>
                    <a href="https://yamoraresorts.com/" target="_blank" rel="noreferrer" className="text-[11px] text-[#00DF81] print:text-emerald-700 hover:underline flex items-center gap-0.5">
                      Live <ExternalLink size={11} />
                    </a>
                  </div>
                  <p className="text-[11px] text-[#00DF81] print:text-emerald-700 font-medium mb-1">Next.js &amp; Express.js Developer (Live Website)</p>
                  <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 mb-2 leading-relaxed">
                    Luxury resort website with room showcases, amenities, and dynamic booking inquiries with Express.js backend API endpoints.
                  </p>
                  <div className="text-[10px] text-slate-400 print:text-slate-600 font-mono">Next.js, Express.js</div>
                </div>

                {/* Jams Marine */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] print:bg-transparent border border-white/5 print:border-slate-200">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white print:text-slate-900">2. Jams Marine Academy</h3>
                    <a href="https://jamsmarine.edu.in/" target="_blank" rel="noreferrer" className="text-[11px] text-[#00DF81] print:text-emerald-700 hover:underline flex items-center gap-0.5">
                      Live <ExternalLink size={11} />
                    </a>
                  </div>
                  <p className="text-[11px] text-[#00DF81] print:text-emerald-700 font-medium mb-1">Frontend Next.js Developer (Live Website)</p>
                  <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 mb-2 leading-relaxed">
                    Modern educational portal with course catalogs and cadet admission inquiry forms. 100% mobile-friendly responsive UI layout.
                  </p>
                  <div className="text-[10px] text-slate-400 print:text-slate-600 font-mono">Next.js, AI Agents, Modern UI</div>
                </div>

                {/* Naveenam Naturals */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] print:bg-transparent border border-white/5 print:border-slate-200">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white print:text-slate-900">3. Naveenam Naturals</h3>
                    <a href="https://naveenamnaturals.com/" target="_blank" rel="noreferrer" className="text-[11px] text-[#00DF81] print:text-emerald-700 hover:underline flex items-center gap-0.5">
                      Live <ExternalLink size={11} />
                    </a>
                  </div>
                  <p className="text-[11px] text-[#00DF81] print:text-emerald-700 font-medium mb-1">Supporting Web Developer (Supporting Task)</p>
                  <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 mb-2 leading-relaxed">
                    Supported frontend development for organic herbal e-commerce storefront. Product catalog updates and mobile checkout support.
                  </p>
                  <div className="text-[10px] text-slate-400 print:text-slate-600 font-mono">Next.js, Supporting Task</div>
                </div>
              </div>

              {/* Category 2: College & Self-Learning Projects */}
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00DF81] print:text-emerald-700">
                  <span>🎓</span> College &amp; Self-Learning Projects
                </div>

                {/* Uzhavar Sandhai */}
                <div className="p-3 rounded-xl bg-white/[0.02] print:bg-transparent border border-white/5 print:border-slate-200">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white print:text-slate-900">4. Uzhavar Sandhai</h3>
                    <a href="https://uzhavar-sandhai-cbe.vercel.app" target="_blank" rel="noreferrer" className="text-[11px] text-[#00DF81] print:text-emerald-700 hover:underline flex items-center gap-0.5">
                      Demo <ExternalLink size={11} />
                    </a>
                  </div>
                  <p className="text-[11px] text-[#00DF81] print:text-emerald-700 font-medium mb-1">M.Sc. Academic E-Commerce Project</p>
                  <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 mb-1.5 leading-relaxed">
                    Direct farmer-to-consumer marketplace with product listings, cart management, and Supabase database.
                  </p>
                  <div className="text-[10px] text-slate-400 print:text-slate-600 font-mono">Next.js, Supabase</div>
                </div>

                {/* Notes Web App */}
                <div className="p-3 rounded-xl bg-white/[0.02] print:bg-transparent border border-white/5 print:border-slate-200">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white print:text-slate-900">5. Smart Notes App</h3>
                    <a href="https://notes-project-nine.vercel.app/login" target="_blank" rel="noreferrer" className="text-[11px] text-[#00DF81] print:text-emerald-700 hover:underline flex items-center gap-0.5">
                      Demo <ExternalLink size={11} />
                    </a>
                  </div>
                  <p className="text-[11px] text-[#00DF81] print:text-emerald-700 font-medium mb-1">Full-Stack Learning Lab</p>
                  <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 mb-1.5 leading-relaxed">
                    Private note-taking web application with user authentication and secure note storage managed using Supabase.
                  </p>
                  <div className="text-[10px] text-slate-400 print:text-slate-600 font-mono">Next.js, Supabase</div>
                </div>

                {/* Text-to-Image */}
                <div className="p-3 rounded-xl bg-white/[0.02] print:bg-transparent border border-white/5 print:border-slate-200">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white print:text-slate-900">6. Text-to-Image AI Engine</h3>
                    <span className="text-[11px] text-slate-400 font-mono">AI Lab</span>
                  </div>
                  <p className="text-[11px] text-[#00DF81] print:text-emerald-700 font-medium mb-1">Self-Learning Project</p>
                  <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 mb-1.5 leading-relaxed">
                    Generative AI web app creating images from natural language prompts using AI API integration.
                  </p>
                  <div className="text-[10px] text-slate-400 print:text-slate-600 font-mono">Next.js, AI Integration</div>
                </div>

                {/* College E-Commerce (MySQL) */}
                <div className="p-3 rounded-xl bg-white/[0.02] print:bg-transparent border border-white/5 print:border-slate-200">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white print:text-slate-900">7. College E-Commerce</h3>
                    <span className="text-[11px] text-slate-400 font-mono">B.Sc. Project</span>
                  </div>
                  <p className="text-[11px] text-[#00DF81] print:text-emerald-700 font-medium mb-1">B.Sc. Academic Project</p>
                  <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 mb-1.5 leading-relaxed">
                    Functional e-commerce storefront with product catalog, cart flow, and relational MySQL database backend.
                  </p>
                  <div className="text-[10px] text-slate-400 print:text-slate-600 font-mono">HTML, CSS, JavaScript, MySQL</div>
                </div>

              </div>

            </div>
          </section>

          {/* Section: Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00DF81] print:text-emerald-700 border-b border-white/10 print:border-slate-300 pb-1 mb-2.5">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 print:text-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2">
                <span className="font-bold text-white print:text-slate-900">Frontend:</span>
                <span><strong>Next.js</strong> &amp; Modern UI Development using <strong>AI Agents</strong> (Claude, ChatGPT, Gemini)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2">
                <span className="font-bold text-white print:text-slate-900">Backend:</span>
                <span><strong>Express.js</strong></span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2">
                <span className="font-bold text-white print:text-slate-900">Databases:</span>
                <span><strong>Supabase</strong>, <strong>MySQL</strong></span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2">
                <span className="font-bold text-white print:text-slate-900">Tools:</span>
                <span>Git, GitHub, VS Code</span>
              </div>
            </div>
          </section>

          {/* Section: Education (Two Balanced Cards, No Certification) */}
          <section>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00DF81] print:text-emerald-700 border-b border-white/10 print:border-slate-300 pb-1 mb-3">
              Education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3.5 rounded-xl bg-white/[0.02] print:bg-transparent border border-white/5 print:border-slate-200 flex justify-between items-start">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white print:text-slate-900">M.Sc. Information Technology</h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 print:text-slate-600 mt-0.5">Hindusthan College of Arts &amp; Science, Coimbatore</p>
                </div>
                <div className="text-right ml-2 shrink-0">
                  <span className="text-[#00DF81] print:text-emerald-700 font-bold text-xs">7.9 CGPA</span>
                  <div className="text-[10px] text-slate-500">2023 – 2025</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] print:bg-transparent border border-white/5 print:border-slate-200 flex justify-between items-start">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white print:text-slate-900">B.Sc. Information Technology</h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 print:text-slate-600 mt-0.5">Erode Arts and Science College, Erode</p>
                </div>
                <div className="text-right ml-2 shrink-0">
                  <span className="text-[#00DF81] print:text-emerald-700 font-bold text-xs">7.5 CGPA</span>
                  <div className="text-[10px] text-slate-500">2020 – 2023</div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

    </div>
  );
}
