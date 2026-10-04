import { useState } from 'react';

export default function Journal() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Lab', 'Organisasi', 'Kepanitiaan'];

  const experiences = [
    {
      id: 1,
      role: "Asisten Praktikum Dasar Pemrograman",
      company: "Laboratorium Sistem Informasi - UAD",
      period: "2025 – 2026",
      type: "Lab",
      desc: [
        "Mendampingi mahasiswa dalam memahami dasar pemrograman.",
        "Membantu debugging dan penjelasan logika program.",
        "Menilai tugas serta laporan praktikum.",
      ],
    },
    {
      id: 2,
      role: "Asisten Praktikum Algoritma Pemrograman",
      company: "Laboratorium Sistem Informasi - UAD",
      period: "2026",
      type: "Lab",
      desc: [
        "Mendampingi mahasiswa dalam mempelajari penyusunan algoritma, penyelesaian studi kasus, serta implementasinya menggunakan Python.",
        "Memberikan bimbingan terkait logika pemrograman dan analisis algoritma.",
      ],
    },
    {
      id: 3,
      role: "Asisten Praktikum Konsep Basis Data",
      company: "Laboratorium Sistem Informasi - UAD",
      period: "2026",
      type: "Lab",
      desc: [
        "Membimbing mahasiswa dalam memahami konsep basis data relasional, normalisasi, serta penggunaan SQL untuk pengelolaan data.",
        "Mendampingi praktikum pembuatan query SQL, manipulasi data (CRUD), dan perancangan basis data.",
      ],
    },
    {
      id: 4,
      role: "Asisten Praktikum Analisis Proses Bisnis",
      company: "Laboratorium Sistem Informasi - UAD",
      period: "2026",
      type: "Lab",
      desc: [
        "Membimbing mahasiswa dalam memodelkan proses bisnis menggunakan BPMN dengan aplikasi Bizagi Modeler.",
        "Memberikan pendampingan dalam analisis proses bisnis dan identifikasi permasalahan.",
      ],
    },
    {
      id: 5,
      role: "Ketua Himpunan Mahasiswa Sistem Informasi",
      company: "Himpunan Mahasiswa Sistem Informasi UAD",
      period: "2026",
      type: "Organisasi",
      desc: [
        "Memimpin organisasi dalam menyusun arah strategis, mengoordinasikan pengurus, serta memastikan pelaksanaan program kerja berjalan efektif.",
        "Membangun kolaborasi dengan fakultas, organisasi kemahasiswaan, dan mitra eksternal.",
      ],
    },
    {
      id: 6,
      role: "Staff Departemen Kajian Strategis & Advokasi",
      company: "BEM FAST UAD",
      period: "2025 – 2026",
      type: "Organisasi",
      desc: [
        "Menyusun kajian isu akademik dan kebijakan kampus.",
        "Berpartisipasi dalam diskusi internal dan advokasi mahasiswa.",
      ],
    },
    {
      id: 7,
      role: "Anggota Departemen Keagamaan & Keilmuan",
      company: "Persatuan Mahasiswa Kalimantan Selatan",
      period: "2025 – 2026",
      type: "Organisasi",
      desc: [
        "Mengikuti kegiatan keilmuan dan pengembangan diri.",
        "Terlibat dalam program pembinaan mahasiswa daerah.",
      ],
    },
    {
      id: 8,
      role: "Anggota Bidang Hikmah & Politik",
      company: "IMM FAST",
      period: "2026 – 2027",
      type: "Organisasi",
      desc: [
        "Terlibat dalam kajian isu kebijakan publik dan sosial.",
        "Mengikuti forum diskusi strategis internal organisasi.",
      ],
    },
    {
      id: 13,
      role: "Ketua Pelaksana",
      company: "Program Pengenalan Kampus (P2K) FAST UAD",
      period: "2026",
      type: "Kepanitiaan",
      desc: [
        "Memimpin, mengoordinasikan, dan mengelola seluruh kepanitiaan dalam penyelenggaraan acara penyambutan mahasiswa baru tingkat fakultas.",
        "Menyusun strategi pelaksanaan acara dan berkoordinasi langsung dengan pihak birokrasi kampus maupun pihak eksternal.",
        "Memastikan kelancaran operasional acara dan mengambil keputusan taktis untuk memitigasi kendala di lapangan.",
      ],
    },
    {
      id: 9,
      role: "Ketua Pelaksana",
      company: "Final Project Exhibition (FIPEX #7)",
      period: "2026",
      type: "Kepanitiaan",
      desc: [
        "Memimpin, mengoordinasikan, dan mengelola seluruh tahapan perencanaan hingga pelaksanaan pameran proyek akhir.",
        "Menyusun konsep besar kegiatan dan menentukan arah strategi acara.",
      ],
    },
    {
      id: 14,
      role: "Ketua Pelaksana",
      company: "Pelatihan Jurnalistik Tingkat Dasar (PJTD) - Poros UAD",
      period: "2025",
      type: "Kepanitiaan",
      desc: [
        "Memimpin dan mengoordinasikan kepanitiaan dalam menyelenggarakan pelatihan jurnalistik bagi mahasiswa.",
        "Bertanggung jawab penuh atas manajemen operasional, perencanaan alur kegiatan, dan kelancaran acara secara keseluruhan.",
      ],
    },
    {
      id: 15,
      role: "Koordinator Divisi Acara",
      company: "Bazar Buku Poros",
      period: "2026",
      type: "Kepanitiaan",
      desc: [
        "Merancang konsep acara pendukung dan mengoordinasikan jadwal pelaksanaan bazar.",
        "Memimpin anggota divisi acara serta memastikan kelancaran teknis di lapangan.",
      ],
    },
    {
      id: 10,
      role: "Anggota Divisi Acara",
      company: "Program Pengenalan Kampus FAST UAD",
      period: "2025",
      type: "Kepanitiaan",
      desc: [
        "Menyiapkan konsep dan rundown kegiatan.",
        "Mengatur alur acara selama pelaksanaan.",
      ],
    },
    {
      id: 11,
      role: "Anggota Divisi Acara",
      company: "Upgrading Ormawa FAST",
      period: "2025",
      type: "Kepanitiaan",
      desc: [
        "Menyusun konsep kegiatan internal organisasi.",
        "Mengkoordinasikan kebutuhan teknis acara.",
      ],
    },
    {
      id: 12,
      role: "Anggota Divisi Acara",
      company: "Kongres KBM FAST",
      period: "2025",
      type: "Kepanitiaan",
      desc: [
        "Terlibat dalam perencanaan acara utama fakultas.",
        "Menyusun jadwal dan alur sidang kongres.",
      ],
    },
  ];

  const filteredExperiences = filter === 'All'
    ? experiences
    : experiences.filter(e => e.type === filter);

  return (
    <section className="flex flex-1 flex-col px-6 pb-40 pt-32 max-w-6xl mx-auto w-full">
      <div className="mb-12">
        <h1
          className="animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Journal
        </h1>
        <p className="animate-fade-rise-delay mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          Catatan pengalaman, aktivitas organisasi, dan perjalanan karir saya.
        </p>
      </div>

      {/* Filter / Sub Navbar */}
      <div className="animate-fade-rise-delay flex flex-wrap gap-3 mb-10 border-b border-foreground/10 pb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-colors ${filter === f
                ? 'bg-foreground text-background shadow-md'
                : 'bg-transparent text-foreground/70 hover:bg-foreground/5 hover:text-foreground border border-foreground/20'
              }`}
          >
            {f === 'Lab' ? 'Laboratorium' : f}
          </button>
        ))}
      </div>

      {/* Grid Layout for Experiences */}
      <div className="animate-fade-rise-delay-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExperiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col p-6 rounded-2xl border border-foreground/10 bg-background/80 backdrop-blur-md hover:bg-background/95 transition-all group"
          >
            <div className="flex justify-between items-start mb-4 gap-4">
              <h2 className="text-2xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {exp.role}
              </h2>
              <span className="shrink-0 text-[10px] font-body font-bold tracking-wider text-muted-foreground uppercase bg-foreground/5 border border-foreground/10 px-2 py-1 rounded-md">
                {exp.period}
              </span>
            </div>

            <p className="font-body text-sm font-semibold text-foreground/80 mb-5">
              {exp.company}
            </p>

            <ul className="space-y-3 mt-auto border-t border-foreground/10 pt-5">
              {exp.desc.map((item, i) => (
                <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-foreground/30 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {filteredExperiences.length === 0 && (
          <div className="col-span-full py-10 text-center text-muted-foreground font-body">
            No entries found for this category.
          </div>
        )}
      </div>
    </section>
  )
}
