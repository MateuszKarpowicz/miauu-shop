import React from 'react';

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ children, className = '' }: SectionHeaderProps) {
  return (
    <h2 className={`text-2xl font-heading font-medium uppercase tracking-wide mb-2xl text-text-primary text-center ${className}`}>
      {children}
    </h2>
  );
}
