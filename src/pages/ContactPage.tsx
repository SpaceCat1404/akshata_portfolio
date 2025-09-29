import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Download, Loader2 } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { toast } from 'sonner';
export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message.');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An unknown error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="font-mono text-4xl sm:text-5xl font-bold uppercase tracking-wider border-b-2 border-black pb-4 mb-8">
              Contact
            </h1>
            <p className="font-sans text-lg mb-8">
              Let's build the future. Reach out for collaborations, inquiries, or just to connect.
            </p>
            <a href="/Akshata_Amara_Resume.pdf" download>
              <button className="btn-brutal shadow-brutal-purple hover:shadow-brutal-green">
                <Download className="mr-3 h-6 w-6" />
                Download Résumé
              </button>
            </a>
          </div>
          <form onSubmit={handleSubmit} className="card-brutal space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-mono font-bold text-lg">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="border-2 border-black focus:ring-brutal-green focus:ring-2" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono font-bold text-lg">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className="border-2 border-black focus:ring-brutal-green focus:ring-2" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="font-mono font-bold text-lg">Message</Label>
              <Textarea id="message" placeholder="Your message..." value={formData.message} onChange={handleChange} required className="border-2 border-black min-h-[150px] focus:ring-brutal-green focus:ring-2" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full btn-brutal shadow-brutal-black hover:shadow-brutal-purple disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0">
              {isSubmitting ? <Loader2 className="h-6 w-6 animate-spin" /> : 'Send Message'}
            </button>
          </form>
        </div>
      </AnimatedSection>
    </div>
  );
}