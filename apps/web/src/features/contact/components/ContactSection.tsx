'use client';

import { motion } from 'framer-motion';

const contactInfo = [
  {
    title: 'Secretaría Ejecutiva',
    value: '2401-3230',
    icon: '📞',
  },

  {
    title: 'Correo Secretaría',
    value: 'gesquivel@tec.ac.cr',
    icon: '✉️',
    href: 'mailto:gesquivel@tec.ac.cr',
  },

  {
    title: 'Correo Docente',
    value: 'drojas@itcr.ac.cr',
    icon: '🧑‍🏫',
    href: 'mailto:drojas@itcr.ac.cr',
  },

  {
    title: 'Ubicación',
    value: 'TEC Sede Santa Clara, San Carlos, Costa Rica',
    icon: '📍',
    href: 'https://maps.app.goo.gl/vJVUuj2vSopXpDFj9',
  },

  {
    title: 'GitHub Proyecto',
    value: 'Repositorio oficial TECVerse',
    icon: '💻',
    href: 'https://github.com/comunidadaplicacionesmoviles/tecverse',
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="
      relative
      min-h-screen
      overflow-hidden
      py-32
    "
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div
            className="
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-5
              py-2
              text-xs
              tracking-[0.25em]
              text-blue-400
            "
          >
          </div>
        </motion.div>

        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-5xl text-center"
        >
          <h2
            className="
              text-5xl
              font-black
              leading-none
              tracking-tight
              text-white

              md:text-7xl
            "
          >
            Conecta con nosotros
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-white/55

              md:text-2xl
            "
          >
            ¿Tienes interés en colaborar, unirte al equipo o conocer más
            sobre nuestros proyectos? Contáctanos mediante los canales oficiales.
          </p>
        </motion.div>

        {/* cards */}
        <div
          className="
            mx-auto
            mt-20
            grid
            max-w-3xl
            gap-6
          "
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-5
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-300

                    hover:border-blue-500/30
                    hover:bg-blue-500/[0.04]
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-2xl
                    "
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-white/35
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-2
                        text-lg
                        font-medium
                        text-white
                        transition-colors
                        group-hover:text-blue-300
                      "
                    >
                      {item.value}
                    </p>
                  </div>

                  <span
                    className="
                      text-sm
                      text-white/40
                      transition-transform
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>
              ) : (
                <div
                  className="
                    relative
                    flex
                    items-center
                    gap-5
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-2xl
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-white/35
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-2
                        text-lg
                        font-medium
                        text-white
                      "
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}