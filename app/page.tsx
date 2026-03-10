import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      
      <div className="py-20 border-t border-slate-200 dark:border-white/5">
        <SkillsSection />
      </div>

      <section className="py-20 border-t border-slate-200 dark:border-white/5">
        <div className="flex justify-between items-end mb-10 px-4 md:px-0">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white tracking-tight">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">Selected work I've built recently.</p>
          </div>
          <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium hidden md:block transition-colors">
            View all projects &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          <ProjectCard 
            title="E-Commerce Dashboard" 
            description="A responsive admin dashboard with real-time analytics."
            tech={['Next.js', 'TypeScript', 'Tailwind']}
            link="/projects"
          />
          <ProjectCard 
            title="Task Management App" 
            description="A drag-and-drop Kanban board application."
            tech={['React', 'Zustand', 'Tailwind']}
            link="/projects"
          />
          <ProjectCard 
            title="AI Content Generator" 
            description="A platform leveraging OpenAI API to generate copy."
            tech={['Next.js', 'OpenAI API', 'Supabase']}
            link="/projects"
          />
        </div>
      </section>

      {/* Modern Call to Action Banner */}
      <section className="py-24 text-center bg-blue-600 dark:bg-blue-600/10 dark:border dark:border-blue-500/20 text-white rounded-[2.5rem] mb-12 px-4 shadow-xl shadow-blue-500/10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight dark:text-white font-serif">
          Let's build something great.
        </h2>
        <p className="text-blue-100 dark:text-blue-200/70 mb-10 max-w-lg mx-auto text-lg">
          I'm currently open for new opportunities and freelance projects.
        </p>
        <Button asChild size="lg" className="px-8 py-7 bg-white dark:bg-blue-600 text-blue-600 dark:text-white font-bold rounded-full hover:bg-slate-50 dark:hover:bg-blue-500 transition-all shadow-lg text-base hover:scale-105">
          <Link href="/contact">
            Get in Touch
          </Link>
        </Button>
      </section>
    </div>
  );
}