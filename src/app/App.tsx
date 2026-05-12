import { motion } from "motion/react";
import { ArrowRight, Code2, Palette, Zap, Github, Linkedin, Mail } from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBadge } from "./components/SkillBadge";
import { ContactForm } from "./components/ContactForm";

export default function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management SaaS",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and customizable workflows.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Healthcare Dashboard",
      description: "Medical data visualization platform with patient management, appointment scheduling, and HIPAA-compliant data handling.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Marketplace",
      description: "Property listing platform with advanced search filters, virtual tours, and integrated mortgage calculator.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-responsive fitness application with workout tracking, nutrition planning, and progress visualization.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation, video streaming, quizzes, and student progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      technologies: ["Angular", "NestJS", "GraphQL", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const skills = [
    "React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript",
    "Node.js", "Express", "NestJS", "Python", "Django", "FastAPI",
    "PostgreSQL", "MongoDB", "MySQL", "Redis", "GraphQL", "REST APIs",
    "AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Figma",
    "Tailwind CSS", "Material-UI", "Responsive Design", "Accessibility"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Code2 className="w-6 h-6" />
            <span className="font-medium">Portfolio</span>
          </motion.div>
          <div className="flex gap-8">
            {["Projects", "Skills", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-rose-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full mb-6 shadow-lg shadow-violet-500/50"
              >
                <Zap className="w-4 h-4" />
                <span className="text-sm">Available for new projects</span>
              </motion.div>
              <h1 className="mb-6">
                Crafting Digital Experiences That Drive Results
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Full-stack developer specializing in building modern, scalable web applications.
                I transform ideas into pixel-perfect, high-performance solutions that users love.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60 transition-all duration-200"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-violet-500 text-violet-600 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              { icon: Code2, title: "Clean Code", desc: "Well-structured, maintainable, and scalable solutions", gradient: "from-violet-500 to-purple-600" },
              { icon: Palette, title: "Modern Design", desc: "Beautiful interfaces that follow best UX practices", gradient: "from-pink-500 to-rose-600" },
              { icon: Zap, title: "Performance", desc: "Optimized applications for lightning-fast experiences", gradient: "from-cyan-500 to-blue-600" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative p-6 bg-card border border-border rounded-xl hover:border-transparent transition-all duration-300 hover:shadow-2xl group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work. Each project represents a unique challenge
              and demonstrates my ability to deliver high-quality solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Technologies & Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My tech stack spans the full development lifecycle, from design to deployment.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} name={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 bg-gradient-to-b from-white to-violet-50/50 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-rose-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and
              let's discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="mb-4">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Find me on these platforms or reach out directly via email.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com", gradient: "from-violet-500 to-purple-600" },
                  { icon: Github, label: "GitHub", value: "github.com/yourusername", href: "#", gradient: "from-pink-500 to-rose-600" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourprofile", href: "#", gradient: "from-cyan-500 to-blue-600" },
                ].map((contact) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-transparent transition-all duration-200 group hover:shadow-xl relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    <div className={`p-3 bg-gradient-to-br ${contact.gradient} rounded-lg shadow-md relative z-10`}>
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className="group-hover:text-primary transition-colors duration-200">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2026 Portfolio. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}