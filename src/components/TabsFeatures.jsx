import { useState } from 'react';
import { CalendarCheck2, Gift, BarChart3, ArrowRight } from 'lucide-react';

const tabs = [
  {
    id: 'reservations',
    label: 'Réservations',
    icon: CalendarCheck2,
    title: 'Réservez en un geste',
    desc: "Un parcours fluide et mobile-first pour trouver un pro, choisir un créneau et confirmer en quelques secondes.",
    cta: 'Découvrir la réservation',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'fidelite',
    label: 'Fidélité',
    icon: Gift,
    title: 'Fidélisez vos clients',
    desc: "Cumulez des points à chaque rendez-vous, débloquez des récompenses et boostez les retours.",
    cta: 'Comprendre la fidélité',
    image: 'https://images.unsplash.com/photo-1512207846876-9d5e5b4e6d36?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'pilotage',
    label: 'Pilotage',
    icon: BarChart3,
    title: 'Pilotez en toute simplicité',
    desc: "Statistiques en temps réel, avis, rétention, performance des prestations : tout au même endroit.",
    cta: 'Voir les outils de pilotage',
    image: 'https://images.unsplash.com/photo-1504233138167-a91c038f5e64?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQaWxvdGV6JTIwZW4lMjB0b3V0ZSUyMHNpbXBsaWNpdCVDMyVBOXxlbnwwfDB8fHwxNzYzNDU5ODQxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

const TabsFeatures = () => {
  const [active, setActive] = useState('reservations');
  const current = tabs.find(t => t.id === active) ?? tabs[0];

  return (
    <section className="py-20" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">Réservez, fidélisez, pilotez en toute simplicité</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/5 shadow-sm transition-colors ${active === id ? 'bg-[#C9A646] text-[#111111]' : 'bg-white text-[#111111] hover:bg-black/5'}`}
            >
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: text card */}
          <div className="rounded-[24px] bg-white shadow-lg ring-1 ring-black/5 p-8 flex flex-col">
            <div className="h-11 w-11 rounded-full flex items-center justify-center bg-[#FFF7ED] text-[#111111] shadow-inner">
              {(() => { const Icon = current.icon; return <Icon className="h-5 w-5"/> })()}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-[#111111]">{current.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{current.desc}</p>
            <div className="mt-6">
              <a href="/solutions" className="inline-flex items-center gap-2 rounded-full bg-[#C9A646] px-5 py-2.5 text-sm font-semibold text-[#111111] shadow-sm hover:bg-[#b8953e] transition-colors w-max">
                {current.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: big image */}
          <div className="rounded-[24px] overflow-hidden shadow-xl ring-1 ring-black/5 min-h-[360px]">
            <div className="w-full h-full aspect-[4/3] bg-center bg-cover" style={{ backgroundImage: `url(${current.image})` }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsFeatures;
