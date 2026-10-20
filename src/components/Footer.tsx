import { Phone, Mail, MapPin, Wrench } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Arnit', href: '#why-arnit' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const serviceList = [
  'Home Renovations',
  'Interior & Exterior Painting',
  'Flooring Installation',
  'Siding Installation',
  'Junk Removal',
  'General Contractor',
];

const areaList = ['Sheboygan', 'Sheboygan Falls', 'Plymouth', 'Cascade', 'Oostburg'];

export default function Footer() {
  return (
    <footer className="bg-arnit-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-md bg-arnit-red flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-extrabold">
                  ARNIT <span className="text-arnit-red">REMODELING</span>
                </div>
                <div className="text-[10px] text-gray-400 font-medium">LLC</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              20+ years of expert remodeling and contracting services in Sheboygan County, WI.
              Owner-operated by Rrahman Blakqori.
            </p>
            <p className="mt-4 text-base font-bold italic text-arnit-red-light">
              "One call, we take care of it."
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-arnit-red-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-gray-300 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceList.map((s) => (
                <li key={s} className="text-sm text-gray-400">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + area */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-gray-300 mb-4">
              Contact & Area
            </h3>
            <ul className="space-y-3 mb-5">
              <li>
                <a
                  href="tel:+19205550100"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-arnit-red-light transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  (920) 555-0100
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@arnitremodeling.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-arnit-red-light transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  info@arnitremodeling.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Sheboygan County, WI
              </li>
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {areaList.map((a) => (
                <span
                  key={a}
                  className="inline-block text-[11px] px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Arnit Remodeling LLC. Owner: Rrahman Blakqori.
            All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Serving Sheboygan County & Surrounding Communities, WI
          </p>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HomeAndConstructionBusiness',
            name: 'Arnit Remodeling LLC',
            description:
              'Full-service remodeling contractor serving Sheboygan County, WI. 20+ years of experience in home renovations, painting, flooring, siding, and junk removal.',
            slogan: 'One call, we take care of it',
            founder: {
              '@type': 'Person',
              name: 'Rrahman Blakqori',
            },
            telephone: '+1-920-555-0100',
            email: 'info@arnitremodeling.com',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'WI',
              addressCountry: 'US',
            },
            areaServed: [
              { '@type': 'City', name: 'Sheboygan, WI' },
              { '@type': 'City', name: 'Sheboygan Falls, WI' },
              { '@type': 'City', name: 'Plymouth, WI' },
              { '@type': 'City', name: 'Cascade, WI' },
              { '@type': 'City', name: 'Oostburg, WI' },
            ],
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '07:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '08:00',
                closes: '14:00',
              },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Remodeling Services',
              itemListElement: [
                'Full Home Renovations & Remodeling',
                'Interior & Exterior Painting',
                'Flooring Installation & Repair',
                'Siding Installation & Repair',
                'Junk Removal & Site Cleanouts',
                'General Contractor Services',
              ].map((s) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: s },
              })),
            },
          }),
        }}
      />
    </footer>
  );
}
