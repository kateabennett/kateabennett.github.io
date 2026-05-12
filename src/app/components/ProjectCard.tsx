import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  const gradients = [
    "from-violet-500 to-purple-600",
    "from-pink-500 to-rose-600",
    "from-blue-500 to-cyan-600",
    "from-emerald-500 to-teal-600",
    "from-orange-500 to-red-600",
    "from-indigo-500 to-blue-600",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-20`} />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
          Featured
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm text-white ${
                i % 4 === 0 ? "bg-violet-500" :
                i % 4 === 1 ? "bg-pink-500" :
                i % 4 === 2 ? "bg-cyan-500" :
                "bg-emerald-500"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
