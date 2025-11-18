import { Search, CalendarCheck2, CheckCircle2 } from "lucide-react";

const Step = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="h-10 w-10 rounded-full bg-[#FFF7ED] text-[#111111] flex items-center justify-center shadow-inner">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-[#111111] font-semibold">{title}</div>
      <div className="text-sm text-[#6B7280]">{desc}</div>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how" className="py-20" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] bg-white ring-1 ring-black/5 shadow-xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">Comment ça marche</h3>
            <p className="mt-3 text-[#6B7280]">Réserver devient un plaisir : un parcours clair, rapide et adapté au mobile.</p>

            <div className="mt-8 space-y-6">
              <Step icon={Search} title="1. Recherchez" desc="Trouvez un salon près de vous ou un soin spécifique." />
              <Step icon={CalendarCheck2} title="2. Choisissez" desc="Sélectionnez un pro, un service et un créneau." />
              <Step icon={CheckCircle2} title="3. Confirmez" desc="Validez la réservation, recevez un rappel automatique." />
            </div>
          </div>
          <div className="rounded-[24px] bg-gradient-to-br from-white to-[#FFF7ED] ring-1 ring-black/5 p-6 flex items-center justify-center">
            <div className="w-full max-w-sm h-96 rounded-[28px] bg-white shadow-2xl ring-1 ring-black/5 p-4 flex flex-col">
              <div className="h-10 rounded-full bg-[#FFF7ED]" />
              <div className="mt-4 space-y-3">
                <div className="h-10 rounded-xl bg-[#FFF7ED]" />
                <div className="h-10 rounded-xl bg-[#FFF7ED]" />
                <div className="h-10 rounded-xl bg-[#FFF7ED]" />
              </div>
              <div className="mt-auto h-12 rounded-full bg-[#C9A646]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
