// import { motion } from "framer-motion";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative py-28 bg-[#050816] text-white overflow-hidden"
//     >
//       {/* 🌌 BACKGROUND GLOWS */}
//       <div className="absolute top-[-150px] left-10 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />
//       <div className="absolute bottom-[-150px] right-10 w-[600px] h-[600px] bg-purple-500/10 blur-[200px] rounded-full" />

//       <div className="max-w-6xl mx-auto px-4 relative z-10">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold">
//             Get In <span className="text-cyan-400">Touch</span>
//           </h2>

//           <p className="text-gray-400 mt-4 max-w-xl mx-auto">
//             Have a project idea? Let’s build something amazing together.
//           </p>
//         </motion.div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 gap-12">

//           {/* LEFT INFO */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             {[
//               { title: "Location", value: "India, Uttar Pradesh" },
//               { title: "Email", value: "abdulahad8899jnp@gmail.com" },
//               { title: "Phone", value: "+91 6389102151" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="p-6 rounded-2xl bg-white/5 border border-white/10
//                 backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-lg
//                 hover:shadow-cyan-500/10 transition"
//               >
//                 <h3 className="text-cyan-400 font-semibold">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300 mt-1">{item.value}</p>
//               </div>
//             ))}

//             {/* SOCIAL */}
//             <div className="flex flex-wrap gap-3 pt-2">
//               {["GitHub", "LinkedIn", "Instagram"].map((item, i) => (
//                 <a
//                   key={i}
//                   className="px-4 py-2 rounded-full border border-white/10
//                   text-gray-300 hover:text-white hover:border-cyan-400
//                   hover:bg-white/5 transition"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </motion.div>

//           {/* RIGHT FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="p-8 rounded-2xl bg-white/5 border border-white/10
//             backdrop-blur-xl shadow-xl"
//           >
//             <h3 className="text-xl font-semibold text-cyan-400 mb-6">
//               Send Message
//             </h3>

//             <form className="flex flex-col gap-5">

//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="p-3 rounded-lg bg-[#0f172a] border border-white/10
//                 outline-none focus:border-cyan-400 transition text-white"
//               />

//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="p-3 rounded-lg bg-[#0f172a] border border-white/10
//                 outline-none focus:border-cyan-400 transition text-white"
//               />

//               <textarea
//                 rows="5"
//                 placeholder="Your Message"
//                 className="p-3 rounded-lg bg-[#0f172a] border border-white/10
//                 outline-none focus:border-cyan-400 transition text-white"
//               />

//               <button
//                 type="submit"
//                 className="py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500
//                 hover:scale-105 transition shadow-lg shadow-purple-500/20"
//               >
//                 Send Message
//               </button>

//             </form>
//           </motion.div>

//         </div>

//         {/* FOOTER */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-center text-gray-500 mt-16 text-sm"
//         >
//           © 2026 Modern Portfolio • Built with React & Tailwind
//         </motion.p>

//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { useState } from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Contact() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const handleNameChange = (e) => {
  const value = e.target.value;
  setName(value);

  setMessage(`Hello, my name is ${value}.

I want to discuss a project with you.`);
};

const sendWhatsApp = (e) => {
  e.preventDefault();

  const text = `
Name: ${name}
Email: ${email}

Message:
${message}
  `;

  window.open(
    `https://wa.me/916389102151?text=${encodeURIComponent(text)}`,
    "_blank"
  );
};
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#050816] text-white overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute top-[-150px] left-10 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-150px] right-10 w-[600px] h-[600px] bg-purple-500/10 blur-[200px] rounded-full" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* HEADER (ANIMATED TEXT) */}
        <motion.div className="text-center mb-20">
          
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            <motion.span variants={fadeUp} custom={1}>
              Get In{" "}
            </motion.span>

            <motion.span className="text-cyan-400" variants={fadeUp} custom={2}>
              Touch
            </motion.span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-400 mt-4 max-w-xl mx-auto"
          >
            Have a project idea? Let’s build something amazing together.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { title: "Location", value: "India, Uttar Pradesh" },
              { title: "Email", value: "abdulahad8899jnp@gmail.com" },
              { title: "Phone", value: "+91 6389102151" },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-white/5 border border-white/10
                backdrop-blur-xl hover:border-cyan-400/40 transition"
              >
                <h3 className="text-cyan-400 font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-300 mt-1">{item.value}</p>
              </motion.div>
            ))}

            {/* SOCIAL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 pt-2"
            >
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
    link: "https://instagram.com/yourusername",
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
            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10
            backdrop-blur-xl shadow-xl"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-cyan-400 mb-6"
            >
              Send Message
            </motion.h3>

            <form onSubmit={sendWhatsApp} className="flex flex-col gap-5">

              {["Your Name", "Your Email", "Your Message"].map(
                (placeholder, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    {i === 0 ? (
  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={handleNameChange}
    className="w-full p-3 rounded-lg bg-[#0f172a] border border-white/10
    outline-none focus:border-cyan-400 transition text-white"
  />
) : i === 1 ? (
  <input
    type="email"
    placeholder="Your Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full p-3 rounded-lg bg-[#0f172a] border border-white/10
    outline-none focus:border-cyan-400 transition text-white"
  />
) : (
  <textarea
    rows="5"
    placeholder="Your Message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="w-full p-3 rounded-lg bg-[#0f172a] border border-white/10
    outline-none focus:border-cyan-400 transition text-white"
  />
)}
                  </motion.div>
                )
              )}

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500
                shadow-lg shadow-purple-500/20"
              >
                Send Message
              </motion.button>

            </form>
          </motion.div>

        </div>

        {/* FOOTER */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-gray-500 mt-16 text-sm"
        >
          © 2026 Modern Portfolio • Built with React & Tailwind
        </motion.p>

      </div>
    </section>
  );
}