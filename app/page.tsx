import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { WorkSection } from "@/components/work-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { PortfolioProjectsSection } from "@/components/portfolio-projects-section"

export const metadata = {
  title: "Senzangakhona - Software Engineer & Web Designer",
  description:
    "Portfolio of Senzangakhona Nkunika, a software engineer and web designer specializing in creating scalable digital solutions for businesses and communities.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <PortfolioProjectsSection />
      <ContactSection />
    </main>
  )
}
