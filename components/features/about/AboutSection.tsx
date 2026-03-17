export default function SkillsSection() {
  const skills = [
    { 
      category: 'Frontend', 
      items: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS'] 
    },
    { 
      category: 'Design', 
      items: ['Figma', 'UI/UX Principles', 'Responsive Design',] 
    },
    { 
      category: 'Tools', 
      items: ['Git/GitHub', 'VS Code', 'Vercel',] 
    },
  ];

  return (
    <section className="w-full">
      
      {/* Header text with proper light/dark mode colors */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
          Technical Arsenal
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {skills.map((skillGroup) => (
          <div 
            key={skillGroup.category} 
            className="group p-8 bg-white dark:bg-[#0B1120] rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Card Title */}
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
              {skillGroup.category}
            </h3>
            
            {/* Skills List */}
            <ul className="space-y-4">
              {skillGroup.items.map((item) => (
                <li key={item} className="flex items-center text-slate-600 dark:text-slate-300 font-medium">
                  {/* Custom Bullet Point */}
                  <span className="w-2.5 h-2.5 bg-blue-600 dark:bg-blue-500 rounded-full mr-4 shadow-sm shadow-blue-500/50"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </section>
  );
}