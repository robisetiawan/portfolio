import { Globe, Mail } from "lucide-react";
import { USER_DATA } from "../data/user";

const Contact: React.FC = () => (
  <section
    id="contact"
    className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-white leading-tight">
        Get In Touch
      </h2>
      <p className="text-slate-400 mb-12 text-lg">
        I'm currently open for new opportunities. Whether you have a question or
        just want to say hi, feel free to reach out!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
        <div className="flex flex-col items-center">
          <Mail className="text-emerald-500 mb-4" size={32} />
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">
            Email
          </p>
          <a
            href={`mailto:${USER_DATA.email}`}
            className="text-xl text-white hover:text-emerald-400 transition-colors font-medium"
          >
            {USER_DATA.email}
          </a>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="text-emerald-500 mb-4" size={32} />
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">
            Location
          </p>
          <p className="text-xl text-white font-medium">{USER_DATA.location}</p>
        </div>
      </div>
      <button
        onClick={() => (window.location.href = `mailto:${USER_DATA.email}`)}
        className="px-12 py-5 bg-transparent border-2 border-emerald-600 text-emerald-500 hover:bg-emerald-600/10 rounded-xl font-black text-lg transition-all"
      >
        Say Hello
      </button>
    </div>
  </section>
);

export default Contact;
