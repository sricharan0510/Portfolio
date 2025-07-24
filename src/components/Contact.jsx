import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineEnvironment
} from "react-icons/ai";
import { motion } from "framer-motion";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StatsCard = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(number);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 2000; // 2 seconds duration

      if (progress < 1) {
        setCount(Math.min(Math.floor(targetNumber * progress), targetNumber));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stats-${label}`);
    if (element) observer.observe(element);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [targetNumber]);

  return (
    <motion.div
      id={`stats-${label}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-purple-900/40 to-purple-800/30
               border border-purple-500/30 p-6 rounded-xl text-center
               hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]
               transition-all duration-300"
    >
      <motion.h4 className="text-3xl font-bold text-white mb-1">
        {count}
        {number.includes("+") ? "+" : ""}
      </motion.h4>
      <p className="text-purple-300 text-sm">{label}</p>
    </motion.div>
  );
};
const Contact = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesConfig = {
    particles: {
      color: { value: "#6b21a8" },
      links: {
        enable: true,
        color: "#6b21a8",
        opacity: 0.1,
      },
      move: {
        enable: true,
        speed: 0.6,
      },
      opacity: {
        value: 0.3,
      },
      size: {
        value: 2,
      },
    },
  };
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      );
      console.log("Email sent successfully:", response);
      setSubmitStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen py-20 px-4" id="contact">
      <Particles
        id="contactParticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 -z-10"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[1200px] mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* <div
              className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-md
                          border border-purple-500/30 p-8 rounded-2xl
                          transform hover:-translate-y-1 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get in touch
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Feel free to reach out for opportunities, collaborations, or
                just a tech chat! Always excited to explore new ideas and build
                amazing things together.
              </p>
            </div> */}

            <div
              className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-md
             border border-purple-500/30 p-8 rounded-2xl
             transform hover:-translate-y-1 transition-all duration-300
             hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Feel free to reach out for opportunities, collaborations, or
                just a tech chat! Always excited to explore new ideas and build
                amazing things together.
              </p>

              {/* Contact Info */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-white font-bold text-lg">
                  <AiOutlineUser className="text-2xl font-bold text-purple-400 mr-3" />
                  <span>Sricharan Illandula</span>
                </div>
                <div className="flex items-center text-white font-bold text-lg">
                  <AiOutlinePhone className="text-2xl font-bold text-purple-400 mr-3" />
                  <span>+91 8519836671</span>
                </div>
                <div className="flex items-center text-white font-bold text-lg">
                  <AiOutlineEnvironment className="text-2xl font-bold text-purple-400 mr-3" />
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>
            </div>



            <div className="flex flex-wrap gap-4 justify-center">
              {[
                {
                  icon: <AiFillGithub />,
                  href: "https://github.com/sricharan0510",
                  label: "GitHub",
                },
                {
                  icon: <AiFillLinkedin />,
                  href: "https://www.linkedin.com/in/cyberboyayush/",
                  label: "LinkedIn",
                },
                {
                  icon: <AiOutlineMail />,
                  href: "sricharan0504@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-br from-purple-900/40 to-purple-800/30
                           border border-purple-500/30 p-4 rounded-xl
                           text-purple-400 text-2xl
                           hover:text-purple-300 transition-all duration-300
                           hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* <motion.div
              className="grid grid-cols-2 gap-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
            >
              <StatsCard number="15+" label="Projects" />
              <StatsCard number="5+" label="Years Experience" />
            </motion.div> */}
          </motion.div>
          <motion.form onSubmit={handleSubmit} initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-md border border-purple-500/30 p-8 rounded-2xl">
            <div className="space-y-6">
              <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} placeholder="Your Name" className="w-full rounded-xl border border-purple-500/50 bg-purple-900/20 py-3 px-4 text-gray-100 placeholder:text-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300" required />
              <input type="email" name="from_email" value={formData.from_email} onChange={handleChange} placeholder="Your Email" className="w-full rounded-xl border border-purple-500/50 bg-purple-900/20 py-3 px-4 text-gray-100 placeholder:text-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300" required />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" className="w-full rounded-xl border border-purple-500/50 bg-purple-900/20 py-3 px-4 text-gray-100 placeholder:text-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none" required />
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              {submitStatus === "success" && <p className="text-center text-green-500">Message sent successfully!</p>}
              {submitStatus === "error" && <p className="text-center text-red-400">Failed to send message. Please try again.</p>}
            </div>
          </motion.form>

        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
