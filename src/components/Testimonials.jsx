const Testimonial = ({ name, role, text }) => (
  <div className="rounded-[24px] bg-white shadow-lg ring-1 ring-black/5 p-6">
    <div className="text-[#111111] font-semibold">{name}</div>
    <div className="text-xs text-[#6B7280]">{role}</div>
    <p className="mt-3 text-sm text-[#111111]/80">“{text}”</p>
  </div>
);

const Testimonials = () => {
  return (
    <section id="avis" className="py-20" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">Ils adorent Swift Reza</h3>
        <p className="mt-2 text-[#6B7280]">Salons et clients en Guadeloupe partagent leur expérience.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial name="Salon Tropic Hair" role="Pointe-à-Pitre" text="Nos réservations ont augmenté de 35% en 2 mois." />
          <Testimonial name="Clara" role="Cliente" text="Réservation ultra simple et pro, j'adore le design." />
          <Testimonial name="Barber 971" role="Baie-Mahault" text="Agenda clair, moins d'appels, plus de clients fidèles." />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;