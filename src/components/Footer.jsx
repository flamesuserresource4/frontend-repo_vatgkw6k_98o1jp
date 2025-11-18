import { Instagram, Facebook, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-16" style={{ backgroundColor: '#111111' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-[#ECE7DE]">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <a href="/" className="h-9 w-9 rounded-full bg-[#ECE7DE] text-[#111111] flex items-center justify-center text-sm font-semibold">SR</a>
              <a href="/" className="text-[19px] font-semibold tracking-tight">Swift Reza</a>
            </div>
            <p className="mt-3 text-[#ECE7DE]/70 text-sm">Réservez vos soins beauté & bien-être en Guadeloupe. Une expérience premium et locale.</p>
            <div className="mt-4 flex items-center gap-3 text-[#111111]">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ECE7DE] hover:opacity-90"><Instagram className="h-5 w-5"/></a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ECE7DE] hover:opacity-90"><Facebook className="h-5 w-5"/></a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ECE7DE] hover:opacity-90"><Music2 className="h-5 w-5"/></a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm text-[#ECE7DE]/80">
              <li><a href="/" className="hover:text-white">Accueil</a></li>
              <li><a href="/solutions" className="hover:text-white">Solutions</a></li>
              <li><a href="/inscription-professionnels" className="hover:text-white">Pros</a></li>
              <li><a href="/a-propos" className="hover:text-white">À propos</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="/aide" className="hover:text-white">Aide</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Légal</div>
            <ul className="mt-3 space-y-2 text-sm text-[#ECE7DE]/80">
              <li><a href="#" className="hover:text-white">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white">CGU</a></li>
              <li><a href="#" className="hover:text-white">Confidentialité</a></li>
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
