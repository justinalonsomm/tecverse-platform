export function LocationCard() {

  return (
    <div
      className="
        rounded-[24px]
        border
        border-blue-500/20
        bg-blue-500/[0.05]
        p-8
      "
    >

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <span className="text-xl">🏛</span>

          <p className="text-white/80">
            Instituto Tecnológico de Costa Rica
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xl">📍</span>

          <p className="text-white/80">
            Sede Santa Clara, San Carlos
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xl font-bold">
            CR
          </span>

          <p className="text-white/80">
            Costa Rica
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xl">🕓</span>

          <p className="text-white/80">
            Lunes a Viernes · Horario asistencia
          </p>
        </div>
      </div>
    </div>
  );
}