'use client';

interface Props {
  active: string;
  onChange: (value: string) => void;
}

const filters = [
  'Todos',
  'Lab',
  'Events',
  'Team',
  'Tecverse',
  'Culturexr',
  'Iotproject'
];

export function GalleryFilter({
  active,
  onChange
}: Props) {

  return (
    <div className="
      flex
      items-center
      justify-center
      gap-4
      flex-wrap
      mt-14
    ">

      {filters.map(filter => {

        const isActive = active === filter;

        return (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`
              px-6
              py-3
              rounded-full
              border
              transition-all
              duration-300

              ${isActive
                ? `
                  border-blue-500/40
                  bg-blue-500/10
                  text-blue-400
                `
                : `
                  border-white/10
                  text-white/50
                  hover:border-white/20
                  hover:text-white
                `
              }
            `}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}