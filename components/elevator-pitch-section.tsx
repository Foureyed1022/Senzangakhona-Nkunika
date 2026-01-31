"use client"

import { useState } from "react"

// ElevatorPitchSection component has been commented out
// export function ElevatorPitchSection() {
//   const [videoUrl, setVideoUrl] = useState<string>(
//     "https://drive.google.com/file/d/1Zpopp2jfbxIdNunyb-VgxHWD3jHclVuE/preview",
//   )
//
//   return (
//     <section
//       id="elevator-pitch"
//       className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background"
//     >
//       <div className="max-w-4xl mx-auto">
//         <div className="inline-block mb-12">
//           <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Elevator Pitch</h2>
//           <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
//         </div>
//
//         {videoUrl ? (
//           <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-primary/20">
//             <iframe
//               src={videoUrl}
//               title="Elevator Pitch Video"
//               className="w-full h-full"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           </div>
//         ) : (
//           <div className="flex items-center justify-center bg-card border border-dashed border-muted-foreground rounded-lg p-16 min-h-96">
//             <div className="text-center space-y-4">
//               <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
//                 <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-foreground">Elevator Pitch Video</h3>
//                 <p className="text-muted-foreground mt-2">
//                   Video coming soon. Check back later to see my elevator pitch.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }
