import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import {
  SiAwslambda,
  SiCss3,
  SiGooglegemini,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiVuedotjs,
} from "react-icons/si";

type TechStack =
  | "react"
  | "css"
  | "vue"
  | "nodeJs"
  | "aws"
  | "nextjs"
  | "gemini";

interface FilterState {
  [key: string]: boolean;
}

interface Project {
  id: number;
  title: string;
  tech: TechStack[];
  image: string;
  description: string;
  url: string;
}

const FILTER_OPTIONS = [
  { id: "react", label: "React", icon: <SiReact /> },
  { id: "css", label: "CSS", icon: <SiCss3 /> },
  { id: "vue", label: "Vue", icon: <SiVuedotjs /> },
  { id: "nodeJs", label: "Node.js", icon: <SiNodedotjs /> },
  { id: "aws", label: "AWS", icon: <SiAwslambda /> },
  { id: "nextjs", label: "Next.js", icon: <SiNextdotjs /> },
  { id: "gemini", label: "Gemini", icon: <SiGooglegemini /> },
] as const;

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Live Transcript App",
    tech: ["react", "nodeJs", "aws"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    url: "https://github.com/sagarpednekar/live-transcript-app",
  },
  {
    id: 2,
    title: "Json Doctor",
    tech: ["nextjs", "gemini", "react"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    description:
      "About Turn broken JSON into clean, valid, and structured data — powered by AI.",
    url: "https://github.com/sagarpednekar/json-doctor",
  },
  {
    id: 3,
    title: "Pitch Perfect AI",
    tech: ["nextjs", "react"],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    description: "An AI-powered tool for preparing for mock interviews",
    url: "https://github.com/sagarpednekar/pitch-perfect-ai",
  },
];

interface FilterCheckboxProps {
  id: TechStack;
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (id: TechStack) => void;
}

const FilterCheckbox = ({
  id,
  label,
  icon,
  checked,
  onChange,
}: FilterCheckboxProps) => (
  <label
    className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"
    htmlFor={id}
  >
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={() => onChange(id)}
      className="form-checkbox"
      aria-label={`Filter by ${label}`}
    />
    <div className="flex gap-2 items-center justify-center">
      <span>{icon}</span> <span className="font-medium">{label}</span>
    </div>
  </label>
);

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState<FilterState>(
    () =>
      Object.fromEntries(
        FILTER_OPTIONS.map(({ id }) => [id, true]),
      ) as FilterState,
  );

  const toggleFilter = (filter: TechStack) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const filteredProjects = PROJECTS.filter((project) =>
    project.tech.some((tech) => selectedFilters[tech]),
  );

  return (
    <div className="flex h-full">
      <aside
        className="w-64 border-r border-slate-700/50 p-4"
        aria-label="Project filters"
      >
        <h2 className="text-lg font-semibold mb-4">Projects</h2>
        <div className="ml-6 space-y-3">
          {FILTER_OPTIONS.map(({ id, label, icon }) => (
            <FilterCheckbox
              key={id}
              id={id}
              label={label}
              icon={icon}
              checked={selectedFilters[id]}
              onChange={toggleFilter}
            />
          ))}
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
