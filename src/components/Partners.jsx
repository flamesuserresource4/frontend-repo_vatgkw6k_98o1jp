const logos = Array.from({ length: 9 }).map((_, i) => `https://placehold.co/140x60?text=Logo+${i+1}`);

const Partners = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">Ensemble, digitalisons la beauté</h3>
            <p className="mt-3 text-[#6B7280] max-w-xl">Avec nos partenaires, nous transformons l'expérience de réservation beauté en Guadeloupe : visibilité locale, prise de rendez-vous en ligne, avis authentiques et fidélité intégrée.</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {logos.map((src, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-4 ring-1 ring-black/5 shadow-sm flex items-center justify-center">
                <img src={src} alt={`Partenaire ${idx+1}`} className="max-h-10 opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
