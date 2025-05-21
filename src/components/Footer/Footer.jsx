import { Typography, Box, Link } from '@mui/material'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="footer">
      <Box className="footer-container">
        <Box className="footer-about">
          <Typography variant="h6">Sarthak Gupta</Typography>
          <Typography variant="body2">
            MERN Stack Developer creating awesome web experiences
          </Typography>
        </Box>
        
        <Box className="footer-links">
          <Typography variant="h6">Quick Links</Typography>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </Box>
        
        <Box className="footer-social">
          <Typography variant="h6">Connect</Typography>
          <Box className="social-icons">
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
      
      <Box className="footer-bottom">
        <Typography variant="body2">
          © {new Date().getFullYear()} Sarthak Gupta. All rights reserved.
        </Typography>
      </Box>
    </footer>
  )
}