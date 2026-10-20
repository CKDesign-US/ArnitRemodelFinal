import { Phone, ClipboardList } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 shadow-2xl border-t border-arnit-gray-border">
      <a
        href="tel:+19205550100"
        className="flex items-center justify-center gap-2 py-3.5 bg-arnit-black text-white font-bold text-sm active:bg-arnit-black-deep transition-colors"
      >
        <Phone className="w-5 h-5 text-arnit-red-light" />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 py-3.5 bg-arnit-red text-white font-bold text-sm active:bg-arnit-red-dark transition-colors"
      >
        <ClipboardList className="w-5 h-5" />
        Get Free Quote
      </a>
    </div>
  );
}
