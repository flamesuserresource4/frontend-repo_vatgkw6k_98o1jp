import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#FFF7ED' }}>
      {/* content layer */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-[#111111]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A646]"></span>
              Plateforme de réservation beauté & bien-être en Guadeloupe
            </div>
            <h1 className="mt-5 text-5xl sm:text-6xl font-extrabold tracking-tight text-[#111111]">
              Réservez vos soins en quelques secondes
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#6B7280] max-w-xl">
              Swift Reza simplifie la vie des clients et des professionnels : trouvez un salon, choisissez un créneau, et validez. C'est aussi simple que ça, avec un design premium inspiré de Planity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#search" className="inline-flex items-center justify-center rounded-full bg-[#C9A646] px-6 py-3 text-sm font-semibold text-[#111111] shadow-sm hover:bg-[#b8953e] transition-colors">
                Réserver maintenant
              </a>
              <a href="#pros" className="inline-flex items-center justify-center rounded-full border border-[#111111]/10 px-6 py-3 text-sm font-medium text-[#111111] hover:bg-black/5 transition-colors">
                Je suis un professionnel
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-[#6B7280]">
              <div>
                <div className="text-[#111111] font-semibold">+500</div>
                Salons référencés
              </div>
              <div>
                <div className="text-[#111111] font-semibold">4.9/5</div>
                Note moyenne
              </div>
              <div>
                <div className="text-[#111111] font-semibold">Guadeloupe</div>
                Focus local
              </div>
            </div>
          </div>

          {/* 3D Spline */}
          <div className="relative rounded-[24px] overflow-hidden shadow-xl ring-1 ring-black/5" style={{height: '500px'}}>
            <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* soft gradient overlay to match brand */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FFF7ED] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
