import Image from 'next/image'
import { ThemeToggle } from './components/theme-toggle'
import { ContactForm } from './components/contact-form'
type Project = {
  title: string
  description: string
  tech: string[]
}

const projects: Project[] = [
  {
    title: 'LifeSync',
    description:
      'A full-stack MERN application for productivity and wellness tracking.',
    tech: ['React', 'Node', 'MongoDB'],
  },
  {
    title: 'Job Portal',
    description:
      'A responsive job portal with authentication, job listings, and applications.',
    tech: ['React', 'Express', 'MongoDB'],
  },
  {
    title: 'MediSense AI',
    description:
      'AI-powered medical chatbot built using LLaMA-2 for healthcare queries.',
    tech: ['React', 'AI', 'NLP'],
  },
  {
    title: 'Matic Property Management',
    description:
      'Property management platform with listings, rent tracking, and inquiries.',
    tech: ['React', 'Tailwind', 'UI'],
  },
]



export default function Home() {
return (
<main className="min-h-screen px-5 md:px-8">
 <div className="mx-auto max-w-6xl">
<nav className="flex justify-between items-center py-6">
<h1 className="text-xl font-bold">Kartik Singh</h1>
<ThemeToggle />
</nav>


{/* Hero */}
{/* Hero */}
<section className="mt-16 grid gap-12 md:grid-cols-2 items-center">
  {/* LEFT SIDE – TEXT */}
  <div className="space-y-6">
    <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm">
      👋 Available for Internships & Freelance
    </span>

    <h1>
      Hi, I’m <span className="text-primary">Kartik Singh</span>
    </h1>

    <p className="max-w-xl">
      Full Stack Developer passionate about building scalable, modern web
      applications with clean UI and strong backend architecture.
    </p>

    <div className="flex gap-4">
      <a
        href="#contact"
        className="rounded-xl bg-primary px-6 py-3 text-primary-foreground font-medium"
      >
        Contact Me
      </a>
      <a
        href="/resume.pdf"
        className="rounded-xl border px-6 py-3 font-medium"
      >
        Download Resume
      </a>
    </div>
  </div>

  {/* RIGHT SIDE – PROFILE IMAGE */}
  <div className="flex justify-center md:justify-end">
    <div className="relative h-64 w-64 md:h-80 md:w-80">
      <Image
        src="/profile.jpeg"
        alt="Kartik Singh"
        fill
        priority
        className="rounded-full object-cover border border-white/10 shadow-2xl"
      />
    </div>
  </div>
</section>


<section id="experience" className="mt-24">
  <h3 className="mb-6 text-2xl font-semibold">Experience</h3>

  <div className="space-y-6">
    <div className="rounded-2xl border bg-card p-6">
      <h4 className="font-semibold">Full Stack Developer Intern</h4>
      <p className="text-sm text-muted-foreground">
        Logic Zephyr · Oct 2025 – Present
      </p>
      <p className="mt-2 text-sm">
        Working on scalable React + Node.js applications, API development,
        and production-ready UI.
      </p>
    </div>

    <div className="rounded-2xl border bg-card p-6">
      <h4 className="font-semibold">Full Stack Intern</h4>
      <p className="text-sm text-muted-foreground">
        Creative Technology · Jul 2024 – Sep 2024
      </p>
      <p className="mt-2 text-sm">
        Built REST APIs, fixed bugs across stack, and improved performance.
      </p>
    </div>
  </div>
</section>




{/* Projects */}
<section id="projects" className="mt-20">
  <h3 className="mb-6 text-2xl font-semibold">Featured Projects</h3>

  <div className="grid gap-6 md:grid-cols-2">
    {projects.slice(0, 4).map((project) => (
      <div
        key={project.title}
        className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-xl"
      >
        <h4 className="text-lg font-semibold">{project.title}</h4>
        <p className="mt-2 text-sm">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {project.tech.map((t) => (
            <span key={t} className="rounded-lg bg-muted px-3 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>

  {/* Show More */}
  <div className="mt-10 text-center">
    <a
      href="/projects"
      className="inline-block rounded-xl border px-6 py-3 font-medium hover:bg-muted"
    >
      Show More Projects →
    </a>
  </div>
</section>
<section id="skills" className="mt-24">
  <h3 className="mb-6 text-2xl font-semibold">Skills</h3>

  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'Tailwind CSS',
      'TypeScript',
      'Git & GitHub',
      'C/C++'
    ].map((skill) => (
      <div
        key={skill}
        className="rounded-xl border bg-card px-4 py-3 text-center font-medium"
      >
        {skill}
      </div>
    ))}
  </div>
</section>



{/* Contact */}
<section id="contact" className="mt-20 mb-20 max-w-xl mx-auto">
  <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
  <ContactForm />
</section>

</div>
</main>
)
}