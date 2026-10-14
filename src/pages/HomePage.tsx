import { Reveal } from '@/components/Reveal';
import { Counter } from '@/components/Counter';
import { useRouter, type Route } from '@/router';
import {
  GraduationCap, Users, Trophy, BookOpen, Languages, Award,
  ArrowRight, Star, Sparkles, Heart, Shield, Target,
  MapPin, Phone, TrendingUp, CheckCircle2, Quote,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/16796314/pexels-photo-16796314.jpeg?auto=compress&cs=tinysrgb&w=1920';
const classroomImage = 'https://images.pexels.com/photos/8926904/pexels-photo-8926904.jpeg?auto=compress&cs=tinysrgb&w=1600';
const koreanImage = 'https://images.pexels.com/photos/2155509/pexels-photo-2155509.jpeg?auto=compress&cs=tinysrgb&w=1600';
const libraryImage = 'https://images.pexels.com/photos/9572566/pexels-photo-9572566.jpeg?auto=compress&cs=tinysrgb&w=1600';
const graduationImage = 'https://images.pexels.com/photos/38846536/pexels-photo-38846536.jpeg?auto=compress&cs=tinysrgb&w=1600';
const bukharaImage = 'https://images.pexels.com/photos/19473665/pexels-photo-19473665.jpeg?auto=compress&cs=tinysrgb&w=1600';

const stats = [
  { end: 1581, label: 'Jami o\'quvchilar', icon: <Users className="w-6 h-6 text-accent-400" /> },
  { end: 29, label: 'O\'qituvchilar', icon: <GraduationCap className="w-6 h-6 text-accent-400" /> },
  { end: 100, suffix: '%', label: 'Bitiruv', icon: <Trophy className="w-6 h-6 text-accent-400" /> },
  { end: 93, suffix: '%', label: 'O\'zlashtirish', icon: <TrendingUp className="w-6 h-6 text-accent-400" /> },
];

const features = [
  {
    icon: <Languages className="w-7 h-7" />,
    title: 'Koreys tili',
    desc: 'Ixtisoslashtirilgan fan sifatida o\'qitiladi. O\'quvchilar xorijiy tilni chuqur o\'rganadilar va xalqaro imkoniyatlarga ega bo\'ladilar.',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: '10 balli baholash',
    desc: 'Zamonaviy 10 balli baholash tizimi o\'quvchilarning haqiqiy bilim darajasini aniq va adolatli baholashni ta\'minlaydi.',
    color: 'from-accent-400 to-accent-600',
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: 'Iqtidorli klublar',
    desc: 'Jadidlar izidan, Turon teatri, Iqtidorli ansambl — o\'quvchilarning ijodiy va madaniy salohiyatini ro\'yobga chiqaruvchi klublar.',
    color: 'from-success-500 to-success-700',
  },
  {
    icon: <Trophy className="w-7 h-7" />,
    title: 'Voleybol sporti',
    desc: 'Sportga mehr qo\'ygan o\'quvchilar uchun voleybol to\'garagi. Jamoaviy ruh va sog\'lom turmush tarzi.',
    color: 'from-error-400 to-error-600',
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: '80% oliygoh',
    desc: 'Bitiruvchilarning 80 foizi oliygohlarga kiradi. 42 nafar davlat universitetlari, 37 nafar xususiy, 1 nafar chet el.',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: '2026 akkreditatsiya',
    desc: 'Maktab 2026-yilda akkreditatsiyadan o\'tgan. Yuqori sifat standartlari va davlat tomonidan tasdiqlangan.',
    color: 'from-accent-400 to-accent-600',
  },
];

const values = [
  { icon: <Heart className="w-8 h-8" />, title: 'Ona vatanga muhabbat', desc: 'Vatanparvarlik ruhi har bir o\'quvchida chuqur singdiriladi.' },
  { icon: <Shield className="w-8 h-8" />, title: 'Halollik', desc: 'To\'g\'rilik va halollik — har bir o\'quvchining fazilati.' },
  { icon: <BookOpen className="w-8 h-8" />, title: 'Mehnatsevarlik', desc: 'Mehnat va bilim — kelajak poydevori.' },
  { icon: <Heart className="w-8 h-8" />, title: 'Milliy urf-odatlar', desc: 'Xalqimizning boy madaniyatiga hurmat.' },
  { icon: <Users className="w-8 h-8" />, title: 'Ajdodlarga hurmat', desc: 'Ajdodlarimizga bo\'lgan hurmatni oshirish.' },
];

export function HomePage() {
  const { navigate } = useRouter();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Buxoro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/80 to-primary-800/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container-x relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent-400" />
              Buxoro shahar 19-umumtalim maktabi
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 animate-fade-in-up">
              Bilim, tarbiya va
              <span className="block bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                iqtidor maskani
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'backwards' }}>
              Koreys tili ixtisoslashtirilgan fan sifatida o'qitiladigan, 100% bitiruv va 80% oliygoh ko'rsatkichlari bilan Buxoro shahrining yetakchi maktablaridan biri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
              <button
                onClick={() => navigate('about')}
                className="px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-500 text-white rounded-xl font-semibold shadow-2xl shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Maktab haqida batafsil
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('contact')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Bog'lanish
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pb-8 hidden md:block">
          <div className="container-x">
            <div className="grid grid-cols-4 gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <Counter {...stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={bukharaImage}
                  alt="Buxoro me'morchiligi"
                  className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white p-6 hidden md:flex">
                  <div className="text-4xl font-display font-bold">2026</div>
                  <div className="text-sm text-white/80 text-center mt-1">Akkreditatsiyadan o'tgan</div>
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl" />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <Target className="w-4 h-4" />
                Bizning maqsadimiz
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6 leading-tight">
                Har bir o'quvchi uchun
                <span className="gradient-text"> zo'r kelajak</span> yaratamiz
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
                Buxoro shahar 19-umumtalim maktabi 1581 nafar o'quvchiga sifatli ta'lim berib kelayotgan zamonaviy maskan. 29 nafar malakali o'qituvchilar jamoami bilan bilim va tarbiyani uyg'unlashtirgan holda, har bir o'quvchining iqtidorini ro'yobga chiqarishga intilamiz.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Maktabimizda Koreys tili ixtisoslashtirilgan fan sifatida o'qitiladi, 10 balli baholash tizimi qo'llaniladi va o'quvchilar turli klublar orqali o'zlarining ijodiy salohiyatini namoyon etadilar.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Kam ta\'minlangan oilalar', value: '97 ta' },
                  { label: 'Sertifikatlangan o\'quvchilar', value: '151 ta' },
                  { label: 'Sertifikatlangan o\'qituvchilar', value: '29 ta' },
                  { label: 'Umumiy o\'zlashtirish', value: '93%' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0" />
                    <div>
                      <div className="font-display font-bold text-xl text-neutral-900">{item.value}</div>
                      <div className="text-xs text-neutral-500">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('about')}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
              >
                Batafsil o'qish
                <ArrowRight className="w-5 h-5" />
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats counter dark */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="container-x relative">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Maktabimiz raqamlarda</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">Yuqori natijalar va doimiy o'sish — bizning faxrimiz</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 80, suffix: '%', label: 'Oliygohga kirgan', icon: <Trophy className="w-6 h-6 text-accent-400" /> },
              { end: 151, label: 'O\'quvchi sertifikati', icon: <Award className="w-6 h-6 text-accent-400" /> },
              { end: 97, label: 'Kam ta\'minlangan oila', icon: <Heart className="w-6 h-6 text-accent-400" /> },
              { end: 80, suffix: 'nafar', label: 'Oliygohga kirgan bitiruvchilar', icon: <GraduationCap className="w-6 h-6 text-accent-400" /> },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="glass-card p-6 bg-white/5 border-white/10 backdrop-blur-md">
                  <Counter {...stat} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <Sparkles className="w-4 h-4" />
                Nima uchun 19-maktab?
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                Bizning afzalliklarimiz
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Maktabimiz o'quvchilarga nafaqat bilim, balki ko'nikma, qiziqish va kelajak uchun poydevor beradi.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full bg-white rounded-2xl p-8 border border-neutral-100 hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-900/5 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Korean language highlight */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <img src={koreanImage} alt="Koreys tili" className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent rounded-3xl" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 rounded-full text-sm text-accent-700 font-semibold mb-5">
                <Languages className="w-4 h-4" />
                Ixtisoslashtirilgan fan
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6 leading-tight">
                Koreys tili — xalqaro imkoniyatlar darvozasi
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
                Maktabimizda Koreys tili ixtisoslashtirilgan fan sifatida o'qitiladi. Bu o'quvchilarimizga nafaqat yangi til o'rganish, balki koreys madaniyati bilan tanishish va xalqaro o'qish hamda ishlash imkoniyatlariga ega bo'lish imkonini beradi.
              </p>
              <ul className="space-y-3">
                {[
                  'Malakali koreys tili o\'qituvchilari',
                  'Xalqaro til imtihonlariga tayyorgarlik',
                  'Koreys madaniyati va an\'analari bilan tanishish',
                  'Tilni amaliyotda qo\'llash uchun klublar',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-primary-800 overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white font-medium mb-5">
                <Heart className="w-4 h-4 text-accent-400" />
                Bizning qadriyatlarimiz
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Tarbiyaviy qadriyatlar
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                O'quvchilarda vatanparvarlik, halollik, mehnatsevarlik va milliy qadriyatlarni singdiramiz.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((value, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent-400/20 to-accent-600/20 flex items-center justify-center text-accent-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-white font-display font-bold text-base mb-2">{value.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-neutral-50">
        <div className="container-x">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="w-16 h-16 text-primary-200 mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display text-neutral-800 leading-relaxed mb-8">
                "Bilim — kelajak poydevori. Har bir o'quvchimizning iqtidorini ro'yobga chiqarish — bizning burchimiz."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-display font-bold text-lg">
                  NB
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-neutral-900">Bakayeva Nilufar Baxriddinovna</div>
                  <div className="text-sm text-neutral-500">Maktab direktori</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-x">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-800 to-primary-950 p-12 md:p-16 lg:p-20">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 30% 50%, white 1.5px, transparent 1.5px)',
                backgroundSize: '30px 30px',
              }} />
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    O'g'lingiz yoki qizingizni 19-maktabga yozdiring
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Sifatli ta'lim, mehr-muhabbat va xalqaro imkoniyatlar — barchasi Buxoro 19-maktabda. Hujjatlarni topshirish uchun biz bilan bog'laning.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                  <button
                    onClick={() => navigate('contact')}
                    className="px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-500 text-white rounded-xl font-semibold shadow-xl shadow-accent-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Bog'lanish
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigate('academics')}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    O'qituv haqida
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
