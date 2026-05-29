'use client';

import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  accent: string;
}

export function InfoCard({
  title,
  description,
  accent,
}: Props) {

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
  };

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}

      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >

      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          ${accentMap[accent as keyof typeof accentMap]}
        `}
      />

      <div className="relative z-10">

        <div
          className={`
            mb-6
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            bg-gradient-to-br
            text-lg
            font-black
            ${accentMap[accent as keyof typeof accentMap]}
          `}
        >
          ◈
        </div>

        <h3 className="
          text-3xl
          font-black
          text-white
        ">
          {title}
        </h3>

        <p className="
          mt-6
          leading-relaxed
          text-white/65
        ">
          {description}
        </p>
      </div>
    </motion.div>
  );
}