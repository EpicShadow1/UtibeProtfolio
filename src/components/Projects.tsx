import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const projects = [{
    title: 'Smart Campus Navigation',
    description: 'A mobile application with AR features for campus navigation, helping students and visitors find their way around campus efficiently. Built with React Native frontend and PHP/MySQL backend for robust data management.',
    image: 'https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'AR.js', 'PHP', 'MySQL'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React frontend and PHP/MySQL backend, featuring product listings, shopping cart, user authentication, and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'PHP', 'MySQL', 'Stripe API'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Health & Fitness App',
    description: 'A React Native mobile application with PHP backend for tracking workouts, nutrition, and health metrics. Features secure data storage with MySQL and real-time health monitoring.',
    image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'PHP', 'MySQL', 'Redux'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Property Management System',
    description: 'A comprehensive property management system with React frontend and PHP/MySQL backend, featuring property listings, tenant management, maintenance requests, and payment tracking.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'PHP', 'MySQL', 'REST API'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Task Management Dashboard',
    description: 'A collaborative task management platform built with React and PHP/MySQL, featuring real-time updates, user permissions, file sharing, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'PHP', 'MySQL', 'WebSocket'],
    liveLink: '#',
    githubLink: '#'
  }];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a href={project.liveLink} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLinkIcon size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubLink} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                    <GithubIcon size={18} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;