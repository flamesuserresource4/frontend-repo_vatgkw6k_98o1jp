import { Mail, Phone, MapPin } from 'lucide-react';

const items = [
  { icon: Mail, title: 'E-mail', value: 'contact@swiftreza.com' },
  { icon: Phone, title: 'Téléphone', value: '+590 690 00 00 00' },
  { icon: MapPin, title: 'Adresse', value: 'Pointe-à-Pitre, Guadeloupe' },
];

const ContactSummary = () => {
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">Réservez, échangez, connectez</h3>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-[24px] bg-white p-6 shadow-lg ring-1 ring-black/5">
              <div className="h-10 w-10 rounded-full bg-[#FFF7ED] text-[#111111] flex items-center justify-center shadow-inner">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-sm text-[#6B7280]">{it.title}</div>
              <div className="text-[#111111] font-semibold">{it.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSummary;
