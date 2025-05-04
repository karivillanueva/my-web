import { useState } from 'react';

export function useMouseProgress() {
  const [progress, setProgress] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const percent = Math.max(0, Math.min(1, x / width));
    setProgress(percent);
  };

  return { progress, handleMouseMove };
}
