
import React from 'react';
import { Code, Rocket, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Passionate about solving complex aerospace challenges through innovative software solutions</p>
      
      <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
        {/* Personal Photo */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64 rounded-full border-4 border-tech-blue overflow-hidden shadow-xl">
            <Avatar className="w-full h-full">
              <AvatarImage src="/lovable-uploads/00796e69-5a01-4e42-89ea-06c58600f47f.png" alt="Tushar Dhulasawant" className="object-cover" />
              <AvatarFallback className="bg-gradient-to-br from-navy-700 to-navy-900 text-white text-4xl">TD</AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        {/* Professional Summary */}
        <div className="w-full md:w-2/3 mt-8 md:mt-0">
          <h3 className="text-2xl font-semibold text-navy-800 mb-4">Professional Summary</h3>
          <p className="text-navy-700 mb-4">
            I am an Aerospace Engineer with a specialized focus on embedded software development and control systems design. 
            My expertise bridges the gap between aerospace engineering principles and advanced software implementation, 
            enabling me to develop efficient, reliable solutions for complex aerospace challenges.
          </p>
          <p className="text-navy-700">
            With experience working across diverse projects from UAV development to flight control systems, 
            I bring a comprehensive understanding of both theoretical aerospace concepts and practical software engineering. 
            I am passionate about aerospace innovation and committed to developing technologies that push the boundaries of what's possible.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Rocket className="text-tech-blue mr-3 h-8 w-8" />
            <h3 className="text-xl font-semibold">Aerospace Engineering</h3>
          </div>
          <p className="text-navy-700">
            Specialized in aerospace systems with expertise in flight dynamics, control systems, and aerodynamic principles. 
            Passionate about pushing the boundaries of aerospace technology.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Code className="text-tech-blue mr-3 h-8 w-8" />
            <h3 className="text-xl font-semibold">Embedded Software</h3>
          </div>
          <p className="text-navy-700">
            Proficient in developing embedded software solutions for aerospace applications, with a focus on real-time systems, 
            safety-critical applications, and efficient code implementation.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Settings className="text-tech-blue mr-3 h-8 w-8" />
            <h3 className="text-xl font-semibold">Control Systems</h3>
          </div>
          <p className="text-navy-700">
            Expert in designing and implementing control systems for aerospace applications, 
            specializing in model-based development techniques that optimize performance and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
