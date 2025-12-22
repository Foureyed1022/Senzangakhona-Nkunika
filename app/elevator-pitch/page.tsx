import { ElevatorPitchSection } from "@/components/elevator-pitch-section"
import { Header } from "@/components/header"

export const metadata = {
  title: "Elevator Pitch - Senzangakhona Nkunika",
  description: "Watch Senzangakhona Nkunika's elevator pitch showcasing skills and expertise as a software engineer.",
}

export default function ElevatorPitchPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ElevatorPitchSection />
      </div>
    </main>
  )
}
