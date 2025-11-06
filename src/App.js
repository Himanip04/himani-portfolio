import React, { useEffect, useState } from "react";

const PROFILE_PATH = "/profile.jpg"; // place uploaded photo at public/profile.jpg
const RESUME_PATH = "/HimaniPantResume.pdf"; // place resume PDF at public/HimaniPantResume.pdf

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("hp_theme");
      return saved ? JSON.parse(saved) : true; // default dark
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("hp_theme", JSON.stringify(dark));
    } catch { }

    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className={`min-h-screen ${dark ? "bg-slate-900 text-gray-100" : "bg-white text-gray-900"} flex items-start justify-center py-12 px-4`}>
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: Hero / Image */}
        <aside className={`${dark ? "bg-gradient-to-br from-slate-800 via-slate-900 to-black text-gray-100" : "bg-gray-50 text-gray-900"} col-span-1 rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center`}>
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-600 mb-4">
            <img
              src={PROFILE_PATH}
              alt="Himani Pant"
              className="w-full h-full object-cover"
              onError={(e) => {
                // fallback if image not found
                e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><rect width='100%' height='100%' fill='%23a3bffa'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='white'>HP</text></svg>";
              }}
            />
          </div>

          <h1 className="text-2xl font-semibold">Himani Pant</h1>
          <p className="text-indigo-500 mt-1">Full Stack Developer</p>

          <div className="mt-6 text-left w-full">
            <h3 className="text-sm uppercase tracking-wider">Contact</h3>
            <p className="mt-2 text-sm">Dehradun, India</p>
            <p className="text-sm">himanipant333@gmail.com</p>
            <p className="text-sm">+91-9193538464</p>

            <h3 className="text-sm uppercase tracking-wider mt-6">Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "React.js",
                "React Native",
                "Html",
                "css",
                "bootstrap",
                "JavaScript",
                "Java",
                "Spring Boot",
                "MongoDB",
                "PostgreSQL",
                "Git",
                "GitHub",
                "Postman",
                "VS Code",
                "IntelliJ IDEA",
                "unity 2d"
              ].map((s) => (
                <span key={s} className={`${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} text-xs px-3 py-1 rounded-full border`}>
                  {s}
                </span>
              ))}
            </div>

            <h3 className="text-sm uppercase tracking-wider mt-6">Languages</h3>
            <p className="mt-2 text-sm">English, Hindi</p>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=himanipant333@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium"
            >
              Email Me
            </a>


          </div>

          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="fixed top-6 right-6 w-14 h-7 flex items-center bg-gray-600 dark:bg-gray-300 rounded-full p-1 transition cursor-pointer"
          >
            <span
              className={`w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow transform transition-transform duration-300 ${dark ? 'translate-x-7' : 'translate-x-0'}`}
            />
          </button>

          <a
            href={RESUME_PATH}
            download
            className="fixed top-6 right-24 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium"
          >
            Resume
          </a>
        </aside>

        {/* RIGHT: Main content */}
        <main className={`${dark ? "bg-transparent" : "bg-white"} col-span-2 rounded-2xl p-8 shadow-inner`}>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold">Hello — I’m Himani</h2>
              <p className={`mt-2 max-w-2xl ${dark ? "text-gray-300" : "text-gray-600"}`}>
                Results-driven Full Stack Developer with 2+ years of experience building scalable web and mobile
                applications. I love solving problems, writing clean code, and learning new technologies.
              </p>
            </div>

            <div className="text-sm text-gray-400">
              <div>Experience</div>
              <div className="text-xl font-semibold text-indigo-500">2 Years</div>
            </div>
          </div>

          <section className="mt-8">
            <h3 className="text-xl font-semibold">Work Experience</h3>
            <div className="mt-4 space-y-3">
              <div className={`${dark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"} p-4 rounded-lg border`}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">Associate Developer — Evon Technologies</div>
                    <div className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>Jul 2023 — Aug 2025</div>
                  </div>
                  <div className="text-sm text-indigo-500">Full-time</div>
                </div>
                <ul className={`mt-3 list-disc list-inside ${dark ? "text-gray-300" : "text-gray-700"} text-sm`}>
                  <li>Developed features that increased product functionality by 20%.</li>
                  <li>Streamlined development process, reducing project time by 15%.</li>
                  <li>Improved code quality and reduced errors by 30% through thorough testing.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold">Projects</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <article className={`${dark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"} p-4 rounded-lg border`}>
                <h4 className="font-semibold">User Profile (Full Stack)</h4>
                <p className={`text-sm mt-1 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                  Full-featured job portal (similar to Naukri.com) with React Native frontend and Spring Boot (WebFlux)
                  backend. Implemented authentication, search & filters, profile management and notifications.
                </p>
                <div className={`mt-3 text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>Tech: React Native, Spring Boot (WebFlux), PostgreSQL, MongoDB</div>
              </article>

              <article className={`${dark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"} p-4 rounded-lg border`}>
                <h4 className="font-semibold">3D Demo App & Meeting Tool (Frontend)</h4>
                <p className={`text-sm mt-1 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                  Team collaboration tool supporting group and direct messaging, real-time interaction and meeting
                  features. Focused on UX for better team productivity.
                </p>
                <div className={`mt-3 text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>Tech: React, Socket / Realtime tools, Tailwind CSS</div>
              </article>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold">Education</h3>
            <div className={`mt-3 p-4 rounded-lg border ${dark ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-gray-50 border-gray-200 text-gray-700"}`}>
              <div className="font-medium">B.Tech — Computer Science</div>
              <div className="text-sm">Uttarakhand Technical University, Dehradun — 2023 (75%)</div>

              <div className="mt-3 font-medium">Diploma — Computer Science & Engineering (2017–2020)</div>
            </div>
          </section>

          <section className="mt-8" id="contact">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className={`mt-2 ${dark ? "text-gray-300" : "text-gray-700"}`}>If you'd like to collaborate or hire me, feel free to reach out:</p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg border ${dark ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-gray-50 border-gray-200 text-gray-700"}`}>
                <p className="text-sm">Email</p>
                <div className="font-medium">himanipant333@gmail.com</div>
              </div>

              <div className={`p-4 rounded-lg border ${dark ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-gray-50 border-gray-200 text-gray-700"}`}>
                <p className="text-sm">Phone</p>
                <div className="font-medium">+91-9193538464</div>
              </div>
            </div>

            <div className="mt-6">
              <a href="mailto:himanipant333@gmail.com" className={`inline-block px-6 py-2 rounded-full ${dark ? "bg-indigo-600 text-white" : "bg-indigo-600 text-white"} font-medium`}>
                Email Me
              </a>
            </div>
          </section>

          <footer className={`mt-8 text-sm ${dark ? "text-gray-500" : "text-gray-500"}`}>© {new Date().getFullYear()} Himani Pant — Built with ❤️</footer>
        </main>
      </div>
    </div>
  );
}
