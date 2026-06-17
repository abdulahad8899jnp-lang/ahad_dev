// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
//     >
//       {/* 🌌 BASE BACKGROUND */}
//       <div className="absolute inset-0 bg-[#050816]" />

//       {/* 🔵 GLOW */}
//       <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px] top-[-120px] left-[-120px]" />
//       <div className="absolute w-[450px] h-[450px] bg-cyan-400/15 rounded-full blur-[160px] bottom-[-120px] right-[-120px]" />

//       {/* GRID */}
//       <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:28px_28px]" />
//       <div className="absolute inset-0 overflow-hidden">
//   {[...Array(25)].map((_, i) => (
//     <span
//       key={i}
//       className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
//       style={{
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//       }}
//     />
//   ))}
// </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT SIDE */}
//        <motion.div
//   initial={{ opacity: 0, x: -80 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8 }}
//   className="space-y-6 pt-5"
// >

//           <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm">
//             🚀 Available for Freelance Work
//           </div>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
//             Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//   Abdul Ahad
// </span>
//           </h1>

//           <h2 className="text-lg sm:text-xl text-cyan-300">
//             <Typewriter
//               words={[
//                 "Frontend Developer",
//                 "React Specialist",
//                 "UI/UX Designer",
//                 "MERN Stack Developer",
//               ]}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={40}
//               delaySpeed={1200}
//             />
//           </h2>

//           <p className="text-gray-400 max-w-md">
//             I build modern, responsive and high-performance web applications
//             with clean UI and smooth animations.
//           </p>

//           <div className="flex gap-4">
//             <button
//   onClick={() =>
//     document
//       .getElementById("contact")
//       ?.scrollIntoView({ behavior: "smooth" })
//   }
//   className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500"
// >
//   Hire Me
// </button>

//             <button 
//             onClick={() =>
//   document.getElementById("work")
//     ?.scrollIntoView({ behavior: "smooth" })
// }
//             className="px-6 py-3 border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black rounded-xl transition">
//               View Projects
//             </button>
//           </div>

//          <div className="flex gap-5 text-xl text-gray-400">
//   <FaGithub className="hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
//   <FaLinkedin className="hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
//   <FaInstagram className="hover:text-pink-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
// </div>
//         </motion.div>

//         {/* RIGHT SIDE */}
//         <div className="flex justify-center relative items-center">

//           {/* GLOW */}
//           <div className="absolute w-[320px] h-[320px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse" />
//           <div className="absolute w-[220px] h-[220px] bg-cyan-400/20 rounded-full blur-2xl" />

//           {/* IMAGE */}
//           <motion.div
//   animate={{
//     y: [0, -15, 0],
//   }}
//   transition={{
//     duration: 4,
//     repeat: Infinity,
//     ease: "easeInOut",
//   }}
//   className="relative z-20 group"
// >

//             <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-3 rounded-full shadow-2xl transition-all duration-500 group-hover:scale-110">

//               <img
//                 src="/ahad.jpeg"
//                 alt="profile"
//                 className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-white/20"
//               />

//             </div>

// </motion.div>

//           {/* FLOAT TAG (FIXED Z-INDEX) */}
//           <div className="absolute -bottom-6 z-30 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-cyan-300 shadow-lg animate-bounce">
//             ⚡ Building Future Web Apps
//           </div>
//         </div>
//       </div>

//       {/* ⬇ SCROLL INDICATOR (FULL FIXED) */}
//      <button
//   onClick={() =>
//     document
//       .getElementById("about")
//       ?.scrollIntoView({ behavior: "smooth" })
//   }
//   className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce z-50 cursor-pointer"
// >
//   <div className="w-5 h-5 border-b-2 border-r-2 border-cyan-400 rotate-45" />
//   <span className="text-xs mt-1 opacity-70">Scroll</span>
// </button>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* 🌌 BASE BACKGROUND */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* 🔵 GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px] top-[-120px] left-[-120px]" />
      <div className="absolute w-[450px] h-[450px] bg-cyan-400/15 rounded-full blur-[160px] bottom-[-120px] right-[-120px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute inset-0 overflow-hidden">
  {[...Array(25)].map((_, i) => (
    <span
      key={i}
      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  ))}
