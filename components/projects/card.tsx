import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.link} className="block group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
        {/* Icon Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 flex items-center justify-center">
          <div className="text-7xl">{project.icon}</div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{project.period}</p>
          <p className="text-gray-700 mb-4 line-clamp-2">{project.description}</p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
