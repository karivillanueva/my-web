'use client';

import { useState } from 'react';
import Link from 'next/link';

import Subtitle from '../ui/Subtitle';

type ProjectType = {
  name: string;
  technologies: string[];
  description: string;
  challenges: string[];
  web: string;
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      className={`flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden p-5 w-full text-left text-black ${
        !expanded ? 'h-50' : ''
      }`}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <Subtitle subtitle={project.name} />
      <div className="flex flex-row gap-1 mb-3 mt-1">
        {project.technologies.map((tech) => (
          <span
            className="bg-gray-300 rounded-2xl p-0.5 pr-2 pl-2 text-xs"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>

      <span className="text-gray-700 line-clamp-4">{project.description}</span>

      {expanded && (
        <div className="mt-4 flex flex-col space-y-2">
          <div className="bg-gray-200 h-0.5 w-full" />
          {project?.web && (
            <Link
              href={project?.web}
              className="text-blue-500"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              See {project.name} webpage
            </Link>
          )}

          {project?.challenges && (
            <ul className="list-disc text-gray-700">
              <p className="font-semibold mb-2">Some Challenges:</p>
              {project.challenges.map((challenge) => (
                <li className="ml-6" key={challenge}>
                  {challenge}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </button>
  );
};

export default ProjectCard;
