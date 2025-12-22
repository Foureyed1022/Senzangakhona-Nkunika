import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/10 relative overflow-hidden"
    >
      <div className="absolute top-1/2 -left-96 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-96 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Get in Touch</h2>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Feel free to reach out if you'd like to collaborate, discuss a project, or just say hello!
        </p>

        <div className="space-y-8">
          {/* Primary CTA */}
          <a
            href="mailto:senzangakhonankunika@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-foreground rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            Send me an Email
          </a>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            <a
              href="mailto:senzangakhonankunika@gmail.com"
              className="flex flex-col items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">senzangakhonankunika@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/senzangakhona"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground">LinkedIn</p>
                <p className="text-sm text-muted-foreground">Connect with me</p>
              </div>
            </a>

            <a
              href="https://github.com/Foureyed1022"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground">GitHub</p>
                <p className="text-sm text-muted-foreground">Check my work</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-border text-center text-muted-foreground">
        <p className="text-sm">© 2025 Senzangakhona Nkunika. Crafted with passion and code.</p>
      </footer>
    </section>
  )
}
