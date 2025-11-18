const Footer = () => {
  return (
    <footer className="pt-16" style={{ backgroundColor: '#111111' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-[#ECE7DE]">
        <div className="grid lg:grid-cols-4 gap-10 pb-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#ECE7DE] text-[#111111] flex items-center justify-center text-sm font-semibold">SR</div>
              <span className="text-[19px] font-semibold tracking-tight">Swift Reza</span>
            </div>
            <p className="mt-3 text-[#ECE7DE]/70 text-sm">Réservez vos soins beauté & bien-être en Guadeloupe. Une expérience premium et locale.</p>
          </div>
          <div>
            <div className="text-sm font-semibold">Produit</div>
            <ul className="mt-3 space-y-2 text-sm text-[#ECE7DE]/80">
              <li><a href="#features" className="hover:text-white">Fonctionnalités</a></li>
              <li><a href="#how" className="hover:text-white">Parcours</a></li>
              <li><a href="#pros" className="hover:text-white">Espace Pros</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Société</div>
            <ul className="mt-3 space-y-2 text-sm text-[#ECE7DE]/80">
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Logo</div>
            <p className="mt-3 text-sm text-[#ECE7DE]/70">Logo colibri + fleurs tropicales fourni par la fondatrice. Emplacements prévus en header et en bas de page.</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-sm text-[#ECE7DE]/60 flex flex-col sm:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Swift Reza. Tous droits réservés.</div>
          <div className="mt-2 sm:mt-0">Fabriqué avec amour en Guadeloupe.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;