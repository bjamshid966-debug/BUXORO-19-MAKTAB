import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router';
import {
  Languages, Star, TrendingUp, BookOpen, CheckCircle2,
  GraduationCap, Award, ArrowRight, Globe, Users,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/8342284/pexels-photo-8342284.jpeg?auto=compress&cs=tinysrgb&w=1920';
const koreanImage = 'https://images.pexels.com/photos/2155509/pexels-photo-2155509.jpeg?auto=compress&cs=tinysrgb&w=1600';
const libraryImage = 'https://images.pexels.com/photos/9572566/pexels-photo-9572566.jpeg?auto=compress&cs=tinysrgb&w=1600';
const studyImage = 'https://images.pexels.com/photos/7092523/pexels-photo-7092523.jpeg?auto=compress&cs=tinysrgb&w=1600';

const gradingScale = [
  { range: '9-10', level: 'A\'lo', color: 'bg-success-100 text-success-700 border-success-300', desc: 'Juda yuqori darajada o\'zlashtirilgan' },
  { range: '7-8', level: 'Yaxshi', color: 'bg-primary-100 text-primary-700 border-primary-300', desc: 'Yaxshi o\'zlashtirilgan' },
  { range: '5-6', level: 'Qoniqarli', color: 'bg-accent-100 text-accent-700 border-accent-300', desc: 'Qoniqarli darajada o\'zlashtirilgan' },
  { range: '3-4', level: 'Qoniqarsiz', color: 'bg-warning-100 text-warning-700 border-warning-300', desc: 'Qoniqarsiz darajada o\'zlashtirilgan' },
  { range: '1-2', level: 'Juda qoniqarsiz', color: 'bg-error-100 text-error-700 border-error-300', desc: 'O\'zlashtirilmagan' },
];

const subjects = [
  { name: 'Koreys tili', desc: 'Ixtisoslashtirilgan fan — xalqaro darajada o\'qitiladi', featured: true },
  { name: 'Ona tili va adabiyot', desc: 'O\'zbek tili va boy adabiyotimizni chuqur o\'rganish' },
  { name: 'Matematika', desc: 'Aniq fanlar asosi — mantiqiy fikrlashni rivojlantirish' },
  { name: 'Ingliz tili', desc: 'Xalqaro muloqot uchun zamonaviy til' },
  { name: 'Fizika', desc: 'Tabiat qonuniyatlarini o\'rganish' },
  { name: 'Kimyo', desc: 'Modda va uning o\'zgarishlarini o\'rganish' },
  { name: 'Biologiya', desc: 'Tirik organizmlar dunyosi' },
  { name: 'Tarix', desc: 'O\'tmishni bilib, kelajakni anglash' },
  { name: 'Informatika', desc: 'Zamonaviy axborot texnologiyalari' },
  { name: 'Jismoniy tarbiya', desc: 'Sog\'lom tan — sog\'lom aql' },
];

export function AcademicsPage() {
  const { navigate } = useRouter();

  return (
    <div>
      <PageHero
        title="O'qituv tizimi"
        subtitle="Koreys tili ixtisoslashtirilgan fan, 10 balli baholash tizimi va 93% umumiy o'zlashtirish ko'rsatkichi bilan zamonaviy ta'lim."
        image={heroImage}
        crumb="O'qituv"
      />

      {/* Korean Language */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <img src={koreanImage} alt="Koreys tili" className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white p-6 hidden md:flex">
                  <Languages className="w-10 h-10 mb-2" />
                  <div className="text-sm text-white/80 text-center">Ixtisoslashtirilgan fan</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 rounded-full text-sm text-accent-700 font-semibold mb-5">
                <Globe className="w-4 h-4" />
                Xalqaro til
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6 leading-tight">
                Koreys tili — ixtisoslashtirilgan fan
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
                Buxoro 19-maktabda Koreys tili ixtisoslashtirilgan fan sifatida o'qitiladi. Bu o'quvchilarimizga koreys tilini chuqur o'rganish, koreys madaniyati bilan tanishish va kelajakda Janubiy Koreyaning nufuzli universitetlarida o'qish imkoniyatini beradi.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Malakali va sertifikatlangan koreys tili o\'qituvchilari',
                  'TOPIK (Test of Proficiency in Korean) imtihoniga tayyorgarlik',
                  'Koreys madaniyati, an\'analari va tarixi bilan tanishish',
                  'Koreys tili klubi orqali amaliy muloqot ko\'nikmalari',
                  'Xalqaro almashinuv dasturlarida ishtirok etish imkoniyati',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10-point grading */}
      <section className="section-padding bg-neutral-50">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <Star className="w-4 h-4" />
                Baholash tizimi
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                10 balli baholash tizimi
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Zamonaviy 10 balli baholash tizimi o'quvchilarning bilim darajasini aniq va adolatli baholashni ta'minlaydi.
              </p>
            </div>
          </Reveal>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-3">
              {gradingScale.map((grade, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className={`flex items-center gap-6 p-6 rounded-2xl border-2 ${grade.color}`}>
                    <div className="text-3xl font-display font-bold w-20 text-center">{grade.range}</div>
                    <div className="flex-1">
                      <div className="font-display font-bold text-lg">{grade.level}</div>
                      <div className="text-sm opacity-80">{grade.desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic performance */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-primary-800 overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white font-medium mb-5">
                <TrendingUp className="w-4 h-4 text-accent-400" />
                Akademik natijalar
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                O'zlashtirish ko'rsatkichlari
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '93%', label: 'Umumiy o\'zlashtirish', icon: <TrendingUp className="w-6 h-6 text-accent-400" /> },
              { value: '100%', label: 'Bitiruv', icon: <GraduationCap className="w-6 h-6 text-accent-400" /> },
              { value: '80%', label: 'Oliygohga kirgan', icon: <Award className="w-6 h-6 text-accent-400" /> },
              { value: '151', label: 'O\'quvchi sertifikati', icon: <Star className="w-6 h-6 text-accent-400" /> },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center h-full">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <BookOpen className="w-4 h-4" />
                O'qitiladigan fanlar
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                Fanlar dasturi
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Maktabimizda davlat standartlariga muvofiq barcha fanlar o'qitiladi, Koreys tili esa ixtisoslashtirilgan fan sifatida alohida e'tibor beriladi.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subjects.map((subject, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`group h-full rounded-2xl p-6 border transition-all duration-500 ${
                  subject.featured
                    ? 'bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200 hover:shadow-2xl hover:shadow-primary-900/10'
                    : 'bg-neutral-50 border-neutral-100 hover:bg-white hover:shadow-xl'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      subject.featured
                        ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white'
                        : 'bg-neutral-200 text-neutral-600 group-hover:bg-primary-100 group-hover:text-primary-600'
                    } transition-colors duration-500`}>
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold text-neutral-900">{subject.name}</h3>
                        {subject.featured && (
                          <span className="text-xs px-2 py-0.5 bg-accent-400 text-white rounded-full font-semibold">Ixtisos</span>
                        )}
                      </div>
                      <p className="text-sm text-neutral-600 mt-1">{subject.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                O'quvchining iqtidori shu yerda namoyon bo'ladi
              </h2>
              <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
                Klublar va sport to'garaklari haqida batafsil ma'lumot oling.
              </p>
              <button
                onClick={() => navigate('clubs')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-600/30 hover:scale-105 transition-all duration-300"
              >
                Klublar va sport
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
