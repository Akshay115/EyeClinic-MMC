import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    'Services': [
      'Stem Cell Therapy',
      'LASIK Surgery',
      'Cataract Surgery',
      'Glaucoma Treatment',
      'Pediatric Care',
      'Retinal Treatments',
    ],
    'About': [
      'Our Story',
      'Medical Team',
      'Technology',
      'Certifications',
      'Research',
      'Careers',
    ],
    'Resources': [
      'Patient Guide',
      'FAQs',
      'Blog',
      'Testimonials',
      'Insurance',
      'International Patients',
    ],
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="relative">
                <Eye className="w-10 h-10 text-primary-400" strokeWidth={1.5} />
                <motion.div
                  className="absolute inset-0 bg-primary-400 rounded-full blur-lg opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-calm-400 bg-clip-text text-transparent">
                Eye Clinic MMC
              </span>
            </motion.div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Leading the future of vision restoration with advanced stem cell therapy and innovative treatments since 1995.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-primary-500 hover:to-calm-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-lg mb-4 text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-primary-400 transition-colors inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-calm-600 rounded-2xl p-6 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Phone, text: '+995 32 2 25 16 89' },
              { icon: Mail, text: 'info@eyeclinic-mmc.com' },
              { icon: MapPin, text: 'Tbilisi, Georgia' },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-white">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Eye Clinic MMC. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Cookie Policy
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-600 to-calm-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-3xl transition-all duration-300"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ArrowUp className="w-6 h-6" strokeWidth={2} />
      </motion.button>
    </footer>
  )
}

export default Footer
