import Title from '@/components/ui/Title';
import { PROJECTS } from '@/utils/constants';
import ProjectCard from '@/components/projects/ProjectCard';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Title title="My projects" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
