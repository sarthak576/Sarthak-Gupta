import { Card, CardContent, CardMedia, Typography, Chip, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: "DeepThink AI Chatbot",
    description: "AI chatbot using React, Node.js, and Gemini API with Lottie animations",
    tags: ["React", "Node.js", "AI"],
    image: "/assets/images/deepthink.jpg",
    demo: "https://deepthink-demo.com",
    code: "https://github.com/sarthak576/deepthink"
  },
  {
    title: "Learnix E-Learning",
    description: "TypeScript-based platform with Spotify-inspired UI",
    tags: ["TypeScript", "Vercel", "React"],
    image: "/assets/images/learnix.jpg",
    demo: "https://learnix-demo.com",
    code: "https://github.com/sarthak576/learnix"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" className="section-title">
          My Projects 🚀
        </Typography>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="project-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <Chip key={tag} label={tag} size="small" />
                    ))}
                  </div>
                </CardContent>
                <div className="project-actions">
                  <Button 
                    href={project.demo} 
                    target="_blank"
                    startIcon={<FiExternalLink />}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    href={project.code} 
                    target="_blank"
                    startIcon={<FiGithub />}
                  >
                    View Code
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}