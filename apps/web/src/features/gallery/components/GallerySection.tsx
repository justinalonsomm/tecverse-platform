'use client';

import { useMemo, useState } from 'react';

import { galleryItems } from '../data/gallery.data';

import { GalleryCard } from './GalleryCard';
import { GalleryFilter } from './GalleryFilter';

export function GallerySection() {

  const [filter, setFilter] = useState('Todos');

  const filteredItems = useMemo(() => {

    if (filter === 'Todos') {
      return galleryItems;
    }

    return galleryItems.filter(item =>
      item.category.toLowerCase() === filter.toLowerCase()
    );

  }, [filter]);

  return (
    <section id="gallery" className="min-h-screen flex items-center justify-center px-6 py-16">

      <div className="max-w-7xl mx-auto">

        {/* BADGE */}
        <div className="flex justify-center">

          <div className="
            px-5
            py-2
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            text-blue-400
            text-sm
          ">
          </div>
        </div>

        {/* TITLE */}
        <h2 className="
          text-center
          text-7xl
          md:text-8xl
          font-black
          mt-10
        ">
          Momentos del laboratorio
        </h2>

        {/* DESCRIPTION */}
        <p className="
          max-w-4xl
          mx-auto
          text-center
          text-white/60
          text-2xl
          leading-relaxed
          mt-10
        ">
          Imágenes, videos y experiencias que documentan
          el trabajo, los logros y la cultura de TEC Innovation Labs.
        </p>

        {/* FILTER */}
        <GalleryFilter
          active={filter}
          onChange={setFilter}
        />

        {/* GRID */}
        <div className="
          gallery-masonry
          mt-20
          columns-1
          md:columns-2
          xl:columns-3
        ">

          {filteredItems.map(item => (
            <GalleryCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* FOOT */}
        <div className="text-center mt-20">

          <p className="text-white/40">
            Galería sincronizada desde Google Drive
          </p>

          <div className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            text-blue-400
            text-sm
            mt-6
          ">
            📁 Drive CMS • Actualización automática
          </div>
        </div>
      </div>
    </section>
  );
}