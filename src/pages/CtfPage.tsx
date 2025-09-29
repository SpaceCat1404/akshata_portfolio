import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AnimatedSection } from '@/components/AnimatedSection';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
export function CtfPage() {
  const [flag, setFlag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);
    try {
      const response = await fetch('/api/ctf/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flag }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setResult(data.message);
      } else {
        throw new Error(data.error || 'Verification failed.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      toast.error(errorMessage);
      setResult(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <AnimatedSection>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold uppercase tracking-wider border-b-2 border-black pb-4 mb-8">
          [CLASSIFIED]
        </h1>
        <div className="card-brutal space-y-6">
          <p className="font-mono text-lg">Welcome, agent. Your mission, should you choose to accept it, is to decrypt the message below.</p>
          <div className="bg-black text-brutal-green p-4 font-mono">
            <p>&gt; Ciphertext: <span className="text-white">GSV_XIVZGVI_LBH_HVXIVG</span></p>
            <p>&gt; Hint: An ancient Hebrew cipher reverses the alphabet. Atbash would be proud.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="flag" className="font-mono font-bold text-lg">Flag</Label>
              <Input
                id="flag"
                type="text"
                placeholder="FLAG{...}"
                value={flag}
                onChange={(e) => setFlag(e.target.value)}
                required
                className="border-2 border-black focus:ring-brutal-purple focus:ring-2 font-mono mt-2"
              />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full btn-brutal shadow-brutal-black hover:shadow-brutal-purple disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? <Loader2 className="h-6 w-6 animate-spin" /> : 'Verify Flag'}
            </button>
          </form>
          {result && (
            <div className={`mt-6 p-4 border-2 border-black font-mono ${result.includes('Congratulations') ? 'bg-brutal-green/20' : 'bg-red-500/20'}`}>
              <p>{result}</p>
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}