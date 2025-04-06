
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink } from 'lucide-react';

interface Publication {
  id: string;
  title: string;
  conference: string;
  year: string;
  authors: string;
  abstract: string;
  keywords: string[];
  link: string;
}

const Publications = () => {
  const publications: Publication[] = [
    {
      id: "autonomous-uav-navigation",
      title: "Advanced Control Systems for Autonomous UAV Navigation in Complex Environments",
      conference: "IEEE Conference on Aerospace Control Systems",
      year: "2021",
      authors: "Dhulasawant, T.S., Kumar, R., & Patil, M. (2021)",
      abstract: "This paper presents a novel approach to autonomous UAV navigation in complex environments using advanced control algorithms. The proposed system integrates model predictive control with machine learning techniques to optimize flight paths while maintaining stability in challenging conditions. Experimental results demonstrate significant improvements in navigation accuracy and energy efficiency compared to traditional control methods.",
      keywords: ["Autonomous UAV", "Model Predictive Control", "Flight Dynamics", "Navigation Systems"],
      link: "https://ieeexplore.ieee.org/document/example-publication-id"
    },
    {
      id: "energy-efficient-propulsion",
      title: "Energy-Efficient Propulsion Systems for Next-Generation UAVs",
      conference: "International Journal of Aerospace Engineering",
      year: "2022",
      authors: "Dhulasawant, T.S., & Johnson, A. (2022)",
      abstract: "This research introduces an innovative propulsion system design for unmanned aerial vehicles that significantly improves energy efficiency and operational range. The proposed design combines traditional propeller mechanisms with novel aerodynamic principles to achieve optimal thrust-to-power ratios across various flight conditions.",
      keywords: ["Propulsion Systems", "Energy Efficiency", "Aerodynamics", "UAV Design"],
      link: "https://doi.org/example-publication-id"
    }
  ];

  return (
    <section id="publications" className="section-container bg-navy-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">Publications</h2>
      <p className="text-xl text-navy-600 mb-10">Research contributions to aerospace engineering and control systems</p>
      
      <div className="mt-12 max-w-3xl mx-auto">
        {publications.map((publication, index) => (
          <Card key={publication.id} className="animate-fade-in mb-8" style={{ animationDelay: `${index * 0.2}s` }}>
            <CardContent className="p-8">
              <div className="flex items-start">
                <FileText className="h-10 w-10 text-tech-blue mr-4 mt-1 flex-shrink-0" />
                
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {publication.title}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-navy-800 font-medium">{publication.conference}, {publication.year}</span>
                  </div>
                  
                  <div className="italic text-navy-600 mb-6 border-l-4 border-tech-blue pl-4 py-1">
                    {publication.authors}. In Proceedings of the {publication.conference} (pp. 243-248).
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-800 mb-2">Abstract:</h4>
                    <p className="text-navy-700">
                      {publication.abstract}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy-800 mb-2">Keywords:</h4>
                    <div className="flex flex-wrap gap-2">
                      {publication.keywords.map((keyword, idx) => (
                        <span key={idx} className="bg-navy-200 text-navy-700 text-sm px-3 py-1 rounded-full">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-tech-blue hover:underline font-medium"
                  >
                    Access Publication
                    <ExternalLink className="h-5 w-5 ml-2" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-navy-900 mb-4">Current Research Interests</h3>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="min-w-4 h-4 rounded-full bg-tech-blue mt-1.5 mr-3"></div>
              <div>
                <span className="font-semibold text-navy-800">Advanced Control Algorithms for Aerospace Applications</span>
                <p className="text-navy-600">Exploring novel control strategies that optimize performance and safety in aerospace systems.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="min-w-4 h-4 rounded-full bg-tech-blue mt-1.5 mr-3"></div>
              <div>
                <span className="font-semibold text-navy-800">Machine Learning Integration in Flight Control Systems</span>
                <p className="text-navy-600">Investigating the application of machine learning techniques to enhance flight control and decision-making.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="min-w-4 h-4 rounded-full bg-tech-blue mt-1.5 mr-3"></div>
              <div>
                <span className="font-semibold text-navy-800">Energy-Efficient Propulsion Systems for UAVs</span>
                <p className="text-navy-600">Developing next-generation propulsion solutions that maximize range and efficiency for unmanned aerial vehicles.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Publications;
