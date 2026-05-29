import { projects } from '../data/projects.data';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-16">

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
          Innovación en acción
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
          Tres proyectos tecnológicos desarrollados por estudiantes del TEC
          Sede Santa Clara, construyendo soluciones reales para el campus.
        </p>

        {/* GRID */}
        <div className="
          grid
          md:grid-cols-2
          gap-8
          mt-24
        ">

          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}