'use client';

import { motion } from 'framer-motion';

import { GalleryItem } from '../types/gallery.types';

interface Props {
  item: GalleryItem;
}

export function GalleryCard({ item }: Props) {
  const accentMap = {
    blue: 'from-blue-500/20 to-transparent border-blue-500/10',
    purple: 'from-purple-500/20 to-transparent border-purple-500/10',
    green: 'from-emerald-500/20 to-transparent border-emerald-500/10',
    rose: 'from-rose-500/20 to-transparent border-rose-500/10',
    amber: 'from-amber-500/20 to-transparent border-amber-500/10',
  };

  const heightMap = {
    small: 'h-[220px]',
    medium: 'h-[280px]',
    large: 'h-[420px]',
  };

  const iconMap = {
    lab: '💻',
    events: '🏆',
    team: '👥',
    tecverse: '🎬',
    culturexr: '🎬',
    iotproject: '⚡',
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className={`
        relative
        w-full
        overflow-hidden
        rounded-[28px]
        border
        bg-gradient-to-br
        ${accentMap[item.accent]}
        ${heightMap[item.size]}
        bg-white/[0.02]
        backdrop-blur-xl
        group
        mb-6
        break-inside-avoid
      `}
    >
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-br
          from-white/[0.03]
          to-transparent
        "
      />

      {item.type === 'video' && (
        <div
          className="
            absolute
            top-4
            right-4
            z-20
            rounded-lg
            bg-rose-500
            px-3
            py-1
            text-[10px]
            font-bold
            tracking-wider
            text-white
          "
        >
          VIDEO
        </div>
      )}

      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <div
          className="
            text-5xl
            transition-transform
            duration-500
            group-hover:scale-110
          "
        >
          {iconMap[item.category]}
        </div>

        <p
          className="
            mt-6
            text-sm
            lowercase
            tracking-widest
            text-white/60
          "
        >
          {item.title}
        </p>
      </div>
    </motion.div>
  );
}