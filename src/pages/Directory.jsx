import { Star } from 'lucide-react';

const salons = Array.from({ length: 8 }).map((_, i) => ({
  name: `Salon ${i + 1}`,
  category: ['Coiffure', 'Esthétique', 'Barbier', 'Ongles'][i % 4],
  city: ['Pointe-à-Pitre', 'Baie-Mahault', 'Le Gosier', 'Sainte-Anne'][i % 4],
  rating: (4 + (i % 2) * 0.5).toFixed(1),
  photo: `https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop`,
}));

const Directory = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">Trouver un professionnel</h1>
        <div className="mt-4 rounded-[24px] bg-white p-4 ring-1 ring-black/5 shadow-sm grid sm:grid-cols-4 gap-3">
          <input className="rounded-xl border border-black/10 p-3" placeholder="Localisation" />
          <input className="rounded-xl border border-black/10 p-3" placeholder="Prestation" />
          <input className="rounded-xl border border-black/10 p-3" placeholder="Date" />
          <button className="rounded-xl bg-[#C9A646] text-[#111111] font-semibold px-4">Rechercher</button>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {salons.map((s, i) => (
            <div key={i} className="rounded-[24px] bg-white ring-1 ring-black/5 shadow-lg overflow-hidden">
              <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${s.photo})` }} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[#111111] font-semibold">{s.name}</div>
                  <div className="inline-flex items-center gap-1 text-sm text-[#111111]"><Star className="h-4 w-4 text-[#C9A646]"/> {s.rating}</div>
                </div>
                <div className="text-sm text-[#6B7280]">{s.category} • {s.city}</div>
                <button className="mt-4 w-full rounded-full bg-[#C9A646] text-[#111111] font-semibold py-2.5 hover:bg-[#b8953e] transition-colors">Réserver</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Directory;
