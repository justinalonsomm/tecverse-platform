'use client';

import { motion } from 'framer-motion';

interface Props {
  member: {
    initials: string;
    name: string;
    career: string;
    accent: string;
    project: string;
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export function MemberCard({ member }: Props) {

  const accentMap = {
    blue: `
      from-blue-500/20
      border-blue-500/20
      text-blue-400
    `,

    purple: `
      from-purple-500/20
      border-purple-500/20
      text-purple-400
    `,

    rose: `
      from-rose-500/20
      border-rose-500/20
      text-rose-400
    `,

    green: `
      from-emerald-500/20
      border-emerald-500/20
      text-emerald-400
    `,
  };

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}

      transition={{
        duration: 0.25,
      }}

      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.02]
        p-8
        backdrop-blur-xl
      "
    >

      {/* glow */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          ${accentMap[member.accent as keyof typeof accentMap]}
        `}
      />

      {/* content */}
      <div className="relative z-10">

        {/* avatar */}
        <div
          className={`
            mb-6
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            border
            bg-gradient-to-br
            text-3xl
            font-black
            ${accentMap[member.accent as keyof typeof accentMap]}
          `}
        >
          {member.initials}
        </div>

        {/* name */}
        <h3
          className="
            text-2xl
            font-black
            text-white
          "
        >
          {member.name}
        </h3>

        {/* career */}
        <p
          className={`
            mt-2
            text-sm
            font-medium
            ${accentMap[member.accent as keyof typeof accentMap]}
          `}
        >
          {member.career}
        </p>

        {/* project */}
        <div
          className="
            mt-4
            inline-flex
            rounded-lg
            border
            border-white/10
            bg-white/[0.03]
            px-3
            py-1
            text-xs
            text-zinc-400
          "
        >
          {member.project}
        </div>

        {/* links */}
        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2
          "
        >

          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-lg
                border
                border-white/10
                bg-white/5
                px-3
                py-1
                text-xs
                text-white/70
                transition
                hover:border-white/20
                hover:text-white
              "
            >
              GitHub
            </a>
          )}

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-lg
                border
                border-blue-500/20
                bg-blue-500/10
                px-3
                py-1
                text-xs
                text-blue-300
                transition
                hover:border-blue-400
              "
            >
              LinkedIn
            </a>
          )}

          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="
                rounded-lg
                border
                border-purple-500/20
                bg-purple-500/10
                px-3
                py-1
                text-xs
                text-purple-300
                transition
                hover:border-purple-400
              "
            >
              Contacto
            </a>
          )}

        </div>

      </div>
    </motion.div>
  );
}