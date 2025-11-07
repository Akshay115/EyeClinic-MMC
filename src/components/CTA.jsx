import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+995 32 2 25 16 89',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@eyeclinic-mmc.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Tbilisi, Georgia',
      color: 'from-teal-500 to-green-500',
    },
  ]

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-calm-700 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.svg
          className="absolute w-full h-full opacity-10"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,400 C480,200 600,600 960,400 C1320,200 1440,600 1440,400 L1440,800 L0,800 Z"
            fill="white"
            animate={{
              d: [
                "M0,400 C480,200 600,600 960,400 C1320,200 1440,600 1440,400 L1440,800 L0,800 Z",
                "M0,500 C480,300 600,700 960,500 C1320,300 1440,700 1440,500 L1440,800 L0,800 Z",
                "M0,400 C480,200 600,600 960,400 C1320,200 1440,600 1440,400 L1440,800 L0,800 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Book Your Consultation Today</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Ready to See the World Clearly?
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Take the first step towards restoring your vision. Our expert team is ready to guide you through 
              your personalized treatment journey.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-primary-700 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex items-center space-x-2 text-blue-100"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Available 24/7 for international patients</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <method.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <div className="text-blue-100 text-sm font-medium mb-1">
                      {method.title}
                    </div>
                    <div className="text-white text-lg font-bold">
                      {method.detail}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-white font-bold text-lg mb-3">
                International Patients Welcome
              </h3>
              <p className="text-blue-100 leading-relaxed">
                We provide comprehensive support for international patients, including visa assistance, 
                accommodation arrangements, and translation services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
