
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Tushar Dhulasawant</h3>
            <p className="text-navy-200">Aerospace Engineer & Embedded Software Specialist</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-800 hover:bg-tech-blue p-3 rounded-full transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-800 hover:bg-tech-blue p-3 rounded-full transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:tushardhulasawant5@gmail.com" 
              className="bg-navy-800 hover:bg-tech-blue p-3 rounded-full transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-navy-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Tushar Dhulasawant. All rights reserved.
          </p>
          
          <div className="flex space-x-8 text-sm text-navy-300">
            <a href="#" className="hover:text-tech-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-tech-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
