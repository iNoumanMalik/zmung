import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Portfolio categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'photography', name: 'Photography' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'web', name: 'Web Development' },
    { id: 'social', name: 'Social Media' }
  ];

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: 'TechGear Product Photography',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      client: 'TechGear',
      description: 'A series of high-quality product photographs for TechGear\'s new line of headphones. The images were used for their e-commerce website, social media, and print materials.',
      services: ['Product Photography', 'Image Retouching', 'Creative Direction'],
      results: 'The new product images helped increase online sales by 35% in the first month after launch.',
      gallery: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    },
    {
      id: 2,
      title: 'FreshEats Brand Identity',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      client: 'FreshEats',
      description: 'Complete brand identity design for FreshEats, a new meal delivery service. The project included logo design, color palette, typography, packaging design, and brand guidelines.',
      services: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Packaging Design'],
      results: 'The new brand identity helped FreshEats secure $2M in funding and establish a strong market presence.',
      gallery: [
        'https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      ]
    },
    {
      id: 3,
      title: 'StyleCo Digital Marketing Campaign',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      client: 'StyleCo',
      description: 'A comprehensive digital marketing campaign for StyleCo\'s summer collection. The campaign included social media advertising, email marketing, and influencer collaborations.',
      services: ['Campaign Strategy', 'Social Media Advertising', 'Email Marketing', 'Influencer Management'],
      results: 'The campaign generated a 250% ROI and increased StyleCo\'s social media following by 45%.',
      gallery: [
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
      ]
    },
    {
      id: 4,
      title: 'TechStart Website Redesign',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      client: 'TechStart',
      description: 'Complete redesign of TechStart\'s website to improve user experience, increase conversions, and reflect their updated brand identity. The project included UX/UI design, development, and SEO optimization.',
      services: ['UX/UI Design', 'Web Development', 'SEO Optimization', 'Content Strategy'],
      results: 'The new website increased conversion rates by 75% and reduced bounce rates by 40%.',
      gallery: [
        'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    },
    {
      id: 5,
      title: 'FoodDelight Social Media Management',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      client: 'FoodDelight',
      description: 'Ongoing social media management for FoodDelight, a popular restaurant chain. The service includes content creation, community management, and performance analysis across multiple platforms.',
      services: ['Content Creation', 'Community Management', 'Performance Analysis', 'Hashtag Strategy'],
      results: 'Increased engagement by 120% and grew the following by 25,000 followers in six months.',
      gallery: [
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1611162618479-ee4d1e0e5d5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
      ]
    },
    {
      id: 6,
      title: 'EcoLife Product Launch',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      client: 'EcoLife',
      description: 'Comprehensive marketing strategy for EcoLife\'s new line of sustainable home products. The project included market research, campaign planning, and execution across multiple channels.',
      services: ['Market Research', 'Campaign Planning', 'Multi-channel Marketing', 'Analytics'],
      results: 'The product launch exceeded sales targets by 40% and generated significant media coverage.',
      gallery: [
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    },
    {
      id: 7,
      title: 'Luxury Watch Photography',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      client: 'Timepiece Luxury',
      description: 'High-end product photography for Timepiece Luxury\'s collection of premium watches. The images were used for their catalog, website, and social media campaigns.',
      services: ['Product Photography', 'Lighting Setup', 'Post-processing', 'Art Direction'],
      results: 'The photography helped position the brand in the luxury market and increased average order value by 25%.',
      gallery: [
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80'
      ]
    },
    {
      id: 8,
      title: 'Urban Apparel E-commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      client: 'Urban Apparel',
      description: 'Custom e-commerce website design and development for Urban Apparel, a streetwear fashion brand. The project included UX/UI design, development, payment integration, and mobile optimization.',
      services: ['E-commerce Development', 'UX/UI Design', 'Payment Integration', 'Mobile Optimization'],
      results: 'The new website increased online sales by 200% and improved the mobile conversion rate by 150%.',
      gallery: [
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    }
  ];

  // Filter projects based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };

  // Handle project click
  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  // Handle modal close
  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-subtext text-lg mb-8">
              Explore our latest projects and see how we've helped businesses achieve their digital marketing goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full ${selectedCategory === category.id ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white neon-glow-pink' : 'bg-surface text-text hover:bg-primary/50'} transition-colors`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="bg-surface rounded-xl overflow-hidden glass cursor-pointer group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => openProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-accent">{categories.find(cat => cat.id === project.category)?.name}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-accent mb-4">{categories.find(cat => cat.id === project.category)?.name}</p>
                  <p className="text-subtext line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-subtext text-lg">No projects found in this category. Please select another category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeProject}
          >
            <motion.div 
              className="bg-surface rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto glass"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button 
                  className="absolute top-4 right-4 bg-background/50 p-2 rounded-full text-text hover:text-accent z-10"
                  onClick={closeProject}
                >
                  <X size={24} />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                      <p className="text-accent">{categories.find(cat => cat.id === selectedProject.category)?.name}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Client</h3>
                      <p className="text-subtext">{selectedProject.client}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Description</h3>
                      <p className="text-subtext">{selectedProject.description}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Services</h3>
                      <ul className="text-subtext">
                        {selectedProject.services.map((service, index) => (
                          <li key={index} className="mb-1">{service}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Results</h3>
                      <p className="text-subtext">{selectedProject.results}</p>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-4">
                      {selectedProject.gallery.map((image, index) => (
                        <img 
                          key={index}
                          src={image} 
                          alt={`${selectedProject.title} - Image ${index + 1}`} 
                          className="w-full h-auto rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;