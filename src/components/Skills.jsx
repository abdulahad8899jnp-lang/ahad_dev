import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFirebase,
  SiFigma,
} from "react-icons/si";

export default function Skills() {
 const skills = [
  {
    name: "HTML",
    level: 78,
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    level: 62,
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    level: 25,
    icon: <FaJs />,
  },
  {
    name: "React",
    level: 65,
    icon: <FaReact />,
  },
  {
    name: "Tailwind",
    level: 73,
    icon: <SiTailwindcss />,
  },
  {
    name: "Firebase",
    level: 55,
    icon: <SiFirebase />,
  },
  {
    name: "Git",
    level: 30,
    icon: <FaGitAlt />,
  },
  {
    name: "UI/UX",
    level: 20,
    icon: <SiFigma />,
  },
];
const tools = [
  "VS Code",
  "GitHub",
  "Firebase",
  "Figma",
  "Vercel",
  "Netlify",
];
const learning = [
  "Node.js",
  "TypeScript",
  "Next.js",
  "MongoDB",
];
const stats = [
  { number: "10+", title: "Projects" },
  { number: "1+", title: "Years Learning" },
  { number: "8+", title: "Technologies" },
  { number: "100%", title: "Dedication" },
];

  

  return (
    <section
      id="skills"
      className="relative py-28 bg-[#050816] text-white overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute top-[-120px] left-10 w-[550px] h-[550px] bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-120px] right-10 w-[600px] h-[600px] bg-purple-500/10 blur-[200px] rounded-full" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Technologies I use to build modern, scalable and high-performance web apps.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10
              backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-lg
              hover:shadow-cyan-500/10 transition"
            >

              {/* TOP */}
              {/* TOP */}
<div className="flex justify-between items-center mb-3">
  <div className="flex items-center gap-3">
    <div className="text-2xl text-cyan-400">
      {skill.icon}
    </div>

    <span className="text-gray-200 font-medium">
      {skill.name}
    </span>
  </div>

  <span className="text-cyan-400 font-semibold">
    {skill.level}%
  </span>
</div>
              {/* BAR */}
              <div className="w-full h-2 bg-[#0f172a] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                />
              </div>

            </motion.div>
          ))}

        </div>

       
        {/* STATS */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
  {stats.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
    >
      <h3 className="text-3xl font-bold text-cyan-400">
        {item.number}
      </h3>

      <p className="text-gray-400 mt-2">
        {item.title}
      </p>
    </motion.div>
  ))}
</div>
{/* TOOLS */}
<div className="mt-20">
  <h3 className="text-2xl font-bold text-center mb-8">
    Tools & Technologies
  </h3>

  <div className="flex flex-wrap justify-center gap-4">
    {tools.map((tool, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.1 }}
        className="px-5 py-3 rounded-full bg-white/5 border border-white/10"
      >
        {tool}
      </motion.div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}