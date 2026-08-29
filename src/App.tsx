import { useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react';

type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
};

type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  accent: string;
};

const experience: ExperienceItem[] = [
  {
    period: '2025 — Present',
    title: 'Independent Builder',
    company: 'Personal & academic projects',
    description: 'Designing and prototyping practical software, robotics, and interactive systems.',
    highlights: [
      'Building with Python, OpenCV, Arduino, Raspberry Pi, Unity, and C#.',
      'Exploring the overlap between intelligent software and physical systems.',
    ],
  },
  {
    period: '2023 — 2024',
    title: 'Student Researcher',
    company: 'BGS National Public School',
    description: 'A hands-on approach to science, engineering, and technology competitions.',
    highlights: [
      'Presented a project/paper at the International Paper Presentation, Sri Lanka.',
      'Placed 2nd in the NPS SciQuest and 3rd at the national level of Vignatram.',
    ],
  },
  {
    period: '2022 — Present',
    title: 'Student Developer',
    company: 'Bengaluru, India',
    description: 'Learning by making — from autonomous agriculture to student-focused products.',
    highlights: [
      'Developed projects across robotics, computer vision, game development, and UI/UX.',
      'Practiced troubleshooting, technical research, and turning ideas into working prototypes.',
    ],
  },
];

const projects: Project[] = [
  {
    number: '01',
    title: 'EkagraOS',
    type: 'Student-focused mobile operating system',
    description:
      'A focused mobile experience designed to help students work with intention, blending productivity tools, privacy, and playful interaction.',
    tags: ['Android', 'Software development', 'AI', 'UI/UX'],
    accent: 'mint',
  },
  {
    number: '02',
    title: 'CropBot',
    type: 'Autonomous agricultural weeding robot',
    description:
      'A robotics and vision prototype that combines Arduino Mega, Raspberry Pi, OpenCV, and TensorFlow Lite for smarter agricultural assistance.',
    tags: ['Robotics', 'Arduino', 'Raspberry Pi', 'Python', 'OpenCV'],
    accent: 'coral',
  },
  {
    number: '03',
    title: 'Medieval Open-World RPG',
    type: 'Unity game development project',
    description:
      'An original game world built around exploration, dynamic lighting, responsive gameplay, and a strong sense of place.',
    tags: ['Unity', 'C#', '3D', 'HDRP'],
    accent: 'gold',
  },
];

const skillGroups = [
  { label: 'Programming', skills: ['Python', 'C#', 'C/C++', 'JavaScript', 'HTML', 'CSS'] },
  { label: 'AI & computer vision', skills: ['OpenCV', 'TensorFlow Lite', 'Teachable Machine', 'Image classification', 'On-device AI'] },
  { label: 'Electronics & embedded', skills: ['Arduino', 'Raspberry Pi', 'Microcontrollers', 'Sensors', 'Stepper motors', 'TB6600 drivers'] },
  { label: 'Game development', skills: ['Unity', 'C#', '3D development', 'HDRP', 'Lighting systems'] },
  { label: 'Engineering', skills: ['Robotics', 'Automation', 'Motor control', 'Hardware troubleshooting', 'Mechanical prototyping'] },
];

const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Vinu J home">
          <span className="brand-mark">VJ</span>
          <span className="brand-name">Vinu J.</span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> Bengaluru, India</div>
            <h1>Curious mind.<br /><em>Practical maker.</em></h1>
            <p className="hero-intro">I&apos;m Vinu — a student innovator exploring robotics, intelligent software, and the spaces where technology becomes useful.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">See my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="mailto:vinujeyaraman@gmail.com">vinujeyaraman@gmail.com</a>
            </div>
          </div>
          <div className="hero-side reveal delay-1">
            <div className="portrait-card">
              <div className="portrait-visual"><img className="portrait-photo" src={`${import.meta.env.BASE_URL}Screenshot_2026-08-29_183503.png`} alt="Portrait of Vinu J." /></div>
              <div className="portrait-caption"><span>Currently</span><strong>Building with<br />curiosity.</strong></div>
            </div>
            <div className="scroll-note"><span className="scroll-dot" /> Scroll to explore</div>
          </div>
        </section>

        <section className="intro-band" id="about">
          <div className="section-wrap intro-grid">
            <p className="section-kicker">01 — About</p>
            <div>
              <h2>Technology is most interesting when it <span>meets the real world.</span></h2>
              <p className="large-copy">I&apos;m a Class 11 PCMC student with hands-on experience across electronics, robotics, artificial intelligence, software development, computer vision, and game development. I enjoy building things that are both technically thoughtful and genuinely useful.</p>
              <p className="body-copy">My work is guided by curiosity: understand the system, make a prototype, test it in the real world, and keep improving. Along the way, I&apos;ve developed a strong foundation in programming, hardware prototyping, and technical problem solving.</p>
            </div>
          </div>
        </section>

        <section className="section-wrap section" id="experience">
          <div className="section-heading">
            <p className="section-kicker">02 — Experience</p>
            <h2>A timeline of <span>making things happen.</span></h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.title}`}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content">
                  <p className="overline">{item.company}</p>
                  <h3>{item.title}</h3>
                  <p className="body-copy">{item.description}</p>
                  <ul>
                    {item.highlights.map((highlight) => <li key={highlight}><Check size={15} /> {highlight}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="project-section" id="projects">
          <div className="section-wrap section">
            <div className="section-heading projects-heading">
              <p className="section-kicker">03 — Selected work</p>
              <h2>Ideas turned into <span>working prototypes.</span></h2>
              <p className="body-copy">A few projects from a growing collection of experiments, builds, and ambitious first steps.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className={`project-card ${project.accent}`} key={project.title}>
                  <div className="project-top"><span className="project-number">{project.number}</span><ArrowUpRight size={20} /></div>
                  <div className="project-body"><p className="overline">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p></div>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap section split-section" id="skills">
          <div className="section-heading">
            <p className="section-kicker">04 — Toolkit</p>
            <h2>Tools for turning <span>questions into answers.</span></h2>
          </div>
          <div className="skills-layout">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <p className="overline">{group.label}</p>
                <div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div><p className="section-kicker">05 — Contact</p><h2>Have an interesting<br /><span>problem to solve?</span></h2></div>
            <div className="contact-detail"><p className="large-copy">I&apos;m always open to thoughtful conversations, new ideas, and opportunities to learn by building.</p><a className="contact-email" href="mailto:vinujeyaraman@gmail.com">vinujeyaraman@gmail.com <ArrowUpRight size={20} /></a><div className="contact-socials"><a href="https://www.linkedin.com/in/vinu-j/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} /></a><a href="https://github.com/vinujeyaraman" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={15} /></a></div></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <div className="footer-location"><MapPin size={15} /> Bengaluru, India</div>
        <div className="footer-links"><a href="https://www.linkedin.com/in/vinu-j/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="https://github.com/vinujeyaraman" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="mailto:vinujeyaraman@gmail.com"><Mail size={16} /> Email</a></div>
        <p>© 2025 Vinu J.</p>
      </footer>
    </div>
  );
}

export default App;