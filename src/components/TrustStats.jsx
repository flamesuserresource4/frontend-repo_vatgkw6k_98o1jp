const TrustStats = () => {
  const stats = [
    { value: '52K+', label: 'Clients satisfaits' },
    { value: '2M+', label: 'Réservations facilitées' },
  ];
  const testimonials = [
    { name: 'Léa', role: 'Esthéticienne', text: 'Mes clientes réservent en ligne sans effort, je gagne du temps chaque jour.' },
    { name: 'Maxime', role: 'Barbier', text: 'Le bouche-à-oreille digital fonctionne : des avis authentiques et plus de retours.' },
    { name: 'Anaïs', role: 'Cliente', text: 'Interface claire, j’adore cumuler des points de fidélité.' },
    { name: 'Kévin', role: 'Coiffeur', text: 'Outil de pilotage simple et efficace pour mon salon.' },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">Ils nous font confiance</h3>
        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          {/* Left column: stats */}
          <div className="lg:col-span-1 space-y-6">
            {stats.map((s, i) => (
              <div key={i} className="rounded-[24px] bg-white p-6 shadow-lg ring-1 ring-black/5">
                <div className="text-4xl font-extrabold text-[#111111]">{s.value}</div>
                <div className="text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Right column: testimonials */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-[24px] bg-white p-6 shadow-lg ring-1 ring-black/5">
                <div className="flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/64?img=${i+10}`} alt={t.name} className="h-10 w-10 rounded-full"/>
                  <div>
                    <div className="text-[#111111] font-semibold">{t.name}</div>
                    <div className="text-xs text-[#6B7280]">{t.role}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[#111111]/80">“{t.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
