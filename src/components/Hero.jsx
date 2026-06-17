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

        <div className="flex items-center gap-5">

  <motion.a
    href="https://github.com/abdulahad8899jnp-lang"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -8, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="
      w-14 h-14
      flex items-center justify-center
      rounded-2xl
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      text-gray-400 text-2xl
      hover:text-white
      hover:border-white/30
      hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
      transition-all duration-300
    "
  >
    <FaGithub />
  </motion.a>

  <motion.a
    href="https://www.linkedin.com/in/abdul-ahad-8299152b6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -8, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="
      w-14 h-14
      flex items-center justify-center
      rounded-2xl
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      text-gray-400 text-2xl
      hover:text-cyan-400
      hover:border-cyan-400/30
      hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
      transition-all duration-300
    "
  >
    <FaLinkedin />
  </motion.a>

  <motion.a
    href="https://www.instagram.com/abdulahad8899jnp?igsh=MXNzM3M2MDU3bDB4Zw==&utm_source=ig_contact_invite"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -8, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="
      w-14 h-14
      flex items-center justify-center
      rounded-2xl
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      text-gray-400 text-2xl
      hover:text-pink-400
      hover:border-pink-400/30
      hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]
      transition-all duration-300
    "
  >
    <FaInstagram />
  </motion.a>

</div>
        </motion.div>

        {/* RIGHT SIDE */}
   <div className="relative flex justify-center items-center min-h-[650px] w-full">

  {/* BIG AURORA GLOW */}
  <div className="absolute w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[180px]" />
  <div className="absolute w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[180px]" />

  {/* OUTER RING */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute w-[420px] h-[420px] rounded-full border border-cyan-400/20"
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]" />
  </motion.div>

  {/* MIDDLE RING */}
  <motion.div
    animate={{ rotate: -360 }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute w-[360px] h-[360px] rounded-full border border-purple-500/20"
  />

  {/* DASHED RING */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 50,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-white/10"
  />

  {/* TOP LEFT CARD */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="
      absolute
      top-16
      left-4
      lg:left-8
      z-30
      hidden md:block
      bg-white/5
      backdrop-blur-xl
      border border-cyan-500/20
      rounded-2xl
      px-5 py-3
    "
  >
    <p className="text-xs text-gray-400">Frontend</p>
    <h4 className="text-cyan-400 font-semibold">⚛ React.js</h4>
  </motion.div>

  {/* TOP RIGHT CARD */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="
      absolute
      top-20
      right-4
      lg:right-8
      z-30
      hidden md:block
      bg-white/5
      backdrop-blur-xl
      border border-purple-500/20
      rounded-2xl
      px-5 py-3
    "
  >
    <p className="text-xs text-gray-400">Backend</p>
    <h4 className="text-purple-400 font-semibold">🔥 Firebase</h4>
  </motion.div>

  {/* PROFILE IMAGE */}
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.04,
    }}
    className="relative z-20"
  >
    <div className="p-[3px] rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
      <div className="p-3 rounded-full bg-[#050816]">
        <img
          src="/ahad1.png"
          alt="profile"
          className="
            w-72
            h-72
            sm:w-80
            sm:h-80
            object-cover
            rounded-full
            shadow-[0_0_80px_rgba(34,211,238,0.35)]
          "
        />
      </div>
    </div>
  </motion.div>

  {/* BOTTOM LEFT CARD */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="
      absolute
      bottom-28
      left-4
      lg:left-8
      z-30
      hidden md:block
      bg-white/5
      backdrop-blur-xl
      border border-cyan-500/20
      rounded-2xl
      px-5 py-3
    "
  >
    <p className="text-xs text-gray-400">Styling</p>
    <h4 className="text-cyan-400 font-semibold">🎨 Tailwind</h4>
  </motion.div>

  {/* BOTTOM RIGHT PROJECT CARD */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="
      absolute
      bottom-24
      right-4
      lg:right-8
      z-30
      hidden md:block
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      rounded-3xl
      px-6 py-5
    "
  >
    <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      15+
    </h3>
    <p className="text-gray-400 text-sm">
      Projects Completed
    </p>
  </motion.div>

  {/* STATUS BADGE */}
  <motion.div
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="
      absolute
      bottom-4
      z-30
      px-6 py-3
      rounded-full
      bg-green-500/10
      border border-green-500/30
      backdrop-blur-xl
    "
  >
    <span className="text-green-400 font-medium">
      🟢 Available For Freelance
    </span>
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