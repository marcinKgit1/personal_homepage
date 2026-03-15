import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data/content";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Projects() {
  const { language } = useLanguage();
  const data = PORTFOLIO_DATA[language];
  const { projects } = data;

  return (
    <section
      id="projects"
      className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nagłówek sekcji */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 transition-colors duration-300">
            {language === "pl" ? "Projekty" : "Projects"}
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto transition-colors duration-300">
            {language === "pl"
              ? "Wybrane realizacje, w których łączę nowoczesne technologie front-endowe z automatyzacjami i AI."
              : "Selected projects where I combine modern front-end technologies with automations and AI."}
          </p>
        </motion.div>

        {/* Siatka projektów */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-800 transition-all group flex flex-col"
            >
              {/* Zdjęcie projektu */}
              <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-900/10 dark:bg-zinc-900/30 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Treść */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-grow transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tagi */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-md text-xs font-medium border border-emerald-100 dark:border-emerald-900/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Linki */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1.5" />
                    {language === "pl" ? "Kod" : "Code"}
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
