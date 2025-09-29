import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown';
import { portfolioData } from '@/lib/portfolio-data';
import { ArrowLeft } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = portfolioData.blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h1 className="font-mono text-4xl font-bold">404 - Post Not Found</h1>
        <p className="mt-4 font-sans text-lg">The post you are looking for does not exist.</p>
        <Link to="/blog" className="btn-brutal shadow-brutal-black hover:shadow-brutal-purple mt-8">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Blog
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <AnimatedSection>
        <Link to="/blog" className="flex items-center font-mono text-lg font-bold text-black hover:text-brutal-purple mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to all posts
        </Link>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold uppercase tracking-wider">
          {post.title}
        </h1>
        <p className="font-mono text-base text-muted-foreground mt-4">{post.date}</p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="prose prose-lg prose-invert max-w-none mt-12 font-sans">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </AnimatedSection>
    </div>
  );
}