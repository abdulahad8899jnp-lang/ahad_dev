import { motion } from "framer-motion";

export default function Projects() {
 const projects = [
  {
    title: "E-Commerce UI",
    desc: "Modern shopping UI with cart & product pages.",
    tag: "React",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    title: "Portfolio Website",
    desc: "Premium personal portfolio with animations.",
    tag: "Tailwind",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    title: "Dashboard UI",
    desc: "Admin dashboard with charts and analytics.",
    tag: "UI/UX",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    title: "Landing Page",
    desc: "High conversion SaaS landing page design.",
    tag: "Frontend",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166"
  },
  {
    title: "Blog Platform",
    desc: "Modern blog UI with clean reading experience.",
    tag: "React",
    image: "/images/image.png"
  },
  {
    title: "Restaurant Website",
    desc: "Elegant food ordering UI with smooth design.",
    tag: "Design",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
];

  return (
    <section
      id="work"
      className="relative py-28 bg-[#050816] text-white overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOWS */}
      <div className="absolute top-[-150px] left-10 w-[550px] h-[550px] bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-150px] right-10 w-[600px] h-[600px] bg-purple-500/10 blur-[200px] rounded-full" />

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
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A collection of modern, responsive and production-level web applications.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10
              backdrop-blur-xl transition shadow-lg hover:border-cyan-400/40"
            >

              {/* IMAGE */}
              <div className="h-48 relative overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

  <div
    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-110 transition duration-500"
    style={{ backgroundImage: `url(${project.image})` }}
  />

  {/* TAG */}
  <div className="absolute top-3 left-3">
    <span className="text-xs px-3 py-1 bg-black/40 backdrop-blur border border-white/10 rounded-full text-cyan-400">
      {project.tag}
    </span>
  </div>

</div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {project.desc}
                </p>
<a href="https://fsc-famous-ubag.vercel.app/">
                <button className="mt-4 text-sm text-cyan-400 hover:text-white transition">
                  View Project →
                </button></a>

              </div>

              {/* GLOW OVERLAY */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-500/10 to-purple-500/10 pointer-events-none" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}