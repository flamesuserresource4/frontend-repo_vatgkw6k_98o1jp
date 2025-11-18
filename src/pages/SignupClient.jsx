const SignupClient = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">Inscription Clients</h1>
          <p className="mt-3 text-[#6B7280]">Créez votre compte en quelques secondes pour réserver en ligne, cumuler des points et consulter des avis authentiques.</p>
        </div>

        <div className="mt-8 rounded-[24px] bg-white ring-1 ring-black/5 shadow-xl p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="rounded-xl border border-black/10 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-[#C9A646]" placeholder="Prénom" />
            <input className="rounded-xl border border-black/10 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-[#C9A646]" placeholder="Nom" />
            <input type="email" className="rounded-xl border border-black/10 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-[#C9A646]" placeholder="E-mail" />
            <input className="rounded-xl border border-black/10 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-[#C9A646]" placeholder="Téléphone" />
          </div>
          <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#C9A646] px-6 py-3 text-sm font-semibold text-[#111111] shadow-sm hover:bg-[#b8953e] transition-colors">Créer mon compte</button>
        </div>
      </div>
    </div>
  );
};

export default SignupClient;
