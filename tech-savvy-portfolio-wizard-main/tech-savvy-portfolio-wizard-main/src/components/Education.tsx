
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Book } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  achievements?: string[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "MSc in Aerospace Engineering",
      institution: "The University of Sheffield",
      period: "2021 - 2022",
      location: "Sheffield, United Kingdom",
      description: "Specialized in control systems and aerospace dynamics, with focus on model-based development",
      achievements: [
        "National Overseas Scholarship recipient",
        "Research project: Model predictive control algorithms for quadcopter stability"
      ]
    },
    {
      degree: "BEng in Aeronautical Engineering",
      institution: "Visvesvaraya Technological University",
      period: "2013 - 2017",
      location: "Karnataka, India",
      description: "Comprehensive engineering program covering aerospace principles, design, and systems",
      achievements: [
        "Graduated with First Class honors",
        "Final year project: Design and implementation of dual-propelled UAV"
      ]
    }
  ];
  
  const certifications: CertificationItem[] = [
    {
      name: "Model-Based Design Certification",
      issuer: "MathWorks",
      date: "2020",
      description: "Advanced certification in using MATLAB/Simulink for model-based design in control systems"
    },
    {
      name: "ITIL Foundation Certificate",
      issuer: "AXELOS",
      date: "2019",
      description: "Certification in IT service management frameworks and best practices"
    }
  ];

  return (
    <section id="education" className="section-container bg-navy-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">Education & Certifications</h2>
      <p className="text-xl text-navy-600 mb-10">Academic qualifications and professional credentials</p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-navy-800 flex items-center">
            <Book className="mr-2 text-tech-blue" /> 
            Academic Qualifications
          </h3>
          
          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl text-navy-900">{item.degree}</h4>
                  <p className="text-tech-blue font-medium">{item.institution}</p>
                  <div className="flex justify-between my-2 text-sm text-navy-600">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                  
                  <p className="text-navy-700 my-3">{item.description}</p>
                  
                  {item.achievements && (
                    <div className="mt-3">
                      <h5 className="font-semibold text-navy-800 mb-2">Achievements:</h5>
                      <ul className="list-disc ml-5 text-navy-600 space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Certifications section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-navy-800 flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 mr-2 text-tech-blue" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Professional Certifications
          </h3>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl text-navy-900">{cert.name}</h4>
                  <div className="flex justify-between my-2">
                    <span className="text-tech-blue font-medium">{cert.issuer}</span>
                    <span className="text-navy-600">{cert.date}</span>
                  </div>
                  
                  {cert.description && (
                    <p className="text-navy-700 mt-2">{cert.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Awards and recognition */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-6 text-navy-800 flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-2 text-tech-blue" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Awards & Recognition
            </h3>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="min-w-4 h-4 rounded-full bg-tech-blue mt-1.5 mr-3"></div>
                    <div>
                      <span className="font-semibold text-navy-800">DXC Champions Award</span>
                      <p className="text-navy-600">Recognized for exceptional contribution to critical software projects</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 h-4 rounded-full bg-tech-blue mt-1.5 mr-3"></div>
                    <div>
                      <span className="font-semibold text-navy-800">National Overseas Scholarship</span>
                      <p className="text-navy-600">Prestigious scholarship for master's studies in aerospace engineering</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 h-4 rounded-full bg-tech-blue mt-1.5 mr-3"></div>
                    <div>
                      <span className="font-semibold text-navy-800">UAV Design Competition - 1st Place</span>
                      <p className="text-navy-600">Awarded for innovative design of tranquilizing drone concept</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
