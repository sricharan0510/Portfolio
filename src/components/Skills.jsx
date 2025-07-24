import React, { useState, useEffect } from "react";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiJava, DiPython, DiGit } from "react-icons/di";
import { SiTailwindcss, SiCplusplus, SiTensorflow, SiFigma, SiMysql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Technologies I Love",
    items: [
      { name: "HTML5", icon: <DiHtml5 />, color: "text-[#E34F26]", bgColor: "bg-[#E34F26]/10" },
      { name: "CSS3", icon: <DiCss3 />, color: "text-[#1572B6]", bgColor: "bg-[#1572B6]/10" },
      { name: "JavaScript", icon: <DiJavascript1 />, color: "text-[#F7DF1E]", bgColor: "bg-[#F7DF1E]/10" },
      { name: "React", icon: <DiReact />, color: "text-[#61DAFB]", bgColor: "bg-[#61DAFB]/10" },
      { name: "Node.js", icon: <DiNodejsSmall />, color: "text-[#339933]", bgColor: "bg-[#339933]/10" },
      { name: "MongoDB", icon: <DiMongodb />, color: "text-[#47A248]", bgColor: "bg-[#47A248]/10" },
      { name: "React Native", icon: <TbBrandReactNative />, color: "text-[#61DAFB]", bgColor: "bg-[#61DAFB]/10" },
      { name: "Java", icon: <DiJava />, color: "text-[#007396]", bgColor: "bg-[#007396]/10" },
      { name: "Python", icon: <DiPython />, color: "text-[#3776AB]", bgColor: "bg-[#3776AB]/10" },
      { name: "Git", icon: <DiGit />, color: "text-[#F05032]", bgColor: "bg-[#F05032]/10" },
      { name: "SQL", icon: <SiMysql />, color: "text-[#4479A1]", bgColor: "bg-[#4479A1]/10" },
    ],
  },
];

const TechCard = ({ item, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, []);

  const handleInteraction = () => {
    if (isTouchDevice) {
      setIsActive(!isActive);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }} // Reduced delay for better performance
      whileHover={!isTouchDevice ? { scale: 1.05 } : undefined} // Removed shaking, slight scale effect
      animate={isActive ? { scale: 1.05 } : { scale: 1 }}
      onClick={handleInteraction}
      className={`relative group p-6 rounded-xl backdrop-blur-sm border border-white/10 ${item.bgColor}
                hover:border-white/20 transition-all duration-200 flex flex-col items-center gap-3 cursor-pointer`} // Reduced transition duration
    >
      <motion.div
        className={`text-5xl md:text-6xl ${item.color}`}
      >
        {item.icon}
      </motion.div>
      <span className={`font-medium ${item.color} text-sm md:text-base`}>
        {item.name}
      </span>

      {/* Glow Effect */}
      <div className={`absolute inset-0 -z-10 rounded-xl transition-opacity duration-300
                   ${item.bgColor} ${isActive || !isTouchDevice ? "opacity-50 blur-xl" : "opacity-0"}`} />

      {/* Touch indicator */}
      {isTouchDevice && (
        <div className="absolute top-2 right-2 text-xs text-white/50 bg-black/20 px-2 py-1 rounded-full">
          Tap to interact
        </div>
      )}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="relative min-h-screen py-20 px-4" id="skills">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I love working with these technologies to build amazing things.
            Always excited to learn and explore more!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills[0].items.map((item, index) => (
            <TechCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
