import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-slate-900">Let's connect.</h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a freelance project, or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Email</h3>
              <a href="mailto:hello@example.com" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">
                hello@example.com
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}