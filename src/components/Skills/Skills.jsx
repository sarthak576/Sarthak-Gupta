import { CircularProgress, Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import GitHubCalendar from 'react-github-calendar'

export default function Skills() {
  const skills = [
    { name: 'React', value: 90 },
    { name: 'JavaScript', value: 85 },
    { name: 'Node.js', value: 80 },
    { name: 'MongoDB', value: 75 },
    { name: 'TypeScript', value: 70 },
    { name: 'MUI', value: 85 }
  ]

  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" className="section-title">
          My Tech Stack 🛠️
        </Typography>
        
        <Box className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="skill-item"
            >
              <CircularProgress
                variant="determinate"
                value={skill.value}
                size={100}
                thickness={4}
                sx={{
                  color: 'primary.main',
                  '& .MuiCircularProgress-circle': {
                    strokeLinecap: 'round'
                  }
                }}
              />
              <Typography variant="h6" className="skill-name">
                {skill.name}
              </Typography>
              <Typography variant="body1" className="skill-percent">
                {skill.value}%
              </Typography>
            </motion.div>
          ))}
        </Box>
        
        <Typography variant="h3" className="github-title">
          My Coding Activity 📅
        </Typography>
        
        <Box className="github-calendar">
          <GitHubCalendar
            username="sarthak576"
            colorScheme={theme.palette.mode === 'dark' ? 'dark' : 'light'}
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />
        </Box>
      </motion.div>
    </section>
  )
}