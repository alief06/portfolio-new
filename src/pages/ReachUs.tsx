export default function ReachUs() {
  const contacts = [
    {
      id: "email",
      label: "Email",
      value: "alikhsanalief@gmail.com",
      desc: "Untuk diskusi project, kerja sama, atau pertanyaan profesional.",
      link: "mailto:alikhsanalief@gmail.com"
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/alief06",
      desc: "Lihat source code, portfolio, dan project yang sedang dikembangkan.",
      link: "https://github.com/alief06"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "M. Anang Alief Al Ikhsan S.",
      desc: "Koneksi profesional dan pengalaman akademik.",
      link: "https://linkedin.com/in/M.%20Anang%20Alief%20Al%20Ikhsan%20Setiawan" 
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "@alikhsanalief",
      desc: "Seputar aktivitas, desain, dan proses belajar.",
      link: "https://instagram.com/alikhsanalief"
    },
  ];

  return (
    <section className="flex flex-1 flex-col px-6 pb-40 pt-32 max-w-5xl mx-auto w-full">
      <div className="mb-20">
        <h1
          className="animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Reach Me
        </h1>
        <p className="animate-fade-rise-delay mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          Mari berkolaborasi dan bangun sesuatu yang luar biasa bersama. Jangan ragu untuk menghubungi saya.
        </p>
      </div>

      <div className="animate-fade-rise-delay-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col p-8 border border-foreground/10 bg-background/80 backdrop-blur-md rounded-2xl hover:bg-background/95 transition-colors group"
          >
            <h3 className="text-2xl font-normal text-foreground group-hover:text-foreground/80" style={{ fontFamily: "'Instrument Serif', serif" }}>
              {contact.label}
            </h3>
            <p className="font-body text-sm font-semibold text-foreground/70 mt-2">
              {contact.value}
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
              {contact.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
