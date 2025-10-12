import { useState } from "react";
import { ChevronRight, ChevronDown, ExternalLink } from "lucide-react";

type SidebarState = {
  [key: string]: boolean;
};

const About = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState<SidebarState>({
    "personal-info": true,
    bio: true,
    interests: false,
    education: false,
    contacts: false,
  });

  const [activeSection, setActiveSection] =
    useState<keyof typeof aboutContent>("bio");

  const toggleSidebar = (key: keyof SidebarState) => {
    setSidebarExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
    if (key === "bio" || key === "interests" || key === "education") {
      setActiveSection(key);
    }
  };

  const codeSnippets = [
    {
      id: 1,
      username: "@username",
      createdAt: "5 months ago",
      stars: 3,
      code: `function initializeModel(
  chunk: ResolvedModelChunk
): T {
  const value: T = parseModel(
    chunk._response, 
    chunk._value
  );
  const initializedChunk = chunk;
  initializedChunk._status = 
    INITIALIZED;
  initializedChunk._value = value;
  return value;
}`,
    },
    {
      id: 2,
      username: "@username",
      createdAt: "9 months ago",
      stars: 0,
      code: `export function parseModelTuple(
  response: Response,
  value: {[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
  
  return [
    parseModelString(response, tuple[0]),
    parseModelString(response, tuple[1]),
    parseModelString(response, tuple[2]),
    parseModelString(response, tuple[3])
  ];
}`,
    },
  ];

  const aboutContent = {
    // ...existing code...
    bio: `/**
         * About Me
         *
         * Hi, I’m Sagar Pednekar 👋
         * Senior Full Stack Engineer
         *
         * Outside of code, I’m fascinated by how technology shapes human experiences:
         *   - AI-driven interfaces
         *   - Data-driven storytelling
         *
         * I enjoy:
         *   - Contributing to open-source projects
         *   - Exploring emerging JavaScript frameworks
         *   - Experimenting with serverless architecture on AWS
         *
         * When I’m away from the keyboard, you’ll usually find me:
         *   - Near the ocean 🌊
         *   - Sketching UI ideas on my iPad
         *   - Reading about behavioral design and product psychology
         *
         * I also love:
         *   - Hiking
         *   - Music
         *   - Discovering quiet cafés — the perfect combo for fresh ideas and clean code.
         */`,
    interests: `/**
        * My Interests:
        *   - Sketching UI ideas and exploring digital product design
        *   - Writing or reading about tech ethics, user psychology, and UX strategy
        *   - Experimenting with data visualization and creative coding
        *   - Listening to lo-fi beats while coding ☕🎧
        *   - Capturing coastal photography — inspired by ocean calm & motion
        *   - Hiking, cycling, and spending weekends outdoors
        *   - Discovering new cafés and local coffee culture ☕
 */`,
    education: `/**
         * Education
         *
         * Bachelor of Technology (Computer Science)
         * K J Somaiya College of Engineering, India — 2015 – 2018
         *
         * Graduated with first-class honors
         * Focused on software engineering, data structures, and system design
         * 
         * Relevant Coursework:
         *   - Data Structures & Algorithms
         *   - Web Development
         *   - Database Management Systems
         *   - Software Engineering
         *   - Computer Networks
         */`,
  };
  return (
    <>
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-700/50 overflow-y-auto">
        <div className="p-4">
          {/* Personal Info Section */}
          <button
            onClick={() => toggleSidebar("personal-info")}
            className="flex items-center gap-2 text-white mb-2 w-full hover:bg-slate-800/50 p-2 rounded"
          >
            {sidebarExpanded["personal-info"] ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            📁 personal-info
          </button>

          {sidebarExpanded["personal-info"] && (
            <div className="ml-6 space-y-2">
              <button
                onClick={() => toggleSidebar("bio")}
                className={`flex items-center gap-2 w-full hover:text-white p-1 rounded ${
                  activeSection === "bio"
                    ? "text-white bg-slate-800/50"
                    : "text-slate-300"
                }`}
              >
                {sidebarExpanded["bio"] ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
                📕 bio
              </button>

              <button
                onClick={() => toggleSidebar("interests")}
                className={`flex items-center gap-2 w-full hover:text-white p-1 rounded ${
                  activeSection === "interests"
                    ? "text-white bg-slate-800/50"
                    : "text-slate-300"
                }`}
              >
                {sidebarExpanded["interests"] ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
                📗 interests
              </button>

              <button
                onClick={() => toggleSidebar("education")}
                className={`flex items-center gap-2 w-full hover:text-white p-1 rounded ${
                  activeSection === "education"
                    ? "text-white bg-slate-800/50"
                    : "text-slate-300"
                }`}
              >
                {sidebarExpanded["education"] ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
                📘 education
              </button>
            </div>
          )}

          {/* Contacts Section */}
          <button
            onClick={() => toggleSidebar("contacts")}
            className="flex items-center gap-2 mt-4 text-white hover:bg-slate-800/50 p-2 rounded w-full"
          >
            {sidebarExpanded["contacts"] ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            📁 contacts
          </button>

          {sidebarExpanded["contacts"] && (
            <div className="ml-6 mt-2 space-y-2">
              <div className="text-slate-300 text-sm">📧 user@mail.com</div>
              <div className="text-slate-300 text-sm">📱 +3598246359</div>
            </div>
          )}
        </div>

        {/* Find Me Also In */}
        {/* <div className="border-t border-slate-700/50 p-4 space-y-2">
                    <div className="text-slate-400 text-sm">find-me-also-in</div>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-slate-300 hover:text-white text-sm"
                    >
                        <ExternalLink className="w-4 h-4" /> YouTube
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-slate-300 hover:text-white text-sm"
                    >
                        <ExternalLink className="w-4 h-4" /> dev.to
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-slate-300 hover:text-white text-sm"
                    >
                        <ExternalLink className="w-4 h-4" /> Instagram
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-slate-300 hover:text-white text-sm"
                    >
                        <ExternalLink className="w-4 h-4" /> Twitch
                    </a>
                </div> */}
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="mb-4 text-slate-500">
          <span className="text-slate-400">{activeSection}</span>
        </div>
        <pre className="text-slate-400 leading-relaxed font-mono whitespace-pre-wrap">
          {aboutContent[activeSection]}
        </pre>
      </div>

      {/* Code Snippets Sidebar */}
      {/* <div className="w-96 border-l border-slate-700/50 p-6 space-y-6 overflow-y-auto">
                <div className="text-slate-400 text-sm">// Code snippet showcase:</div>

                {codeSnippets.map((snippet) => (
                    <div
                        key={snippet.id}
                        className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-500" />
                                <div>
                                    <div className="text-white text-sm">{snippet.username}</div>
                                    <div className="text-slate-500 text-xs">
                                        Created {snippet.createdAt}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400 text-xs">
                                <button className="hover:text-white transition-colors">
                                    details
                                </button>
                                <div className="flex items-center gap-1">
                                    <span>⭐</span>
                                    <span>{snippet.stars} stars</span>
                                </div>
                            </div>
                        </div>
                        <pre className="text-xs text-slate-300 bg-slate-900 p-3 rounded overflow-x-auto">
                            {snippet.code}
                        </pre>
                    </div>
                ))}
            </div> */}
    </>
  );
};

export default About;
