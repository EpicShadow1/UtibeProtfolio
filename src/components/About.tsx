import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/EpicShadow01',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:miracleakpan2828@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building modern web applications and Mobile Application.
                With a strong foundation in both frontend and backend technologies, I create seamless
                user experiences and robust server-side solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in software development started with a curiosity for creating things that
                make a difference. I specialize in React, Javascript, TypeScript, and Node.js, always staying
                up-to-date with the latest technologies and best practices.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-gray-300 hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-secondary p-1">
                <img
                  src="public/Utty_Professional_pics.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;