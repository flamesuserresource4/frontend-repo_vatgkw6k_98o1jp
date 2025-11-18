import { Menu, LogIn, ArrowRight, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#FFF7ED]/70 bg-[#FFF7ED]/90 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <a href="/" className="h-9 w-9 rounded-full bg-[#111111] text-[#FFF7ED] flex items-center justify-center text-sm font-semibold shadow-sm">SR</a>
            <a href="/" className="text-[19px] font-semibold tracking-tight text-[#111111]">Swift Reza</a>
          </div>

          {/* Center: Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#6B7280]">
            <a href="/solutions" className="hover:text-[#111111] transition-colors">Solutions</a>
            <a href="/professionnels" className="hover:text-[#111111] transition-colors">Trouver un pro</a>
            <a href="/a-propos" className="hover:text-[#111111] transition-colors">À propos</a>
            <a href="/aide" className="hover:text-[#111111] transition-colors">Aide</a>
          </nav>

          {/* Right: CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/inscription-professionnels" className="inline-flex items-center gap-2 rounded-full border border-[#111111]/10 px-4 py-2 text-sm font-medium text-[#111111] hover:bg-black/5 transition-colors">
              <User className="h-4 w-4" /> Espace Pros
            </a>
            <a href="/professionnels" className="inline-flex items-center gap-2 rounded-full bg-[#C9A646] px-5 py-2.5 text-sm font-semibold text-[#111111] shadow-sm hover:bg-[#b8953e] transition-colors">
              Réserver <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu icon */}
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#111111]">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
