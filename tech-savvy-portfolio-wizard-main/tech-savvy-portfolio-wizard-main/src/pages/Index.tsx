
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900/95 to-navy-800/90 text-white">
      {/* Aerospace decorative elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%231EAEDB' stroke-width='0.5' stroke-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}></div>
        
        {/* Technical drawings - constellations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="150" r="2" fill="#1EAEDB" />
            <circle cx="450" cy="250" r="2" fill="#1EAEDB" />
            <circle cx="750" cy="550" r="2" fill="#1EAEDB" />
            <circle cx="250" cy="550" r="2" fill="#1EAEDB" />
            <circle cx="650" cy="150" r="2" fill="#1EAEDB" />
            <circle cx="850" cy="350" r="2" fill="#1EAEDB" />
            <circle cx="350" cy="750" r="2" fill="#1EAEDB" />
            <line x1="150" y1="150" x2="450" y2="250" stroke="#1EAEDB" strokeWidth="0.5" />
            <line x1="450" y1="250" x2="750" y2="550" stroke="#1EAEDB" strokeWidth="0.5" />
            <line x1="750" y1="550" x2="250" y2="550" stroke="#1EAEDB" strokeWidth="0.5" />
            <line x1="250" y1="550" x2="650" y2="150" stroke="#1EAEDB" strokeWidth="0.5" />
            <line x1="650" y1="150" x2="850" y2="350" stroke="#1EAEDB" strokeWidth="0.5" />
            <line x1="850" y1="350" x2="350" y2="750" stroke="#1EAEDB" strokeWidth="0.5" />
            <line x1="350" y1="750" x2="150" y2="150" stroke="#1EAEDB" strokeWidth="0.5" />
          </svg>
        </div>
        
        {/* Flight paths */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <div 
              key={index} 
              className="absolute h-0.5 bg-tech-blue/10" 
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: '0',
                width: '100%',
                transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>
        
        {/* Aerospace blueprint */}
        <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
          <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M300,50 L340,90 L460,90 L480,70 L460,50 L300,50" stroke="#1EAEDB" strokeWidth="1" fill="none" />
            <path d="M300,50 L260,90 L140,90 L120,70 L140,50 L300,50" stroke="#1EAEDB" strokeWidth="1" fill="none" />
            <path d="M290,90 L290,190 L270,220 L330,220 L310,190 L310,90" stroke="#1EAEDB" strokeWidth="1" fill="none" />
            <path d="M240,140 L180,170 L180,150 L240,120 L240,140" stroke="#1EAEDB" strokeWidth="1" fill="none" />
            <path d="M360,140 L420,170 L420,150 L360,120 L360,140" stroke="#1EAEDB" strokeWidth="1" fill="none" />
            <circle cx="300" cy="70" r="5" stroke="#1EAEDB" strokeWidth="0.5" fill="none" />
            <line x1="290" y1="70" x2="310" y2="70" stroke="#1EAEDB" strokeWidth="0.5" />
            <line x1="300" y1="60" x2="300" y2="80" stroke="#1EAEDB" strokeWidth="0.5" />
            <text x="320" y="75" fill="#1EAEDB" fontSize="8">CG</text>
            <line x1="180" y1="250" x2="420" y2="250" stroke="#1EAEDB" strokeWidth="0.5" />
            <line x1="180" y1="250" x2="180" y2="260" stroke="#1EAEDB" strokeWidth="0.5" />
            <line x1="420" y1="250" x2="420" y2="260" stroke="#1EAEDB" strokeWidth="0.5" />
            <text x="290" y="265" fill="#1EAEDB" fontSize="8">240.00</text>
          </svg>
        </div>
        
        {/* Particle stars */}
        {Array.from({ length: 50 }).map((_, index) => (
          <div 
            key={index} 
            className="absolute rounded-full bg-white" 
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
      
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
