'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle'; // <-- Import the toggle

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#03040C]/80 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="font-bold text-2xl tracking-tight z-50 hover:opacity-80 transition-opacity text-slate-900 dark:text-white">
          Christian<span className="text-blue-600">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 font-medium text-sm text-slate-600 dark:text-white/70">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button inserted here */}
            <ThemeToggle /> 
            
            <Button asChild className="rounded-full px-7 py-5 bg-slate-900 dark:bg-white border dark:border-white/10 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors font-semibold">
              <Link href="/contact">Hire Me</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <ThemeToggle />
          <button 
            className="p-2 text-slate-600 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/5 rounded-md transition-colors" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-white dark:bg-[#03040C] z-40 flex flex-col items-center justify-center space-y-8 text-xl font-medium transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={toggleMenu} className="text-slate-600 dark:text-white/70 hover:text-blue-600 transition-colors">
              {link.name}
            </Link>
          ))}
          <Button asChild size="lg" className="rounded-full mt-4 w-48 bg-slate-900 dark:bg-slate-800 text-white" onClick={toggleMenu}>
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

      </div>
    </header>
  );
}