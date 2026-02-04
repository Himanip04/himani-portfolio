import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";


export default function PortfolioNeonDark() {
    const [dark, setDark] = useState(() => {
  try {
    const savedTheme = localStorage.getItem("hp_theme");
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  } catch {
    return true;
  }
});

    useEffect(() => {
        localStorage.setItem("hp_theme", JSON.stringify(dark));
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <div
            className={`min-h-screen py-12 px-6 transition-all duration-500 ${dark ? "bg-[#030014] text-[#eaeaff]" : "bg-[#faf4ec] text-slate-900"
                }`}
        >
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Left Sidebar */}
                <Sidebar dark={dark} setDark={setDark} />

                {/* Main Content */}
                <main
                    className={`col-span-2 rounded-3xl p-10 border ${dark
                        ? "bg-[#0a0120] border-[#3c1cff] shadow-[0_0_25px_#3c1cff]"
                        : "bg-white border-[#f2e8d9]"
                        }`}
                >
                    <Header dark={dark} />
                    <Stats dark={dark} />
                    <Experience dark={dark} />
                    <Projects dark={dark} />
                    <Education dark={dark} />
                    <Contact dark={dark} />
                </main>
            </div>
        </div>
    );
}
