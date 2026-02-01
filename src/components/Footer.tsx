import { Mail, Linkedin, Github, Terminal } from "lucide-react";
import { USER_DATA } from "../data/user";

const Footer: React.FC = () => (
  <footer className="py-12 px-6 bg-[#0a0a0a] border-t border-white/5">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="text-xl font-bold text-white flex items-center gap-2">
          <Terminal size={20} className="text-emerald-500" /> ROBI.S
        </div>
        <p className="text-slate-500 text-xs">
          Built with precision in Palembang, ID.
        </p>
      </div>
      <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.2em]">
        © {new Date().getFullYear()} {USER_DATA.name} • Full-Stack Developer
      </p>
      <div className="flex gap-6">
        <a
          href="https://github.com/robisetiawan"
          className="text-slate-500 hover:text-emerald-500 transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="#"
          className="text-slate-500 hover:text-emerald-500 transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="#"
          className="text-slate-500 hover:text-emerald-500 transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
