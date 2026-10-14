import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Send, MessageCircle } from 'lucide-react';
import { useRouter, type Route } from '@/router';

const links: { label: string; route: Route }[] = [
  { label: 'Bosh sahifa', route: 'home' },
  { label: 'Maktab haqida', route: 'about' },
  { label: 'O\'qituv', route: 'academics' },
  { label: 'Klublar va sport', route: 'clubs' },
  { label: 'Yutuqlar', route: 'achievements' },
  { label: 'Bog\'lanish', route: 'contact' },
];

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-20 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">19-maktab</div>
                <div className="text-[10px] tracking-wider text-neutral-500">BUXORO SHAHAR</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Buxoro shahar 19-umumtalim maktabi — bilim, tarbiya va iqtidor maskani. Koreys tili ixtisoslashtirilgan fan sifatida o'qitiladigan maktab.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-neutral-300" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-5">Tezkor havolalar</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => navigate(link.route)}
                    className="text-sm text-neutral-400 hover:text-accent-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-5">Bog'lanish</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400">Muhammad Iqbol ko'chasi, 3-mikrorayon, 3/2-uy, Buxoro shahri</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+998652232152" className="text-neutral-400 hover:text-accent-400 transition-colors">
                  +998 65 223-21-52
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:salimovsamir242@gmail.com" className="text-neutral-400 hover:text-accent-400 transition-colors break-all">
                  salimovsamir242@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-5">Yangiliklar</h4>
            <p className="text-sm text-neutral-400 mb-4">
              Maktab yangiliklaridan doimiy xabardor bo'ling.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-1 px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button className="px-4 py-2.5 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © 2026 Buxoro shahar 19-umumtalim maktabi. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs text-neutral-500">
            2026-yil akkreditatsiyadan o'tgan
          </p>
        </div>
      </div>
    </footer>
  );
}
