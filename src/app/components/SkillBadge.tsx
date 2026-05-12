import { motion } from "motion/react";

interface SkillBadgeProps {
  name: string;
  index: number;
}

export function SkillBadge({ name, index }: SkillBadgeProps) {
  const colors = [
    "bg-gradient-to-r from-violet-500 to-purple-600 text-white",
    "bg-gradient-to-r from-pink-500 to-rose-600 text-white",
    "bg-gradient-to-r from-blue-500 to-cyan-600 text-white",
    "bg-gradient-to-r from-emerald-500 to-teal-600 text-white",
    "bg-gradient-to-r from-orange-500 to-red-600 text-white",
    "bg-gradient-to-r from-indigo-500 to-blue-600 text-white",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      whileHover={{ scale: 1.1, y: -2 }}
      className={`px-4 py-2 rounded-lg cursor-default transition-shadow duration-200 hover:shadow-lg ${colors[index % colors.length]}`}
    >
      {name}
    </motion.div>
  );
}
