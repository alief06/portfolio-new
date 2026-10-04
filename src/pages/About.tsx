export default function About() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 pb-40 pt-32 text-center max-w-4xl mx-auto w-full">
      <h1
        className="animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Tentang Saya
      </h1>
      
      <div className="animate-fade-rise-delay mt-12 space-y-6 font-body text-base md:text-lg leading-relaxed text-muted-foreground text-left bg-background/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-foreground/10 shadow-sm">
        <p>
          Halo, saya <strong>M. Anang Alief Al Ikhsan Setiawan</strong>. Saya adalah seorang Software Engineer yang antusias dalam mengeksplorasi teknologi baru, terutama di bidang pengembangan aplikasi mobile, kecerdasan buatan (AI), dan <em>Full-Stack Web Development</em>.
        </p>
        <p>
          Selama perjalanan karir dan akademik saya, saya berkesempatan untuk membangun berbagai proyek inovatif—mulai dari <strong className="text-foreground">Mindly</strong>, sebuah aplikasi kesehatan mental berbasis AI yang meraih predikat 🏆 <em>Best Product Award</em> di Final Project Exhibition, hingga membangun <strong className="text-foreground">Speak Up</strong> (sistem pelaporan perundungan) dan <strong className="text-foreground">NADI BARITO</strong> (platform pariwisata).
        </p>
        <p>
          Selain menulis kode, saya juga aktif mengabdi dan berbagi pengetahuan. Saya pernah memimpin sebagai Ketua Himpunan Mahasiswa Sistem Informasi UAD dan mengajar rekan-rekan mahasiswa sebagai Asisten Praktikum di berbagai mata kuliah pemrograman dan basis data.
        </p>
        <p>
          Saya memiliki keyakinan penuh bahwa teknologi terbaik adalah teknologi yang tidak hanya canggih, melainkan juga mampu memecahkan masalah nyata, mudah digunakan, dan memberikan dampak positif yang berkelanjutan bagi masyarakat.
        </p>
      </div>
    </section>
  )
}
