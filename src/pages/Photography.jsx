import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  // Photography gallery data
  const categories = [
    { id: 'product', name: 'Product Photography' },
    { id: 'fashion', name: 'Fashion Photography' },
    { id: 'food', name: 'Food Photography' },
    { id: 'event', name: 'Event Photography' },
    { id: 'real-estate', name: 'Real Estate Photography' }
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Headphones on colorful background',
      category: 'product',
      width: 1170,
      height: 780
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
      alt: 'Smart watch on wrist',
      category: 'product',
      width: 1099,
      height: 733
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      alt: 'Woman in fashion outfit',
      category: 'fashion',
      width: 764,
      height: 1146
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      alt: 'Model in white dress',
      category: 'fashion',
      width: 720,
      height: 1080
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      alt: 'Healthy food bowl',
      category: 'food',
      width: 880,
      height: 1320
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80',
      alt: 'Pizza with basil',
      category: 'food',
      width: 781,
      height: 1172
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      alt: 'Concert crowd',
      category: 'event',
      width: 1169,
      height: 780
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Business conference',
      category: 'event',
      width: 1170,
      height: 780
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
      alt: 'Modern house exterior',
      category: 'real-estate',
      width: 1153,
      height: 769
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Luxury home interior',
      category: 'real-estate',
      width: 1170,
      height: 780
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Red Nike sneakers',
      category: 'product',
      width: 1170,
      height: 780
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80',
      alt: 'Perfume bottles',
      category: 'product',
      width: 1333,
      height: 2000
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
      alt: 'Woman in summer fashion',
      category: 'fashion',
      width: 1173,
      height: 1760
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      alt: 'Pasta dish with tomatoes',
      category: 'food',
      width: 687,
      height: 1031
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      alt: 'Wedding ceremony',
      category: 'event',
      width: 1169,
      height: 780
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80',
      alt: 'Single family home',
      category: 'real-estate',
      width: 1175,
      height: 783
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPhotos, setFilteredPhotos] = useState(photos);

  // Filter photos based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPhotos(photos);
      setTotalImages(photos.length);
    } else {
      const filtered = photos.filter(photo => photo.category === selectedCategory);
      setFilteredPhotos(filtered);
      setTotalImages(filtered.length);
    }
    setImagesLoaded(0);
  }, [selectedCategory]);

  // Handle image click
  const openLightbox = (photo, index) => {
    setSelectedImage(photo);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Handle lightbox close
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Handle next image
  const nextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredPhotos[nextIndex]);
  };

  // Handle previous image
  const prevImage = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredPhotos[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % filteredPhotos.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(filteredPhotos[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(filteredPhotos[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, filteredPhotos]);

  // Handle image load
  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
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
              Our <span className="gradient-text">Photography</span> Services
            </h1>
            <p className="text-subtext text-lg mb-8">
              Explore our high-quality photography work across various categories. We specialize in creating stunning visuals that capture the essence of your brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              className={`px-6 py-2 rounded-full ${selectedCategory === 'all' ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white neon-glow-pink' : 'bg-surface text-text hover:bg-primary/50'} transition-colors`}
              onClick={() => setSelectedCategory('all')}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              All Photos
            </motion.button>
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

          {/* Loading indicator */}
          {imagesLoaded < totalImages && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
          )}

          {/* Masonry Gallery */}
          <motion.div 
            className={`columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 ${imagesLoaded < totalImages ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
            variants={containerVariants}
            initial="hidden"
            animate={imagesLoaded === totalImages ? "visible" : "hidden"}
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div 
                key={photo.id}
                className="break-inside-avoid mb-4 overflow-hidden rounded-xl glass cursor-pointer group relative"
                variants={itemVariants}
                onClick={() => openLightbox(photo, index)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium">{photo.alt}</p>
                    <p className="text-accent text-sm">{categories.find(cat => cat.id === photo.category)?.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredPhotos.length === 0 && imagesLoaded === totalImages && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-subtext text-lg">No photos found in this category. Please select another category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-6xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-background/50 p-2 rounded-full text-text hover:text-accent z-10"
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 p-2 rounded-full text-text hover:text-accent z-10"
                onClick={prevImage}
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 p-2 rounded-full text-text hover:text-accent z-10"
                onClick={nextImage}
              >
                <ChevronRight size={24} />
              </button>
              
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-h-[85vh] max-w-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-white bg-background/50 inline-block px-4 py-2 rounded-full backdrop-blur-sm">
                  {selectedImage.alt} - {categories.find(cat => cat.id === selectedImage.category)?.name}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photography;