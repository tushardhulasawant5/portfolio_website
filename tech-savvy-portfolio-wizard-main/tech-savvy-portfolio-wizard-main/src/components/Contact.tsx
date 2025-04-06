
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Download } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const handleResumeDownload = () => {
    toast({
      title: "Resume Download Started",
      description: "Your download should begin shortly.",
      duration: 3000,
    });
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Me</h2>
      <p className="text-xl text-gray-300 mb-10">Let's discuss your project or opportunities</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* Contact Form */}
        <div className="animate-fade-in">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-navy-800 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                    placeholder="Your message here..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-tech-blue hover:bg-tech-skyBlue text-white transition-colors flex items-center justify-center w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-navy-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-tech-blue" />
                </div>
                <div>
                  <h4 className="text-sm text-navy-600">Email</h4>
                  <a href="mailto:tushardhulasawant5@gmail.com" className="text-navy-900 hover:text-tech-blue transition-colors">
                    tushardhulasawant5@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-tech-blue" />
                </div>
                <div>
                  <h4 className="text-sm text-navy-600">Phone</h4>
                  <a href="tel:+447442265112" className="text-navy-900 hover:text-tech-blue transition-colors">
                    +44 7442265112
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-tech-blue" />
                </div>
                <div>
                  <h4 className="text-sm text-navy-600">Location</h4>
                  <p className="text-navy-900">United Kingdom</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded-full mr-4">
                  <Linkedin className="h-6 w-6 text-tech-blue" />
                </div>
                <div>
                  <h4 className="text-sm text-navy-600">LinkedIn</h4>
                  <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-navy-900 hover:text-tech-blue transition-colors">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-navy-800 rounded-lg shadow-md p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Download Resume</h3>
            <p className="text-navy-100 mb-6">
              Get a comprehensive overview of my professional experience, education, and skills by downloading my resume.
            </p>
            
            <a 
              href="/Tushar_Dhulasawant_Resume.pdf" 
              download
              onClick={handleResumeDownload}
              className="inline-flex items-center bg-white text-navy-800 px-6 py-3 rounded-md hover:bg-navy-50 transition-colors"
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
