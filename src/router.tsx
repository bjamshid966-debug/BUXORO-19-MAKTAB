import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Route = 'home' | 'about' | 'academics' | 'clubs' | 'achievements' | 'contact';

interface RouterContextType {
  route: Route;
  navigate: (route: Route) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const validRoutes: Route[] = ['home', 'about', 'academics', 'clubs', 'achievements', 'contact'];
    return (validRoutes.includes(hash as Route) ? hash : 'home') as Route;
  });

  const navigate = (newRoute: Route) => {
    setRoute(newRoute);
    window.location.hash = `/${newRoute}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validRoutes: Route[] = ['home', 'about', 'academics', 'clubs', 'achievements', 'contact'];
      if (validRoutes.includes(hash as Route)) {
        setRoute(hash as Route);
      } else {
        setRoute('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return <RouterContext.Provider value={{ route, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
}
