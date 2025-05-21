import { motion } from 'framer-motion'
import { Typography, Avatar, Box } from '@mui/material'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'
import "../src/components/style.css"
export default function About() {
  return (
    <section id="about" className="about-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" className="section-title">
          About Me 👨‍💻
        </Typography>
        
        <Box className="about-content">
          <Avatar 
            src="/assets/images/mydp.png" 
            alt="Sarthak Gupta"
            sx={{ width: 200, height: 200 }}
          />
          
          <Box className="about-text">
            <Typography variant="h4">
              I'm Sarthak Gupta
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              MERN Stack Developer
            </Typography>
            <Typography variant="body1" paragraph>
              Passionate and skilled professional with expertise in Agile Methodologies, 
              Web Development (Bootstrap, Node.js), and Database Management (MongoDB, MySQL). 
              Proven track record in leading transformative projects.
            </Typography>
            
            <Box className="social-links">
              <a href="https://linkedin.com/in/sarthakgupta1702">
                <FaLinkedin />
              </a>
              <a href="https://github.com/sarthak576">
                <FaGithub />
              </a>
              <a href="https://www.hackerrank.com/profile/sarthakguptarjn">
                <SiHackerrank />
              </a>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </section>
  )
}