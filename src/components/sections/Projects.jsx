import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation'
import { projects, categories } from '../../data/projects'
import SectionHeading from '../ui/SectionHeading'

const ProjectMockup = ({ project }) => {
  const colors = {
    blue: { bg: '#4F8CF7', lines: ['#8CAFED', '#6B9FEF', '#4F8CF7'] },
    purple: { bg: '#9B87F5', lines: ['#C4B5FD', '#AB9BF5', '#9B87F5'] },
    cyan: { bg: '#2AB8D4', lines: ['#67E8F9', '#3CD0E8', '#2AB8D4'] },
    emerald: { bg: '#34D399', lines: ['#6EE7B7', '#4CDA9F', '#34D399'] },
  }
  const c = colors[project.gradient] || colors.blue

  return (
    <div
      className="w-full h-full flex flex-col"
      style={{
        background: `linear-gradient(135deg, ${c.bg}10, ${c.bg}05)`,
      }}
    >
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.04]">
        <div className="w-2 h-2 rounded-full bg-red-400/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
        <div className="w-2 h-2 rounded-full bg-green-400/50" />
        <div className="flex-1 mx-3 h-4 rounded bg-white/[0.03] flex items-center px-2">
          <span className="text-white/[0.12] text-[8px] font-mono truncate">localhost:3000/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
      </div>
      {/* Content area */}
      <div className="flex-1 p-4 space-y-3">
        <div className="h-3 rounded" style={{ background: `${c.bg}25`, width: '60%' }} />
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((j) => (
            <div key={j} className="aspect-square rounded-lg" style={{ background: `${c.bg}12` }} />
          ))}
        </div>
        <div className="space-y-1.5">
          {c.lines.map((line, li) => (
            <div key={li} className="h-2 rounded" style={{ background: `${c.bg}18`, width: `${80 - li * 15}%` }} />
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <div className="h-6 w-16 rounded-full" style={{ background: `${c.bg}35` }} />
          <div className="h-6 w-12 rounded-full border" style={{ borderColor: `${c.bg}25` }} />
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
            style={{ background: 'rgba(79,140,247,0.25)', border: '1px solid rgba(79,140,247,0.3)', color: '#8CAFED' }}>
            Featured
          </div>
        )}
        {/* Hover overlay */}
        <div className="project-card-overlay flex items-center justify-center gap-3 group-hover:opacity-100">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/[0.12] flex items-center justify-center text-white hover:bg-accent/25 transition-all duration-300 hover:scale-110"
            >
              <FiExternalLink size={16} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/[0.12] flex items-center justify-center text-white hover:bg-accent/25 transition-all duration-300 hover:scale-110"
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
        <p className="text-[#8D95A3] text-sm leading-relaxed mb-4 line-clamp-2">
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

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {project.features.slice(0, 2).map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-xs text-[#8D95A3] leading-relaxed">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0 mt-1"
                style={{ background: project.accentColor }}
              />
              {feat}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono"
              style={{ color: project.accentColor }}
            >
              Live Demo →
            </a>
          ) : (
            <span className="text-xs font-mono text-[#4B5563]">{project.liveLabel || 'No Live Demo'}</span>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#C8D2E0] transition-colors duration-300 group/link"
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
                  ? 'text-white bg-accent/8 border border-accent/25'
                  : 'text-[#A1AAB5] hover:text-[#D0D7E2] glass border border-white/[0.04]'
              }`}
            >
              {categoryLabels[cat]}
              <span className="ml-2 text-xs opacity-40">
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
            href="https://github.com/Saurabh64377"
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