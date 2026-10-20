import { motion } from 'framer-motion';
import { MapPin, PhoneCall } from 'lucide-react';

const areas = [
  { name: 'Sheboygan', note: 'Primary service area' },
  { name: 'Sheboygan Falls', note: 'Quick response' },
  { name: 'Plymouth', note: 'Regularly served' },
  { name: 'Cascade', note: 'Regularly served' },
  { name: 'Oostburg', note: 'Regularly served' },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-arnit-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — map illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto bg-arnit-black-deep border border-white/10 rounded-lg overflow-hidden">
              {/* Stylized map grid */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />
              {/* Pin markers */}
              {[
                { top: '45%', left: '48%' },
                { top: '38%', left: '35%' },
                { top: '30%', left: '55%' },
                { top: '52%', left: '62%' },
                { top: '58%', left: '40%' },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-full"
                  style={{ top: pos.top, left: pos.left }}
                >
                  <MapPin
                    className={`w-6 h-6 ${
                      i === 0 ? 'text-arnit-red fill-arnit-red' : 'text-white/70 fill-white/20'
                    }`}
                  />
                </div>
              ))}
              {/* Center label */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm font-bold text-white">Sheboygan County, WI</p>
                <p className="text-xs text-gray-400">Approximate service coverage</p>
              </div>
            </div>
          </motion.div>

          {/* Right — area list */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-arnit-red" />
                <span className="text-sm font-bold tracking-wider text-arnit-red-light uppercase">
                  Service Area
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-balance">
                Proudly Serving Sheboygan County
              </h2>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                Based locally and covering the surrounding communities — if you're
                nearby, we'll come to you.
              </p>
            </motion.div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {areas.map((area, i) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 p-4 bg-white/[0.05] border border-white/10 rounded-md hover:border-arnit-red/40 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-arnit-red-light shrink-0" />
                  <div>
                    <div className="font-bold text-white">{area.name}, WI</div>
                    <div className="text-xs text-gray-400">{area.note}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-arnit-red/10 border border-arnit-red/20 rounded-md flex items-start gap-3">
              <PhoneCall className="w-5 h-5 text-arnit-red-light shrink-0 mt-0.5" />
              <p className="text-sm text-gray-200 leading-relaxed">
                <span className="font-bold text-white">
                  Serving surrounding local communities.
                </span>{' '}
                Not sure if you're in our area?{' '}
                <a href="tel:+19205550100" className="text-arnit-red-light font-bold underline">
                  Call (920) 555-0100
                </a>{' '}
                and we'll confirm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
