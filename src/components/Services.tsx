import { motion } from 'framer-motion';
import {
  PaintRoller,
  Layers,
  Hammer,
  Home,
  Trash2,
  Wrench,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Full Home Renovations & Remodeling',
    desc: 'Complete home transformations — kitchens, bathrooms, basements, additions, and whole-house remodels done right.',
  },
  {
    icon: PaintRoller,
    title: 'Interior & Exterior Painting',
    desc: 'Premium interior and exterior painting with durable, professional finishes that protect and beautify your home.',
  },
  {
    icon: Layers,
    title: 'Flooring Installation & Repair',
    desc: 'Hardwood, laminate, tile, and vinyl flooring installed or repaired with precision craftsmanship.',
  },
  {
    icon: Hammer,
    title: 'Siding Installation & Repair',
    desc: 'Vinyl, wood, and fiber-cement siding installation and repair to boost curb appeal and weather protection.',
  },
  {
    icon: Trash2,
    title: 'Junk Removal & Site Cleanouts',
    desc: 'Fast, reliable junk removal and construction site cleanouts — residential and commercial properties.',
  },
  {
    icon: Wrench,
    title: 'General Contractor Services',
    desc: 'One call takes care of it all — from planning to permits to finished project, Rrahman manages every detail.',
    highlight: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-arnit-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-arnit-red" />
              <span className="text-sm font-bold tracking-wider text-arnit-red uppercase">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-arnit-black tracking-tight text-balance">
              Full-Service Remodeling <br className="hidden lg:block" />
              Under One Roof
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              No need to hire multiple contractors. Arnit Remodeling handles every trade
              with the same standard of quality — backed by 20+ years of Wisconsin
              craftsmanship.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group relative p-6 lg:p-7 rounded-lg border transition-colors ${
                service.highlight
                  ? 'bg-arnit-black text-white border-arnit-black'
                  : 'bg-white text-arnit-black border-arnit-gray-border hover:border-arnit-red/40'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-md flex items-center justify-center mb-5 transition-colors ${
                  service.highlight
                    ? 'bg-arnit-red text-white'
                    : 'bg-arnit-red/10 text-arnit-red group-hover:bg-arnit-red group-hover:text-white'
                }`}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 leading-snug">{service.title}</h3>
              <p
                className={`text-sm leading-relaxed ${
                  service.highlight ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {service.desc}
              </p>
              <a
                href="#contact"
                className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold transition-colors ${
                  service.highlight
                    ? 'text-arnit-red-light hover:text-white'
                    : 'text-arnit-red hover:text-arnit-red-dark'
                }`}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
