import { Scissors, Sparkles, Clock, MapPin, ShieldCheck, Stars } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-[24px] bg-white shadow-lg ring-1 ring-black/5 p-6">
    <div className="h-11 w-11 rounded-full flex items-center justify-center bg-[#FFF7ED] text-[#111111] shadow-inner">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-[#111111]">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-20" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">Tout pour une réservation fluide</h2>
          <p className="mt-3 text-[#6B7280] max-w-2xl">Un parcours simple et rapide, conçu pour les salons et leurs clients, avec un design premium et moderne.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Sparkles} title="Design premium" desc="Une expérience élégante, inspirée des meilleurs sites de beauté, pour valoriser votre image." />
          <FeatureCard icon={Clock} title="Réservation rapide" desc="Trouvez un créneau, réservez en 3 clics. Confirmation immédiate." />
          <FeatureCard icon={MapPin} title="Focus Guadeloupe" desc="Un réseau 100% local : salons de coiffure, esthétique, barbiers, ongles, spa…" />
          <FeatureCard icon={ShieldCheck} title="Sûr et fiable" desc="Vos données et vos paiements sont protégés et hébergés en Europe." />
          <FeatureCard icon={Scissors} title="Pour les pros" desc="Gestion des créneaux, profils salons, vitrine, mise en avant locale." />
          <FeatureCard icon={Stars} title="Avis clients" desc="Des évaluations réelles pour vous guider vers les meilleures adresses." />
        </div>
      </div>
    </section>
  );
};

export default Features;
