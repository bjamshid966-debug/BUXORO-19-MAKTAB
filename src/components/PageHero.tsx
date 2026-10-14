import { ChevronRight } from 'lucide-react';
import { useRouter, type Route } from '@/router';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  crumb: string;
}

export function PageHero({ title, subtitle, image, crumb }: PageHeroProps) {
  const { navigate } = useRouter();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/80 to-primary-800/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
      </div>

      <div className="container-x relative">
        <div className="flex items-center gap-2 text-sm text-white/60 mb-5 animate-fade-in">
          <button onClick={() => navigate('home')} className="hover:text-accent-400 transition-colors">
            Bosh sahifa
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-accent-400">{crumb}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-5 animate-fade-in-up">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'backwards' }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
