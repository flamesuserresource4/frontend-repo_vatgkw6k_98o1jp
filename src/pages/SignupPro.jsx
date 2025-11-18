const SignupPro = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[24px] bg-white ring-1 ring-black/5 shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">Faites grandir votre salon avec Swift Reza</h1>
              <p className="mt-3 text-[#6B7280]">Diffusez votre vitrine, remplissez votre agenda, fidélisez vos clients.</p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-[#FFF7ED] p-4">1. Créez votre profil</div>
                <div className="rounded-2xl bg-[#FFF7ED] p-4">2. Ajoutez vos services</div>
                <div className="rounded-2xl bg-[#FFF7ED] p-4">3. Ouvrez aux réservations</div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="text-sm text-[#6B7280]">Nom du salon</label>
                <input className="mt-1 w-full rounded-xl border border-black/10 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-[#C9A646]" placeholder="Ex: Tropic Hair" />
              </div>
              <div>
                <label className="text-sm text-[#6B7280]">Activité</label>
                <input className="mt-1 w-full rounded-xl border border-black/10 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-[#C9A646]" placeholder="Coiffure, esthétique, barbier…" />
              </div>
              <div>
                <label className="text-sm text-[#6B7280]">Ville</label>
                <input className="mt-1 w-full rounded-xl border border-black/10 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-[#C9A646]" placeholder="Pointe-à-Pitre" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-[#6B7280]">E-mail</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-black/10 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-[#C9A646]" placeholder="nom@salon.com" />
                </div>
                <div>
                  <label className="text-sm text-[#6B7280]">Téléphone</label>
                  <input className="mt-1 w-full rounded-xl border border-black/10 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-[#C9A646]" placeholder="+590…" />
                </div>
              </div>
              <button className="mt-4 inline-flex items-center justify-center rounded-full bg-[#C9A646] px-6 py-3 text-sm font-semibold text-[#111111] shadow-sm hover:bg-[#b8953e] transition-colors">Demarrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPro;
