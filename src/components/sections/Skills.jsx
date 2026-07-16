import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript,
  SiTailwindcss, SiHtml5, SiCss, SiRedux, SiBootstrap,
  SiMysql, SiGit, SiGithub, SiPostman, SiJsonwebtokens, SiNginx,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { FaAws } from 'react-icons/fa'
import { FiServer, FiRefreshCw, FiDatabase } from 'react-icons/fi'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript,
  SiTailwindcss, SiHtml5, SiCss, SiRedux, SiBootstrap,
  SiMysql, SiGit, SiGithub, SiPostman, SiJsonwebtokens, SiNginx,
  TbApi, FaAws, FiServer, FiRefreshCw, FiDatabase,
}

const skillGroups = [
  {
    label: 'Languages',
    color: '#3B82F6',
    bgColor: 'rgba(59,130,246,0.08)',
    skills: [
      { name: 'JavaScript (ES6)', icon: 'SiJavascript', iconColor: '#f7df1e' },
      { name: 'TypeScript', icon: 'SiTypescript', iconColor: '#3178c6' },
      { name: 'SQL', icon: 'FiDatabase', iconColor: '#3B82F6' },
    ],
  },
  {
    label: 'Frontend',
    color: '#8B5CF6',
    bgColor: 'rgba(139,92,246,0.08)',
    skills: [
      { name: 'React.js', icon: 'SiReact', iconColor: '#61dafb' },
      { name: 'Redux Toolkit', icon: 'SiRedux', iconColor: '#764abc' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', iconColor: '#38bdf8' },
      { name: 'HTML5', icon: 'SiHtml5', iconColor: '#e34f26' },
      { name: 'CSS3', icon: 'SiCss', iconColor: '#264de4' },
      { name: 'Bootstrap', icon: 'SiBootstrap', iconColor: '#7952b3' },
    ],
  },
  {
    label: 'Backend',
    color: '#06B6D4',
    bgColor: 'rgba(6,182,212,0.08)',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs', iconColor: '#68a063' },
      { name: 'Express.js', icon: 'SiExpress', iconColor: '#ffffff' },
      { name: 'REST APIs', icon: 'TbApi', iconColor: '#06B6D4' },
      { name: 'JWT Auth', icon: 'SiJsonwebtokens', iconColor: '#fb015b' },
    ],
  },
  {
    label: 'Database',
    color: '#10B981',
    bgColor: 'rgba(16,185,129,0.08)',
    skills: [
      { name: 'MySQL', icon: 'SiMysql', iconColor: '#4479a1' },
      { name: 'MongoDB', icon: 'SiMongodb', iconColor: '#47a248' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    color: '#3B82F6',
    bgColor: 'rgba(59,130,246,0.08)',
    skills: [
      { name: 'AWS EC2', icon: 'FaAws', iconColor: '#ff9900' },
      { name: 'Nginx', icon: 'SiNginx', iconColor: '#009639' },
      { name: 'PM2', icon: 'FiServer', iconColor: '#3B82F6' },
      { name: 'CI/CD', icon: 'FiRefreshCw', iconColor: '#8B5CF6' },
    ],
  },
  {
    label: 'Tools',
    color: '#8B5CF6',
    bgColor: 'rgba(139,92,246,0.08)',
    skills: [
      { name: 'Git', icon: 'SiGit', iconColor: '#f05032' },
      { name: 'GitHub', icon: 'SiGithub', iconColor: '#ffffff' },
      { name: 'Postman', icon: 'SiPostman', iconColor: '#ef5b25' },
    ],
  },
]

function SkillBadge({ skill, color }) {
  const Icon = iconMap[skill.icon]
  return (
    <motion.div
      variants={staggerItemVariants}
      className="glass-card rounded-xl p-4 flex items-center gap-3 group hover:scale-[1.04] transition-all duration-300"
      style={{ '--hover-border': color }}
    >
      {Icon && (
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${skill.iconColor}15` }}
        >
          <Icon size={17} style={{ color: skill.iconColor }} />
        </div>
      )}
      <span className="text-white/80 text-sm font-medium">{skill.name}</span>
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })
  const [activeGroup, setActiveGroup] = useState('Frontend')

  const currentGroup = skillGroups.find((g) => g.label === activeGroup) || skillGroups[0]

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="orb orb-purple w-72 h-72 top-10 -left-20 opacity-20" />

      <div ref={ref} className="section-container relative z-10">
        <SectionHeading
          tag="Technical Skills"
          title="My Tech"
          highlight="Stack"
          subtitle="The languages, frameworks, and tools I use daily to build and ship full-stack web applications."
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
          {currentGroup.skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} color={currentGroup.color} />
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
