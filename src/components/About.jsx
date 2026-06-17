// import { motion } from "framer-motion";

// const stats = [
//   { num: "1+", label: "Years Experience" },
//   { num: "10+", label: "Projects Built" },
//   { num: "5+", label: "Technologies" },
//   { num: "100%", label: "Client Satisfaction" },
// ];

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative py-32 bg-[#050816] text-white overflow-hidden"
//     >
//       {/* 🌌 BACKGROUND GLOWS */}
//       <div className="absolute top-[-150px] left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />
//       <div className="absolute bottom-[-150px] right-1/4 w-[600px] h-[600px] bg-purple-500/10 blur-[200px] rounded-full" />

//       <div className="max-w-6xl mx-auto px-6 relative z-10">

//         {/* TITLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-24"
//         >
//           <h2 className="text-5xl md:text-6xl font-bold">
//             About <span className="text-cyan-400">Me</span>
//           </h2>

//           <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
//             I build modern, scalable and high-performance web applications with
//             beautiful UI & smooth UX.
//           </p>
//         </motion.div>

//         {/* MAIN GRID */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9 }}
//             className="space-y-6"
//           >
//             <h3 className="text-3xl md:text-4xl font-bold leading-snug">
//               Turning ideas into{" "}
//               <span className="text-purple-400">digital experiences</span>
//             </h3>

//             <p className="text-gray-400 leading-relaxed">
//               I specialize in React, Tailwind CSS, and modern frontend architecture.
//               My focus is clean UI, performance, and scalable systems.
//             </p>

//             <p className="text-gray-400 leading-relaxed">
//               I don’t just build websites — I craft interactive experiences that feel
//               smooth, modern, and engaging.
//             </p>

//             <button className="relative px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition shadow-lg shadow-purple-500/20">
//               Download CV
//             </button>
//           </motion.div>

//           {/* RIGHT STATS */}
//           <div className="grid grid-cols-2 gap-6">

//             {stats.map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.6, rotateX: 30 }}
//                 whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: i * 0.15 }}
//                 whileHover={{ scale: 1.08, rotateY: 6 }}
//                 className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl overflow-hidden"
//               >
//                 {/* glow effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition" />

//                 <h4 className="text-4xl font-bold text-cyan-400 relative z-10">
//                   {item.num}
//                 </h4>

//                 <p className="text-gray-400 mt-2 text-sm relative z-10">
//                   {item.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* TIMELINE ADVANCED */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9 }}
//           className="mt-28 relative border-l border-white/10 pl-10 space-y-12"
//         >
//           <div className="absolute left-[-6px] top-0 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/40" />

//           <div>
//             <h4 className="text-cyan-400 font-semibold">2025</h4>
//             <p className="text-gray-400">
//               Started web development journey with HTML, CSS, JavaScript
//             </p>
//           </div>

//           <div>
//             <div className="absolute left-[-6px] top-24 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/40" />
//             <h4 className="text-purple-400 font-semibold">2026</h4>
//             <p className="text-gray-400">
//               Built production-ready React + Tailwind projects
//             </p>
//           </div>

//           <div>
//             <div className="absolute left-[-6px] top-48 w-3 h-3 bg-cyan-300 rounded-full" />
//             <h4 className="text-cyan-300 font-semibold">Future</h4>
//             <p className="text-gray-400">
//               Focused on full-stack development & advanced UI systems
//             </p>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

const stats = [
  { num: "10+", label: "Projects Built" },
  { num: "1+", label: "Years Learning" },
  { num: "5+", label: "Technologies" },
  { num: "100%", label: "Dedication" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="absolute top-[-150px] left-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-150px] right-20 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm">
            About Me
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Who <span className="text-cyan-400">Am I?</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Passionate Frontend Developer crafting modern web experiences
            with React, Tailwind CSS and clean UI systems.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side - Code Window */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">

              {/* Browser Top */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-8">

                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span> = {"{"}
                </p>

                <p className="ml-5">
                  name:
                  <span className="text-green-400">
                    {" "} "Abdul Ahad",
                  </span>
                </p>

                <p className="ml-5">
                  role:
                  <span className="text-green-400">
                    {" "} "Frontend Developer",
                  </span>
                </p>

                <p className="ml-5">
                  skills:
                  <span className="text-green-400">
                    {" "} ["React", "Tailwind", "Firebase"],
                  </span>
                </p>

                <p className="ml-5">
                  passion:
                  <span className="text-green-400">
                    {" "} "Building Modern UI",
                  </span>
                </p>

                <p className="ml-5">
                  status:
                  <span className="text-green-400">
                    {" "} "Available for Freelance"
                  </span>
                </p>

                <p>{"}"}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold leading-tight">
              Turning Ideas Into
              <span className="text-cyan-400"> Digital Reality</span>
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I specialize in building fast, responsive and visually
              appealing web applications using modern frontend technologies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My focus is creating smooth user experiences, scalable code
              architecture and beautiful interfaces.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Tailwind",
                "JavaScript",
                "Firebase",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <div className="flex gap-4">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500"
  >
    👀 View CV
  </a>

  <a
    href="/resume.pdf"
    download
    className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-300"
  >
    📥 Download CV
  </a>
</div>

              <button 
                 onClick={() =>
  document.getElementById("work")
    ?.scrollIntoView({ behavior: "smooth" })
}
              className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition">
                View Projects
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center hover:-translate-y-2 transition"
            >
              <h4 className="text-4xl font-bold text-cyan-400">
                {item.num}
              </h4>

              <p className="text-gray-400 mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}