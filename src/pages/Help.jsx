import { useState } from 'react';

const Accordion = ({ title, items }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="rounded-[24px] bg-white p-6 ring-1 ring-black/5 shadow-lg">
      <div className="text-lg font-semibold text-[#111111]">{title}</div>
      <div className="mt-4 divide-y divide-black/5">
        {items.map((it, i) => (
          <div key={i} className="py-3">
            <button className="w-full text-left" onClick={() => setOpen(open === i ? null : i)}>
              <div className="flex items-center justify-between">
                <div className="font-medium text-[#111111]">{it.q}</div>
                <div className="text-sm text-[#6B7280]">{open === i ? '−' : '+'}</div>
              </div>
            </button>
            {open === i && <div className="mt-2 text-sm text-[#6B7280]">{it.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

const Help = () => {
  const client = [
    { q: 'Comment créer un compte ?', a: 'Cliquez sur Inscription Clients, saisissez vos informations, validez.' },
    { q: 'Comment modifier un rendez-vous ?', a: 'Depuis votre espace, ouvrez vos réservations et choisissez Modifier.' },
  ];
  const pros = [
    { q: 'Comment ajouter des services ?', a: 'Dans votre espace pro, onglet Services, ajoutez descriptions, durées et tarifs.' },
    { q: 'Comment encaisser une réservation ?', a: 'Utilisez l’outil de suivi et reliez votre solution de paiement.' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">Aide & FAQ</h1>
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <Accordion title="Clients" items={client} />
          <Accordion title="Professionnels" items={pros} />
        </div>
      </div>
    </div>
  );
};

export default Help;
