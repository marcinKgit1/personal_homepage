import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { PORTFOLIO_DATA } from "../data/content";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { language } = useLanguage();
  const data = PORTFOLIO_DATA[language];
  const { name, role, bio, github, linkedin, email } = data.personal;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <img
            src="/profile.png"
            alt={name}
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top mx-auto shadow-2xl border-8 border-white dark:border-zinc-800 mb-8 transition-colors duration-300"
            referrerPolicy="no-referrer"
          />
          <span className="px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium tracking-wide transition-colors duration-300">
            {language === "pl"
              ? "Dostępny do współpracy"
              : "Available for work"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight mb-4 transition-colors duration-300"
        >
          {language === "pl" ? "Cześć, jestem " : "Hi, I am "}
          <span className="text-emerald-600 dark:text-emerald-500">{name}</span>
          <br />
          <span className="text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl font-medium mt-2 block transition-colors duration-300">
            {role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 transition-colors duration-300"
        >
          {bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-xl shadow-sm transition-all hover:shadow-md"
          >
            {language === "pl" ? "Zobacz moje projekty" : "View my projects"}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>

          <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:ml-4">
            <SocialLink
              href={github}
              icon={<Github className="w-6 h-6" />}
              label="GitHub"
            />
            <SocialLink
              href={linkedin}
              icon={<Linkedin className="w-6 h-6" />}
              label="LinkedIn"
            />
            <SocialLink
              href={`mailto:${email}`}
              icon={<Mail className="w-6 h-6" />}
              label="Email"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-full transition-colors duration-300"
    >
      {icon}
    </a>
  );
}
