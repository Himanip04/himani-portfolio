import React from 'react';
import { motion } from 'framer-motion';

import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaDatabase
} from 'react-icons/fa6';

const projects = [
  {
    title: "User Profile & Job Portal Application",
    desc:
      "Developed a full-stack job portal inspired by real-world recruitment platforms.",
    features: [
      "User authentication & profile management",
      "Advanced job search with filters",
      "Notification system",
      "Clean & scalable architecture"
    ],
    tech: "React Native · Spring Boot · PostgreSQL · MongoDB"
  },

  {
    title: "3D Demo App & Collaboration Tool",
    desc:
      "Built a web-based collaboration tool with interactive UI and chat features.",
    features: [
      "Group & direct chat functionality",
      "Interactive UI components",
      "Productivity-focused design"
    ],
    tech: "React · Tailwind CSS · HTML"
  },

  {
    title: "Task Management Web Application",
    desc:
      "Developed a role-based task management system with admin access control.",
    features: [
      "Authentication & role-based access",
      "Responsive dashboard with pagination",
      "Task create/edit functionality",
      "Light/Dark theme support"
    ],
    tech: "React · MUI · Axios · Node.js · MongoDB",
    live: "https://task-manager-uodate.netlify.app/",
    github: "https://github.com/Himanip04/task-manager-frontend.git",
    backend: "https://github.com/Himanip04/task-manager-backend.git"
  },

  {
    title: "Job Listing Portal",
    desc:
      "Developed a modern job listing platform with advanced filtering & large dataset handling.",
    features: [
      "Search, filter & sort",
      "Pagination & infinite scroll",
      "CSV & PDF export",
      "Dark mode with localStorage"
    ],
    tech: "Next.js · TypeScript · Tailwind · shadcn/ui",
    live: "https://job-potall.netlify.app/",
    github: "https://github.com/Himanip04/job-portal-repo"
  },
{
  title: "Dynamic Multi-Category Catalog",
  desc:
    "Developed a responsive product catalog application with dynamic category-wise rendering and product detail pages using JSON data.",
  features: [
    "Category-wise product listing",
    "Dynamic product detail pages",
    "Search functionality",
    "Responsive design for mobile & desktop",
    "Dynamic rendering using itemprops array",
    "Static site deployment with Netlify"
  ],
  tech: "Next.js · JavaScript · CSS · JSON · Git · Netlify",
  live: "https://catalogt.netlify.app/",
  github: "https://github.com/Himanip04/catalog-app"
},
  {
    title: "Dynamic Multi-Category Catalog",
    desc:
      "Created a dynamic catalog app in Next.js that renders products by category and supports item detail pages.",
    features: [
      "Category-based dynamic product listing",
      "Dynamic routing for product details",
      "Search functionality",
      "Responsive styling for improved UX"
    ],
    tech: "Next.js · JavaScript · CSS · JSON Data Handling · Git · Netlify",
    live: "https://catalogt.netlify.app/",
    github: "https://github.com/Himanip04/catalog-app.git"
  },

  {
    title: "Dynamic Form Builder & Submissions System",
    desc:
      "Built a dynamic form system based on backend-driven schemas.",
    features: [
      "Dynamic field rendering",
      "Validation rules",
      "Submission system",
      "Server-side pagination"
    ],
    tech: "React · TanStack · Tailwind · Spring Boot",
    github: "https://github.com/Himanip04/dynamic-form-app.git",
    backend: "https://github.com/Himanip04/javaBackend.git"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full py-16 md:py-20 bg-[#020817] overflow-hidden"
    >

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-blue-400 uppercase tracking-[3px] text-xs mb-2">
            FEATURED WORK
          </p>

          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Selected Projects
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Real-world frontend and full-stack applications focused on
            performance, scalability, and modern user experiences.
          </p>

        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 transition-all duration-500 hover:border-blue-500/40"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/[0.03] to-transparent pointer-events-none" />

              {/* NUMBER */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-white/[0.05]">
                0{index + 1}
              </div>

              {/* ICON */}
              <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-white/10 flex items-center justify-center text-2xl text-blue-400 mb-6 shadow-[0_0_20px_rgba(37,99,235,0.2)]">

                <FaDatabase />

              </div>

              {/* TITLE */}
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4 leading-snug group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-6">
                {project.desc}
              </p>

              {/* FEATURES */}
              <div className="space-y-3 mb-6">

                {project.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-start gap-3"
                  >

                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />

                    <p className="text-slate-300 text-sm leading-tight">
                      {feature}
                    </p>

                  </div>

                ))}

              </div>

              {/* TECH */}
              <div className="mb-6">

                <div className="inline-block px-3 py-2 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-xs md:text-sm">
                  {project.tech}
                </div>

              </div>

              {/* LINKS */}
              {(project.live || project.github || project.backend) && (

                <div className="flex flex-wrap gap-4">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.35)] text-sm"
                    >
                      Live Demo

                      <FaArrowUpRightFromSquare className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-white/10 bg-white/[0.03] hover:border-blue-500 text-white px-4 py-2 rounded-2xl transition-all duration-300 text-sm"
                    >
                      <FaGithub />

                      Frontend
                    </a>
                  )}

                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-white/10 bg-white/[0.03] hover:border-cyan-500 text-white px-4 py-2 rounded-2xl transition-all duration-300 text-sm"
                    >
                      <FaGithub />

                      Backend
                    </a>
                  )}

                </div>

              )}

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
