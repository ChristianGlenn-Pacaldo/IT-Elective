import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
      
      {/* --- Page Header --- */}
      <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight font-serif leading-tight">
          My Projects
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
          A collection of my recent work, side projects, and open-source contributions. 
          Each project solves a specific problem using modern web technologies.
        </p>
      </div>

      {/* --- Projects Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        
        {/* Project 1: Bisakol Shop */}
        <ProjectCard 
          title="Bisakol Shop" 
          description="A modern e-commerce platform built to provide a seamless and localized shopping experience with real-time state management."
          tech={['React', 'Next.js', 'TypeScript', 'Tailwind']}
          link="https://bisakolshop.vercel.app/"
          image="/bisakol.png" 
        />

        {/* Project 2: CPU Scheduling */}
        <ProjectCard 
          title="CPU Scheduling — SJF" 
          description="A web-based simulation of the Shortest Job First (SJF) Non-Preemptive algorithm, designed to visualize process execution and wait times."
          tech={['React', 'Next.js', 'TypeScript', 'Tailwind']}
          link="https://sjf-np.vercel.app/"
          image="/cpu.png"
        />

        {/* Project 3: OS Portfolio */}
        <ProjectCard 
          title="Operating System Portfolio" 
          description="A specialized portfolio website showcasing my deep dive into OS projects and system-level skills with a modern UI."
          tech={['React', 'Next.js', 'TypeScript', 'Tailwind']}
          link="https://echan-portfolio.vercel.app/"
          image="/os.png"
        />

      </div>
      
      {/* Footer-like spacer (Optional) */}
      <div className="mt-20 border-t border-slate-200 dark:border-white/5 pt-10 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          Want to see more? Check out my <a href="https://github.com" className="text-blue-600 hover:underline">GitHub</a>.
        </p>
      </div>
    </div>
  );
}