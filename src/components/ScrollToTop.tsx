import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-2xl shadow-primary-600/30 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-fade-in"
      aria-label="Yuqoriga qaytarish"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