</div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
       <motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="space-y-6 pt-5"
>

          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm">
            🚀 Available for Freelance Work
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
  Abdul Ahad
</span>
          </h1>

          <h2 className="text-lg sm:text-xl text-cyan-300">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Specialist",
                "UI/UX Designer",
                "MERN Stack Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </h2>

          <p className="text-gray-400 max-w-md">
            I build modern, responsive and high-performance web applications
            with clean UI and smooth animations.
          </p>

          <div className="flex gap-4">
            <button
  onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500"
>
  Hire Me
</button>

            <button 
            onClick={() =>
  document.getElementById("work")
    ?.scrollIntoView({ behavior: "smooth" })
}
            className="px-6 py-3 border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black rounded-xl transition">
              View Projects
            </button>
          </div>

         <div className="flex gap-5 text-xl text-gray-400">
  <FaGithub className="hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
  <FaLinkedin className="hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
  <FaInstagram className="hover:text-pink-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
</div>
        </motion.div>

        {/* RIGHT SIDE */}
   <div className="flex justify-center relative items-center">

  {/* BIG GLOW */}
  <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-[120px] animate-pulse" />

  {/* OUTER ROTATING RING */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
    absolute
    w-[340px]
    h-[340px]
    rounded-full
    border-[3px]
    border-cyan-400/30
    border-t-cyan-400
    "
  />

  {/* INNER ROTATING RING */}
  <motion.div
    animate={{ rotate: -360 }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
    absolute
    w-[290px]
    h-[290px]
    rounded-full
    border-[3px]
    border-purple-500/20
    border-b-purple-500
    "
  />

  {/* FLOATING TECH BADGES */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="
    absolute
    top-8
    -left-6
    z-30
    px-4 py-2
    rounded-xl
    bg-[#0f172a]
    border border-cyan-500/30
    text-cyan-400
    text-sm
    "
  >
    ⚛ React
  </motion.div>

  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="
    absolute
    top-20
    -right-8
    z-30
    px-4 py-2
    rounded-xl
    bg-[#0f172a]
    border border-purple-500/30
    text-purple-400
    text-sm
    "
  >
    🔥 Firebase
  </motion.div>

  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3.5, repeat: Infinity }}
    className="
    absolute
    bottom-20
    -left-8
    z-30
    px-4 py-2
    rounded-xl
    bg-[#0f172a]
    border border-cyan-500/30
    text-cyan-400
    text-sm
    "
  >
    🎨 Tailwind
  </motion.div>

  {/* IMAGE */}
  <motion.div
    animate={{
      y: [0, -18, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.05,
    }}
    className="relative z-20 group"
  >
    <div
      className="
      relative
      p-3
      rounded-full
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      shadow-[0_0_50px_rgba(34,211,238,0.2)]
      "
    >
      <img
        src="/ahad1.png"
        alt="profile"
        className="
        w-64 h-64
        sm:w-80 sm:h-80
        rounded-full
        object-cover
        border-4
        border-white/20
        "
      />
    </div>
  </motion.div>

  {/* EXPERIENCE CARD */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="
    absolute
    right-[-20px]
    top-1/2
    -translate-y-1/2
    z-30

    bg-[#0f172a]/90
    backdrop-blur-xl
    border border-cyan-500/20

    rounded-2xl
    px-6 py-5
    "
  >
    <h3 className="text-4xl font-bold text-cyan-400">
      1+
    </h3>

    <p className="text-gray-400 text-sm">
      Years Learning
      <br />
      & Building
    </p>
  </motion.div>

  {/* FLOAT TAG */}
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className="
    absolute
    -bottom-8
    z-30

    px-5 py-3
    rounded-xl

    bg-white/10
    backdrop-blur-xl
    border border-white/20

    text-cyan-300
    text-sm

    shadow-lg
    "
  >
    ⚡ Building Future Web Apps
  </motion.div>

</div>
      </div>

      {/* ⬇ SCROLL INDICATOR (FULL FIXED) */}
     <button
  onClick={() =>
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce z-50 cursor-pointer"
>
  <div className="w-5 h-5 border-b-2 border-r-2 border-cyan-400 rotate-45" />
  <span className="text-xs mt-1 opacity-70">Scroll</span>
</button>
    </section>
  );
}