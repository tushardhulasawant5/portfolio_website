
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Rocket, Code, CircuitBoard, Compass, Satellite, Gauge, Radar, Plane } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: <CircuitBoard className="h-8 w-8 text-white" />,
      title: "Software & Tools",
      skills: [
        { name: "MATLAB", proficiency: 95 },
        { name: "Simulink", proficiency: 90 },
        { name: "Embedded Coder", proficiency: 85 },
        { name: "Model-Based Design", proficiency: 90 },
        { name: "Git", proficiency: 80 },
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Programming Languages",
      skills: [
        { name: "Embedded C", proficiency: 90 },
        { name: "Python", proficiency: 85 },
        { name: "SQL", proficiency: 75 },
        { name: "MATLAB Scripting", proficiency: 90 },
        { name: "C++", proficiency: 70 },
      ]
    },
    {
      icon: <Compass className="h-8 w-8 text-white" />,
      title: "Standards & Processes",
      skills: [
        { name: "DO-178", proficiency: 85 },
        { name: "DO-331", proficiency: 80 },
        { name: "Agile Methodology", proficiency: 85 },
        { name: "ITIL", proficiency: 75 },
      ]
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Verification & Validation",
      skills: [
        { name: "Requirements Analysis", proficiency: 85 },
        { name: "Test Automation", proficiency: 80 },
        { name: "Continuous Integration", proficiency: 75 },
        { name: "Code Reviews", proficiency: 85 },
      ]
    }
  ];

  const renderSkills = (skills: Skill[]) => {
    return (
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-100 font-medium">{skill.name}</span>
              <span className="text-tech-blue text-sm font-medium">{skill.proficiency}%</span>
            </div>
            <div className="skill-bar bg-navy-600/50">
              <div 
                className="skill-progress bg-gradient-to-r from-tech-blue to-tech-skyBlue"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="section-container relative overflow-hidden py-24">
      {/* Animated radar scanning effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none">
        <div className="absolute inset-0 border-2 border-tech-blue rounded-full"></div>
        <div 
          className="absolute top-1/2 left-1/2 h-1 bg-tech-blue" 
          style={{ 
            width: '50%',
            transformOrigin: 'left center',
            animation: 'radarScan 8s linear infinite'
          }}
        ></div>
        
        <style>
          {`
            @keyframes radarScan {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
          `}
        </style>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technical Specifications</h2>
        <p className="text-xl text-gray-300 mb-10">Specialized expertise across aerospace engineering and software development</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-navy-800/50 backdrop-blur-sm border border-tech-blue/20">
              <div className="bg-gradient-to-r from-tech-blue/80 to-tech-skyBlue/80 text-white p-5 flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <CardContent className="pt-6 bg-navy-800/30">
                {renderSkills(category.skills)}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="bg-navy-800/50 p-3 px-6 rounded-full shadow-md border border-tech-blue/30 hover:border-tech-blue/60 transition-colors flex items-center">
            <span className="w-2 h-2 rounded-full bg-tech-blue mr-2"></span>
            Aerospace Control Systems
          </div>
          <div className="bg-navy-800/50 p-3 px-6 rounded-full shadow-md border border-tech-blue/30 hover:border-tech-blue/60 transition-colors flex items-center">
            <span className="w-2 h-2 rounded-full bg-tech-blue mr-2"></span>
            Flight Dynamics
          </div>
          <div className="bg-navy-800/50 p-3 px-6 rounded-full shadow-md border border-tech-blue/30 hover:border-tech-blue/60 transition-colors flex items-center">
            <span className="w-2 h-2 rounded-full bg-tech-blue mr-2"></span>
            Model Predictive Control
          </div>
          <div className="bg-navy-800/50 p-3 px-6 rounded-full shadow-md border border-tech-blue/30 hover:border-tech-blue/60 transition-colors flex items-center">
            <span className="w-2 h-2 rounded-full bg-tech-blue mr-2"></span>
            System Integration
          </div>
          <div className="bg-navy-800/50 p-3 px-6 rounded-full shadow-md border border-tech-blue/30 hover:border-tech-blue/60 transition-colors flex items-center">
            <span className="w-2 h-2 rounded-full bg-tech-blue mr-2"></span>
            Embedded Systems
          </div>
          <div className="bg-navy-800/50 p-3 px-6 rounded-full shadow-md border border-tech-blue/30 hover:border-tech-blue/60 transition-colors flex items-center">
            <span className="w-2 h-2 rounded-full bg-tech-blue mr-2"></span>
            Unmanned Aerial Vehicles
          </div>
          <div className="bg-navy-800/50 p-3 px-6 rounded-full shadow-md border border-tech-blue/30 hover:border-tech-blue/60 transition-colors flex items-center">
            <span className="w-2 h-2 rounded-full bg-tech-blue mr-2"></span>
            Safety-Critical Systems
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
