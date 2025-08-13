'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 text-white dark:text-black hover:scale-110 transition"
      aria-label="Preklopi temo"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}
