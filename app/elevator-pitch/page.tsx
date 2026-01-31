// import { ElevatorPitchSection } from "@/components/elevator-pitch-section"
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
        {/* ElevatorPitchSection has been commented out */}
        {/* <ElevatorPitchSection /> */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Elevator Pitch</h1>
          <p className="text-xl text-muted-foreground">This section has been temporarily disabled.</p>
        </div>
      </div>
    </main>
  )
}
