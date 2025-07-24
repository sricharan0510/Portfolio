import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from "framer-motion";

const education = [
  {
    title: 'BTech in Computer Science- AI&ML',
    institution: 'Aditya COllege of Engineering & Technology',
    date: '2022 - Present',
    description: 'Maintained a strong academic record and worked on various AI projects.',
  },
  {
    title: 'Intermediate',
    institution: 'Sri Nalanda Junior College',
    date: '2020 - 2022',
    description: 'Excelled in academics with 96.5% and built a foundation in programming.',
  },
];

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Technical Hub',
    date: 'May 2024 - July 2024',
    description: 'Led development of enterprise applications using React and Node.js.',
  },
  {
    title: 'FrontEnd Developer',
    company: 'CodSoft',
    date: 'Nov, 2023 - Dec, 2023',
    description: 'Deep dived into HTML and CSS and fundementals of React.',
  },
];

export default function ExperienceEducation() {
  return (
    <section id="Education & Experience" className="py-20">
      <div className="container px-4 mx-auto">
        {/* <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-10 text-center"
        >
          Education &  Experience
        </motion.h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Timeline */}
          <div className="flex justify-end">
            <div className="w-full md:w-4/5">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-10 text-center"
              >
                Education
              </motion.h2>
              <VerticalTimeline lineColor="#9333ea" layout="1-column-left">
                {education.map((edu, index) => (
                  <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--education"
                    contentStyle={{
                      background: '#0F0113',
                      color: '#fff',
                      border: '1px solid #9333ea',
                      boxShadow: '0 3px 10px rgba(147, 51, 234, 0.3)'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid #9333ea' }}
                    date={<span className="text-purple-300">{edu.date}</span>}
                    iconStyle={{ background: '#9333ea', color: '#fff' }}
                    icon={<GraduationCap />}
                  >
                    <h3 className="text-xl font-bold">{edu.title}</h3>
                    <h4 className="mt-2 text-purple-300">{edu.institution}</h4>
                    <p className="mt-4 text-gray-300">{edu.description}</p>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="flex justify-start">
            <div className="w-full md:w-4/5">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-10 text-center"
              >Experience
              </motion.h2>
              <VerticalTimeline lineColor="#9333ea" layout="1-column-left">
                {experiences.map((exp, index) => (
                  <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: '#0F0113',
                      color: '#fff',
                      border: '1px solid #9333ea',
                      boxShadow: '0 3px 10px rgba(147, 51, 234, 0.3)'
                    }}
                    contentArrowStyle={{ borderLeft: '7px solid #9333ea' }}
                    date={<span className="text-purple-300">{exp.date}</span>}
                    iconStyle={{ background: '#9333ea', color: '#fff', marginRight: '48px' }}
                    icon={<Briefcase />}
                  >
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <h4 className="mt-2 text-purple-300">{exp.company}</h4>
                    <p className="mt-4 text-gray-300">{exp.description}</p>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
