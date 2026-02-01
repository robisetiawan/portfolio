import { Award } from "lucide-react";
import { USER_DATA } from "../data/user";

const About: React.FC = () => (
  <section
    id="about"
    className="py-24 px-6 bg-[#0f0f0f] border-y border-white/5"
  >
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
      <div>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
          <span className="text-emerald-500 font-mono text-xl">01.</span> About
          Me
        </h2>
        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
          Based in {USER_DATA.location}, I specialize in building end-to-end
          systems, API integration, and database-driven applications. My
          professional workflow is heavily inspired by Agile Methods.
        </p>
        <div className="space-y-6">
          {USER_DATA.experience.map((exp, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-emerald-500 font-bold text-sm mb-1">
                {exp.period}
              </h4>
              <h3 className="text-white font-bold text-lg">{exp.role}</h3>
              <p className="text-slate-400 text-sm mt-1">{exp.company}</p>
              <p className="text-slate-500 text-sm mt-3">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-emerald-500/5 p-8 rounded-3xl border border-emerald-500/10">
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
            <Award className="text-emerald-500" /> Certifications
          </h3>
          <ul className="space-y-4">
            {USER_DATA.certifications.map((cert, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-slate-400"
              >
                <span className="text-emerald-500 mt-1">▹</span> {cert}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
            <p className="text-3xl font-bold text-white italic">3.60</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
              GPA Score
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
            <p className="text-3xl font-bold text-emerald-500">10+</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
              Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
