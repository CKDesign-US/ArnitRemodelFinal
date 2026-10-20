import { motion } from 'framer-motion';
import { Phone, Star, Wrench, MapPin, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-arnit-black text-white overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Red accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-arnit-red" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-40 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-arnit-red/15 border border-arnit-red/30 rounded-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-arnit-red animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-arnit-red-light uppercase">
                Owner-Operated • Sheboygan County, WI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-4xl xs:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              20+ Years of <br className="hidden xs:block" />
              Expert Craftsmanship <br />
              <span className="text-arnit-red">Built on Trust.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed"
            >
              From full home renovations to painting, flooring, siding, and junk
              removal — <span className="text-white font-semibold">we come to you.</span>{' '}
              One call handles it all.
            </motion.p>

            {/* Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-6 inline-block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-[2px] bg-arnit-red" />
                <p className="text-xl lg:text-2xl font-bold italic text-white">
                  "One call, we take care of it."
                </p>
              </div>
              <p className="mt-2 ml-[52px] text-sm text-gray-400">
                — Rrahman Blakqori, Owner
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="px-7 py-4 bg-arnit-red text-white text-base font-bold rounded-md hover:bg-arnit-red-dark transition-colors text-center shadow-lg shadow-arnit-red/20"
              >
                Request Free Estimate
              </a>
              <a
                href="tel:+19205550100"
                className="flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border border-white/20 text-white text-base font-bold rounded-md hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                Call (920) 555-0100
              </a>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                { icon: Wrench, label: '20+ Years Experience' },
                { icon: MapPin, label: 'Free On-Site Quotes' },
                { icon: ShieldCheck, label: 'Full-Service Contractor' },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-md"
                >
                  <chip.icon className="w-4 h-4 text-arnit-red-light" />
                  <span className="text-sm font-semibold text-gray-200">{chip.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — stat panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/[0.04] border border-white/10 rounded-lg p-6 lg:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-arnit-red text-arnit-red" />
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-300">
                  Trusted by Wisconsin homeowners
                </span>
              </div>

              <div className="grid grid-cols-2 gap-px bg-white/10 rounded-md overflow-hidden">
                <div className="bg-arnit-black p-5">
                  <div className="text-3xl font-extrabold text-white">20+</div>
                  <div className="text-xs text-gray-400 font-medium mt-1">Years in Business</div>
                </div>
                <div className="bg-arnit-black p-5">
                  <div className="text-3xl font-extrabold text-white">5</div>
                  <div className="text-xs text-gray-400 font-medium mt-1">Core Services</div>
                </div>
                <div className="bg-arnit-black p-5">
                  <div className="text-3xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-gray-400 font-medium mt-1">Owner-Operated</div>
                </div>
                <div className="bg-arnit-black p-5">
                  <div className="text-3xl font-extrabold text-white">FREE</div>
                  <div className="text-xs text-gray-400 font-medium mt-1">On-Site Estimates</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-arnit-red/10 border border-arnit-red/20 rounded-md">
                <p className="text-sm text-gray-200 leading-relaxed">
                  <span className="font-bold text-white">We Come To You.</span> No job is too
                  big or too small — Rrahman handles every estimate personally to ensure
                  quality from start to finish.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
