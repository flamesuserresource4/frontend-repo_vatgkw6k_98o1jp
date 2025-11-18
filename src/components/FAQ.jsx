import { useState } from 'react';

const faqs = [
  { q: 'Comment réserver ?', a: 'Recherchez un pro ou un service, choisissez un créneau et confirmez en ligne. Vous recevez une confirmation et un rappel.' },
  { q: 'Quels avantages pour les pros ?', a: 'Visibilité locale, agenda intelligent, avis authentiques, fidélité et outils de pilotage simples.' },
  { q: 'La plateforme est-elle gratuite ?', a: 'L’inscription client est gratuite. Pour les pros, nous proposons des formules transparentes adaptées à la taille du salon.' },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full text-left">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-[#111111]">{q}</div>
          <div className="text-sm text-[#6B7280]">{open ? '−' : '+'}</div>
        </div>
      </button>
      {open && <div className="mt-3 text-sm text-[#6B7280]">{a}</div>}
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">Questions fréquentes, réponses claires</h3>
        <div className="mt-8 space-y-4">
          {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
