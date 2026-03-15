import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { Code2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchGitHubTechnologies } from '../data/githubTech';

export function About() {
  const { language } = useLanguage();
  const data = PORTFOLIO_DATA[language];
  const [githubSkills, setGithubSkills] = useState<string[]>([]);
  const { title, paragraphs, skills, aiTools } = data.about;

  useEffect(() => {
    let cancelled = false;

    const loadGitHubSkills = async () => {
      const tech = await fetchGitHubTechnologies(data.personal.github);
      if (!cancelled) {
        setGithubSkills(tech);
      }
    };

    loadGitHubSkills();

    return () => {
      cancelled = true;
    };
  }, [data.personal.github]);

  const mergedSkills = useMemo(() => {
    const normalizedMap = new Map<string, string>();

    [...skills, ...githubSkills].forEach((skill) => {
      normalizedMap.set(skill.toLowerCase(), skill);
    });

    return Array.from(normalizedMap.values());
  }, [githubSkills, skills]);

  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek sekcji */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 transition-colors duration-300">{title}</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          
          {/* Tekst i Umiejętności */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-5 text-lg text-zinc-600 dark:text-zinc-400 mb-12 text-center md:text-left transition-colors duration-300">
              {paragraphs.map((text, index) => (
                <p key={index} className="leading-relaxed">
                  {text}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technologie */}
              <div className="bg-zinc-50 dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
                <h3 className="flex items-center text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 transition-colors duration-300">
                  <Code2 className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-500" />
                  {language === 'pl' ? 'Technologie' : 'Technologies'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {mergedSkills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-md text-sm font-medium border border-zinc-200 dark:border-zinc-700 hover:border-emerald-300 dark:hover:border-emerald-500 transition-colors shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & No-Code */}
              <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 transition-colors duration-300">
                <h3 className="flex items-center text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 transition-colors duration-300">
                  <Sparkles className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-500" />
                  AI & Low-Code
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aiTools.map(tool => (
                    <span key={tool} className="px-3 py-1.5 bg-white dark:bg-zinc-900 text-emerald-800 dark:text-emerald-400 rounded-md text-sm font-medium border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
