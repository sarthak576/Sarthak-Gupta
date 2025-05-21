import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="home-content"
        >
          <h1>
            <span>HE</span>
            <br />
            LLO.
          </h1>
          <p>MERN Stack Developer</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="home-image"
        >
          <img src="/assets/img/mypic.png" alt="Sarthak Gupta" />
        </motion.div>
        
        <a href="#about" className="scroll-down">
          <FiArrowDown />
          <span>Scroll down</span>
        </a>
      </div>
    </section>
  )
}