import Link from 'next/link';

export default function Footer() {
return (

<footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#03040C] py-16 mt-20 font-mono text-sm">
<div className="container mx-auto px-4 md:px-6 max-w-6xl">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mb-16">

  {/* Column 1: Brand & Info */}
  <div className="flex flex-col">
    <Link href="/" className="font-bold text-lg text-slate-900 dark:text-white uppercase tracking-widest border-b-2 border-slate-900 dark:border-white pb-1 mb-5 inline-block w-max hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
      GLENN.DEV
    </Link>
    <p className="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">IT Student & <br/>Full-Stack Developer</p>
    <p className="text-slate-600 dark:text-slate-400">Cebu, Philippines</p>
  </div>

  {/* Column 2: Pages */}
  <div className="flex flex-col">
    <h3 className="text-slate-400 dark:text-slate-500 mb-5 font-bold tracking-widest uppercase">{`//`} PAGES</h3>
    <nav className="flex flex-col space-y-4">
      <Link href="/" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors w-max">Home</Link>
      <Link href="/about" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors w-max">About</Link>
      <Link href="/projects" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors w-max">Projects</Link>
      <Link href="/blog" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors w-max">Blog</Link>
      <Link href="/contact" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors w-max">Contact</Link>
    </nav>
  </div>

  {/* Column 3: Resources */}
  <div className="flex flex-col">
    <h3 className="text-slate-400 dark:text-slate-500 mb-5 font-bold tracking-widest uppercase">{`//`} RESOURCES</h3>
    <nav className="flex flex-col space-y-4">
      <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 italic transition-colors w-max">GitHub Boilerplates</a>
      <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 italic transition-colors w-max">CodePen Examples</a>
      <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 italic transition-colors w-max">MDN Docs</a>
    </nav>
  </div>

  {/* Column 4: Connect */}
  <div className="flex flex-col">
    <h3 className="text-slate-400 dark:text-slate-500 mb-5 font-bold tracking-widest uppercase">{`//`} CONNECT</h3>
    <nav className="flex flex-col space-y-4">
      <a href="https://github.com/ChristianGlenn-Pacaldo" target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors w-max">GitHub</a>
      <a href="https://www.facebook.com/itsme.nahce" target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors w-max">Facebook</a>
      <a href="https://www.instagram.com/allabout.glenn/" target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors w-max">Instagram</a>
      <a href="mailto:hello@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors w-max">Email</a>
    </nav>
  </div>

</div>

{/* Bottom Bar */}
<div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-4 text-[11px] md:text-xs font-bold tracking-[0.2em] text-slate-500 dark:text-slate-500 uppercase">
  <p className="text-center md:text-left">&copy; {new Date().getFullYear()} GLENN. ALL RIGHTS RESERVED.</p>
  <p className="text-center md:text-right">SYSTEM_STATUS: STABLE </p>
</div>
</div>
</footer>
);
}