export default function About() {
  const skills = ['Next.js', 'React.js', 'TypeScript', 'TailwindCSS', 'PHP', 'C#', 'Arduino', 'Git'];

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <section className="mb-20 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-6 text-slate-900">About Me</h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          I'm Glenn, a dedicated web developer and a Bachelor of Science in Information Technology (BSIT) student. I am deeply passionate about front-end technologies and creating seamless user interfaces. When I'm not writing code, I'm usually exploring new hardware projects or refining my development workflow.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-16">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-2">
            Education
          </h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">Bachelor of Science in Information Technology</h3>
            <p className="text-blue-600 font-medium mb-2">Cordova Public College</p>
            <p className="text-sm text-slate-500 mb-4">2023 - Present</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Currently pursuing my degree, focusing on software engineering, web development, and systems integration.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}