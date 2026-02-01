import { Cpu, Database, ExternalLink, Server } from "lucide-react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import SkillCard from "./components/SkillCard";
import { USER_DATA } from "./data/user";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import HeroCard from "./components/HeroCard";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        onScrollTo={scrollTo}
      />

      <HeroCard onScrollTo={scrollTo} />

      <About />

      <section id="skills" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Technical Arsenal
          </h2>
          <p className="text-slate-500 font-mono">
            / Stack & technologies used to build scalable apps /
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <SkillCard skillGroup={USER_DATA.skills[0]} icon={Server} />
          <SkillCard skillGroup={USER_DATA.skills[1]} icon={Database} />
          <SkillCard skillGroup={USER_DATA.skills[2]} icon={Cpu} />
        </div>
      </section>

      <section
        id="projects"
        className="py-24 px-6 bg-[#0f0f0f] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Featured Projects
            </h2>
            <p className="text-slate-500 max-w-md">
              Highlighting end-to-end systems for academic and commercial
              institutions.
            </p>
          </div>
          <button className="text-emerald-500 font-bold text-sm flex items-center gap-2 hover:underline">
            View All Archives <ExternalLink size={14} />
          </button>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {USER_DATA.projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      <Contact />
      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;
