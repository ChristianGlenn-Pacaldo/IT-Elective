import Image from 'next/image';
import { GraduationCap, Code2, MapPin, User } from 'lucide-react';

export default function About() {
  const skills = ['Next.js', 'React.js', 'TypeScript', 'TailwindCSS', 'PHP', 'C#', 'Postgresql', 'MySQL'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#03040C] pb-20">
      
      {/* --- 1. COVER PHOTO AREA --- */}
      <div className="w-full h-48 md:h-80 bg-slate-300 dark:bg-slate-600 relative">
        {/* TO ADD YOUR COVER PHOTO: Put 'cover.jpg' in your public folder and uncomment the line below */}
          {<Image src="/cover.jpg" alt="Cover Photo" fill className="object-cover" />}
        
        {/* Temporary blue gradient placeholder until you add your image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-150 opacity-80 dark:opacity-40"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- 2. PROFILE HEADER (Pic, Name, Buttons) --- */}
        <div className="relative pb-6 border-b border-slate-200 dark:border-white/10 mb-8">
          
          {/* Profile Picture (Overlapping the cover photo) */}
          <div className="absolute -top-16 md:-top-24 left-4 md:left-8 z-10">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-slate-50 dark:border-[#03040C] bg-white dark:bg-slate-800 relative overflow-hidden shadow-lg">
               
               {/* This is the fixed Image tag! */}
               <Image src="/washing.webp" alt="Glenn" fill className="object-cover" />
               
            </div>
          </div>

          {/* Name & Bio */}
          <div className="pt-20 md:pt-4 pl-4 md:pl-[260px] flex justify-between items-end">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-serif tracking-tight">
                Glenn
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mt-1 md:mt-2 font-sans">
                Web Developer | BSIT Student
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-1 flex items-center gap-1 font-sans">
                <MapPin size={16} /> Cordova, Cebu
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="hidden sm:flex gap-3">
               <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors font-sans shadow-sm">
                 Contact Me
               </button>
               <button className="px-5 py-2.5 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white font-semibold rounded-lg transition-colors font-sans">
                 Resume
               </button>
            </div>
          </div>
        </div>

        {/* --- 3. FACEBOOK TWO-COLUMN TIMELINE LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* LEFT COLUMN: Intro */}
          <div className="col-span-1 space-y-6">
            
            <div className="bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white font-serif">Intro</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <GraduationCap className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-sans leading-relaxed">
                      Studies <span className="font-semibold text-slate-900 dark:text-slate-200">BS Information Technology</span> at <span className="font-semibold text-slate-900 dark:text-slate-200">Cordova Public College</span>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">2023 - Present</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">Hardware Projects</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">UI Design</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: "Timeline Posts" */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            
            {/* "Post" 1: About Me */}
            <div className="bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <User size={20} className="text-slate-500" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white font-serif">About Me</h2>
                  <p className="text-xs text-slate-500">Pinned Post</p>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-[15px]">
                I'm Glenn, a dedicated web developer and a Bachelor of Science in Information Technology (BSIT) student. I am deeply passionate about front-end technologies and creating seamless user interfaces. When I'm not writing code, I'm usually exploring new hardware projects or refining my development workflow.
              </p>
            </div>

            {/* "Post" 2: Tech Stack */}
            <div className="bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <Code2 size={20} className="text-slate-500" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white font-serif">Tech Stack</h2>
                  <p className="text-xs text-slate-500">My Arsenal</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default font-sans text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}