import { Terminal } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
  onScrollTo: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrolled,
  activeSection,
  onScrollTo,
}) => (
  <nav
    className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}
  >
    <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
      <div
        className="text-2xl font-bold tracking-tighter text-emerald-500 cursor-pointer flex items-center gap-2"
        onClick={() => onScrollTo("home")}
      >
        <Terminal size={24} />
        <span>R .</span>
      </div>
      <div className="hidden md:flex space-x-8">
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => onScrollTo(item)}
            className={`capitalize text-sm cursor-pointer font-medium transition-colors hover:text-emerald-400 ${activeSection === item ? "text-emerald-500" : "text-slate-500"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        onClick={() => onScrollTo("contact")}
        className="px-5 py-2 bg-emerald-600 cursor-pointer text-[#0a0a0a] rounded-full text-sm font-bold hover:bg-emerald-500 transition-all transform hover:scale-105"
      >
        Hire Me
      </button>
    </div>
  </nav>
);

export default Navbar;
