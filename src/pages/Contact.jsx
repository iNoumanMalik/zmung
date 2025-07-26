import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);
    
    // Simulate API call
    try {
      // In a real application, you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-subtext text-lg mb-8">
              Have a project in mind? We'd love to hear about it. Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="glass p-8 rounded-2xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                className="text-2xl font-bold mb-6"
                variants={itemVariants}
              >
                Send Us a Message
              </motion.h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className={`w-full bg-background/50 border ${errors.name ? 'border-error' : 'border-border'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors peer pt-7 pb-2`}
                      placeholder=" "
                      {...register('name', { required: 'Name is required' })}
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-sm text-subtext duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-accent"
                    >
                      Your Name
                    </label>
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-error">{errors.name.message}</p>}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className={`w-full bg-background/50 border ${errors.email ? 'border-error' : 'border-border'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors peer pt-7 pb-2`}
                      placeholder=" "
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm text-subtext duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-accent"
                    >
                      Your Email
                    </label>
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-error">{errors.email.message}</p>}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      className={`w-full bg-background/50 border ${errors.subject ? 'border-error' : 'border-border'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors peer pt-7 pb-2`}
                      placeholder=" "
                      {...register('subject', { required: 'Subject is required' })}
                    />
                    <label
                      htmlFor="subject"
                      className="absolute text-sm text-subtext duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-accent"
                    >
                      Subject
                    </label>
                  </div>
                  {errors.subject && <p className="mt-1 text-sm text-error">{errors.subject.message}</p>}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows="4"
                      className={`w-full bg-background/50 border ${errors.message ? 'border-error' : 'border-border'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors peer pt-7`}
                      placeholder=" "
                      {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute text-sm text-subtext duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-accent"
                    >
                      Your Message
                    </label>
                  </div>
                  {errors.message && <p className="mt-1 text-sm text-error">{errors.message.message}</p>}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center neon-glow-pink disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send size={18} className="ml-2" />
                      </span>
                    )}
                  </button>
                </motion.div>

                {isSuccess && (
                  <motion.div 
                    className="p-4 bg-success/20 border border-success text-success rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Your message has been sent successfully. We'll get back to you soon!
                  </motion.div>
                )}

                {isError && (
                  <motion.div 
                    className="p-4 bg-error/20 border border-error text-error rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    There was an error sending your message. Please try again later.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="glass p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-lg mr-4">
                      <MapPin className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-text">Our Location</h3>
                      <p className="text-subtext">123 Marketing Street, Creative District, New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-lg mr-4">
                      <Phone className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-text">Phone Number</h3>
                      <p className="text-subtext">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-lg mr-4">
                      <Mail className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-text">Email Address</h3>
                      <p className="text-subtext">hello@zmungclient.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-lg mr-4">
                      <Clock className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-text">Working Hours</h3>
                      <p className="text-subtext">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-subtext">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="glass p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/20 p-4 rounded-full text-text hover:text-accent hover:bg-primary/40 transition-colors"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="glass overflow-hidden rounded-2xl h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564562986!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zmung Client Office Location"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;