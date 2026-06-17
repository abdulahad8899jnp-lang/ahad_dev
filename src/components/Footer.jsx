import { useEffect, useState } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer"
      className="relative bg-[#0a0f1c] text-white pt-24 pb-10 overflow-hidden border-t border-[#1f2937]"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[180px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* TOP GRID */}
        <div className={`grid md:grid-cols-3 gap-10 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}>

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Dev<span className="text-[#60a5fa]">Portfolio</span>
            </h2>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Modern, elegant and responsive portfolio built with React and Tailwind.
              Focused on clean UI and premium user experience.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-[#60a5fa] font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-gray-400 text-sm">
             {[
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Work", id: "work" },
  { name: "Contact", id: "contact" },
].map((item, i) => (
  <li key={i}>
    <a
      href={`#${item.id}`}
      className="cursor-pointer hover:text-white hover:translate-x-1 transition inline-block"
    >
      {item.name}
    </a>
  </li>
))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-[#60a5fa] font-semibold mb-4">Follow Me</h3>

            <div className="flex flex-wrap gap-3">

              {[
  {
    name: "GitHub",
    link: "https://github.com/abdulahad8899jnp-lang",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdul-ahad-8299152b6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abdulahad8899jnp?igsh=MXNzM3M2MDU3bDB4Zw==&utm_source=ig_contact_invite",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/916389102151",
  },
].map((item, i) => (
  <a
    key={i}
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 rounded-full border border-[#1f2937]
    text-gray-300 hover:bg-white/5 hover:border-[#60a5fa]
    hover:-translate-y-1 transition duration-300"
  >
    {item.name}
  </a>
))}

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className={`my-10 border-t border-[#1f2937] transition-all duration-700
          ${visible ? "opacity-100" : "opacity-0"}
        `}></div>

        {/* BOTTOM */}
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4
          text-gray-500 text-sm transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}>

          <p>© 2026 Modern Portfolio. All rights reserved.</p>

          <p className="text-gray-600 text-xs">
            Built with React & Tailwind
          </p>

        </div>

      </div>
    </footer>
  );
}