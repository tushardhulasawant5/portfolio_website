import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Github, ExternalLink, Code, Rocket, Satellite, Plane } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  outcomes: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: "tranquillizing-drone",
      title: "Tranquillizing Drone",
      description: "Designed and developed an innovative drone system for wildlife management, equipped with precision tranquilizer delivery mechanism and autonomous target tracking capabilities.",
      technologies: ["Embedded C", "Control Systems", "Computer Vision", "UAV Design"],
      image: "photo-1487887235947-a955ef187fcc",
      category: "uav",
      outcomes: [
        "Successful prototype development with 95% accuracy in target acquisition",
        "Integrated computer vision system for wildlife identification",
        "Precision control mechanisms for safe tranquilizer delivery",
        "Award-winning design in UAV innovation competition"
      ],
      links: {
        github: "https://github.com/yourusername/tranquillizing-drone",
        demo: "https://demo-url.com/tranquillizing-drone"
      }
    },
    {
      id: "autonomous-flight",
      title: "Autonomous Flight Vehicle with AI",
      description: "Developed an autonomous flight system utilizing artificial intelligence for path planning, obstacle avoidance, and mission execution in complex environments.",
      technologies: ["Python", "Machine Learning", "Control Theory", "MATLAB/Simulink"],
      image: "photo-1518770660439-4636190af475",
      category: "ai",
      outcomes: [
        "Implemented advanced pathfinding algorithms for optimized flight routes",
        "Developed simulation environment for testing various scenarios",
        "Achieved 40% improvement in energy efficiency compared to standard approaches",
        "Successfully demonstrated autonomous navigation through complex obstacle courses"
      ],
      links: {
        github: "https://github.com/yourusername/autonomous-flight-ai"
      }
    },
    {
      id: "dual-propelled-uav",
      title: "Dual Propelled UAV",
      description: "Engineered an innovative dual-propulsion system for unmanned aerial vehicles that combines traditional propellers with secondary propulsion for enhanced maneuverability and stability.",
      technologies: ["Aerodynamics", "Embedded Systems", "Propulsion Design", "Flight Testing"],
      image: "photo-1485827404703-89b55fcc595e",
      category: "uav",
      outcomes: [
        "Increased flight stability by 35% in adverse weather conditions",
        "Extended operational range by 28% compared to conventional designs",
        "Developed custom control algorithms for the dual propulsion system",
        "Published technical findings in aerospace engineering journal"
      ]
    },
    {
      id: "predictive-control",
      title: "Model Predictive Control for Quadcopters",
      description: "Researched and implemented advanced model predictive control algorithms to improve quadcopter stability and performance in challenging flight conditions.",
      technologies: ["MATLAB", "Simulink", "Control Theory", "Optimization Algorithms"],
      image: "photo-1531297484001-80022131f5a1",
      category: "control",
      outcomes: [
        "Developed novel MPC algorithm that reduces energy consumption by 22%",
        "Created comprehensive simulation environment for algorithm testing",
        "Implemented real-time control system with 10ms response time",
        "Successfully transferred from simulation to physical quadcopter prototype"
      ],
      links: {
        github: "https://github.com/yourusername/quadcopter-mpc",
        demo: "https://demo-url.com/quadcopter-mpc"
      }
    }
  ];

  return (
    <section id="projects" className="section-container py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Projects</h2>
        <p className="text-xl text-gray-300 mb-10">Innovative aerospace and software engineering projects</p>
        
        <Tabs defaultValue="all" className="mt-10">
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in bg-navy-800/50 backdrop-blur-sm border border-tech-blue/20 hover:border-tech-blue/40" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="h-48 bg-navy-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-800/90 to-navy-900/95 z-10"></div>
                    <div 
                      className="absolute inset-0 bg-cover bg-center z-0"
                      style={{ 
                        backgroundImage: `url(https://source.unsplash.com/${project.image}?aerospace,technology)`
                      }}
                    ></div>
                    
                    {/* Technical overlay */}
                    <div className="absolute inset-0 z-20 opacity-30">
                      <div className="h-full w-full" 
                           style={{ 
                             backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M0 0h1v1H0zm4 0h1v1H4zm4 0h1v1H8zm4 0h1v1h-1zm4 0h1v1h-1zM0 4h1v1H0zm4 0h1v1H4zm4 0h1v1H8zm4 0h1v1h-1zm4 0h1v1h-1z' fill='%231EAEDB'/%3E%3C/svg%3E")`,
                           }}
                      ></div>
                    </div>
                    
                    <div className="absolute top-0 left-0 z-30">
                      {project.category === 'uav' && <Plane className="h-5 w-5 m-3 text-tech-blue" />}
                      {project.category === 'ai' && <Code className="h-5 w-5 m-3 text-tech-blue" />}
                      {project.category === 'control' && <Rocket className="h-5 w-5 m-3 text-tech-blue" />}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-navy-700/50 text-tech-blue text-xs px-3 py-1 rounded-full border border-tech-blue/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold text-gray-100 mb-2">Key Outcomes:</h4>
                    <ul className="list-disc ml-5 text-gray-300 mb-5 space-y-1">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))}
                    </ul>
                    
                    <div className="flex space-x-4">
                      {project.links?.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-300 hover:text-tech-blue transition-colors">
                          <Github className="h-5 w-5 mr-1" />
                          <span>Code</span>
                        </a>
                      )}
                      
                      {project.links?.demo && (
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-300 hover:text-tech-blue transition-colors">
                          <ExternalLink className="h-5 w-5 mr-1" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
