'use client';

import { motion } from 'framer-motion';

import { SectionBadge } from '@/shared/components/ui/Badge/SectionBadge';

import {
  leadProfessor,
  teamMembers,
} from '../data/team.data';

import { MemberCard } from './MemberCard';

export function TeamSection() {

  return (
    <section
      id="team"
      className="
        relative
        py-32
      "
    >

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="text-center">

          <SectionBadge>
            Nuestro Equipo
          </SectionBadge>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              leading-none
              tracking-tight
              text-white
              md:text-7xl
            "
          >
            Las mentes detrás del futuro
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
            Estudiantes y docentes del TEC Sede Santa Clara
            trabajando juntos en proyectos de innovación tecnológica.
          </p>
        </div>

        {/* PROFESSOR */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          className="
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
              flex
              flex-col
              gap-8
              lg:flex-row
            "
          >

            {/* avatar */}
            <div
              className="
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-[28px]
                border
                border-blue-500/30
                bg-blue-500/10
                text-5xl
                font-black
                text-blue-400
              "
            >
              {leadProfessor.initials}
            </div>

            {/* content */}
            <div className="flex-1">

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-4
                "
              >

                <h3
                  className="
                    text-4xl
                    font-black
                    text-white
                  "
                >
                  {leadProfessor.name}
                </h3>

                <span
                  className="
                    rounded-full
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    px-4
                    py-2
                    text-sm
                    text-blue-400
                  "
                >
                  {leadProfessor.role}
                </span>
              </div>

              <p
                className="
                  mt-4
                  text-blue-400
                "
              >
                {leadProfessor.role}
              </p>

              <p
                className="
                  mt-6
                  max-w-4xl
                  text-lg
                  leading-relaxed
                  text-white/60
                "
              >
                {leadProfessor.description}
              </p>

              {/* LINKS */}
              <div className="mt-6 flex flex-wrap gap-3">

                <a
                  href={leadProfessor.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    px-4
                    py-2
                    text-sm
                    text-blue-300
                    transition
                    hover:border-blue-400
                  "
                >
                  LinkedIn
                </a>

                <a
                  href={leadProfessor.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-xl
                    border
                    border-purple-500/20
                    bg-purple-500/10
                    px-4
                    py-2
                    text-sm
                    text-purple-300
                    transition
                    hover:border-purple-400
                  "
                >
                  GitHub
                </a>

              </div>

              {/* PHILOSOPHY */}
              <div className="mt-8 space-y-3">

                {leadProfessor.philosophy.map((item) => (

                  <div
                    key={item}
                    className="
                      text-sm
                      text-zinc-400
                    "
                  >
                    — {item}
                  </div>

                ))}

              </div>

              {/* PROJECTS */}
              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {leadProfessor.projects.map((project) => (

                  <span
                    key={project}
                    className="
                      rounded-full
                      border
                      border-blue-500/20
                      bg-blue-500/10
                      px-4
                      py-2
                      text-sm
                      text-blue-400
                    "
                  >
                    {project}
                  </span>

                ))}

              </div>

            </div>
          </div>

        </motion.div>

        {/* TEAM GRID */}
        <div className="mt-24">

          <div
            className="
              mb-8
              text-xs
              uppercase
              tracking-[0.35em]
              text-white/40
            "
          >
            Estudiantes activos — {teamMembers.length} integrantes
          </div>

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-4
            "
          >

            {teamMembers.map((member) => (

              <MemberCard
                key={member.name}
                member={member}
              />

            ))}

          </div>

        </div>

        {/* STATS */}
        <div
          className="
            mt-20
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.02]
            p-8
            backdrop-blur-xl
          "
        >

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-10
              text-sm
            "
          >

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-blue-500" />

              <span className="text-white/60">
                Ingeniería en Computación
              </span>

              <span className="text-blue-400">
                10
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-purple-500" />

              <span className="text-white/60">
                Producción Industrial
              </span>

              <span className="text-purple-400">
                1
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-rose-500" />

              <span className="text-white/60">
                Docencia TEC
              </span>

              <span className="text-rose-400">
                1
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}