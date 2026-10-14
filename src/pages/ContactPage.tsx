import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { useState } from 'react';
import {
  MapPin, Phone, Mail, User, MessageSquare, Send,
  Clock, Heart, BookOpen, Star, CheckCircle2,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/16086326/pexels-photo-16086326.jpeg?auto=compress&cs=tinysrgb&w=1920';

const contacts = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Manzil',
    value: 'Muhammad Iqbol ko\'chasi, 3-mikrorayon, 3/2-uy',
    sub: 'Buxoro shahri, Buxoro viloyati',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Telefon',
    value: '+998 65 223-21-52',
    sub: 'Ish kunlari: 08:00 — 17:00',
    color: 'from-accent-400 to-accent-600',
    href: 'tel:+998652232152',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    value: 'salimovsamir242@gmail.com',
    sub: 'Counselor: Olimova Dilorom Qurbonovna',
    color: 'from-success-500 to-success-700',
    href: 'mailto:salimovsamir242@gmail.com',
  },
];

const staff = [
  {
    name: 'Bakayeva Nilufar Baxriddinovna',
    role: 'Direktor',
    icon: <Star className="w-5 h-5" />,
    color: 'from-primary-500 to-primary-700',
  },
  {
    name: 'Nazira Ismoilovna Mirzoboyeva',
    role: "O'quv ishlari bo'yicha",
    icon: <BookOpen className="w-5 h-5" />,
    color: 'from-accent-400 to-accent-600',
  },
  {
    name: 'Olimova Dilorom Qurbonovna',
    role: 'Counselor',
    phone: '+998 93 758-76-97',
    email: 'salimovsamir242@gmail.com',
    icon: <Heart className="w-5 h-5" />,
    color: 'from-success-500 to-success-700',
  },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div>
      <PageHero
        title="Bog'lanish"
        subtitle="Maktabimiz bilan bog'lanish, hujjat topshirish va savollar uchun bizga murojaat qiling."
        image={heroImage}
        crumb="Bog'lanish"
      />

      {/* Contact info cards */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <Phone className="w-4 h-4" />
                Bog'lanish ma'lumotlari
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                Biz bilan bog'laning
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Quyidagi ma'lumotlar orqali biz bilan bog'lanishingiz mumkin.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contacts.map((contact, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full bg-neutral-50 rounded-2xl p-8 border border-neutral-100 hover:shadow-2xl hover:shadow-primary-900/5 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-neutral-900 mb-2">{contact.title}</h3>
                  {contact.href ? (
                    <a href={contact.href} className="block text-neutral-700 font-medium hover:text-primary-600 transition-colors break-all">
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-neutral-700 font-medium">{contact.value}</p>
                  )}
                  <p className="text-sm text-neutral-500 mt-2">{contact.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-100">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">Murojaat yuboring</h3>
                <p className="text-neutral-500 mb-8">Savollaringiz bormi? Bizga xat qoldiring — tez orada javob beramiz.</p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-success-100 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-success-600" />
                    </div>
                    <h4 className="text-xl font-display font-bold text-neutral-900 mb-2">Murojaatingiz qabul qilindi!</h4>
                    <p className="text-neutral-500">Tez orada siz bilan bog'lanamiz.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">F.I.O</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Familiya Ism Sharif"
                          className="w-full pl-12 pr-4 py-3.5 bg-white border border-neutral-200 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">Telefon raqam</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+998 90 123-45-67"
                          className="w-full pl-12 pr-4 py-3.5 bg-white border border-neutral-200 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full pl-12 pr-4 py-3.5 bg-white border border-neutral-200 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">Xabar</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-400" />
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Murojaatingizni yozing..."
                          className="w-full pl-12 pr-4 py-3.5 bg-white border border-neutral-200 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-600/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Yuborish
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="h-full flex flex-col gap-6">
                {/* Map */}
                <div className="flex-1 rounded-3xl overflow-hidden shadow-xl min-h-[300px]">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=64.38%2C39.77%2C64.48%2C39.82&layer=mapnik&marker=39.795%2C64.425"
                    className="w-full h-full border-0"
                    title="Maktab joylashuvi"
                    loading="lazy"
                  />
                </div>

                {/* Working hours */}
                <div className="bg-gradient-to-br from-primary-800 to-primary-950 rounded-3xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent-400" />
                    </div>
                    <h3 className="text-xl font-display font-bold">Ish vaqti</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: 'Dushanba — Juma', time: '08:00 — 17:00' },
                      { day: 'Shanba', time: '08:00 — 14:00' },
                      { day: 'Yakshanba', time: 'Dam olish kuni' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                        <span className="text-white/80 text-sm">{item.day}</span>
                        <span className="text-white font-medium text-sm">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="section-padding bg-neutral-50">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-semibold mb-5">
                <User className="w-4 h-4" />
                Xodimlar
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
                Bog'lanish uchun xodimlar
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Savollaringiz uchun to'g'ridan-to'g'ri mas'ul xodimga murojaat qiling.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {staff.map((person, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group h-full bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-2xl hover:shadow-primary-900/5 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${person.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    {person.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-neutral-900 mb-1">{person.name}</h3>
                  <p className="text-sm text-primary-600 font-semibold mb-4">{person.role}</p>
                  {person.phone && (
                    <a href={`tel:+998${person.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors mb-2">
                      <Phone className="w-4 h-4" />
                      {person.phone}
                    </a>
                  )}
                  {person.email && (
                    <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors break-all">
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
    </div>
  );
}
