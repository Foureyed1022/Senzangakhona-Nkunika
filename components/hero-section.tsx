"use client"

import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <p className="text-sm font-medium text-primary">Welcome to my portfolio</p>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
                Hey, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Senzangakhona
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Software Engineer • Web Designer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I craft scalable digital solutions combining technical expertise with creative design to deliver clean,
              effective systems that make a real impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                href="#work"
                className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent/10 rounded-lg font-semibold transition-all duration-300"
              >
                View My Work
              </Link>
            </div>

            {/* Updated social links */}
            <div className="flex gap-6 pt-8">
              <a
                href="https://www.linkedin.com/in/senzangakhona"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Foureyed1022"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:senzangakhonankunika@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative h-full min-h-96 flex items-center justify-center">
            <div className="relative z-10">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <Image
                    src="/images/khona.jpeg"
                    alt="Senzangakhona Nkunika - Software Engineer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
