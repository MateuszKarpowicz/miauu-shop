import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  return (
    <section className={`py-section-y px-md ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
