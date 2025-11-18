import { CalendarCheck2, Gift, BarChart3, CheckCircle2 } from 'lucide-react';

const Section = ({ title, bullets }) => (
  <div className="rounded-[24px] bg-white p-8 shadow-lg ring-1 ring-black/5">
    <h2 className="text-2xl font-semibold text-[#111111]">{title}</h2>
    <ul className="mt-4 space-y-2 list-disc pl-5 text-sm text-[#6B7280]">
      {bullets.map((b, i) => (<li key={i}>{b}</li>))}
    </ul>
    <div className="mt-4 h-48 rounded-2xl bg-[#FFF7ED]" />
  </div>
);

const Solutions = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">Solutions</h1>
        <p className="mt-3 text-[#6B7280] max-w-2xl">Trois axes pour faire grandir votre salon : réservations, fidélité et pilotage.</p>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <Section title="Réservations" bullets={[
            'Agenda en ligne et rappels automatiques',
            'Parcours ultra-simple sur mobile',
            'Gestion des no-shows',
          ]} />
          <Section title="Fidélité" bullets={[
            'Points à chaque rendez-vous',
            'Avantages personnalisés',
            'Parrainage clients',
          ]} />
          <Section title="Pilotage" bullets={[
            'Statistiques en temps réel',
            'Suivi d’avis et de la rétention',
            'Analyse des prestations',
          ]} />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
