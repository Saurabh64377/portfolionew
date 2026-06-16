import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript,
  SiTailwindcss, SiHtml5, SiCss, SiRedux, SiBootstrap,
  SiMysql, SiGit, SiGithub, SiPostman,
  SiSocketdotio, SiJsonwebtokens, SiCloudinary,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript,
  SiTailwindcss, SiHtml5, SiCss, SiRedux, SiBootstrap,
  SiMysql, SiGit, SiGithub, SiPostman, VscCode,
  SiSocketdotio, SiJsonwebtokens, SiCloudinary, TbApi,
}

const skillGroups = [
  {
    label: 'Frontend',
    color: '#6c63ff',
    bgColor: 'rgba(108,99,255,0.08)',
    borderColor: 'rgba(108,99,255,0.15)',
    skills: [
      { name: 'React.js', icon: 'SiReact', level: 90, iconColor: '#61dafb' },
      { name: 'JavaScript', icon: 'SiJavascript', level: 88, iconColor: '#f7df1e' },
      { name: 'HTML5', icon: 'SiHtml5', level: 95, iconColor: '#e34f26' },
      { name: 'CSS3', icon: 'SiCss', level: 90, iconColor: '#264de4' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', level: 88, iconColor: '#06b6d4' },
      { name: 'Redux Toolkit', icon: 'SiRedux', level: 80, iconColor: '#764abc' },
      { name: 'Bootstrap', icon: 'SiBootstrap', level: 82, iconColor: '#7952b3' },
    ],
  },
  {
    label: 'Backend',
    color: '#43e97b',
    bgColor: 'rgba(67,233,123,0.06)',
    borderColor: 'rgba(67,233,123,0.12)',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs', level: 85, iconColor: '#68a063' },
      { name: 'Express.js', icon: 'SiExpress', level: 85, iconColor: '#ffffff' },
      { name: 'REST APIs', icon: 'TbApi', level: 88, iconColor: '#6c63ff' },
      { name: 'JWT Auth', icon: 'SiJsonwebtokens', level: 85, iconColor: '#000000' },
      { name: 'Socket.IO', icon: 'SiSocketdotio', level: 75, iconColor: '#ffffff' },
      { name: 'Cloudinary', icon: 'SiCloudinary', level: 80, iconColor: '#3448c5' },
    ],
  },
  {
    label: 'Database',
    color: '#38f9d7',
    bgColor: 'rgba(56,249,215,0.06)',
    borderColor: 'rgba(56,249,215,0.12)',
    skills: [
      { name: 'MongoDB', icon: 'SiMongodb', level: 85, iconColor: '#47a248' },
      { name: 'MySQL', icon: 'SiMysql', level: 78, iconColor: '#4479a1' },
    ],
  },
  {
    label: 'Tools',
    color: '#f093fb',
    bgColor: 'rgba(240,147,251,0.06)',
    borderColor: 'rgba(240,147,251,0.12)',
    skills: [
      { name: 'Git', icon: 'SiGit', level: 88, iconColor: '#f05032' },
      { name: 'GitHub', icon: 'SiGithub', level: 88, iconColor: '#ffffff' },
      { name: 'Postman', icon: 'SiPostman', level: 85, iconColor: '#ef5b25' },
      { name: 'VS Code', icon: 'VscCode', level: 92, iconColor: '#007acc' },
    ],
  },
]

function SkillBar({ level, color, inView }) {
  return (
    <div className="progress-bar mt-2">
      <div
        className="progress-fill"
        style={{
          transform: inView ? `scaleX(${level / 100})` : 'scaleX(0)',
          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
        }}
      />
    </div>
  )
}

function SkillCard({ skill, color, delay, inView }) {
  const Icon = iconMap[skill.icon]
  return (
    <motion.div
      variants={staggerItemVariants}
      transition={{ delay }}
      className="glass-card rounded-xl p-4 group hover:scale-105 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {Icon && (
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: `${skill.iconColor}15` }}
            >
              <Icon size={16} style={{ color: skill.iconColor }} />
            </div>
          )}
          <span className="text-white/80 text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-white/30 text-xs font-mono">{skill.level}%</span>
      </div>
      <SkillBar level={skill.level} color={color} inView={inView} />
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })
  const [activeGroup, setActiveGroup] = useState('Frontend')

  const currentGroup = skillGroups.find((g) => g.label === activeGroup) || skillGroups[0]

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="orb orb-green w-72 h-72 top-10 -left-20 opacity-20" />

      <div ref={ref} className="section-container relative z-10">
        <SectionHeading
          tag="Technical Skills"
          title="My Tech"
          highlight="Arsenal"
          subtitle="A curated set of technologies I use to build full-stack web applications from concept to deployment."
          inView={inView}
        />

        {/* Category Tabs */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {skillGroups.map((group) => (
            <button
              key={group.label}
              onClick={() => setActiveGroup(group.label)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeGroup === group.label
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70 glass border border-white/06'
              }`}
              style={
                activeGroup === group.label
                  ? { background: group.bgColor, border: `1px solid ${group.color}40`, color: group.color }
                  : {}
              }
            >
              {group.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeGroup}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8"
        >
          {currentGroup.skills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              color={currentGroup.color}
              delay={i * 0.05}
              inView={inView}
            />
          ))}
        </motion.div>

        {/* Tech Logos Marquee */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 overflow-hidden"
        >
          <p className="text-center text-white/25 text-xs font-mono tracking-[3px] uppercase mb-8">
            Technologies I work with
          </p>
          <div className="flex gap-8 animate-[scroll_20s_linear_infinite]">
            {[...skillGroups.flatMap((g) => g.skills), ...skillGroups.flatMap((g) => g.skills)].map((skill, i) => {
              const Icon = iconMap[skill.icon]
              return (
                <div
                  key={`${skill.name}-${i}`}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl glass border border-white/05 shrink-0 hover:border-white/15 transition-colors duration-300"
                >
                  {Icon && <Icon size={16} style={{ color: skill.iconColor, opacity: 0.7 }} />}
                  <span className="text-white/35 text-xs font-mono whitespace-nowrap">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
