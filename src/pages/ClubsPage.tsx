import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router';
import {
  Sparkles, Drama, Music, Trophy, Users, ArrowRight,
  Heart, Star, BookOpen, CheckCircle2, Activity,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/16225271/pexels-photo-16225271.jpeg?auto=compress&cs=tinysrgb&w=1920';
const theaterImage = 'https://images.pexels.com/photos/6899928/pexels-photo-6899928.jpeg?auto=compress&cs=tinysrgb&w=1600';
const volleyballImage = 'https://images.pexels.com/photos/31044958/pexels-photo-31044958.jpeg?auto=compress&cs=tinysrgb&w=1600';
const danceImage = 'https://images.pexels.com/photos/13632046/pexels-photo-13632046.jpeg?auto=compress&cs=tinysrgb&w=1600';

const clubs = [
  {
    name: 'Jadidlar izidan',
    icon: <BookOpen className="w-7 h-7" />,
    desc: 'Jadidchilik harakati merosini o\'rganuvchi klubi. O\'quvchilar o\'tmish buyuk mutafakkirlarimizning hayoti va faoliyati bilan tanishadilar, ularning g\'oyalarini o\'rganadilar va zamonaviy talqinini beradilar.',
    image: theaterImage,
    color: 'from-primary-500 to-primary-700',
    activities: [
      'Jadid ma\'rifatchilarining asarlarini o\'qish va muhokama qilish',
      'Tarixiy tadqiqotlar va taqdimotlar tayyorlash',
      'Mavzuga oid viktorinalar va tanlovlar',
      'Ilmiy konferensiyalarda ishtirok etish',
    ],
  },
  {
    name: 'Turon teatri',
    icon: <Drama className="w-7 h-7" />,
    desc: 'Teatr studiyasi — o\'quvchilarning aktyorlik mahoratini, sahna nutqini va ijodiy qobiliyatini rivojlantiruvchi klubi. Spektakllar va sahna asarlari tayyorlanadi.',
    image: theaterImage,
    color: 'from-accent-400 to-accent-600',
    activities: [
      'Aktyorlik mahorati va sahna nutqi darslari',
      'Spektakllar va sahna asarlarini sahnalashtirish',
      'Mimika, plastika va ijodkorlikni rivojlantirish',
      'Havaskor teatr tanlovlarida ishtirok etish',
    ],
  },
  {
    name: 'Iqtidorli ansambl',
    icon: <Music className="w-7 h-7" />,
    desc: 'Musiqiy va raqs ansambli — o\'quvchilarning san\'atkorlik qobiliyatini namoyon etuvchi klubi. Milliy va zamonaviy raqslar, qo\'shiqlar ijro etiladi.',
    image: danceImage,
    color: 'from-success-500 to-success-700',
    activities: [
      'Milliy va zamonaviy raqslar',
      'Xonandalik va sozandalik mahorati',
      'Musiqa nazariyasi va solfejio',
      'Bayram tadbirlari va tanlovlarda ishtirok',
    ],
  },
];

const sports = [
  {
    name: 'Voleybol',
    icon: <Activity className="w-7 h-7" />,
    desc: 'Voleybol — maktabimizning eng kuchli sport yo\'nalishi. O\'quvchilar jamoaviy ruh, tezlik va aniqlikni o\'rganadilar. Maktabimiz voleybol jamoalari turli musobaqalarda faol ishtirok etadi.',
    image: volleyballImage,
    color: 'from-error-400 to-error-600',
    features: [
      'Professional murabbiylar bilan mashg\'ulotlar',
      'O\'g\'il va qiz bolalar uchun alohida jamoalar',
      'Shahar va viloyat musobaqalarida ishtirok',
      'Jamoaviy ruh va liderlik fazilatlari',
    ],
  },
];

export function ClubsPage() {
  const { navigate } = useRouter();

  return (
    <div>
      <PageHero
        title="Klublar va sport"
        subtitle="Jadidlar izidan, Turon teatri, Iqtidorli ansambl va voleybol — o'quvchilarimizning iqtidorini ro'yobga chiqaruvchi to'garaklar."
        image={heroImage}
        crumb="Klublar va sport"
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <Sparkles className="w-4 h-4" />
                Tashkil etilgan klublar
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                Ijodiy va madaniy klublar
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Maktabimizda o'quvchilarning turli qiziqishlarini ro'yobga chiqarish uchun boy va xilma-xil klublar faoliyat yuritadi.
              </p>
            </div>
          </Reveal>

          {/* Clubs */}
          <div className="space-y-12">
            {clubs.map((club, i) => (
              <Reveal key={i}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative">
                      <img src={club.image} alt={club.name} className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" />
                      <div className={`absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br ${club.color} opacity-20 rounded-full blur-2xl`} />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5 bg-gradient-to-r ${club.color} text-white`}>
                      {club.icon}
                      {club.name}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-4">{club.name}</h3>
                    <p className="text-neutral-600 leading-relaxed mb-6 text-lg">{club.desc}</p>
                    <ul className="space-y-3">
                      {club.activities.map((act, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="section-padding bg-neutral-50">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-error-50 rounded-full text-sm text-error-700 font-semibold mb-5">
                <Trophy className="w-4 h-4" />
                Sport yo'nalishlari
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                Sport to'garaklari
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Sog'lom tan — sog'lom aql. Sport o'quvchilarga jismoniy va ma'naviy tarbiya beradi.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <Reveal>
              <div className="relative">
                <img src={volleyballImage} alt="Voleybol" className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-error-400 to-error-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white p-6 hidden md:flex">
                  <Activity className="w-10 h-10 mb-2" />
                  <div className="text-sm text-white/80 text-center">Voleybol sporti</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              {sports.map((sport, i) => (
                <div key={i}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5 bg-gradient-to-r ${sport.color} text-white`}>
                    {sport.icon}
                    {sport.name}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-4">{sport.name}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-6 text-lg">{sport.desc}</p>
                  <ul className="space-y-3">
                    {sport.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why join clubs */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-primary-800 overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white font-medium mb-5">
                <Heart className="w-4 h-4 text-accent-400" />
                Nima uchun klublarga qatnashish kerak?
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Klublarning foydasi
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Star className="w-7 h-7" />, title: 'Iqtidorni ro\'yobga chiqarish', desc: 'Har bir o\'quvchining yashirin iqtidori klublar orqali namoyon bo\'ladi.' },
              { icon: <Users className="w-7 h-7" />, title: 'Jamoaviy ish', desc: 'Klublar o\'quvchilarga jamoada ishlash va do\'stlashish imkonini beradi.' },
              { icon: <Heart className="w-7 h-7" />, title: 'O\'ziga ishonch', desc: 'Sahnada chiqish va musobaqalarda qatnashish o\'ziga ishonchni oshiradi.' },
              { icon: <Sparkles className="w-7 h-7" />, title: 'Bo\'sh vaqtni to\'g\'ri o\'tkazish', desc: 'Klublar o\'quvchilarning bo\'sh vaqtini foydali va qiziqarli o\'tkazishni ta\'minlaydi.' },
            ].map((benefit, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent-400/20 to-accent-600/20 flex items-center justify-center text-accent-400 mb-5 group-hover:scale-110 transition-transform duration-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-white font-display font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                Yutuqlarimiz bilan tanishing
              </h2>
              <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
                Bitiruvchilarimiz, sertifikatlar va akkreditatsiya haqida batafsil ma'lumot.
              </p>
              <button
                onClick={() => navigate('achievements')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-600/30 hover:scale-105 transition-all duration-300"
              >
                Yutuqlar
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
