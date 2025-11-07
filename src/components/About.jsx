import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Heart, Users, Microscope } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: Award,
      title: '15+ Years Excellence',
      description: 'Pioneering vision restoration since 1995 with cutting-edge stem cell therapy',
    },
    {
      icon: Microscope,
      title: 'Advanced Technology',
      description: 'State-of-the-art cryobank and specialized laboratories for cell therapy',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highest qualified specialists practicing in leading European and US clinics',
    },
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Compassionate approach focused on restoring not just vision, but quality of life',
    },
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-calm-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
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
            transition={{ duration: 0.6 }}
            className="inline-block text-primary-600 font-semibold mb-4 text-sm uppercase tracking-wider"
          >
            About Our Centre
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
            A Chance to{' '}
            <span className="bg-gradient-to-r from-primary-600 to-calm-600 bg-clip-text text-transparent">
              See Again
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mardaleishvili Medical Centre has successfully operated in Tbilisi since 1995. 
            Our innovative stem cell therapy has transformed vision restoration, offering hope 
            where traditional treatments fall short.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-calm-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-calm-500 opacity-80 group-hover:opacity-70 transition-opacity" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                whileHover={{ opacity: 0.4 }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-bold text-lg">
                  {['Advanced Equipment', 'Expert Care', 'Patient Success'][index]}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
