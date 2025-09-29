import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { AnimatedSection } from '@/components/AnimatedSection';
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-4">
    <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-wider border-b-2 border-black pb-2">
      {title}
    </h2>
    {children}
  </div>
);
export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 space-y-24">
      <AnimatedSection>
        <Section title="Areas of Excellence">
          <ul className="space-y-3">
            {portfolioData.areasOfExcellence.map((area) => (
              <li key={area.title} className="font-mono text-lg">
                <span className="text-brutal-green font-bold mr-2">■</span>
                <strong className="font-bold">{area.title}</strong> – {area.description}
              </li>
            ))}
          </ul>
        </Section>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Section title="Select Achievements">
          <ul className="space-y-3">
            {portfolioData.achievements.map((ach) => (
              <li key={ach.title} className="font-mono text-lg">
                <span className="text-brutal-purple font-bold mr-2">▶</span>
                <strong className="font-bold">{ach.title}</strong> – {ach.description}
              </li>
            ))}
          </ul>
        </Section>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <Section title="Education">
          <div className="font-mono text-lg">
            <p className="font-bold">{portfolioData.education.university}</p>
            <p>{portfolioData.education.degree} ({portfolioData.education.years})</p>
            <p>Current CGPA: {portfolioData.education.cgpa}</p>
          </div>
        </Section>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <Section title="Micro-Certifications">
          <ul className="space-y-2">
            {portfolioData.microCertifications.map((cert) => (
              <li key={cert} className="font-mono text-lg">
                <span className="text-black font-bold mr-2">●</span>
                {cert}
              </li>
            ))}
          </ul>
        </Section>
      </AnimatedSection>
    </div>
  );
}