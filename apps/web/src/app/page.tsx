import { HeroSection } from '@/features/home/components/HeroSection';

import { ProjectsSection } from '@/features/projects/components/ProjectsSection';

import { GallerySection } from '@/features/gallery/components/GallerySection';
import { AboutSection } from '@/features/about/components/AboutSection';
import { Navbar } from '@/shared/components/layout/Navbar';
import { PageWrapper } from '@/shared/components/layout/PageWrapper';
import { TeamSection } from '@/features/team/components/TeamSection';
import { ContactSection } from '@/features/contact/components/ContactSection';
import { Footer } from '@/shared/components/layout/Footer';
export default function HomePage() {
  return (
    <PageWrapper>

      <Navbar />

      <HeroSection />

      <ProjectsSection />

      <GallerySection />

      <TeamSection />

      <AboutSection />

      <ContactSection />

      <Footer />

    </PageWrapper>
  );
}