import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter size={20} />,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
    },
  ];

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            Utibe
          </motion.a>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} Utibe. All rights reserved.
          </motion.p>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex space-x-6 text-sm"
          >
            <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;