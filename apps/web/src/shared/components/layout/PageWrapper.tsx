import { ReactNode } from 'react';
import { GridBackground } from '../ui/Card/GridBackground';

interface Props {
  children: ReactNode;
}

export function PageWrapper({ children }: Props) {
  return (
    <main className="relative min-h-screen bg-[#030712] text-white overflow-hidden">
      <GridBackground />

      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}