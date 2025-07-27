import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import { ArrowRight, Camera, Palette, Megaphone, Code, MessageSquare, Briefcase  } from 'lucide-react';
import Hero from '../components/Hero';

// Placeholder for Lottie animation
// In a real project, you would import your Lottie JSON file
const heroLottieData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 180,
  w: 800,
  h: 600,
  nm: "Digital Marketing Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Shape Layer",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [400, 300, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [300, 300], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 0.306, 0.804, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 10, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667, 0.667], y: [1, 1] },
                    o: { x: [0.333, 0.333], y: [0, 0] },
                    t: 0,
                    s: [100, 100]
                  },
                  {
                    i: { x: [0.667, 0.667], y: [1, 1] },
                    o: { x: [0.333, 0.333], y: [0, 0] },
                    t: 90,
                    s: [120, 120]
                  },
                  { t: 180, s: [100, 100] }
                ],
                ix: 3
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 0,
                    s: [0]
                  },
                  { t: 180, s: [360] }
                ],
                ix: 6
              },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Ellipse 1",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0
    }
  ],
  markers: []
};

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Services data
  const services = [
    {
      icon: <Camera className="w-10 h-10 text-accent" />,
      title: 'Photography',
      description: 'High-quality product photography that showcases your products in the best light.',
      link: '/photography'
    },
    {
      icon: <Palette className="w-10 h-10 text-accent" />,
      title: 'Design',
      description: 'Creative content and brand post creation that captures your audience\'s attention.',
      link: '/services#design'
    },
    {
      icon: <Megaphone className="w-10 h-10 text-accent" />,
      title: 'Digital Marketing',
      description: 'Strategic ad campaigns and performance marketing to drive results.',
      link: '/services#digital-marketing'
    },
    {
      icon: <Code className="w-10 h-10 text-accent" />,
      title: 'Website Development',
      description: 'Modern, responsive websites that convert visitors into customers.',
      link: '/services#web-development'
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-accent" />,
      title: 'Social Media Management',
      description: 'Comprehensive social media management to grow your online presence.',
      link: '/services#social-media'
    },
    {
      icon: <Briefcase className="w-10 h-10 text-accent" />,
      title: 'Brand Strategy',
      description: 'Building a cohesive brand identity and positioning for long-term business growth.',
      link: '/services#brand-strategy'
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience to create a tailored strategy.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our team develops a comprehensive marketing strategy aligned with your business objectives.'
    },
    {
      number: '03',
      title: 'Creation',
      description: 'We create high-quality content and assets that resonate with your target audience.'
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'We execute the strategy across relevant channels to maximize reach and engagement.'
    },
    {
      number: '05',
      title: 'Analysis',
      description: 'We continuously monitor performance and optimize campaigns for the best results.'
    }
  ];

  // Stats data
  const stats = [
    { value: '250+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '15+', label: 'Team Members' },
    { value: '5', label: 'Years of Experience' }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: 'Zmung Client transformed our online presence. Their strategic approach to digital marketing helped us increase our conversion rate by 150%. Thanks to the team. Cheers!',
      author: 'Sayyam Tahir',
      position: 'Founder, Noor-e-Jahan Oils',
    },
    {
      quote: 'The team at Zmung Client is incredibly talented. Their photography and design work has given our brand a fresh, modern look that our customers love.',
      author: 'Michael Chen',
      position: 'Founder, StyleCo',
    },
    {
      quote: 'Working with Zmung Client has been a game-changer for our social media presence. They\'ve helped us grow our following and engagement significantly.',
      author: 'Emily Rodriguez',
      position: 'Social Media Manager, FoodDelight',
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={targetRef}
        id="hero"
        className="min-h-screen h-full w-full flex items-center justify-centerbg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]
 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden"
      >
      <Hero/>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-surface relative overflow-hidden" id="services">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">WHAT WE DO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-subtext max-w-2xl mx-auto">
              We offer a comprehensive range of digital marketing services to help your business grow and succeed online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Card background with hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-rose-500/20 rounded-xl opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 blur-sm"></div>

                {/* Card content */}
                <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-xl p-8 h-full flex flex-col transition-all duration-300 group-hover:border-primary/30 z-10">
                  <div className="mb-6 text-accent group-hover:text-primary transition-colors duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-subtext mb-6 flex-grow">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary font-medium relative overflow-hidden group-hover:text-accent transition-colors duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      Learn More <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-background relative overflow-hidden" id="process">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-surface to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-medium">HOW WE WORK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-subtext max-w-2xl mx-auto">
              We follow a proven process to ensure the success of your digital marketing campaigns.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30 hidden md:block"></div>

            {/* Process Steps */}
            <div className="space-y-12 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center text-3xl font-bold gradient-text z-10 shadow-lg shadow-accent/10">
                      {step.number}
                    </div>
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-surface/80 backdrop-blur-sm border border-border p-6 rounded-lg shadow-md transition-all duration-300 hover:border-accent/30 relative overflow-hidden group">
                      {/* Decorative gradient corner */}
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <h3 className="text-2xl font-semibold mb-3 relative z-10">{step.title}</h3>
                      <p className="text-subtext relative z-10">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-surface relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                <div className="text-subtext uppercase tracking-wider text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-surface to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="gradient-text">Feedback</span>
            </h2>
            <p className="text-subtext max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Card background with hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/10 to-rose-500/10 rounded-xl opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 blur-sm"></div>

                {/* Card content */}
                <div className="relative bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-8 h-full transition-all duration-300 group-hover:border-accent/30 z-10">
                  <div className="mb-6 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-text mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    {/* <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4 transform group-hover:scale-110 transition-transform duration-300"
                    /> */}
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-subtext text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-surface relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-surface/80 to-background rounded-xl"></div>

            {/* Border gradient */}
            <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-rose-500/30 backdrop-blur-sm"></div>

            <div className="relative rounded-xl p-8 md:p-12 backdrop-blur-sm">
              <motion.div
                className="max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-4">
                  <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-medium">GET IN TOUCH</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to <span className="gradient-text">Transform</span> Your Digital Presence?
                </h2>
                <p className="text-subtext mb-8">
                  Let's work together to create a digital marketing strategy that drives results for your business.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Link
                    to="/contact"
                    className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition-all bg-gradient-to-br from-indigo-600 via-purple-600 to-rose-500 rounded-lg group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Get Your Free Consultation</span>
                    <span className="relative invisible">Get Your Free Consultation</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
