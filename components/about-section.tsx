export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Senzangakhona Nkunika is a young web designer and software engineer committed to developing useful,
              technologically advanced solutions for communities and businesses.
            </p>

            <p>
              He is a co-founder of <span className="text-primary font-semibold">SenLain Systems</span>, an expanding
              digital solutions company that offers IT consulting and web design.
            </p>

            <p>
              Senzangakhona is passionate about digital innovation and regional integration. His goal is to create
              scalable systems that improve connectivity and economic opportunities throughout Africa and beyond.
            </p>

            <p>
              Currently, he works as the lead web developer for the Miss Malawi Organisation, combining technical
              expertise with creative problem-solving to deliver impactful digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["Web Design & UI/UX", "Front-End Development", "Creative Problem-Solving", "Client Collaboration"].map(
              (skill) => (
                <div
                  key={skill}
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <p className="font-semibold text-accent">{skill}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
