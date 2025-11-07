import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Zap, Shield, Clock } from 'lucide-react'

const Treatment = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive eye examination and personalized treatment planning with our expert ophthalmologists',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      title: 'Cell Harvesting',
      description: 'Gentle extraction of your own stem cells using advanced, minimally invasive techniques',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      title: 'Laboratory Processing',
      description: 'Careful preparation in our state-of-the-art cryobank and specialized cell therapy labs',
      color: 'from-teal-500 to-green-500',
    },
    {
      number: '04',
      title: 'Transplantation',
      description: 'Precise autologous cell transplantation performed by our experienced specialists',
      color: 'from-amber-500 to-orange-500',
    },
  ]

  const benefits = [
    'Autologous treatment using your own cells',
    'Minimally invasive procedures',
    'No risk of rejection',
    'Proven success over 15 years',
    'International quality standards',
    'Personalized care protocols',
  ]

  return (
    <section id="treatment" className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Animated DNA Helix Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <motion.svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          width="800"
          height="800"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx="400"
              cy="400"
              r={150 + i * 30}
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          ))}
        </motion.svg>
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
            Our Approach
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
            Stem Cell Therapy{' '}
            <span className="bg-gradient-to-r from-primary-600 to-calm-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our revolutionary four-step stem cell treatment protocol has restored vision for thousands of patients worldwide
          </p>
        </motion.div>

        {/* Treatment Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-calm-200 to-primary-200 -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Step Number */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl text-white font-bold text-2xl mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Animated Progress Bar */}
                  <motion.div
                    className={`mt-4 h-1 bg-gradient-to-r ${step.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  />
                </motion.div>

                {/* Connector Dot */}
                <motion.div
                  className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-primary-600 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-calm-600 rounded-3xl p-10 shadow-2xl text-white"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">
                Why Choose Stem Cell Therapy?
              </h3>
              <p className="text-blue-50 text-lg leading-relaxed mb-8">
                Our innovative approach harnesses your body's natural healing power, offering hope where traditional treatments may not be effective.
              </p>

              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                >
                  <Zap className="w-6 h-6" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-lg">Fast Recovery</h4>
                  <p className="text-blue-50">Minimal downtime, maximum results</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-600" strokeWidth={3} />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Treatment
