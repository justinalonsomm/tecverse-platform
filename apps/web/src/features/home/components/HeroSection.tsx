export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* BADGES */}
        <div className="flex items-center justify-center gap-4 mb-10 flex-wrap">

          <div className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
            Instituto Tecnológico de Costa Rica
          </div>

          <div className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm">
            Sede Santa Clara · San Carlos
          </div>
        </div>

        {/* TITLE */}
        <h1 className="hero-title">
          TEC Innovation
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-3xl mx-auto mt-16 text-2xl text-muted leading-relaxed">
          Estudiantes del TEC construyendo el futuro digital de Costa Rica.
          Metaverso, realidad extendida e infraestructura inteligente.
        </p>

        {/* BUTTONS */}
        <div className="mt-14 flex items-center justify-center gap-6 flex-wrap">

          <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-lg blue-glow">
            Explorar Proyectos
          </button>

          <button className="px-10 py-5 rounded-2xl border border-white/10 hover:border-white/20 transition">
            Conocer más →
          </button>
        </div>

        {/* STATS */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10">

          {[
            ['3', 'Proyectos Activos'],
            ['2+', 'Años Desarrollo'],
            ['5h', 'Horas Semanales'],
            ['26+', 'Estudiantes'],
          ].map(([value, label]) => (
            <div key={label}>
              <h3 className="text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {value}
              </h3>

              <p className="text-white/50 mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}