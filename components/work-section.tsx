import { ExternalLink } from "lucide-react"

export function WorkSection() {
  const projects = [
    {
      name: "Miss Malawi",
      role: "Web Designer",
      description:
        "Designed clean and engaging digital visuals for Miss Malawi, contributing to the brand's online presence and audience engagement.",
      skills: ["Web Design", "UI/UX", "Branding"],
      link: "https://www.missmw.org",
    },
    {
      name: "Pnachi Furniture",
      role: "Designer & Developer",
      description:
        "Created online visuals and contributed to digital development for Pnachi Furniture, supporting their shift toward a stronger digital brand identity.",
      skills: ["Web Design", "Front-End Development", "Brand Presentation"],
      link: "https://pnachi-furnitures.vercel.app",
    },
  ]

  return (
    <section id="work" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">My Work</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-accent font-semibold mt-1">{project.role}</p>
                  </div>
                  <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
