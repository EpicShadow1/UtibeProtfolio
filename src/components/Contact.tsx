import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+1 234 567 890',
      href: 'tel:+1234567890',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Your City, Country',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800 rounded-xl p-8 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-4 text-gray-300 hover:text-primary transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <p>{info.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {['Twitter', 'GitHub', 'LinkedIn'].map((social, index) => (
                    <motion.a
                      key={social}
                      href="#"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-gray-300 hover:text-primary transition-colors"
                    >
                      {social[0]}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;