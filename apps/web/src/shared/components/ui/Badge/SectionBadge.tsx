interface Props {
  children: React.ReactNode;
}

export function SectionBadge({ children }: Props) {
  return (
    <div
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-4
        py-2
        text-xs
        uppercase
        tracking-[0.25em]
        text-blue-400
        backdrop-blur-xl
      "
    >
       {children}
    </div>
  );
}