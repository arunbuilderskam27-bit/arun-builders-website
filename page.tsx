"use client";

import { businessData } from "@/data/config";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, MapPin, ChevronRight, CheckCircle2, ArrowRight, HomeIcon, Building2, Wrench, HardHat, ShieldCheck, Clock, CheckCircle, Navigation, LayoutDashboard, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [formState, setFormState] = useState({
    status: 'idle', 
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'submitting', message: '' });
    setTimeout(() => {
      setFormState({ status: 'success', message: 'Thank you! Your enquiry has been received. We will contact you shortly.' });
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const services = [
    { title: "Residential Construction", icon: <HomeIcon size={32} className="text-gold-500" />, desc: "Independent houses, villas, and premium home construction tailored to your lifestyle." },
    { title: "Commercial Construction", icon: <Building2 size={32} className="text-gold-500" />, desc: "Modern shops, offices, and commercial spaces built for business growth." },
    { title: "Renovation & Extension", icon: <Wrench size={32} className="text-gold-500" />, desc: "Transform your existing spaces with our expert renovation and structural improvements." },
    { title: "Planning & Consultation", icon: <LayoutDashboard size={32} className="text-gold-500" />, desc: "Professional guidance, budget planning, and transparent construction coordination." },
    { title: "Site Development", icon: <HardHat size={32} className="text-gold-500" />, desc: "Complete site preparation, construction coordination, and project execution." },
  ];

  const processSteps = [
    { num: "01", title: "CONSULTATION", desc: "Understanding your vision and project requirements." },
    { num: "02", title: "SITE DISCUSSION", desc: "Detailed site analysis for technical feasibility." },
    { num: "03", title: "PLANNING & ESTIMATE", desc: "Transparent budgeting and architectural design." },
    { num: "04", title: "CONSTRUCTION", desc: "Quality execution with regular updates." },
    { num: "05", title: "HANDOVER", desc: "Delivering your project on time, as promised." },
  ];

  const whyChooseUs = [
    { title: "CUSTOMER FOCUSED", icon: <ShieldCheck size={28} className="text-gold-500" /> },
    { title: "QUALITY ORIENTED", icon: <CheckCircle size={28} className="text-gold-500" /> },
    { title: "CLEAR COMMUNICATION", icon: <MessageCircle size={28} className="text-gold-500" /> },
    { title: "PROJECT SUPPORT", icon: <Clock size={28} className="text-gold-500" /> }
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${businessData.phoneClean}?text=${encodeURIComponent(businessData.whatsappMessage)}`;

  return (
    <main className="min-h-screen">
      {/* HEADER */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-forest-950/95 backdrop-blur-md py-4 shadow-lg' : 'bg-forest-950 py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 z-50">
            <Link href="/" className="text-gold-400 font-display font-bold text-xl md:text-2xl tracking-wider flex flex-col">
              ARUN BUILDERS
              <span className="text-xs font-sans text-stone-300 tracking-[0.2em] font-normal uppercase mt-1">& KAM GROUPS</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {['Home', 'Services', 'Projects', 'Process', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-stone-200 hover:text-gold-400 text-sm uppercase tracking-wider font-medium transition-colors">
                {item}
              </a>
            ))}
            <button onClick={scrollToContact} className="bg-gold-500 hover:bg-gold-400 text-forest-950 px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-gold-500/20">
              Get Free Consultation
            </button>
          </nav>

          <button className="lg:hidden text-gold-400 z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-forest-950 z-40 flex flex-col justify-center items-center gap-8 px-6"
          >
            {['Home', 'Services', 'Projects', 'Process', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 text-2xl font-display tracking-wider hover:text-gold-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-forest-950">
          <Image 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop" 
            alt="Premium Construction" 
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forest-950/90"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-20 text-center relative mt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.p variants={fadeInUp} className="text-gold-400 uppercase tracking-[0.2em] font-semibold text-xs md:text-sm mb-6 flex flex-wrap justify-center gap-2 md:gap-4">
              <span>Planning</span> <span className="text-stone-500">•</span> 
              <span>Construction</span> <span className="text-stone-500">•</span> 
              <span>Renovation</span> <span className="text-stone-500">•</span> 
              <span>Consultation</span>
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              YOUR DREAM HOME.<br />
              <span className="text-gold-400">BUILT WITH CONFIDENCE.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto text-balance">
              Professional construction solutions for residential, commercial and renovation projects in Madurai.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToContact} className="bg-gold-500 hover:bg-gold-400 text-forest-950 px-8 py-4 rounded font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(209,158,36,0.3)] hover:shadow-[0_0_30px_rgba(209,158,36,0.5)]">
                GET FREE CONSULTATION
              </button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-stone-300 hover:border-gold-400 hover:text-gold-400 text-white px-8 py-4 rounded font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                WHATSAPP US
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PLANNING TO BUILD SECTION */}
      <section className="py-20 bg-gold-500 text-forest-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4">Planning to Build Your Dream Home?</h2>
              <p className="text-lg mb-8 font-medium">Before you start construction, discuss your site, requirements and budget with us.</p>
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-3 font-bold"><CheckCircle2 size={24} /> Project Planning</div>
                <div className="flex items-center gap-3 font-bold"><CheckCircle2 size={24} /> Budget Discussion</div>
                <div className="flex items-center gap-3 font-bold"><CheckCircle2 size={24} /> Site Consultation</div>
              </div>
            </div>
            <div className="flex justify-start md:justify-end">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-forest-950 hover:bg-forest-900 text-white px-8 py-5 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-200">
                <MessageCircle size={24} className="text-[#25D366]" /> Talk to Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-forest-950 text-stone-200 bg-architectural">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Services</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-forest-900 border border-forest-800 p-8 rounded-lg hover:border-gold-500 transition-colors group flex flex-col"
              >
                <div className="mb-6 bg-forest-950 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-stone-400 mb-8 text-sm flex-grow">{service.desc}</p>
                <button onClick={scrollToContact} className="text-gold-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-gold-300 transition-colors w-fit">
                  Enquire Now <ChevronRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-forest-950 mb-6">Project Showcase</h2>
            <p className="text-slate-600 text-lg">A selection of our premium construction projects.</p>
            <div className="w-20 h-1 bg-gold-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {businessData.projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl shadow-lg hover:shadow-2xl transition-shadow bg-stone-50 border border-stone-100 overflow-hidden"
              >
                {/* Simulated Before/During/After Layout Wrapper */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-forest-950 text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full shadow-md z-10 flex gap-2 items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Showcase
                  </div>
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                </div>

                <div className="p-8 bg-white relative z-20">
                  <span className="text-gold-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-forest-950 mb-2">{project.title}</h3>
                  <p className="text-slate-500 flex items-center gap-2 text-sm mb-6">
                    <MapPin size={16} /> {project.location}
                  </p>
                  
                  {/* Before/During/After Text Placeholders */}
                  <div className="grid grid-cols-3 gap-2 border-t border-stone-100 pt-4 mt-2">
                    <div className="text-center">
                      <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Before</p>
                      <div className="h-1 bg-stone-200 rounded"></div>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">During</p>
                      <div className="h-1 bg-stone-200 rounded"></div>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] uppercase font-bold text-gold-500 mb-1">Completed</p>
                      <div className="h-1 bg-gold-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK (TIMELINE) */}
      <section id="process" className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-forest-950 mb-6">How We Work</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gold-500/30 z-0"></div>
            
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-forest-950 text-gold-400 border-2 border-gold-500 rounded-full flex items-center justify-center font-display font-bold text-2xl mb-6 shadow-lg group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors z-10">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-forest-950 mb-3 uppercase tracking-wide">{step.title}</h3>
                  <p className="text-sm text-slate-600 px-4 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-forest-950 mb-16">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-gold-500 transition-colors flex flex-col items-center">
                <div className="mb-6 p-4 bg-white rounded-full shadow-sm">{item.icon}</div>
                <h4 className="font-bold text-forest-950 tracking-wider">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / LEAD FORM SECTION */}
      <section id="contact" className="py-24 bg-forest-950 text-white relative">
        <div className="absolute inset-0 bg-architectural z-0 opacity-40"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Let's Build <br/><span className="text-gold-400">Your Dream</span>
              </h2>
              <p className="text-stone-300 text-lg">Reach out to us for a free site visit and project consultation.</p>
              
              <div className="bg-forest-900/60 p-8 rounded-xl border border-forest-800 space-y-6">
                <div>
                  <h4 className="text-gold-400 font-bold mb-2 text-sm uppercase tracking-wider">Address</h4>
                  <p className="text-stone-200">{businessData.location}</p>
                </div>
                <div className="w-full h-px bg-forest-800"></div>
                <div>
                  <h4 className="text-gold-400 font-bold mb-2 text-sm uppercase tracking-wider">Phone</h4>
                  <a href={`tel:${businessData.phoneClean}`} className="text-2xl font-display font-bold text-white hover:text-gold-400 transition-colors">
                    {businessData.phone}
                  </a>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${businessData.phoneClean}`} className="flex-1 bg-stone-200 hover:bg-white text-forest-950 py-3 rounded text-center font-bold transition-colors">
                    CALL NOW
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] hover:bg-[#1ebd5a] text-white py-3 rounded text-center font-bold flex items-center justify-center gap-2 transition-colors">
                    <MessageCircle size={18} /> WHATSAPP
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-10 text-forest-950 shadow-2xl relative">
              {formState.status === 'success' ? (
                <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Success!</h3>
                  <p className="text-slate-600 mb-8 text-lg">{formState.message}</p>
                  
                  <div className="mt-8 pt-8 border-t border-stone-100 w-full">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Prefer WhatsApp? Chat with us</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-[#1ebd5a] transition-colors">
                      <MessageCircle size={20} /> Open WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="mb-8 border-b border-stone-200 pb-4">
                    <h3 className="text-2xl font-bold uppercase tracking-wide">GET A FREE CONSULTATION</h3>
                    <p className="text-sm text-slate-500 mt-1">Fill out the form below and we will contact you shortly.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number <span className="text-red-500">*</span></label>
                      <input required type="tel" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" placeholder="Enter mobile number" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Location <span className="text-red-500">*</span></label>
                      <input required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" placeholder="Project location" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Type <span className="text-red-500">*</span></label>
                      <select required className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                        <option value="">Select Project Type</option>
                        <option value="Residential Construction">Residential Construction</option>
                        <option value="Commercial Construction">Commercial Construction</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Site Size</label>
                      <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" placeholder="e.g. 1200 sq.ft (Optional)" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Approximate Budget</label>
                      <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" placeholder="e.g. ₹50 Lakhs (Optional)" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                    <textarea rows={3} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Briefly describe your requirements..."></textarea>
                  </div>

                  <button type="submit" disabled={formState.status === 'submitting'} className="w-full bg-forest-950 hover:bg-forest-800 text-white py-4 rounded-lg font-bold text-lg transition-colors disabled:opacity-70 mt-4 flex items-center justify-center gap-2 shadow-xl">
                    {formState.status === 'submitting' ? 'SUBMITTING...' : 'REQUEST CONSULTATION'} <Send size={20} className={formState.status === 'submitting' ? 'animate-pulse' : ''} />
                  </button>
                  
                  <div className="text-center mt-4 pt-4 border-t border-stone-100">
                     <p className="text-xs text-slate-500">
                        Prefer WhatsApp? <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline inline-flex items-center gap-1"><MessageCircle size={12}/> Chat with us</a>
                     </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a120e] text-stone-400 pt-16 pb-24 lg:pb-16 border-t border-forest-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link href="/" className="text-gold-400 font-display font-bold text-xl tracking-wider block mb-2">
                ARUN BUILDERS <span className="text-xs font-sans text-stone-500 font-normal uppercase tracking-widest">& KAM GROUPS</span>
              </Link>
              <p className="text-sm mt-4 text-stone-500 italic">"Your Site. Your Vision. Our Commitment."</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'Projects', 'Contact'].map(link => (
                  <li key={link}><a href={link === 'Home' ? '#' : `#${link.toLowerCase()}`} className="hover:text-gold-400 transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Details</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>{businessData.location}</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Phone size={18} className="text-gold-500 flex-shrink-0" />
                  <span>{businessData.phone}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-forest-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (DESKTOP) */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hidden lg:flex fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebd5a] transition-all hover:scale-110 z-50 items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-forest-950 text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* STICKY BOTTOM CTA BAR (MOBILE) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-50 flex items-stretch h-16">
        <a href={`tel:${businessData.phoneClean}`} className="flex-1 flex flex-col items-center justify-center text-forest-950 hover:bg-stone-50 transition-colors">
          <Phone size={20} className="mb-1 text-gold-600" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call Now</span>
        </a>
        <div className="w-px bg-stone-200"></div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center text-[#25D366] bg-green-50/50 hover:bg-green-50 transition-colors">
          <MessageCircle size={20} className="mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>
        <div className="w-px bg-stone-200"></div>
        <button onClick={scrollToContact} className="flex-[1.2] flex flex-col items-center justify-center bg-forest-950 text-gold-400 hover:bg-forest-900 transition-colors">
          <Navigation size={20} className="mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Free Quote</span>
        </button>
      </div>

    </main>
  );
}
