import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { useScrollAnimation, slideLeftVariants, slideRightVariants } from '../../hooks/useScrollAnimation'
import SectionHeading from '../ui/SectionHeading'

// ─────────────────────────────────────────────
//  EmailJS Configuration
//  Step 1: https://www.emailjs.com/ par account banao (free)
//  Step 2: "Email Services" → Gmail add karo → Service ID copy karo
//  Step 3: "Email Templates" → template banao → Template ID copy karo
//  Step 4: "Account" → Public Key copy karo
//  Step 5: Niche ke values update karo
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_e4xzhgl'   // apna Service ID
const EMAILJS_TEMPLATE_ID = 'template_j8w4k44'  // apna Template ID
const EMAILJS_PUBLIC_KEY  = 'ps7gprqjAYQADhly5' // apna Public Key

// Template variables (EmailJS template mein ye names use karo):
// {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_name}}

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'saurabh64377@gmail.com',
    href: 'mailto:saurabh64377@gmail.com',
    color: '#6c63ff',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 8853953602',
    href: 'tel:+918853953602',
    color: '#43e97b',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'India (Open to Remote)',
    href: null,
    color: '#f093fb',
  },
]

const socialLinks = [
  { icon: FiGithub,   href: 'https://github.com/saurabh-agrahari',   label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/saurabh-agrahari', label: 'LinkedIn' },
  { icon: FiTwitter,  href: 'https://twitter.com/saurabh_agrahari',   label: 'Twitter' },
]

export default function Contact() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
  const formRef = useRef(null)

  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.from_name.trim())  e.from_name  = 'Naam zaroori hai'
    if (!form.from_email.trim()) e.from_email = 'Email zaroori hai'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email))
      e.from_email = 'Galat email format'
    if (!form.message.trim())    e.message    = 'Message zaroori hai'
    return e
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ from_name: '', from_email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="orb orb-purple w-96 h-96 -bottom-20 -left-20 opacity-15" />
      <div className="orb orb-pink w-64 h-64 top-10 right-0 opacity-10" />

      <div ref={ref} className="section-container relative z-10">
        <SectionHeading
          tag="Contact"
          title="Let's Build"
          highlight="Something Great"
          subtitle="Open to full-stack developer roles, freelance projects, and exciting collaborations. Let's connect!"
          inView={inView}
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* ── Left: Contact Info ── */}
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Get In Touch</h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  Whether you have a project in mind, need a Full Stack Developer for your team,
                  or just want to talk tech — my inbox is always open.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}
                    >
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-white/30 text-xs font-mono mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white/70 text-sm hover:text-white transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white/70 text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/06">
                <div className="text-white/30 text-xs font-mono mb-3">Follow Me</div>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl glass border border-white/08 flex items-center justify-center text-white/40 hover:text-white hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability banner */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-4 animated-border">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <div className="text-white font-semibold text-sm">Available for Work</div>
                <div className="text-white/40 text-xs mt-0.5">
                  Open to full-time, part-time, and freelance opportunities
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              {/* Hidden field — to_name EmailJS template ke liye */}
              <input type="hidden" name="to_name" value="Saurabh Agrahari" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/40 text-xs font-mono mb-2 uppercase tracking-wide">
                    Aapka Naam *
                  </label>
                  <input
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`form-input ${errors.from_name ? 'border-red-500/50 focus:border-red-500/70' : ''}`}
                  />
                  {errors.from_name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <FiAlertCircle size={11} /> {errors.from_name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-mono mb-2 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    name="from_email"
                    type="email"
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`form-input ${errors.from_email ? 'border-red-500/50 focus:border-red-500/70' : ''}`}
                  />
                  {errors.from_email && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <FiAlertCircle size={11} /> {errors.from_email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white/40 text-xs font-mono mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Full Stack Developer Role / Project Inquiry"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-white/40 text-xs font-mono mb-2 uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, team, or opportunity..."
                  rows={5}
                  className={`form-input resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500/70' : ''}`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle size={11} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-primary w-full justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === 'sending' && (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Bhej raha hoon...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <FiCheck size={16} />
                    Message Bhej Diya!
                  </>
                )}
                {(status === 'idle' || status === 'error') && (
                  <>
                    <FiSend size={16} />
                    Message Bhejo
                  </>
                )}
              </button>

              {/* Success Message */}
              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                >
                  <FiCheck size={16} className="text-emerald-400 shrink-0" />
                  <p className="text-emerald-400 text-sm">
                    Message successfully bhej diya! Main 24 ghante mein reply karunga.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <FiAlertCircle size={16} className="text-red-400 shrink-0" />
                  <div>
                    <p className="text-red-400 text-sm font-medium">Message nahi gaya!</p>
                    <p className="text-red-400/70 text-xs mt-0.5">
                      Directly email karo:{' '}
                      <a href="mailto:saurabh64377@gmail.com" className="underline hover:text-red-300">
                        saurabh64377@gmail.com
                      </a>
                    </p>
                  </div>
                </motion.div>
              )}

              {/* EmailJS Setup Note — development mein remove karo */}
              {EMAILJS_SERVICE_ID === 'service_XXXXXXX' && (
                <div className="p-3 rounded-xl bg-yellow-500/08 border border-yellow-500/15">
                  <p className="text-yellow-400/70 text-xs leading-relaxed">
                    <span className="font-semibold text-yellow-400">Setup Required:</span>{' '}
                    EmailJS configure karo. Contact.jsx mein{' '}
                    <code className="bg-white/05 px-1 rounded">EMAILJS_SERVICE_ID</code>,{' '}
                    <code className="bg-white/05 px-1 rounded">EMAILJS_TEMPLATE_ID</code> aur{' '}
                    <code className="bg-white/05 px-1 rounded">EMAILJS_PUBLIC_KEY</code> update karo.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
