import React from "react";
import { cn } from "@/lib/utils"; // Optional utility function for class merging

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "relative overflow-hidden px-6 py-1 md:py-3 rounded-lg font-semibold text-white shadow-md transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 hover:scale-105 hover:shadow-orange-500/50 hover:shadow-lg",
        className
      )}
      {...props}
    >
      <div className="relative flex items-center justify-center space-x-2">
        <span>{children}</span>
      </div>
    </button>
  );
};

export default CustomButton;
