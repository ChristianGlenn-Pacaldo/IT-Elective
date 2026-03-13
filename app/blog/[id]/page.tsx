import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const allPosts = [
  {
    id: 1,
    title: "Understanding Next.js App Router",
    excerpt: "A deep dive into the new App Router, server components, and how it changes web development.",
    content: "The Next.js App Router introduces a new mental model for building React applications. By making Server Components the default, we can ship less JavaScript to the client and drastically improve load times. \n\nIn this article, we will explore how layouts, loading states, and error boundaries work seamlessly within the new app directory structure.",
    date: "Oct 15, 2025",
    category: "Development",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS Grid",
    excerpt: "Learn how to build complex, responsive layouts in minutes using Tailwind's powerful grid utilities.",
    content: "CSS Grid used to be intimidating, but Tailwind CSS makes it incredibly intuitive. Instead of writing dozens of lines of CSS, you can define a fully responsive 12-column layout just by adding 'grid grid-cols-1 md:grid-cols-12' to a div. \n\nLet's break down how to use col-span, gap, and grid-auto-flow to build a modern dashboard layout.",
    date: "Nov 02, 2025",
    category: "Design",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "My Journey into Hardware Projects",
    excerpt: "Transitioning from pure software to building physical hardware logic and microcontrollers.",
    content: "As a web developer, I'm used to my code living on a screen. But recently, I started experimenting with Arduino and IoT devices. The feeling of writing a few lines of C++ and watching a physical LED light up or a servo motor turn is incredible. \n\nBridging the gap between software and hardware has given me a much deeper appreciation for how computers actually work at the lowest levels.",
    date: "Nov 28, 2025",
    category: "Hardware",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Why I Love TypeScript",
    excerpt: "Catching bugs before they reach production. Here is how static typing saved my latest project.",
    content: "JavaScript is great, but letting it run wild without types can lead to frustrating runtime errors. Adopting TypeScript felt like a chore at first, but it quickly became my favorite tool. \n\nBy defining strict interfaces for my data models, my code editor now acts like a pair-programmer, warning me if I misspell a property or pass the wrong type of data to a function.",
    date: "Jan 10, 2026",
    category: "Development",
    readTime: "5 min read"
  },
  {
    id: 5,
    title: "Building a Secure API",
    excerpt: "Best practices for backend security, data validation, and handling authentication tokens.",
    content: "Security shouldn't be an afterthought. When building a REST API, you have to assume that every piece of incoming data is malicious. \n\nIn this guide, we cover the essentials of sanitizing inputs, implementing rate limiting, and securely storing JWT (JSON Web Tokens) in HttpOnly cookies to prevent XSS attacks.",
    date: "Feb 14, 2026",
    category: "Backend",
    readTime: "7 min read"
  }
];

// THE FIX: We added "async" here and typed params as a Promise
export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  
  // THE FIX: We "await" the params so Next.js has time to read the URL
  const resolvedParams = await params;
  
  const post = allPosts.find(p => p.id.toString() === resolvedParams.id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#03040C]">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Article Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 font-sans">The blog post you are looking for doesn't exist.</p>
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-slate-50 dark:bg-[#03040C] py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-12 uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to all articles
        </Link>

        <header className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full font-sans">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white font-serif tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400 font-sans border-y border-slate-200 dark:border-white/10 py-4">
            <div className="flex items-center gap-2">
              <User size={16} className="text-blue-600" />
              <span className="font-medium text-slate-900 dark:text-slate-200">Glenn</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none font-sans text-slate-700 dark:text-slate-300 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6">{paragraph}</p>
          ))}
        </div>

      </div>
    </article>
  );
}