import { FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const certifications = [
  { title: "MongoDB Developer Toolkit", issuer: "GeeksForGeeks", date: "Jan, 2025" },
  { title: "JavaScript Essentials", issuer: "Cisco", date: "Dec, 2024" },
  { title: "Data Base Management System", issuer: "NPTEL", date: "Oct, 2024" },
  { title: "IT Specialist in Java", issuer: "Pearson Vue", date: "July, 2024" },
  { title: "Full Stack Development", issuer: "TechnicalHub", date: "July, 2024" },
  { title: "Programming in Java", issuer: "NPTEL", date: "May, 2024" },
  { title: "Azure AI Fundamentals", issuer: "Microsoft", date: "Apr, 2024" },
  { title: "Web Developer", issuer: "CodSoft", date: "Dec, 2023" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-10"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a0126] border border-purple-600 shadow-md rounded-xl 
                         px-10 py-4 flex items-center gap-6 hover:shadow-[0px_0px_10px_1px_rgba(192,132,252,0.7)] transition-shadow w-full"
            >
              <div className="bg-purple-800 p-3 rounded-full text-purple-300 text-3xl">
                <FaAward />
              </div>

              <div className="flex flex-col justify-center flex-1 text-left">
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-purple-400">{cert.issuer}</p>
                <p className="text-sm text-gray-400">Issued: {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
