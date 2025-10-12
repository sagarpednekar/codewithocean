import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-700/50 flex items-center justify-between px-4">
      <div className="flex items-center">
        <div className="px-4 py-2 text-slate-400 text-sm">find me in:</div>
        <a
          href="https://x.com/SagarPedne92711"
          className="px-4 py-2 border-l border-slate-700/50 hover:bg-slate-900/50 transition-colors"
        >
          <Twitter className="w-4 h-4 text-slate-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/sagarvpednekar"
          className="px-4 py-2 border-l border-slate-700/50 hover:bg-slate-900/50 transition-colors"
        >
          <Linkedin className="w-4 h-4 text-slate-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
