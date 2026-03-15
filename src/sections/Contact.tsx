import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/content';
import { Mail, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { language } = useLanguage();
  const data = PORTFOLIO_DATA[language];
  const { email, github } = data.personal;
  const { title, description, emailBtn, githubBtn, footerRights } = data.contact;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 transition-colors duration-300">{title}</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-8"></div>
          
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto transition-colors duration-300">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Przycisk Email */}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              {emailBtn}
            </a>
            
            {/* Przycisk GitHub */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-zinc-800 text-white rounded-xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Github className="w-5 h-5" />
              {githubBtn}
            </a>
          </div>
        </motion.div>

      </div>
      
      {/* Prosta stopka (Footer) */}
      <footer className="mt-32 border-t border-zinc-100 dark:border-zinc-800 pt-8 pb-8 text-center text-zinc-500 dark:text-zinc-400 text-sm transition-colors duration-300">
        <p>© {new Date().getFullYear()} {data.personal.name}. {footerRights}</p>
      </footer>
    </section>
  );
}
