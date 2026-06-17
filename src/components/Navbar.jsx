import { useEffect, useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

 const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "contact", label: "Contact" },
];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

  let current = "hero";

   links.forEach((item) => {
  const section = document.getElementById(item.id);

  if (section) {
    const rect = section.getBoundingClientRect();
    const top = rect.top + window.scrollY - 120;
    const bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      current = item.id;
    }
  }
});

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (!el) {
      console.log("❌ Section not found:", id);
      return;
    }

    const offset = 80; // navbar height fix
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setMenu(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-[#0a0f1c]/85 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-[#0a0f1c]/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
       <h1
  onClick={() => scrollToSection("hero")}
  className="text-xl font-bold text-white tracking-wide cursor-pointer"
>
  Ahad<span className="text-cyan-400">.dev</span>
</h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-2 text-sm text-gray-400">

         {links.map((item) => (
  <button
    key={item.id}
    onClick={() => scrollToSection(item.id)}
    className={`relative px-4 py-2 rounded-full transition-all duration-300
    ${
      active === item.id
        ? "text-white bg-white/10 border border-white/10"
        : "hover:text-white"
    }`}
  >
    {item.label}

    {active === item.id && (
      <span className="absolute left-1/2 -bottom-1 w-2/3 h-[2px] bg-cyan-400 -translate-x-1/2 rounded-full" />
    )}
  </button>
))}

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden text-white text-2xl"
        >
          {menu ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/10
        ${menu ? "max-h-96 py-4 px-6 bg-[#0a0f1c]/95 backdrop-blur-xl" : "max-h-0"}`}
      >
        <div className="flex flex-col gap-2 text-gray-400">
{links.map((item) => (
  <button
    key={item.id}
    onClick={() => scrollToSection(item.id)}
    className={`px-3 py-2 rounded-lg text-left transition-all
    ${
      active === item.id
        ? "bg-white/10 text-white"
        : "hover:text-white"
    }`}
  >
    {item.label}
  </button>
))}

        </div>
      </div>
    </header>
  );
}