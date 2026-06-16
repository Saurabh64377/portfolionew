import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation'
import { projects, categories } from '../../data/projects'
import SectionHeading from '../ui/SectionHeading'

const ProjectMockup = ({ project }) => {
  const colors = {
    'from-violet-600/20 to-purple-600/20': { bg: '#6c63ff', lines: ['#a5a0ff', '#7c75ff', '#6c63ff'] },
    'from-emerald-600/20 to-teal-600/20': { bg: '#43e97b', lines: ['#6fffa3', '#43e97b', '#38d97b'] },
    'from-blue-600/20 to-cyan-600/20': { bg: '#38f9d7', lines: ['#6bffed', '#38f9d7', '#00dbc8'] },
    'from-orange-600/20 to-red-600/20': { bg: '#f093fb', lines: ['#f5b3fc', '#f093fb', '#e070f0'] },
    'from-pink-600/20 to-rose-600/20': { bg: '#ec4899', lines: ['#f472b6', '#ec4899', '#db2777'] },
    'from-yellow-600/20 to-amber-600/20': { bg: '#f59e0b', lines: ['#fbbf24', '#f59e0b', '#d97706'] },
    'from-purple-600/20 to-indigo-600/20': { bg: '#a855f7', lines: ['#c084fc', '#a855f7', '#9333ea'] },
  }
  const c = colors[project.gradient] || colors['from-violet-600/20 to-purple-600/20']

  return (
    <div
      className="w-full h-full flex flex-col"
      style={{
        background: `linear-gradient(135deg, ${c.bg}12, ${c.bg}06)`,
      }}
    >
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/06">
        <div className="w-2 h-2 rounded-full bg-red-400/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
        <div className="w-2 h-2 rounded-full bg-green-400/60" />
        <div className="flex-1 mx-3 h-4 rounded bg-white/05 flex items-center px-2">
          <span className="text-white/20 text-[8px] font-mono truncate">localhost:3000/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
      </div>
      {/* Content area */}
      <div className="flex-1 p-4 space-y-3">
        <div className="h-3 rounded" style={{ background: `${c.bg}30`, width: '60%' }} />
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((j) => (
            <div key={j} className="aspect-square rounded-lg" style={{ background: `${c.bg}15` }} />
          ))}
        </div>
        <div className="space-y-1.5">
          {c.lines.map((line, li) => (
            <div key={li} className="h-2 rounded" style={{ background: `${c.bg}20`, width: `${80 - li * 15}%` }} />
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <div className="h-6 w-16 rounded-full" style={{ background: `${c.bg}40` }} />
          <div className="h-6 w-12 rounded-full border" style={{ borderColor: `${c.bg}30` }} />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      variants={staggerItemVariants}
      className="project-card glass-card rounded-2xl overflow-hidden group"
    >
      {/* Mockup */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <ProjectMockup project={project} />
        {project.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono"
            style={{ background: 'rgba(108,99,255,0.3)', border: '1px solid rgba(108,99,255,0.4)', color: '#a5a0ff' }}>
            Featured
          </div>
        )}
        {/* Hover overlay */}
        <div className="project-card-overlay flex items-center justify-center gap-3 group-hover:opacity-100">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent/30 transition-all duration-300 hover:scale-110"
          >
            <FiExternalLink size={16} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent/30 transition-all duration-300 hover:scale-110"
          >
            <FiGithub size={16} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-bold text-base mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tech-badge text-[10px]">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="tech-badge text-[10px]">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Stats + Links */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            {Object.entries(project.stats).map(([k, v]) => (
              <div key={k} className="text-center">
                <div className="text-white font-bold text-sm" style={{ color: project.accentColor }}>{v}</div>
                <div className="text-white/30 text-[10px] capitalize font-mono">{k}</div>
              </div>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors duration-300 group/link"
          >
            View Code
            <FiArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const categoryLabels = {
    all: 'All Projects',
    fullstack: 'Full Stack',
    frontend: 'Frontend',
    backend: 'Backend',
  }

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="orb orb-pink w-72 h-72 -top-10 right-0 opacity-15" />
      <div className="orb orb-blue w-64 h-64 bottom-20 -left-10 opacity-15" />

      <div ref={ref} className="section-container relative z-10">
        <SectionHeading
          tag="Portfolio"
          title="Featured"
          highlight="Projects"
          subtitle="Real-world applications built with modern tech stacks. Each project demonstrates end-to-end development capability."
          inView={inView}
        />

        {/* Category Filter */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white bg-accent/10 border border-accent/30'
                  : 'text-white/40 hover:text-white/70 glass border border-white/06'
              }`}
            >
              {categoryLabels[cat]}
              <span className="ml-2 text-xs opacity-50">
                ({cat === 'all' ? projects.length : projects.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex justify-center mt-14"
        >
          <a
            href="https://github.com/saurabh-agrahari"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary gap-2 group"
          >
            <FiGithub size={16} />
            View All on GitHub
            <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
