'use client';

import { motion } from 'framer-motion';
import { Project } from '../types/project.types';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {

  const accentMap = {
    blue: {
      border: 'border-blue-500/40',
      glow: 'shadow-[0_0_40px_rgba(59,130,246,.15)]',
      text: 'text-blue-400',
      badge: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    },

    purple: {
      border: 'border-purple-500/40',
      glow: 'shadow-[0_0_40px_rgba(168,85,247,.15)]',
      text: 'text-purple-400',
      badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    },

    green: {
      border: 'border-emerald-500/40',
      glow: 'shadow-[0_0_40px_rgba(16,185,129,.15)]',
      text: 'text-emerald-400',
      badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    }
  };

  const accent = accentMap[project.accent];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`
        rounded-3xl
        border
        bg-white/[0.02]
        backdrop-blur-xl
        p-8
        ${accent.border}
        ${accent.glow}
      `}
    >

      {/* TOP */}
      <div className="flex items-start justify-between">

        <div>

          <div className={`
            w-14
            h-14
            rounded-2xl
            border
            flex
            items-center
            justify-center
            mb-6
            ${accent.badge}
          `}>
            ◈
          </div>

          <h3 className="text-4xl font-black">
            {project.name}
          </h3>

          <p className="text-white/40 mt-2">
            {project.category}
          </p>
        </div>

        <div className={`
          px-4
          py-2
          rounded-full
          border
          text-sm
          font-semibold
          ${accent.badge}
        `}>
          {project.status}
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-10 text-white/60 text-lg leading-relaxed">
        {project.description}
      </p>

      {/* DIVIDER */}
      <div className="h-px bg-white/5 my-10" />

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6">

        <div>
          <h4 className={`text-4xl font-black ${accent.text}`}>
            {project.years}
          </h4>

          <p className="text-white/30 mt-2 text-sm">
            Años
          </p>
        </div>

        <div>
          <h4 className={`text-4xl font-black ${accent.text}`}>
            {project.hours}
          </h4>

          <p className="text-white/30 mt-2 text-sm">
            h/semana
          </p>
        </div>

        <div>
          <h4 className={`text-4xl font-black ${accent.text}`}>
            {project.team}
          </h4>

          <p className="text-white/30 mt-2 text-sm">
            Equipo
          </p>
        </div>
      </div>

      {/* TECH */}
      <div className="flex flex-wrap gap-3 mt-10">

        {project.technologies.map((tech) => (
          <div
            key={tech}
            className="
              px-4
              py-2
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              text-sm
              text-white/60
            "
          >
            {tech}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-end mt-10">
        <button className="text-white/40 hover:text-white transition">
          Ver proyecto ↗
        </button>
      </div>
    </motion.div>
  );
}