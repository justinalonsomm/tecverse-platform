interface Props {
  items: string[];
}

export function TechStack({ items }: Props) {

  return (
    <div className="mt-20 text-center">

      <p className="
        mb-8
        text-xs
        uppercase
        tracking-[0.35em]
        text-white/40
      ">
        Herramientas y Tecnologías
      </p>

      <div className="
        flex
        flex-wrap
        justify-center
        gap-4
      ">
        {items.map((item) => (
          <div
            key={item}
            className="
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-3
              text-sm
              text-white/70
              backdrop-blur-xl
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}