type Project = {
  title: string
  description: string
  tech: string[]
}

const allProjects: Project[] = [
  // reuse + add more projects here
  {
    title: 'LifeSync',
    description: 'Productivity & wellness MERN app.',
    tech: ['React', 'Node', 'MongoDB'],
  },
  {
    title: 'Job Portal',
    description: 'Job listings and application platform.',
    tech: ['React', 'Express', 'MongoDB'],
  },
  {
    title: 'MediSense AI',
    description: 'AI medical chatbot using LLaMA-2.',
    tech: ['AI', 'NLP', 'React'],
  },
  {
    title: 'Property Management',
    description: 'Rent, listings, and inquiry management.',
    tech: ['React', 'Tailwind'],
  },
  {
    title: 'Food_Delivery-App',
    description: 'Food delivery application with cart and payment features.',
    tech: ['React.js', 'Tailwind'],
  },
  {
    title: 'Mini-Tasks ',
    description: 'Task management application.',
    tech: ['React.js', 'Tailwind', 'MongoDB'],
  },
  {
    title: 'Food_Delivery-App',
    description: 'Food delivery application with cart and payment features.',
    tech: ['React.js', 'Tailwind'],
  },
  {
    title: 'InventoryManagementSystem ',
    description: 'Full-stack inventory management system.',
    tech: ['React.js', 'Tailwind', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Rock-paper-scissor-game',
    description: 'A classic rock-paper-scissor game built with React.',
    tech: ['HTML', 'javascript', 'css', ],
  },
  {
    title: 'note-taking-app',
    description: 'A simple note-taking application built with React.',
    tech: ['react'],
  },
  
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mt-10 mb-10 text-4xl font-bold">All Projects</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {allProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border bg-card p-6 hover:shadow-lg"
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
      </div>
    </main>
  )
}
