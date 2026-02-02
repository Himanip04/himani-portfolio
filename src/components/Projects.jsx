export default function Projects({ dark }) {
  const data = [
    {
      title: "User Profile & Job Portal Application",
      desc:
        "Developed a full-stack job portal inspired by real-world recruitment platforms. Implemented authentication, job search with filters, user profile management, and notifications using a clean and scalable architecture.",
      tech: "React Native · Spring Boot · PostgreSQL · MongoDB",
    },
    {
      title: "3D Demo App & Collaboration Tool",
      desc:
        "Built a web-based collaboration tool with group and direct chat features, interactive UI components, and productivity-focused design for improved communication and teamwork.",
      tech: "React · Tailwind CSS · HTML",
    },
    {
      title: "Task Management Web Application",
      desc:
        "Developed a role-based task management application as part of a frontend-focused case study. Implemented authentication, light/dark theme support, responsive dashboard with pagination, and task create/edit functionality with admin-based access control.",
      tech: "React · Material UI / Shadcn · Axios · Node.js · MongoDB",
      live: "https://your-live-link.com",      // 👈 yahan apna live link
      github: "https://github.com/your-username/task-manager", // 👈 yahan repo link
    },
  ];

  return (
    <section className="mt-10">
      <h3
        className={`text-xl font-bold ${
          dark ? "text-white" : "text-[#6e4f2a]"
        }`}
      >
        Projects
      </h3>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((p) => (
          <div
            key={p.title}
            className={`p-5 rounded-xl ${
              dark
                ? "bg-[#14012b] border border-[#3c1cff]"
                : "bg-[#fff7ec]"
            }`}
          >
            <h4
              className={`${
                dark ? "text-[#b599ff]" : "text-[#a67845]"
              } font-semibold`}
            >
              {p.title}
            </h4>

            <p className="text-sm mt-2">{p.desc}</p>

            <p
              className={`mt-2 text-xs ${
                dark ? "text-[#cbb9ff]" : "text-[#9c8468]"
              }`}
            >
              {p.tech}
            </p>

            {(p.live || p.github) && (
              <div className="mt-3 flex gap-4 text-sm">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:opacity-80"
                  >
                    Live Demo
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:opacity-80"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

