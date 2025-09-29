import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '@/lib/portfolio-data';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';
export function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <AnimatedSection>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold uppercase tracking-wider border-b-2 border-black pb-4 mb-12">
          Blog
        </h1>
      </AnimatedSection>
      <div className="space-y-12">
        {portfolioData.blogPosts.map((post, index) => (
          <AnimatedSection key={post.slug} delay={index * 0.1}>
            <Link to={`/blog/${post.slug}`}>
              <div className="card-brutal group transition-all duration-200 hover:shadow-brutal-purple">
                <p className="font-mono text-sm text-muted-foreground">{post.date}</p>
                <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase mt-2 group-hover:text-brutal-purple transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-lg mt-4">
                  {post.content.substring(0, 150)}...
                </p>
                <div className="flex items-center font-mono font-bold uppercase mt-6 text-black group-hover:text-brutal-purple transition-colors">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}