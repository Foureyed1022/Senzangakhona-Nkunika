export function SkillsSection() {
  const technical = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "Flutter",
  ]
  const coreSkills = ["Web Design", "UI/UX", "Problem-Solving", "Front-End Development"]

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Technical</h3>
            <div className="flex flex-wrap gap-3">
              {technical.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm font-medium hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
