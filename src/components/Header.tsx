import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { useRouter, type Route } from '@/router';

const navItems: { label: string; route: Route }[] = [
  { label: 'Bosh sahifa', route: 'home' },
  { label: 'Maktab haqida', route: 'about' },
  { label: "O'qituv", route: 'academics' },
  { label: 'Klublar va sport', route: 'clubs' },
  { label: 'Yutuqlar', route: 'achievements' },
  { label: "Bog'lanish", route: 'contact' },
];

export function Header() {
  const { route, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (r: Route) => {
    navigate(r);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-primary-900/5 py-2.5'
          : 'bg-gradient-to-b from-black/30 to-transparent py-4'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-600/30 group-hover:scale-105 transition-transform duration-300">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <div className={`font-display font-bold text-lg leading-none transition-colors duration-300 ${scrolled || mobileOpen ? 'text-primary-800' : 'text-white'}`}>
              19-maktab
            </div>
            <div className={`text-[10px] font-medium tracking-wider transition-colors duration-300 ${scrolled || mobileOpen ? 'text-neutral-500' : 'text-white/70'}`}>
              BUXORO SHAHAR
            </div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.route}
              onClick={() => handleNav(item.route)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 relative ${
                route === item.route
                  ? scrolled
                    ? 'bg-primary-50 text-primary-700'
                    : 'bg-white/15 text-white'
                  : scrolled
                    ? 'text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
                    : 'text-white/90 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNav('contact')}
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-400 to-accent-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 hover:scale-105 transition-all duration-300"
        >
          Hujjat topshirish
          <ChevronDown className="w-4 h-4 -rotate-90" />
        </button>

        <button
          className={`lg:hidden transition-colors ${scrolled || mobileOpen ? 'text-primary-800' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-neutral-100 animate-fade-in-up">
          <div className="container-x py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => handleNav(item.route)}
                className={`px-4 py-3 rounded-xl text-left font-semibold transition-all ${
                  route === item.route
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-accent-400 to-accent-500 text-white rounded-xl font-semibold text-center"
            >
              Hujjat topshirish
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
