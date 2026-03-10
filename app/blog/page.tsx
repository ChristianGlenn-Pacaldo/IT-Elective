import BlogCard from '@/components/BlogCard';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Writing</h1>
        <p className="text-lg text-slate-600">
          Thoughts, tutorials, and insights on frontend development, UI/UX design, and my journey in tech.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <BlogCard 
          title="Understanding React Server Components in Next.js 14"
          excerpt="A deep dive into how Server Components change the way we think about rendering in React, and how to incrementally adopt them in your codebase."
          date="Oct 12, 2023"
          category="Development"
          slug="#"
        />
        <BlogCard 
          title="The Importance of Visual Hierarchy in UI Design"
          excerpt="How to guide your user's eye using size, color, spacing, and typography to create intuitive and beautiful interfaces."
          date="Sep 28, 2023"
          category="Design"
          slug="#"
        />
      </div>
    </div>
  );
}