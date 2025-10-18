"use client";
import { Github } from "lucide-react";
import { useRouter } from "next/navigation";

type HeaderProps = {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
};

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const router = useRouter();
  const tabs = [
    { id: "about", label: "_about-me" },
    { id: "projects", label: "_projects" },
    { id: "contact", label: "_contact-me" },
  ];

  return (
    <header className="border-b border-slate-700/50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="px-6 py-4 border-r border-slate-700/50">
          <span
            className="text-slate-400"
            onClick={() => {
              router.push("/");
            }}
          >
            sagar-pednekar
          </span>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex flex-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                router.push(`/${tab.id}`);
              }}
              className={`px-6 py-4 border-r border-slate-700/50 hover:bg-slate-900/50 transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-orange-400 text-white"
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* GitHub Link */}
        <div className="px-6 py-4 border-l border-slate-700/50 text-slate-400">
          <a
            href="https://github.com/sagarpednekar"
            className="border-l border-slate-700/50 hover:bg-slate-900/50 transition-colors flex items-center gap-2 text-slate-400"
          >
            @sagarpednekar <Github className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
