import { BarChart3, Calendar, Globe2, BadgeCheck } from "lucide-react";

const Pros = () => {
  return (
    <section id="pros" className="py-20" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] bg-[#111111] text-[#ECE7DE] p-10 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Espace Professionnels</h3>
            <p className="mt-3 text-[#ECE7DE]/80">Gérez vos créneaux, mettez en avant votre salon, récoltez des avis et développez votre clientèle locale.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-[#C9A646] font-semibold flex items-center gap-2"><Calendar className="h-4 w-4"/> Agenda intelligent</div>
                <div className="text-sm text-[#ECE7DE]/80 mt-1">Créneaux personnalisés, fermetures, rappels SMS.</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-[#C9A646] font-semibold flex items-center gap-2"><Globe2 className="h-4 w-4"/> Vitrine locale</div>
                <div className="text-sm text-[#ECE7DE]/80 mt-1">Profil salon, photos, services, tarifs.</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-[#C9A646] font-semibold flex items-center gap-2"><BarChart3 className="h-4 w-4"/> Statistiques</div>
                <div className="text-sm text-[#ECE7DE]/80 mt-1">Suivez réservations, rétention et avis.</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-[#C9A646] font-semibold flex items-center gap-2"><BadgeCheck className="h-4 w-4"/> Accompagnement</div>
                <div className="text-sm text-[#ECE7DE]/80 mt-1">Onboarding et support dédiés.</div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#C9A646] px-6 py-3 text-sm font-semibold text-[#111111] shadow-sm hover:bg-[#b8953e] transition-colors">Demander une démo</a>
            </div>
          </div>
          <div className="rounded-[24px] bg-white p-6 ring-1 ring-white/10 text-[#111111]">
            <div className="aspect-[4/3] rounded-2xl bg-[#FFF7ED]" />
            <div className="mt-4 text-sm text-[#6B7280]">Exemple d'interface pro (agenda et gestion des services)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pros;