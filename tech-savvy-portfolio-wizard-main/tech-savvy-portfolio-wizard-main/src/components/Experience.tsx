import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Briefcase, CircuitBoard, Plane } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
  icon: "rocket" | "briefcase" | "circuit" | "plane";
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Troubleshooter",
      company: "DHL",
      period: "2024 - Present",
      responsibilities: [
        "Lead software troubleshooting efforts for critical logistics systems",
        "Diagnose and resolve complex software issues in real-time environments",
        "Collaborate with cross-functional teams to implement software improvements"
      ],
      achievements: [
        "Reduced system downtime by 30% through implementation of proactive monitoring tools",
        "Spearheaded development of automated diagnostic procedures"
      ],
      icon: "circuit"
    },
    {
      title: "Associate Professional Software Engineer",
      company: "DXC Technology",
      period: "2020 - 2021",
      responsibilities: [
        "Developed and maintained software solutions for enterprise clients",
        "Implemented model-based design approaches for software systems",
        "Collaborated in Agile development teams to deliver project milestones",
        "Performed comprehensive testing and validation of software components"
      ],
      achievements: [
        "Received DXC Champions Award for exceptional contribution to critical project",
        "Led optimization initiative that improved system performance by 25%"
      ],
      icon: "briefcase"
    },
    {
      title: "Technical Lead",
      company: "Airetards",
      period: "2017 - 2020",
      responsibilities: [
        "Led technical development of unmanned aerial vehicle systems",
        "Designed and implemented control algorithms for autonomous flight",
        "Managed integration of embedded software components with hardware systems",
        "Conducted flight tests and performance analysis"
      ],
      achievements: [
        "Successfully designed and implemented dual propelled UAV prototype",
        "Developed innovative tranquilizing drone solution for wildlife management",
        "Published research on autonomous control systems in IEEE conference"
      ],
      icon: "rocket"
    },
    {
      title: "Intern Trainee",
      company: "Air India Engineering Services Ltd.",
      period: "2019",
      responsibilities: [
        "Assisted in aircraft maintenance procedures and documentation",
        "Learned industry standards and safety protocols",
        "Participated in system troubleshooting and diagnostic processes",
        "Contributed to maintenance documentation and reporting"
      ],
      icon: "plane"
    }
  ];

  const getIcon = (iconType: string) => {
    switch(iconType) {
      case 'rocket':
        return <Rocket className="h-10 w-10 text-tech-blue" />;
      case 'briefcase':
        return <Briefcase className="h-10 w-10 text-tech-blue" />;
      case 'circuit':
        return <CircuitBoard className="h-10 w-10 text-tech-blue" />;
      case 'plane':
        return <Plane className="h-10 w-10 text-tech-blue" />;
      default:
        return <Briefcase className="h-10 w-10 text-tech-blue" />;
    }
  };

  return (
    <section id="experience" className="section-container bg-gradient-to-b from-navy-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">Experience</h2>
      <p className="text-xl text-navy-600 mb-10">Professional trajectory across aerospace and software engineering domains</p>
      
      <div className="space-y-8 mt-12">
        {experiences.map((exp, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <Card className="border-l-4 border-tech-blue overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Icon Section */}
                  <div className="bg-navy-100 p-6 flex items-center justify-center md:w-1/6">
                    {getIcon(exp.icon)}
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 md:w-5/6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-navy-900">{exp.title}</h3>
                      <span className="text-tech-blue font-medium bg-tech-blue/10 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-navy-700 font-semibold mb-4">
                      {exp.company}
                    </p>
                    
                    <h4 className="font-semibold text-navy-700 mb-2 flex items-center">
                      <span className="mr-2 bg-tech-blue h-1 w-1 rounded-full inline-block"></span>
                      Responsibilities:
                    </h4>
                    <ul className="ml-6 mb-4 text-navy-600 space-y-1 list-disc">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    
                    {exp.achievements && (
                      <>
                        <h4 className="font-semibold text-navy-700 mb-2 flex items-center">
                          <span className="mr-2 bg-tech-blue h-1 w-1 rounded-full inline-block"></span>
                          Achievements:
                        </h4>
                        <ul className="ml-6 text-navy-600 space-y-1 list-disc">
                          {exp.achievements.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
