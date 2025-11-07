import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Azamat',
      age: 28,
      country: 'Kazakhstan',
      condition: 'Optic Nerve Atrophy',
      quote: 'I had lost hope of ever seeing clearly again. The stem cell therapy at Eye Clinic MMC gave me back not just my vision, but my independence and confidence. The care was exceptional, and the results exceeded all my expectations.',
      rating: 5,
    },
    {
      name: 'Gulnara',
      age: 'Mother of Ilgar, 14',
      country: 'Azerbaijan',
      condition: 'Pediatric Amblyopia',
      quote: 'Watching my son struggle with his vision was heartbreaking. The team at MMC treated him with such compassion and expertise. Today, he can read, play sports, and live a normal childhood. We are forever grateful.',
      rating: 5,
    },
    {
      name: 'Anna',
      age: 'Mother of Gleb',
      country: 'Russia',
      condition: 'Childhood Nystagmus',
      quote: 'The advanced stem cell treatment transformed my son\'s life. The doctors explained every step with patience and care. The facility is world-class, and the results speak for themselves. Our family cannot thank them enough.',
      rating: 5,
    },
    {
      name: 'Alina',
      age: 34,
      country: 'Russia',
      condition: 'Retinal Dystrophy',
      quote: 'After years of deteriorating vision, I found hope at Eye Clinic MMC. The stem cell therapy was unlike anything I had tried before. My vision has stabilized and even improved. The entire experience was professional and caring.',
      rating: 5,
    },
    {
      name: 'Kristina',
      age: 34,
      country: 'Lithuania',
      condition: 'Complex Eye Condition',
      quote: 'I traveled from Lithuania specifically for this treatment, and it was worth every mile. The international standards of care, combined with cutting-edge technology, gave me results I never thought possible. Truly life-changing.',
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-calm-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block text-primary-600 font-semibold mb-4 text-sm uppercase tracking-wider"
          >
            Patient Stories
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
            Life-Changing{' '}
            <span className="bg-gradient-to-r from-primary-600 to-calm-600 bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from patients whose lives were transformed by our advanced vision restoration treatments
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-100"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-calm-500 rounded-2xl mb-6 shadow-lg"
              >
                <Quote className="w-8 h-8 text-white" strokeWidth={1.5} />
              </motion.div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  >
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text - WITH ITALIC STYLING */}
              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8 italic font-light"
              >
                "{testimonials[currentIndex].quote}"
              </motion.blockquote>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-between flex-wrap gap-4"
              >
                <div>
                  <div className="font-bold text-xl text-gray-900">
                    {testimonials[currentIndex].name}
                    {testimonials[currentIndex].age && `, ${testimonials[currentIndex].age}`}
                  </div>
                  <div className="text-primary-600 font-medium">
                    {testimonials[currentIndex].country} • {testimonials[currentIndex].condition}
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-primary-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-200 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {['International Quality Standards', 'ISO Certified', 'European Standards', 'Patient Safety First'].map(
            (badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 text-gray-700 font-medium"
              >
                {badge}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
