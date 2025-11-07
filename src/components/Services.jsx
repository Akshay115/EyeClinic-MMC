import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Eye, Sparkles, Focus, Droplet, Baby, Sun } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: Sparkles,
      title: 'Stem Cell Therapy',
      description: 'Revolutionary autologous cell transplantation for optic nerve atrophy, amblyopia, and nystagmus',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0,
    },
    {
      icon: Eye,
      title: 'LASIK Surgery',
      description: 'Advanced laser vision correction for myopia, hyperopia, and astigmatism with precision technology',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.1,
    },
    {
      icon: Focus,
      title: 'Cataract Surgery',
      description: 'Modern phacoemulsification techniques with premium intraocular lens implantation',
      gradient: 'from-teal-500 to-green-500',
      delay: 0.2,
    },
    {
      icon: Droplet,
      title: 'Glaucoma Management',
      description: 'Comprehensive treatment including medication, laser therapy, and surgical interventions',
      gradient: 'from-indigo-500 to-blue-500',
      delay: 0.3,
    },
    {
      icon: Baby,
      title: 'Pediatric Ophthalmology',
      description: 'Specialized care for children\'s vision development and childhood eye conditions',
      gradient: 'from-pink-500 to-rose-500',
      delay: 0.4,
    },
    {
      icon: Sun,
      title: 'Retinal Treatments',
      description: 'Advanced therapy for retinal pigment epithelium dystrophy and other retinal disorders',
      gradient: 'from-amber-500 to-orange-500',
      delay: 0.5,
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#0ea5e9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating Iris Patterns */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, transparent 30%, rgba(14, 165, 233, 0.1) 30%, rgba(14, 165, 233, 0.1) 40%, transparent 40%, transparent 50%, rgba(20, 184, 166, 0.1) 50%, rgba(20, 184, 166, 0.1) 60%, transparent 60%)`,
              top: `${20 + i * 30}%`,
              left: `${10 + i * 40}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
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
            Our Services
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
            Advanced Vision{' '}
            <span className="bg-gradient-to-r from-primary-600 to-calm-600 bg-clip-text text-transparent">
              Treatments
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive eye care solutions combining innovative stem cell therapy with proven surgical excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Animated Gradient Background on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-primary-600 group-hover:to-calm-600 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Animated Line */}
              <motion.div
                className={`mt-6 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: service.delay + 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-calm-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Explore All Treatments
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
