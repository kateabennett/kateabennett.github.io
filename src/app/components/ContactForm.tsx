import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormState("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setFormState("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-input-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-input-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-input-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={formState !== "idle"}
        whileHover={formState === "idle" ? { scale: 1.02 } : {}}
        whileTap={formState === "idle" ? { scale: 0.98 } : {}}
        className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg shadow-lg shadow-violet-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/60"
      >
        {formState === "idle" && (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
        {formState === "submitting" && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
            />
            Sending...
          </>
        )}
        {formState === "success" && (
          <>
            <CheckCircle2 className="w-4 h-4" />
            Message Sent!
          </>
        )}
      </motion.button>
    </form>
  );
}
