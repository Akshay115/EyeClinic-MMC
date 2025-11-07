import React from 'react'
import { motion } from 'framer-motion'

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wave 1 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
          fill="url(#wave1)"
          animate={{
            d: [
              "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z",
              "M0,450 C320,350 420,550 720,450 C1020,350 1120,550 1440,450 L1440,800 L0,800 Z",
              "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Wave 2 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,500 C360,400 540,600 840,500 C1140,400 1260,600 1440,500 L1440,800 L0,800 Z"
          fill="url(#wave2)"
          animate={{
            d: [
              "M0,500 C360,400 540,600 840,500 C1140,400 1260,600 1440,500 L1440,800 L0,800 Z",
              "M0,550 C360,450 540,650 840,550 C1140,450 1260,650 1440,550 L1440,800 L0,800 Z",
              "M0,500 C360,400 540,600 840,500 C1140,400 1260,600 1440,500 L1440,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <defs>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#99f6e4" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Wave 3 - Subtle top wave */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,200 C480,100 600,300 960,200 C1320,100 1380,300 1440,200 L1440,0 L0,0 Z"
          fill="url(#wave3)"
          animate={{
            d: [
              "M0,200 C480,100 600,300 960,200 C1320,100 1380,300 1440,200 L1440,0 L0,0 Z",
              "M0,150 C480,50 600,250 960,150 C1320,50 1380,250 1440,150 L1440,0 L0,0 Z",
              "M0,200 C480,100 600,300 960,200 C1320,100 1380,300 1440,200 L1440,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <defs>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ddd6fe" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Light Rays */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-1 h-full bg-gradient-to-b from-primary-300/30 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              transformOrigin: 'top',
            }}
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default WaveBackground
