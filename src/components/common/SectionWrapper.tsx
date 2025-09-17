import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  return (
    <section className={`py-8 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
