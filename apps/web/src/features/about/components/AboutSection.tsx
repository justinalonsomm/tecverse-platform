'use client';

import { motion } from 'framer-motion';

import { SectionBadge } from '@/shared/components/ui/Badge/SectionBadge';

import {
  aboutCards,
  techStack,
} from '../data/about.data';

import { InfoCard } from './InfoCard';
import { LocationCard } from './LocationCard';
import { TechStack } from './TechStack';

export function AboutSection() {

  return (
    <section
      id="about"
      className="
        relative
        py-32
      "
    >

      <div className="
        mx-auto
        max-w-7xl
        px-6
      ">

        {/* header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}

          className="text-center"
        >
            
          <h2
            className="
              mt-8
              text-5xl
              font-black
              leading-none
              text-white
              md:text-7xl
            "
          >
            TEC Innovation Labs
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-xl
              leading-relaxed
              text-white/60
            "
          >
            Asistencia universitaria tecnológica del
            Instituto Tecnológico de Costa Rica,
            Sede Santa Clara San Carlos.
          </p>
        </motion.div>

        {/* main panel */}
        <div
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            backdrop-blur-xl
          "
        >

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-pink-500
            "
          />

          <div className="
            grid
            gap-12
            lg:grid-cols-2
          ">

            {/* historia */}
            <div>

              <h3 className="
                text-5xl
                font-black
                text-white
              ">
                Historia
              </h3>

              <div className="
                mt-8
                space-y-8
                text-lg
                leading-relaxed
                text-white/65
              ">
                <p>
                  TEC Innovation Labs nació como una
                  asistencia universitaria con la visión
                  de crear proyectos tecnológicos de impacto
                  real para la comunidad del TEC Sede Santa Clara,
                  San Carlos, Costa Rica.
                </p>

                <p>
                  Estudiantes de Ingeniería en Computación y
                  Producción Industrial colaboran en el mismo
                  espacio, con el mismo horario y bajo la guía
                  de un docente encargado, para desarrollar
                  soluciones tecnológicas innovadoras en VR,
                  XR e IoT.
                </p>
              </div>
            </div>

            {/* ubicación */}
            <div>

              <h3 className="
                text-5xl
                font-black
                text-white
              ">
                Ubicación
              </h3>

              <div className="mt-8">
                <LocationCard />
              </div>
            </div>
          </div>
        </div>

        {/* cards */}
        <div
          className="
            mt-14
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {aboutCards.map((card) => (
            <InfoCard
              key={card.title}
              title={card.title}
              description={card.description}
              accent={card.accent}
            />
          ))}
        </div>

        {/* stack */}
        <TechStack items={techStack} />
      </div>
    </section>
  );
}