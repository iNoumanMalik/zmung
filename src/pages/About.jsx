import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Alex Johnson',
      position: 'Founder & CEO',
      bio: 'With over 15 years of experience in digital marketing, Alex founded Zmung Client to help businesses achieve their full potential online.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sophia Chen',
      position: 'Creative Director',
      bio: 'Sophia leads our creative team with her innovative approach to design and branding, ensuring each project stands out from the competition.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Marcus Williams',
      position: 'Head of Photography',
      bio: 'Marcus brings products to life through his lens, specializing in product photography that captures the essence of each brand.',
      image: 'https://randomuser.me/api/portraits/men/68.jpg'
    },
    {
      name: 'Olivia Rodriguez',
      position: 'Digital Marketing Strategist',
      bio: 'Olivia develops data-driven marketing strategies that deliver measurable results for our clients across various industries.',
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      name: 'David Kim',
      position: 'Lead Web Developer',
      bio: 'David creates stunning, functional websites that not only look great but also convert visitors into customers.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      name: 'Emma Thompson',
      position: 'Social Media Manager',
      bio: 'Emma helps brands build meaningful connections with their audience through strategic social media management.',
      image: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
  ];

  // Values data
  const values = [
    {
      title: 'Creativity',
      description: 'We approach every project with fresh ideas and innovative solutions that help our clients stand out.'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from the smallest details to the biggest campaigns.'
    },
    {
      title: 'Integrity',
      description: 'We believe in transparent communication and honest relationships with our clients and team members.'
    },
    {
      title: 'Results',
      description: 'We\'re committed to delivering measurable results that drive real business growth for our clients.'
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -10, transition: { duration: 0.3 } }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Zmung Client</span>
              </h1>
              <p className="text-subtext text-lg mb-6">
                We are a full-service digital marketing agency dedicated to helping businesses grow their online presence and achieve their marketing goals.
              </p>
              <p className="text-subtext text-lg mb-8">
                Founded in 2020, we've worked with businesses of all sizes across various industries, delivering creative solutions and measurable results.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-medium inline-block neon-glow-pink">
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl blur-lg opacity-30 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Zmung Client Team" 
                  className="rounded-xl w-full h-auto relative z-10 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-xl text-subtext mb-8">
              To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful connections with their audience.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-subtext max-w-2xl mx-auto">
              These core values guide everything we do at Zmung Client.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-background p-8 rounded-xl glass"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-white font-bold text-xl mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-subtext">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-subtext max-w-2xl mx-auto">
              Our talented team of experts is passionate about helping businesses succeed in the digital world.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-surface rounded-xl overflow-hidden glass"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative group overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent mb-4">{member.position}</p>
                  <p className="text-subtext">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
              Ready to <span className="gradient-text">Work</span> With Us?
            </h2>
            <p className="text-subtext mb-8 text-lg">
              Let's collaborate to take your digital marketing to the next level.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link to="/contact" className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-medium text-lg neon-glow-pink">
                Contact Us Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;