import { ChevronRight, Github, Linkedin } from "lucide-react";
import { USER_DATA } from "../data/user";

const HeroCard: React.FC<{ onScrollTo: (id: string) => void }> = ({
  onScrollTo,
}) => (
  <section id="home" className="pt-40 pb-20 px-6 relative overflow-hidden">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full -z-10"></div>
    <div className="max-w-5xl mx-auto text-center">
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-mono text-emerald-500 bg-emerald-500/10 rounded-full border border-emerald-500/20 animate-fade-in">
        &gt; Initializing Portfolio... Welcome, I'm {USER_DATA.name}
      </div>
      <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-tight text-white">
        Full-Stack{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
          Developer
        </span>{" "}
        {/* in Laravel & Next.js */}
      </h1>
      <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        {USER_DATA.summary}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <button
          onClick={() => onScrollTo("projects")}
          className="w-full sm:w-auto px-10 py-4 bg-emerald-600 text-[#0a0a0a] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-900/10"
        >
          Explore My Work <ChevronRight size={18} />
        </button>
        <div className="flex gap-4">
          <a
            href="https://github.com/robisetiawan"
            target="_blank"
            className="p-4 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all backdrop-blur-sm"
          >
            <Github size={22} />
          </a>
          <a
            href="https://id.linkedin.com/in/robi-setiawan-b7b636261"
            target="_blank"
            className="p-4 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all backdrop-blur-sm"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroCard;
