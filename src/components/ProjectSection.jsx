import { useState, useRef } from 'react';
import { ArrowRight, ExternalLink, Github, X, Play} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SocPocket",
    description: "WORK IN PROGRESS: Administrative app for digital membership cards for university societies, compatible with Apple Wallet and Google Pay. Simplifies verification, ticketing, sponsor rewards, and promotes paper-free membership. There is no link available yet since it is a WORK IN PROGRESS.",
    video: "/projects/Screen Recording 2025-07-21 at 19.23.46.mp4",
    tags: ["React", "Node.js", "Mobile-dev"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Monte Carlo Practice Simulation",
    description: "Monte Carlo simulation to model the possible future values of an investment portfolio over time.",
    image: "/projects/MonteCarlo.png",
    tags: ["Python", "Numpy", "Matplotlib"],
    demoUrl: "#",
    githubUrl: "https://github.com/Sai284/monte-carlo-sim-practice",
  },
  {
    id: 3,
    title: "NBA Predictions",
    description: "Python-based application designed to evaluate predictive models that analyze NBA player performance data. The program retrieves historical game logs via the NBA API, processes the data, and applies machine learning algorithms to assess the efficacy of different prediction models. Results, including actual versus predicted statistics, are visualized using matplotlib to demonstrate the accuracy of the models.",
    image: "/projects/NBAScreenShot.png",
    tags: ["Pandas", "NumPy", "Scikit-Learn",],
    demoUrl: "#",
    githubUrl: "https://github.com/Sai284/nba_predictions",
  },
  {
    id: 4,
    title: "Regression Modelling AMD vs Gold",
    description: "This project examines the relationship between AMD stock prices and gold prices using statistical modeling. Analysis of historical data reveals a strong positive correlation (0.785), with gold prices explaining 62% of AMD's price movements. Includes Python scripts for data collection (`yfinance`), cleaning, and regression analysis.",
    image: "/projects/RegressionScreenShot.png",
    tags: ["Data Analysis", 'Python', 'Financial Modelling'],
    demoUrl: "#",
    githubUrl: "https://github.com/Sai284/Regression_AMD_Gold",
  },
  {
    id: 5,
    title: "WearWellWardrobe Uni Group Project",
    description: "A sustainable clothing management app designed for UK households, offering tailored advice and a personalized questionnaire to guide users. It covers key areas: Access (sustainable sourcing), Maintain (garment care), Store (smart storage), Adapt (upcycling), and Dispose (refuse, reuse, recycle). Built on competitor research, it promotes eco-friendly habits without encouraging overconsumption, helping users extend clothing lifespans responsibly.",
    image: "/projects/WearWellWardrobePlaceholder.PNG",
    tags: ["React", "Django"],
    demoUrl: "#",
    githubUrl: "https://github.com/Sai284/WearWellWardrobe",
  },

];

export const ProjectSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);

  const openModal = (project) => {
    setSelectedVideo(project.video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {" "}
        Featured <span className="text-primary"> Projects </span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects, click on the Github icon to view the repository and run the projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            
            <div className="h-48 overflow-hidden relative cursor-pointer" onClick={()=> project.video && openModal(project)}>
                {project.video ? (
                  <>
                    <video
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      poster="/socpocket-poster.jpg" // Add a poster frame
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-3 bg-white/80 rounded-full">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <img 
                    src={project.image || "/project-placeholder.jpg"} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
            </div>

            {project.video && (
                <button
                  onClick={() => openModal(project)}
                  className="w-full py-2 bg-primary/10 text-primary flex items-center justify-center gap-2 text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  <Play className="h-4 w-4" />
                  Click to View Demo
                </button>
              )}

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>


              </div>

            </div>

          </div>

        ))}

      </div>

      {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative w-full max-w-4xl">
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
              <div className="aspect-video w-full">
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  className="w-full h-full rounded-lg"
                >
                  <source src={selectedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}

      <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Sai284"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

    </div>
  </section>;
}