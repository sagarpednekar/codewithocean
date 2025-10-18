import Link from "next/link";

export type Project = {
  id: number;
  title: string;
  tech: string[];
  image: string;
  description: string;
  url: string;
};

type ProjectCardProps = {
  project: Project;
};
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-slate-900/30 rounded-lg overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-colors">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {project.tech.includes("react") && (
            <span className="bg-slate-900/80 px-2 py-1 rounded text-xs">⚛️</span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-purple-400 mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4">{project.description}</p>
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded text-sm transition-colors"
        >
          view-project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
