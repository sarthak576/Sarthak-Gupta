import { motion } from 'framer-motion'
import { TextField, Button, Typography, Box } from '@mui/material'
import { FiSend } from 'react-icons/fi'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    alert('Message sent! 🚀')
  }

  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" className="section-title">
          Get In Touch 📨
        </Typography>
        
        <Box className="contact-container">
          <Box className="contact-info">
            <Typography variant="h5">Email</Typography>
            <Typography>sarthakguptarjn@gmail.com</Typography>
            
            <Typography variant="h5">Phone</Typography>
            <Typography>+91 8103024624</Typography>
            
            <Typography variant="h5">Address</Typography>
            <Typography>Pune, Maharashtra</Typography>
          </Box>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="email"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button 
              type="submit" 
              variant="contained" 
              endIcon={<FiSend />}
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </motion.div>
    </section>
  )
}