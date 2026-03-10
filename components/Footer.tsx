import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        
        <div className="text-center md:text-left max-w-sm">
          <Link href="/" className="font-bold text-xl tracking-tight text-slate-900 mb-3 block">
            Glenn<span className="text-blue-600">.dev</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed">
            A BSIT student and web developer building modern, responsive, and user-centric digital products.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex gap-6 mb-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} Glenn. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}