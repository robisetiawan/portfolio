import type { SkillGroup } from "../types/portfolio";

interface SkillCardProps {
  skillGroup: SkillGroup;
  icon: React.ElementType;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillGroup, icon: Icon }) => (
  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.02] transition-all group">
    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4 text-white">{skillGroup?.name}</h3>
    <div className="flex flex-wrap gap-2">
      {skillGroup?.items.map((skill, sIdx) => (
        <span
          key={sIdx}
          className="px-3 py-1 bg-white/5 text-slate-400 text-xs font-mono rounded-md border border-white/10 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;
