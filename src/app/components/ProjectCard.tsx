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
}: Readonly<ProjectCardProps>) {
  const gradients = [
    "from-sky-300 to-blue-400",
    "from-blue-300 to-slate-400",
    "from-slate-300 to-blue-500",
    "from-sky-200 to-blue-300",
    "from-stone-200 to-slate-300",
    "from-blue-200 to-sky-300",
  ];

  const getTechBadgeClass = (techIndex: number) => {
    const styles = [
      "bg-blue-100 text-blue-700 border-blue-200",
      "bg-slate-100 text-slate-700 border-slate-200",
      "bg-sky-100 text-sky-700 border-sky-200",
      "bg-stone-100 text-stone-700 border-stone-200",
    ];

    return styles[techIndex % styles.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-blue-300/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/40"
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
              className={`px-3 py-1 rounded-full text-sm border ${getTechBadgeClass(i)}`}
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
