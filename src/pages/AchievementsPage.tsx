import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router';
import {
  GraduationCap, Trophy, Award, Star, Shield, BookOpen,
  ArrowRight, TrendingUp, Users, CheckCircle2, Sparkles,
  Building2, Medal,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/38846536/pexels-photo-38846536.jpeg?auto=compress&cs=tinysrgb&w=1920';
const graduationImage = 'https://images.pexels.com/photos/19579986/pexels-photo-19579986.jpeg?auto=compress&cs=tinysrgb&w=1600';

const universityStats = [
  { value: '42', label: 'Davlat universitetlari', icon: <Building2 className="w-6 h-6" />, color: 'from-primary-500 to-primary-700' },
  { value: '37', label: 'Xususiy universitetlar', icon: <Building2 className="w-6 h-6" />, color: 'from-accent-400 to-accent-600' },
  { value: '1', label: 'Chet el universiteti', icon: <GraduationCap className="w-6 h-6" />, color: 'from-success-500 to-success-700' },
  { value: '10', label: 'Texnikumlarga kirgan', icon: <BookOpen className="w-6 h-6" />, color: 'from-error-400 to-error-600' },
];

const achievements = [
  {
    icon: <Trophy className="w-7 h-7" />,
    title: '100% bitiruv',
    value: '100%',
    desc: 'Har bir o\'quv yilida bitiruvchilarning 100 foizi muvaffaqiyatli bitiruv ko\'rsatkichiga ega. Bu — o\'qituvchilar va o\'quvchilarning birgalikdagi mehnati natijasidir.',
    color: 'from-success-500 to-success-700',
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: '80% oliygohga kirgan',
    value: '80%',
    desc: 'Bitiruvchilarning 80 foizi oliygohlarga kiradi. Ular orasida 42 nafar davlat universitetlari, 37 nafar xususiy universitetlar, 1 nafar chet el universiteti va 10 nafar texnikum bitiruvchilari bor.',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: '93% umumiy o\'zlashtirish',
    value: '93%',
    desc: 'Maktab bo\'yicha umumiy o\'zlashtirish ko\'rsatkichi 93 foizni tashkil etadi. Bu — malakali o\'qituvchilar va qiziqarli darslar natijasidir.',
    color: 'from-accent-400 to-accent-600',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: '2026-yil akkreditatsiya',
    value: '2026',
    desc: 'Maktabimiz 2026-yilda akkreditatsiyadan muvaffaqiyatli o\'tgan. Bu — ta\'lim sifati davlat standartlariga to\'liq mos kelishini tasdiqlovchi hujjatdir.',
    color: 'from-success-500 to-success-700',
  },
];

const certificates = [
  { value: '151', label: 'O\'quvchilar sertifikatlari', icon: <Award className="w-6 h-6 text-accent-400" /> },
  { value: '29', label: 'O\'qituvchilar sertifikatlari', icon: <Medal className="w-6 h-6 text-accent-400" /> },
];

export function AchievementsPage() {
  const { navigate } = useRouter();

  return (
    <div>
      <PageHero
        title="Yutuqlar"
        subtitle="100% bitiruv, 80% oliygoh, 93% o'zlashtirish va 2026-yil akkreditatsiya — maktabimiz faxrli natijalari."
        image={heroImage}
        crumb="Yutuqlar"
      />

      {/* Main achievements */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <Trophy className="w-4 h-4" />
                Asosiy yutuqlar
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                Maktabimiz faxrli natijalari
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Yuqori ko'rsatkichlar — o'qituvchilar va o'quvchilarning birgalikdagi mehnati natijasidir.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full bg-neutral-50 rounded-3xl p-8 border border-neutral-100 hover:shadow-2xl hover:shadow-primary-900/5 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-3xl font-display font-bold gradient-text">{item.value}</span>
                        <h3 className="text-xl font-display font-bold text-neutral-900">{item.title}</h3>
                      </div>
                      <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* University stats */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-primary-800 overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white font-medium mb-5">
                <GraduationCap className="w-4 h-4 text-accent-400" />
                Oliygoh natijalari
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Bitiruvchilarimiz qayerga kirgan?
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                80% bitiruvchimiz oliygohlarga kirgan. Ularning taqsimoti quyidagicha:
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {universityStats.map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center h-full">
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-5`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-white/80 text-lg leading-relaxed">
                Jami <span className="text-accent-400 font-bold">80 nafar</span> bitiruvchimiz oliygohlarga muvaffaqiyatli kirgan. Bu — maktabimiz akademik sifatining yorqin isbotidir.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certificates */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <img src={graduationImage} alt="Bitiruvchilar" className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 rounded-full text-sm text-accent-700 font-semibold mb-5">
                <Award className="w-4 h-4" />
                Sertifikatlar
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6 leading-tight">
                Sertifikatlangan o'quvchilar va o'qituvchilar
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8 text-lg">
                Maktabimiz o'quvchilari va o'qituvchilari turli viloyat, respublika va xalqaro tanlov va olimpiadalarda ishtirok etib, sertifikatlar va diplomlar bilan taqdirlanganlar.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {certificates.map((cert, i) => (
                  <div key={i} className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-6 border border-neutral-100 text-center">
                    <div className="flex justify-center mb-3">{cert.icon}</div>
                    <div className="text-4xl font-display font-bold text-neutral-900">{cert.value}</div>
                    <div className="text-sm text-neutral-500 mt-1">{cert.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-primary-50 rounded-xl flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <p className="text-sm text-neutral-700">
                  <strong>151 nafar o'quvchi</strong> va <strong>29 nafar o'qituvchi</strong> turli darajadagi sertifikat va diplomlarga ega. Bu — maktabimizning doimiy o'sish va rivojlanishdan dalolat beradi.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section-padding bg-neutral-50">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <Shield className="w-4 h-4" />
                Davlat tomonidan tasdiqlangan
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                Akkreditatsiya va tan olinish
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Akkreditatsiya 2026',
                desc: 'Maktab 2026-yilda akkreditatsiyadan o\'tgan. Ta\'lim sifati davlat standartlariga to\'liq mos keladi.',
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Yuqori reyting',
                desc: '93% o\'zlashtirish va 80% oliygoh ko\'rsatkichlari bilan maktabimiz Buxoro shahridagi yetakchi maktablar qatorida turadi.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Kam ta\'minlangan oilalar',
                desc: '97 kam ta\'minlangan oila bolalariga sifatli ta\'lim berish — maktabimizning ijtimoiy mas\'uliyati.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="h-full bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-xl transition-all duration-500 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
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
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-800 to-primary-950 p-12 md:p-16 text-center">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, white 1.5px, transparent 1.5px)',
                backgroundSize: '30px 30px',
              }} />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Sizning farzandingiz ham yutuqlar qatorida bo'lsin
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                  19-maktabga hujjat topshiring va kelajak uchun mustahkam poydevor quring.
                </p>
                <button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-500 text-white rounded-xl font-semibold shadow-xl shadow-accent-500/30 hover:scale-105 transition-all duration-300"
                >
                  Bog'lanish
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
