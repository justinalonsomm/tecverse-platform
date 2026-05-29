interface Props {
  icon: string;
  title: string;
  value: string;
}

export function ContactInfoCard({
  icon,
  title,
  value,
}: Props) {

  return (
    <div
      className="
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
      "
    >
      <div className="flex items-start gap-4">

        <div className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          text-xl
        ">
          {icon}
        </div>

        <div>
          <p className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-white/40
          ">
            {title}
          </p>

          <p className="
            mt-2
            text-lg
            text-white/80
          ">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}