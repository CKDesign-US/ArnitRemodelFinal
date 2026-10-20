import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How do I request a free estimate?',
    a: 'It\'s simple — call (920) 555-0100 or fill out the "Request Free Estimate" form on this page. Rrahman will personally schedule an on-site visit to assess your project and provide a detailed, no-obligation quote. We come to you at no cost.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Arnit Remodeling proudly serves Sheboygan, Sheboygan Falls, Plymouth, Cascade, and Oostburg, WI — plus surrounding local communities throughout Sheboygan County. If you\'re unsure whether you\'re in our coverage area, just call and we\'ll confirm.',
  },
  {
    q: 'Do you handle both interior and exterior projects?',
    a: 'Yes. From interior painting and flooring to exterior siding and full home renovations, Arnit handles every trade. You don\'t need separate contractors for inside and outside work — one call covers it all.',
  },
  {
    q: 'Do you offer junk removal along with remodeling?',
    a: 'Absolutely. Junk removal and site cleanouts are a core part of our service. Whether you need debris hauled after a renovation or a full property cleanout, we handle it as part of your project — no need to hire a separate company.',
  },
  {
    q: 'How long has Arnit Remodeling been in business?',
    a: 'Rrahman Blakqori has been serving Wisconsin homeowners for over 20 years. The business is owner-operated, meaning Rrahman oversees every estimate and every job personally to ensure consistent quality.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-arnit-red" />
              <span className="text-sm font-bold tracking-wider text-arnit-red uppercase">
                FAQ
              </span>
              <div className="w-10 h-[2px] bg-arnit-red" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-arnit-black tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`border rounded-lg overflow-hidden transition-colors ${
                  isOpen
                    ? 'border-arnit-red/40 bg-arnit-gray'
                    : 'border-arnit-gray-border bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-arnit-black">{faq.q}</span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-colors ${
                      isOpen ? 'bg-arnit-red text-white' : 'bg-arnit-gray text-arnit-black'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[15px] text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Still have questions?{' '}
            <a href="tel:+19205550100" className="font-bold text-arnit-red underline">
              Call (920) 555-0100
            </a>{' '}
            — we're happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
