export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-1 flex-col items-center justify-center px-6 pb-40 pt-32 text-center overflow-hidden"
    >
      <div className="w-full max-w-4xl mx-auto relative overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1] tracking-[-1.5px] text-foreground pr-8 whitespace-nowrap"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            M. Anang Alief Al Ikhsan Setiawan <span className="text-muted-foreground mx-4 md:mx-8">•</span>
          </h1>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1] tracking-[-1.5px] text-foreground pr-8 whitespace-nowrap"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            M. Anang Alief Al Ikhsan Setiawan <span className="text-muted-foreground mx-4 md:mx-8">•</span>
          </h1>
        </div>
      </div>

      <p className="animate-fade-rise-delay mt-12 max-w-2xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
        Seorang Software Engineer yang berfokus pada pengembangan aplikasi Mobile, integrasi AI, dan Full-Stack Web Development. Mengubah ide kompleks menjadi solusi digital yang intuitif dan berdampak.
      </p>
    </section>
  )
}
