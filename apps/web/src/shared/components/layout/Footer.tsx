'use client';

export function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/5
        py-10
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-6
          px-6

          md:flex-row
        "
      >
        <div>
          <h3
            className="
              text-xl
              font-black
              text-white
            "
          >
            TEC.Innovation
          </h3>

          <p
            className="
              mt-2
              max-w-md
              text-sm
              leading-relaxed
              text-white/40
            "
          >
            Asistencia universitaria tecnológica del
            Instituto Tecnológico de Costa Rica.
          </p>
        </div>

        <div
          className="
            text-sm
            text-white/35
          "
        >
          © 2026 TEC Innovation Labs
        </div>
      </div>
    </footer>
  );
}