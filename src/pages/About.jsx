const About = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">À propos</h1>
        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          <div className="rounded-[24px] bg-white p-8 ring-1 ring-black/5 shadow-lg">
            <h2 className="text-xl font-semibold text-[#111111]">Mission</h2>
            <p className="mt-2 text-[#6B7280]">Faciliter la rencontre entre les meilleurs professionnels de la beauté et leurs clients en Guadeloupe grâce à une expérience de réservation simple et élégante.</p>
            <h2 className="mt-6 text-xl font-semibold text-[#111111]">Vision</h2>
            <p className="mt-2 text-[#6B7280]">Devenir la référence locale pour la découverte, la réservation et la fidélisation dans la beauté & le bien-être.</p>
            <h2 className="mt-6 text-xl font-semibold text-[#111111]">Ancrage Guadeloupe</h2>
            <p className="mt-2 text-[#6B7280]">Une plateforme pensée pour le territoire : proximité, confiance, mise en valeur des talents et des savoir-faire.</p>
          </div>
          <div className="rounded-[24px] bg-white p-8 ring-1 ring-black/5 shadow-lg">
            <div className="h-64 rounded-2xl bg-[#FFF7ED]" />
            <p className="mt-3 text-sm text-[#6B7280]">Photo/illustration de l’équipe, du territoire et des partenaires locaux.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
