import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router';
import {
  GraduationCap, Phone, Mail, Users, BookOpen, Award,
  Target, Heart, Shield, Sparkles, CheckCircle2, MapPin,
  ArrowRight, Building, Calendar, Star,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/16086326/pexels-photo-16086326.jpeg?auto=compress&cs=tinysrgb&w=1920';
const classroomImage = 'https://images.pexels.com/photos/8926904/pexels-photo-8926904.jpeg?auto=compress&cs=tinysrgb&w=1600';
const libraryImage = 'https://images.pexels.com/photos/9572566/pexels-photo-9572566.jpeg?auto=compress&cs=tinysrgb&w=1600';

const leadership = [
  {
    name: 'Bakayeva Nilufar Baxriddinovna',
    role: 'Direktor',
    icon: <Star className="w-6 h-6" />,
    color: 'from-primary-500 to-primary-700',
  },
  {
    name: 'Nazira Ismoilovna Mirzoboyeva',
    role: "O'quv ishlari bo'yicha",
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-accent-400 to-accent-600',
  },
  {
    name: 'Olimova Dilorom Qurbonovna',
    role: 'Counselor',
    phone: '93-758-76-97',
    email: 'salimovsamir242@gmail.com',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-success-500 to-success-700',
  },
];

const milestones = [
  { year: '1581', title: 'O\'quvchilar', desc: 'Joriy o\'quv yilida 1581 nafar o\'quvchi ta\'lim olmoqda.' },
  { year: '29', title: 'O\'qituvchilar', desc: 'Malakali va sertifikatlangan 29 nafar o\'qituvchi jamoasi.' },
  { year: '97', title: 'Kam ta\'minlangan oilalar', desc: 'Maktab 97 kam ta\'minlangan oila bolalarini qo\'llab-quvvatlaydi.' },
  { year: '2026', title: 'Akkreditatsiya', desc: 'Maktab 2026-yilda akkreditatsiyadan muvaffaqiyatli o\'tgan.' },
];

export function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div>
      <PageHero
        title="Maktab haqida"
        subtitle="Buxoro shahar 19-umumtalim maktabi — bilim, tarbiya va iqtidor maskani. Koreys tili ixtisoslashtirilgan fan sifatida o'qitiladigan zamonaviy maktab."
        image={heroImage}
        crumb="Maktab haqida"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <img src={classroomImage} alt="O'quvchilar" className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" />
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent-400/20 rounded-full blur-2xl" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <Building className="w-4 h-4" />
                Maktab tarixi
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6 leading-tight">
                Ko'p yillarlik tajriba va doimiy rivojlanish
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
                Buxoro shahar 19-umumtalim maktabi Muhammad Iqbol ko'chasi, 3-mikrorayon, 3/2-uy manzilida joylashgan. Maktabimiz o'zining boy tarixi, malakali pedagog jamoasi va yuqori akademik natijalari bilan Buxoro shahrining nufuzli ta'lim muassasalaridan biri hisoblanadi.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Maktabda jami 1581 nafar o'quvchi ta'lim olmoqda. Ular 29 nafar sertifikatlangan o'qituvchilar jamoasi tomonidan zamonaviy standartlar asosida o'qitiladi. O'quvchilarimiz orasida 97 kam ta'minlangan oila farzandlari ham bor va maktabimiz ularni alohida qo'llab-quvvatlaydi.
              </p>
              <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl">
                <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-neutral-700 text-sm font-medium">Muhammad Iqbol ko'chasi, 3-mikrorayon, 3/2-uy, Buxoro shahri</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-neutral-50">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <Users className="w-4 h-4" />
                Rahbariyat
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                Maktab rahbariyati
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Tajribali va malakali rahbarlar jamoasi — maktabimiz yutuqlari garovi
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group h-full bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-2xl hover:shadow-primary-900/5 transition-all duration-500 text-center">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${person.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {person.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-neutral-900 mb-2">{person.name}</h3>
                  <p className="text-sm text-primary-600 font-semibold mb-4">{person.role}</p>
                  {person.phone && (
                    <a href={`tel:+998${person.phone.replace(/[^0-9]/g, '')}`} className="flex items-center justify-center gap-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors mb-2">
                      <Phone className="w-4 h-4" />
                      {person.phone}
                    </a>
                  )}
                  {person.email && (
                    <a href={`mailto:${person.email}`} className="flex items-center justify-center gap-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors break-all">
                      <Mail className="w-4 h-4" />
                      {person.email}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 rounded-full text-sm text-accent-700 font-semibold mb-5">
                <Calendar className="w-4 h-4" />
                Maktab ko'rsatkichlari
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                Muhim raqamlar
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative h-full bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 border border-neutral-100 hover:shadow-xl transition-all duration-500">
                  <div className="text-5xl font-display font-bold gradient-text mb-3">{m.year}</div>
                  <h3 className="text-lg font-display font-bold text-neutral-900 mb-2">{m.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-primary-800 overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Bizning missiyamiz</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Har bir o'quvchiga sifatli ta'lim berish, ularning iqtidorini ro'yobga chiqarish va vatanparvar, halol, mehnatsevar shaxs sifatida tarbiyalash. Milliy qadriyatlarimizni asrab-avaylash va ajdodlarimizga hurmatni yosh avlodga singdirish.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-success-400 to-success-600 flex items-center justify-center text-white mb-6">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Bizning vizyonimiz</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Buxoro shahrining eng nufuzli va innovatsion maktabiga aylanish. Xalqaro standartlarga mos ta'lim beruvchi, o'quvchilarni nafaqat mahalliy, balki xalqaro oliygohlarga ham kirishga tayyorlovchi yetakchi ta'lim muassasasi bo'lish.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values detailed */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <Heart className="w-4 h-4" />
                Tarbiyaviy qadriyatlar
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                Biz singdirmoqchi bo'lgan fazilatlar
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Maktabimiz nafaqat bilim beradi, balki yuksak insoniy qadriyatlarni ham tarbiyalaydi.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Heart className="w-6 h-6" />, title: 'Ona vatanga muhabbat', desc: 'Har bir o\'quvchida vatanparvarlik tuyg\'usi chuqur singdiriladi. Vatan — eng muqaddas tushuncha.' },
              { icon: <Shield className="w-6 h-6" />, title: 'Halollik', desc: 'To\'g\'rilik, halollik va adolat — har bir o\'quvchining burchi. Bu fazilatlar hayotda muvaffaqiyatga olib keladi.' },
              { icon: <GraduationCap className="w-6 h-6" />, title: 'Mehnatsevarlik', desc: 'Mehnat — baxt va farovonlik manbai. O\'quvchilarmiza mehnatsevarlikni o\'rgatamiz.' },
              { icon: <Users className="w-6 h-6" />, title: 'Milliy urf-odatlarga hurmat', desc: 'Xalqimizning boy madaniyati, an\'analari va urf-odatlari bilan tanishish va ularga hurmat ko\'rsatish.' },
              { icon: <Star className="w-6 h-6" />, title: 'Ajdodlarga hurmat', desc: 'Ajdodlarimiz merosi, ularning jasorati va donoligini yosh avlodga yetkazish va hurmatini oshirish.' },
              { icon: <BookOpen className="w-6 h-6" />, title: 'Bilimga intilish', desc: 'Bilim — kuch va qudrat. O\'quvchilarmiza doimiy ravishda bilim olishga undaymiz.' },
            ].map((value, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group h-full bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-neutral-900 mb-2">{value.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{value.desc}</p>
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
                Maktabimiz haqida batafsil bilmoqchimisiz?
              </h2>
              <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
                O'qituv dasturi, klublar va yutuqlar haqida ko'proq ma'lumot oling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('academics')}
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-600/30 hover:scale-105 transition-all duration-300"
                >
                  O'qituv haqida
                </button>
                <button
                  onClick={() => navigate('contact')}
                  className="px-8 py-4 bg-white border border-neutral-200 text-neutral-700 rounded-xl font-semibold hover:border-primary-300 hover:text-primary-700 transition-all duration-300"
                >
                  Bog'lanish
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
