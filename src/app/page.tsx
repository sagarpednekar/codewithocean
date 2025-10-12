"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

export default function Page() {
  const [activeTab, setActiveTab] = useState("hello");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-mono">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex" style={{ height: "calc(100vh - 120px)" }}>
        {activeTab === "hello" && <Home />}
        {activeTab === "about" && <About />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "contact" && <Contact />}
      </main>

      <Footer />
    </div>
  );
}
