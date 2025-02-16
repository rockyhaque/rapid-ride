import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Reusable Container Component
export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={clsx("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};