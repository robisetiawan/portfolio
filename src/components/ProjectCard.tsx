import { Code2, ExternalLink, Github } from "lucide-react";
import type { Project } from "../types/portfolio";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group flex flex-col h-full bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all hover:-translate-y-2">
    <div className="aspect-video bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center border-b border-white/5">
      <div className="text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors">
        <Code2 size={64} />
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex flex-wrap gap-3 mb-4">
        {project.tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="text-[9px] uppercase tracking-widest font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>
      <div className="flex gap-4">
        <a
          href={project.link}
          className="text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href={project.link}
          className="text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
