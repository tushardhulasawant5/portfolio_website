
import React from 'react';
import { ArrowRight, Code, Rocket, Plane, CircuitBoard, Compass, Satellite, Orbit } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decoration with aerospace elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid lines resembling aerospace HUD/cockpit display */}
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: `linear-gradient(to right, rgba(30, 174, 219, 0.1) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(30, 174, 219, 0.1) 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
        
        {/* Orbit paths */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-tech-blue rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-tech-skyBlue rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-tech-blue rounded-full"></div>
        </div>
        
        {/* Animated satellites */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute w-3 h-3 bg-tech-blue rounded-full" 
               style={{ 
                 top: '0%', 
                 left: '50%', 
                 transform: 'translateX(-50%)',
                 animation: 'orbit 20s linear infinite'
               }}>
          </div>
          <div className="absolute w-2 h-2 bg-tech-skyBlue rounded-full" 
               style={{ 
                 top: '50%', 
                 right: '0%', 
                 transform: 'translateY(-50%)',
                 animation: 'orbit 15s linear infinite 2s'
               }}>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-tech-blue p-1 overflow-hidden shadow-xl bg-navy-800/50 relative">
              <div className="absolute inset-0 rounded-full border-8 border-tech-blue/20"></div>
              <div className="w-full h-full rounded-full overflow-hidden relative z-10">
                <Avatar className="w-full h-full">
                  <AvatarImage src="/lovable-uploads/00796e69-5a01-4e42-89ea-06c58600f47f.png" alt="Tushar Dhulasawant" className="object-cover" />
                  <AvatarFallback className="bg-gradient-to-br from-navy-700 to-navy-900 text-white text-4xl">TD</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Technical elements around the avatar */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-tech-blue rounded-full flex items-center justify-center">
                <Satellite className="text-navy-900 w-5 h-5" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-tech-blue rounded-full flex items-center justify-center">
                <CircuitBoard className="text-navy-900 w-5 h-5" />
              </div>
              
              {/* Technical measurement lines */}
              <div className="absolute top-1/2 -left-24 w-20 border-t border-dashed border-tech-blue/50"></div>
              <div className="absolute top-1/2 -right-24 w-20 border-t border-dashed border-tech-blue/50"></div>
              <div className="absolute -top-24 left-1/2 h-20 border-l border-dashed border-tech-blue/50"></div>
              <div className="absolute -bottom-24 left-1/2 h-20 border-l border-dashed border-tech-blue/50"></div>
            </div>
          </div>
          
          {/* Introduction */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-5 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-tech-blue/20 text-tech-blue rounded-full text-sm font-medium mb-2">
              Aerospace Engineer & Embedded Systems Specialist
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Tushar Subhash<br />
              <span className="text-tech-blue">Dhulasawant</span>
            </h1>
            
            <div className="flex flex-wrap items-center text-tech-blue/80 text-sm font-medium space-x-4 my-3 justify-center md:justify-start">
              <div className="flex items-center my-1">
                <Plane className="w-4 h-4 mr-1 text-tech-blue" />
                <span>Flight Systems</span>
              </div>
              <span className="text-tech-blue/30">•</span>
              <div className="flex items-center my-1">
                <Code className="w-4 h-4 mr-1 text-tech-blue" />
                <span>Embedded Software</span>
              </div>
              <span className="text-tech-blue/30">•</span>
              <div className="flex items-center my-1">
                <Rocket className="w-4 h-4 mr-1 text-tech-blue" />
                <span>Control Systems</span>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-lg mx-auto md:mx-0">
              I am an Aerospace Engineer with a specialized focus on embedded software development and control systems design. 
              My expertise bridges the gap between aerospace engineering principles and advanced software implementation, 
              enabling me to develop efficient, reliable solutions for complex aerospace challenges.
            </p>
            
            <div className="flex flex-wrap space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center md:justify-start pt-4">
              <button onClick={() => scrollToSection('projects')} className="w-full md:w-auto bg-tech-blue/80 hover:bg-tech-blue text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center space-x-2 shadow-md shadow-tech-blue/20 border border-tech-blue/50">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </button>
              
              <button onClick={() => scrollToSection('contact')} className="w-full md:w-auto border-2 border-tech-blue/30 text-tech-blue hover:border-tech-blue/60 hover:text-tech-skyBlue px-6 py-3 rounded-md transition-colors shadow-sm">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        
        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
          <div className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-tech-blue/20 hover:border-tech-blue/40 transition-all">
            <div className="flex items-center mb-4">
              <Rocket className="text-tech-blue mr-3 h-8 w-8" />
              <h3 className="text-xl font-semibold text-white">Aerospace Systems</h3>
            </div>
            <p className="text-gray-300">
              Specialized in aerospace systems with expertise in flight dynamics, control systems, and aerodynamic principles. 
              Passionate about pushing the boundaries of aerospace technology.
            </p>
          </div>
          
          <div className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-tech-blue/20 hover:border-tech-blue/40 transition-all">
            <div className="flex items-center mb-4">
              <Code className="text-tech-blue mr-3 h-8 w-8" />
              <h3 className="text-xl font-semibold text-white">Embedded Software</h3>
            </div>
            <p className="text-gray-300">
              Proficient in developing embedded software solutions for aerospace applications, with a focus on real-time systems, 
              safety-critical applications, and efficient code implementation.
            </p>
          </div>
          
          <div className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-tech-blue/20 hover:border-tech-blue/40 transition-all">
            <div className="flex items-center mb-4">
              <CircuitBoard className="text-tech-blue mr-3 h-8 w-8" />
              <h3 className="text-xl font-semibold text-white">Control Systems</h3>
            </div>
            <p className="text-gray-300">
              Expert in designing and implementing control systems for aerospace applications, 
              specializing in model-based development techniques that optimize performance and reliability.
            </p>
          </div>
        </div>
      </div>
      
      {/* HUD elements */}
      <div className="absolute bottom-5 left-5 right-5 flex justify-between text-xs text-tech-blue/60 font-mono">
        <div>LAT: 37.7749° N</div>
        <div>LONG: 122.4194° W</div>
        <div>ALT: 120 FT</div>
      </div>
    </section>
  );
};

export default Hero;
