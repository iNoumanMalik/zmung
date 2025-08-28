import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import {
  ArrowRight,
  Camera,
  Palette,
  Megaphone,
  Code,
  MessageSquare,
  Briefcase,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Hero from '../components/Hero';

// Placeholder for Lottie animation
// In a real project, you would import your Lottie JSON file
const heroLottieData = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 180,
  w: 800,
  h: 600,
  nm: 'Digital Marketing Animation',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Shape Layer',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [400, 300, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              d: 1,
              ty: 'el',
              s: { a: 0, k: [300, 300], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: 'Ellipse Path 1',
              mn: 'ADBE Vector Shape - Ellipse',
              hd: false,
            },
            {
              ty: 'st',
              c: { a: 0, k: [1, 0.306, 0.804, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 10, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: 'Stroke 1',
              mn: 'ADBE Vector Graphic - Stroke',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667, 0.667], y: [1, 1] },
                    o: { x: [0.333, 0.333], y: [0, 0] },
                    t: 0,
                    s: [100, 100],
                  },
                  {
                    i: { x: [0.667, 0.667], y: [1, 1] },
                    o: { x: [0.333, 0.333], y: [0, 0] },
                    t: 90,
                    s: [120, 120],
                  },
                  { t: 180, s: [100, 100] },
                ],
                ix: 3,
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 0,
                    s: [0],
                  },
                  { t: 180, s: [360] },
                ],
                ix: 6,
              },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Ellipse 1',
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
  ],
  markers: [],
};

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Services data
  const services = [
    {
      icon: <Camera className="w-14 h-14 md:w-16 md:h-16" />,
      title: 'Photography',
      description:
        'High-quality product photography that showcases your products in the best light.',
      link: '/photography',
      gradient: 'from-indigo-600 via-purple-600 to-rose-500',
    },
    {
      icon: <Palette className="w-14 h-14 md:w-16 md:h-16" />,
      title: 'Design',
      description:
        "Creative content and brand post creation that captures your audience's attention.",
      link: '/services#design',
      gradient: 'from-blue-600 via-cyan-500 to-emerald-500',
    },
    {
      icon: <Megaphone className="w-14 h-14 md:w-16 md:h-16" />,
      title: 'Digital Marketing',
      description: 'Strategic ad campaigns and performance marketing to drive results.',
      link: '/services#digital-marketing',
      gradient: 'from-amber-500 via-pink-500 to-red-500',
    },
    {
      icon: <Code className="w-14 h-14 md:w-16 md:h-16" />,
      title: 'Website Development',
      description: 'Modern, responsive websites that convert visitors into customers.',
      link: '/services#web-development',
      gradient: 'from-violet-600 via-fuchsia-500 to-pink-500',
    },
    {
      icon: <MessageSquare className="w-14 h-14 md:w-16 md:h-16" />,
      title: 'Social Media Management',
      description: 'Comprehensive social media management to grow your online presence.',
      link: '/services#social-media',
      gradient: 'from-teal-500 via-sky-500 to-indigo-500',
    },
    {
      icon: <Briefcase className="w-14 h-14 md:w-16 md:h-16" />,
      title: 'Brand Strategy',
      description:
        'Building a cohesive brand identity and positioning for long-term business growth.',
      link: '/services#brand-strategy',
      gradient: 'from-lime-400 via-emerald-500 to-teal-500',
    },
  ];

  // Horizontal Services (arrow + swipe) setup
  const slidesCount = services.length;
  const hSectionRef = useRef(null);
  const trackRef = useRef(null);

  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const clampIndex = i => Math.max(0, Math.min(i, slidesCount - 1));
  const goTo = i => setCurrentIndex(clampIndex(i));
  const next = () => goTo(currentIndex + 1);
  const prev = () => goTo(currentIndex - 1);

  // Touch/Swipe support
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const onTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = e => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const threshold = Math.max(50, viewportWidth * 0.08);
    if (touchDeltaX.current > threshold) prev();
    else if (touchDeltaX.current < -threshold) next();
    touchDeltaX.current = 0;
  };

  // Keyboard navigation (Left/Right) when services is visible
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const el = hSectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
      if (!visible) return; // ignore when section not on screen
      e.preventDefault();
      if (e.key === 'ArrowRight') setCurrentIndex((i) => Math.min(i + 1, slidesCount - 1));
      if (e.key === 'ArrowLeft') setCurrentIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [slidesCount]);

  // Helper for per-slide animation feel
  const slideActiveStyle = i => ({
    scale: i === currentIndex ? 1 : 0.96,
    opacity: i === currentIndex ? 1 : 0.6,
  });

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'We start by understanding your business, goals, and target audience to create a tailored strategy.',
    },
    {
      number: '02',
      title: 'Strategy',
      description:
        'Our team develops a comprehensive marketing strategy aligned with your business objectives.',
    },
    {
      number: '03',
      title: 'Creation',
      description:
        'We create high-quality content and assets that resonate with your target audience.',
    },
    {
      number: '04',
      title: 'Implementation',
      description:
        'We execute the strategy across relevant channels to maximize reach and engagement.',
    },
    {
      number: '05',
      title: 'Analysis',
      description:
        'We continuously monitor performance and optimize campaigns for the best results.',
    },
  ];

  // Stats data
  const stats = [
    { value: '250+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '15+', label: 'Team Members' },
    { value: '5', label: 'Years of Experience' },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote:
        'Zmung Client transformed our online presence. Their strategic approach to digital marketing helped us increase our conversion rate by 150%. Thanks to the team. Cheers!',
      author: 'Sayyam Tahir',
      position: 'Founder, Noor-e-Jahan Oils',
    },
    {
      quote:
        'The team at Zmung Client is incredibly talented. Their photography and design work has given our brand a fresh, modern look that our customers love.',
      author: 'Michael Chen',
      position: 'Founder, StyleCo',
    },
    {
      quote:
        "Working with Zmung Client has been a game-changer for our social media presence. They've helped us grow our following and engagement significantly.",
      author: 'Emily Rodriguez',
      position: 'Social Media Manager, FoodDelight',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={targetRef}
        id="hero"
        className="min-h-screen h-full w-full flex items-center justify-center dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden"
      >
        <Hero />
      </section>

      {/* About Section */}

      <section className="py-16 px-4 bg-surface relative overflow-hidden" id="about">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 max-w-4xl ">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              About <span className="gradient-text">Zmung</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We’ve built a complete in-house ecosystem where all your brand’s needs flow seamlessly
              under one roof.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-between my-2"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Our Mission</h3>
                <p className="text-gray-300 text-base">
                  Our mission is to simplify digital growth for businesses by providing every
                  creative and marketing service under one roof. We aim to help brands tell their
                  story and achieve sustainable success without the hassle of managing multiple
                  vendors.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Our Approach</h3>
                <p className="text-gray-300 text-base">
                  We keep everything under one roof. Your product goes to our photography team, then
                  to design, then to social media and marketing—smooth, connected, and hassle-free.
                  We believe in working side by side with you, keeping things clear and creative.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 p-6 bg-dark-600 rounded-lg">
                <div className="text-blue-400 text-2xl">🎯</div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Strategic Focus</h4>
                  <p className="text-gray-300">
                    Data-driven decisions aligned with your business goals.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-dark-600 rounded-lg">
                <div className="text-blue-400 text-2xl">⚡</div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Fast Delivery</h4>
                  <p className="text-gray-300">
                    Quick turnarounds without compromising on quality.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-dark-600 rounded-lg">
                <div className="text-blue-400 text-2xl">🤝</div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Partnership</h4>
                  <p className="text-gray-300">
                    We work as an extension of your team, not just a vendor.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Arrow + Swipe slider */}
      <section id="services" ref={hSectionRef} className="relative">
        {/* Decorative */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="top-8 left-0 right-0 z-30">
          <div className="container mx-auto px-4 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block mb-3 bg-gray-500/10 text-white px-4 py-1 rounded-full text-sm font-medium">
                WHAT WE DO
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="gradient-text">Services</span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Slider viewport */}
        <div
          className="relative h-screen overflow-hidden"
          role="region"
          aria-label="Services slider"
          tabIndex={0}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            ref={trackRef}
            className="flex h-full"
            animate={{ x: -currentIndex * viewportWidth }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            style={{ willChange: 'transform' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="w-screen h-screen flex-none shrink-0 relative flex items-center justify-center"
                animate={slideActiveStyle(index)}
                transition={{ duration: 0.3 }}
              >
                {/* Slide background + gradient frame */}
                <div className="absolute inset-4 sm:inset-6 md:inset-10 rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-white/5">
                  <div className="relative h-full w-full rounded-3xl bg-background/80 backdrop-blur-lg border border-white/10 overflow-hidden">
                    {/* Ambient gradient blob */}
                    <div
                      className={`absolute -top-24 -right-24 w-[32rem] h-[32rem] blur-3xl opacity-30 rounded-full bg-gradient-to-br ${service.gradient}`}
                    ></div>
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          'radial-gradient(50rem 30rem at 20% -10%, rgba(255,255,255,0.5) 0%, transparent 60%), repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 12px)',
                      }}
                    />

                    {/* Slide content */}
                    <div className="relative z-10 h-full w-full grid grid-rows-[auto_1fr_auto] p-6 md:p-12">
                      {/* Top row: Icon + title */}
                      <div className="flex items-center justify-between">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md grid place-items-center text-white"
                        >
                          {service.icon}
                        </motion.div>
                        <div className="text-6xl md:text-7xl font-black text-white/5 select-none">
                          {`0${index + 1}`.slice(-2)}
                        </div>
                      </div>

                      {/* Middle: Text */}
                      <div className="self-center">
                        <motion.h3
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.6, delay: 0.05 }}
                          className="text-4xl md:text-5xl font-bold mb-4"
                          style={{ lineHeight: 1.1 }}
                        >
                          <span
                            className={`bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}
                          >
                            {service.title}
                          </span>
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.6, delay: 0.12 }}
                          className="text-lg md:text-xl text-subtext max-w-3xl"
                        >
                          {service.description}
                        </motion.p>

                        {/* Tags row */}
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.6, delay: 0.18 }}
                          className="flex flex-wrap gap-3 mt-6"
                        >
                          {(service.title.includes('Design')
                            ? ['Brand', 'UI/UX', 'Assets']
                            : service.title.includes('Marketing')
                            ? ['PPC', 'SEO', 'Social']
                            : service.title.includes('Web')
                            ? ['React', 'Performance', 'SEO']
                            : service.title.includes('Social')
                            ? ['Content', 'Growth', 'Engagement']
                            : service.title.includes('Photo')
                            ? ['Studio', 'Retouch', 'E‑com']
                            : ['Strategy', 'Planning', 'Delivery']
                          ).map((tag, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 rounded-full text-xs md:text-sm tracking-wide border border-white/15 text-white/90 bg-white/5 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      </div>

                      {/* Bottom: CTA */}
                      <div className="flex items-end justify-between">
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.6, delay: 0.22 }}
                          className="flex items-center gap-3"
                        >
                          {/* <Link
                            to={service.link}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-medium text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 hover:brightness-110 transition-[filter] duration-300 shadow-[0_8px_24px_-8px_rgba(139,92,246,0.5)]"
                          >
                            Learn more
                            <ArrowRight size={18} />
                          </Link> */}
                        </motion.div>
                        <div className="text-xs uppercase tracking-wider text-subtext">
                          {`0${index + 1}`.slice(-2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrows */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3 md:px-6">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Previous slide"
              className="pointer-events-auto h-11 w-11 md:h-12 md:w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/15 grid place-items-center text-white disabled:opacity-40"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={next}
              disabled={currentIndex === slidesCount - 1}
              aria-label="Next slide"
              className="pointer-events-auto h-11 w-11 md:h-12 md:w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/15 grid place-items-center text-white disabled:opacity-40"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
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
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-gray-500/10 text-white px-4 py-1 rounded-full text-sm font-medium">
                HOW WE WORK
              </span>
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
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500/30 via-accent-500/30 to-primary-500/30 hidden md:block"></div>

            {/* Process Steps */}
            <div className="space-y-12 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center text-3xl font-bold gradient-text z-10 shadow-lg shadow-primary-500/10">
                      {step.number}
                    </div>
                  </div>
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-surface/80 backdrop-blur-sm border border-border p-6 rounded-lg shadow-md transition-all duration-300 hover:border-accent/30 relative overflow-hidden group">
                      {/* Decorative gradient corner */}
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-accent-500/20 via-primary-500/20 to-accent-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

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
                className="text-center p-6 rounded-xl backdrop-blur-sm border shadow-md border-border/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold mb-2 text-accent-500">{stat.value}</div>
                <div className="text-subtext uppercase tracking-wider text-sm font-medium">
                  {stat.label}
                </div>
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
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-gray-500/10 text-white px-4 py-1 rounded-full text-sm font-medium">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="gradient-text">Feedback</span>
            </h2>
            <p className="text-subtext max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working
              with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Card background with hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/10 to-rose-500/10 rounded-xl opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 blur-sm"></div>

                {/* Card content */}
                <div className="relative bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-8 h-full transition-all duration-300 group-hover:border-accent/30 z-10">
                  <div className="mb-6 text-primary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-text mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
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

      {/* Contact Section - Simplified */}
      <section id="contact" className="py-16 px-4 bg-dark-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Reach <span className="text-blue-400">Out</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to grow your business? Let's discuss how we can help you achieve your digital
              marketing goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  if (form.checkValidity && form.checkValidity()) {
                    alert("Message sent! We'll get back to you soon.");
                    form.reset();
                  }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <select className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
                  <option value="">Select a Service</option>
                  <option value="photography">Photography</option>
                  <option value="design">Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="web-development">Web Development</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="brand-strategy">Brand Strategy</option>
                </select>
                <textarea
                  placeholder="Tell us about your project..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                        <p className="text-gray-300">contact@zmungclient.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                        <p className="text-gray-300">+92 334 5012077</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Office</h4>
                        <p className="text-gray-300">Block 5 Street 40, I&T Center G-10/4, Islamabad</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800/30">
                  <h4 className="text-lg font-semibold text-white mb-2">Quick Response</h4>
                  <p className="text-gray-300 text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </motion.div>
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
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-4">
                  <span className="bg-gray-500/10 text-white px-4 py-1 rounded-full text-sm font-medium">
                    GET IN TOUCH
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to <span className="gradient-text">Transform</span> Your Digital Presence?
                </h2>
                <p className="text-subtext mb-8">
                  Let's work together to create a digital marketing strategy that drives results for
                  your business.
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
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                      Get Your Free Consultation
                    </span>
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
