import { ExternalLink, FileText, Youtube } from "lucide-react"

export function PortfolioProjectsSection() {
  const projects = [
    {
      name: "Phase 2 Project",
      type: "Team Project",
      description: "Our comprehensive Phase 2 project showcasing collaborative development and innovative solutions.",
      resources: [
        {
          label: "Project Video",
          icon: Youtube,
          link: "https://youtube.com/shorts/D-yVKTLNTcA?si=_jxexnvok_gmpYU1",
          color: "text-muted-foreground",
        },
        {
          label: "Slide Deck",
          icon: FileText,
          link: "https://docs.google.com/presentation/d/1fqklQstEWYp3alRK0RUH9TI9NFvzq_HuJqhzRkyOZZo/edit?usp=sharing",
          color: "text-muted-foreground",
        },
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Projects & Portfolio</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group p-8 bg-background border border-border rounded-lg hover:border-muted-foreground/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{project.name}</h3>
                  <p className="text-muted-foreground font-semibold">{project.type}</p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.resources.map((resource) => {
                    const Icon = resource.icon

                    return (
                      <a
                        key={resource.label}
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-muted/40 border border-muted/60 rounded-lg flex items-center gap-2 hover:bg-muted/60 hover:border-muted-foreground/40 transition-colors font-medium text-sm text-foreground group-hover:shadow-md"
                      >
                        <Icon className="w-4 h-4" />
                        {resource.label}
                        <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
