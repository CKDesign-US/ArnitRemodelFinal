import { motion } from 'framer-motion';
import { Award, User, MapPinCheck, Layers3 } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '20+ Years of Local Craftsmanship',
    desc: 'Two decades of hands-on experience building, renovating, and repairing homes across Sheboygan County. Every project meets the same uncompromising standard.',
  },
  {
    icon: User,
    title: 'Owner-Operated by Rrahman Blakqori',
    desc: 'When you hire Arnit, you work directly with the owner — not a sales rep or project manager. Rrahman oversees every job from estimate to completion.',
  },
  {
    icon: MapPinCheck,
    title: 'We Come To You — Free On-Site Estimates',
    desc: 'No phone-only guesses. Rrahman visits your property, assesses the work in person, and gives you an honest, detailed estimate at no cost.',
  },
  {
    icon: Layers3,
    title: 'Complete Turnkey Solutions',
    desc: 'Stop juggling multiple contractors. From demolition to final paint, Arnit handles every trade so your project stays on schedule and on budget.',
  },
];

export default function WhyArnit() {
  return (
    <section id="why-arnit" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left intro */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-arnit-red" />
                <span className="text-sm font-bold tracking-wider text-arnit-red uppercase">
                  Why Arnit
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-arnit-black tracking-tight text-balance">
                A Contractor You Can Actually Trust
              </h2>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Arnit Remodeling isn't a faceless company. It's one owner, one crew,
                one standard — and a reputation built over two decades of doing right
                by Wisconsin homeowners.
              </p>

              <div className="mt-8 p-6 bg-arnit-gray border-l-4 border-arnit-red rounded-r-md">
                <p className="text-base text-arnit-black font-semibold leading-relaxed">
                  "I treat every home like it's my own. When you call Arnit, you get me —
                  not a middleman. That's how it's been for 20 years."
                </p>
                <p className="mt-3 text-sm font-bold text-arnit-red">
                  Rrahman Blakqori — Owner & Operator
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 bg-arnit-gray border border-arnit-gray-border rounded-lg hover:border-arnit-red/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-md bg-arnit-black flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-arnit-black mb-2 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
