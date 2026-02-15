'use client';

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  return (
    <div className="min-h-screen bg-[#121212] text-white transition-colors duration-300">
      {children}
    </div>
  );
}
