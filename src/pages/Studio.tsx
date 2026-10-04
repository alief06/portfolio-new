import { useState } from 'react';
import project2Img1 from "../assets/projects/project2/project2_1.jpeg";
import project3Img1 from "../assets/projects/project3/project3_1.jpeg";
import project4Img1 from "../assets/projects/project4/project4_1.jpeg";
import project5Img1 from "../assets/projects/project5/mindly_poster.png";
import project6Img1 from "../assets/projects/project6/speak_up_poster.png";
import project7Img1 from "../assets/projects/project7/si_waras_poster.png";
import project8Img1 from "../assets/projects/project8/Screenshot 2026-07-27 at 17.15.20.png";
import project9Img1 from "../assets/projects/project9/image.png";

export default function Studio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: "mindly-ai-app",
      title: "Mindly - AI Mental Health",
      image: project5Img1,
      description: "Mindly adalah aplikasi mobile pendamping kesehatan mental berbasis Artificial Intelligence (AI) yang dirancang untuk mendukung kesejahteraan emosional pengguna secara berkelanjutan. Aplikasi ini dilengkapi fitur unggulan seperti Daily Mood Check-in, Digital Journal dengan analisis AI, AI Counseling Chatbot, dan Face Mood Scanner. Proyek ini merupakan Proyek Akhir mata kuliah Teknologi Mobile, di mana saya berperan sebagai AI Developer yang bertanggung jawab dalam merancang logika pemrosesan AI dan integrasi backend. Bersama tim, Mindly berhasil dianugerahi penghargaan 🏆 Best Product Award pada ajang Final Project Exhibition (FIPEX).",
      tech: ["Flutter", "Python", "FastAPI", "AI", "Supabase", "CV"],
      link: "https://github.com/Mindly-Application/Testing-apps"
    },
    {
      id: "si-waras",
      title: "SI-WARAS - Sistem Informasi Desa",
      image: project7Img1,
      description: "SI-WARAS (Sistem Informasi Warasing Desa) adalah platform web digitalisasi rekam medis dan monitoring Penyakit Tidak Menular (PTM) yang dikembangkan untuk mendukung modernisasi pelayanan kesehatan desa dalam program PPKO di Kalurahan Caturharjo, Bantul. Sistem ini dirancang untuk memantau sebaran kasus PTM (seperti Hipertensi, Diabetes, Kolesterol, dan Asam Urat) dari 14 padukuhan secara terintegrasi dan real-time.",
      tech: ["React", "Tailwind CSS", "Data Viz", "Real-time Dashboard"],
      link: "https://siwaras.com"
    },
    {
      id: "speak-up-system",
      title: "Speak Up - Bullying Reporting",
      image: project6Img1,
      description: "Speak Up adalah sistem informasi pelaporan dan monitoring kasus perundungan (bullying) yang dikembangkan sebagai proyek mata kuliah Desain dan Pengembangan Sistem Informasi (DPSI), dengan studi kasus di SMK 4 Muhammadiyah Yogyakarta. Sistem ini menghadirkan fitur Laporan Anonim maupun Terbuka untuk menjaga kenyamanan pelapor, Unggah Bukti (foto/video), Cek Status Laporan secara real-time, hingga Dashboard Monitoring & Jadwal Mediasi.",
      tech: ["Supabase", "PostgreSQL", "RLS", "Real-time"],
      link: "https://github.com/SpeakUp-DPSI/SpeakUp-FIXXXXX"
    },
    {
      id: "nadi-barito",
      title: "NADI BARITO - Platform Pariwisata",
      image: project9Img1,
      description: "NADI BARITO adalah platform website inovatif yang dirancang untuk mempersembahkan pariwisata, kebudayaan, sejarah, dan gastronomi Kota Banjarmasin, sekaligus mendukung visi transformasi Karsa Digital 2026 Kalimantan Selatan sebagai gerbang Ibu Kota Nusantara (IKN).",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MVC"],
      link: "https://github.com/alief06/NadiBarito"
    },
    {
      id: "gateva",
      title: "GATEVA - Web App Tiket Online",
      image: project3Img1,
      description: "GATEVA merupakan web application pemesanan tiket online yang dikembangkan sebagai tugas akhir (kelompok) pada mata kuliah Teknologi Web. Aplikasi ini dibuat menggunakan React dengan fitur pemilihan jadwal, pemesanan tiket, serta antarmuka modern berbasis component.",
      tech: ["React", "React Router", "Tailwind CSS"],
      link: "https://github.com/Gateva-Team/GATEVA_FINAL"
    },
    {
      id: "alertime",
      title: "ALERTIME - Mobile Pengingat Tugas",
      image: project2Img1,
      description: "Aplikasi mobile pengingat tugas untuk membantu mahasiswa mencatat, mengelola, dan memonitor deadline secara efisien dan terstruktur.",
      tech: ["Flutter", "Firebase"],
      link: "https://github.com/alief06/Alertime-TugasTeoriTekMob"
    },
    {
      id: "lapor-cepat",
      title: "LaporCepat - Mobile Pelaporan Kejadian",
      image: project8Img1,
      description: "LaporCepat adalah aplikasi mobile interaktif dan intuitif yang dirancang untuk membantu pengguna melaporkan berbagai kejadian secara cepat, akurat, dan terstruktur. Aplikasi ini menghadirkan antarmuka dasbor modern dengan fitur seperti pencarian laporan, ringkasan statistik laporan mingguan dan harian.",
      tech: ["Flutter", "SQLite", "Dart", "Local Database"],
      link: "https://github.com/alief06"
    },
    {
      id: "gemastik-ux",
      title: "UX Design Concept - GEMASTIK 2025",
      image: project4Img1,
      description: "Konsep UX Design yang dikembangkan sebagai bagian dari persiapan kompetisi GEMASTIK 2025. Dalam proyek ini saya berperan sebagai perancang ide dan alur pengalaman pengguna dengan fokus pada identifikasi kebutuhan pengguna, perancangan user flow, serta penyusunan konsep fitur utama.",
      tech: ["UX Research", "User Flow", "Design Thinking", "Figma"],
    },
  ];

  return (
    <section className="flex flex-1 flex-col px-6 pb-40 pt-32 max-w-7xl mx-auto w-full">
      <div className="mb-12">
        <h1
          className="animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          My Works
        </h1>
        <p className="animate-fade-rise-delay mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          Kumpulan proyek dan eksperimen digital yang pernah saya bangun.
        </p>
      </div>

      <div className="animate-fade-rise-delay-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer group flex flex-col border border-foreground/10 bg-background/80 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-background/95 transition-colors"
          >
            {project.image && (
              <div className="w-full h-56 overflow-hidden bg-muted border-b border-foreground/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="flex flex-col p-6 flex-1">
              <h2 className="text-2xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {project.title}
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="text-[10px] font-body uppercase tracking-wider text-foreground/70 border border-foreground/20 rounded-full px-2 py-0.5">
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-[10px] font-body uppercase tracking-wider text-foreground/50 px-1 py-0.5">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-background border border-foreground/20 rounded-3xl shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
            
            {/* Left: Image Section */}
            {selectedProject.image && (
              <div className="w-full md:w-1/2 shrink-0 bg-muted/30 border-b md:border-b-0 md:border-r border-foreground/10 flex items-center justify-center p-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full max-h-[70vh] object-contain rounded-xl shadow-sm"
                />
              </div>
            )}
            
            {/* Right: Content Section */}
            <div className={`w-full ${selectedProject.image ? 'md:w-1/2' : ''} p-8 sm:p-10 flex flex-col bg-background`}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Project Details
              </h4>
              <h2 className="text-3xl sm:text-4xl font-normal text-foreground mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {selectedProject.title}
              </h2>
              
              <div className="mb-8">
                <p className="font-body text-base text-foreground/90 leading-relaxed whitespace-pre-wrap">
                  {selectedProject.description}
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-foreground/5 border border-foreground/10 text-xs font-semibold text-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedProject.link && (
                <div className="mt-auto pt-6 border-t border-foreground/10">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-foreground text-background font-body font-semibold text-sm transition-opacity hover:opacity-90"
                  >
                    View Project ↗
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
