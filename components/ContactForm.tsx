'use client'; 

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (Backend logic pending)");
  };

  return (
    <form className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2 text-left">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="John Doe" required className="bg-slate-50" />
      </div>
      
      <div className="space-y-2 text-left">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="john@example.com" required className="bg-slate-50" />
      </div>
      
      <div className="space-y-2 text-left">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          placeholder="How can I help you?" 
          required 
          rows={5} 
          className="bg-slate-50 resize-none"
        />
      </div>
      
      <Button type="submit" className="w-full h-11 text-base">
        Send Message
      </Button>
    </form>
  );
}