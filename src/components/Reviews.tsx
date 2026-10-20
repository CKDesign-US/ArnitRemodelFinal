import { motion } from 'framer-motion';
import { Star, BadgeCheck } from 'lucide-react';

const reviews = [
  {
    name: 'Michael R.',
    location: 'Sheboygan, WI',
    project: 'Full Kitchen Remodel',
    text: 'Rrahman and his crew completely transformed our kitchen. The craftsmanship is top-notch and the project stayed on schedule. He came out personally for the estimate and handled everything from demo to final paint.',
    rating: 5,
  },
  {
    name: 'Diane K.',
    location: 'Sheboygan Falls, WI',
    project: 'Interior Painting & Flooring',
    text: 'We had Arnit paint the entire interior and install new hardwood floors. The quality is outstanding — clean lines, smooth finishes, and the floors look beautiful. Highly recommend for anyone in Sheboygan County.',
    rating: 5,
  },
  {
    name: 'Tom & Lisa B.',
    location: 'Plymouth, WI',
    project: 'Siding Replacement',
    text: 'After a storm damaged our siding, Rrahman came out the same week to assess and give us a fair estimate. New siding looks great and the price was honest. One call really did take care of it.',
    rating: 5,
  },
  {
    name: 'James P.',
    location: 'Oostburg, WI',
    project: 'Basement Renovation + Junk Removal',
    text: 'We needed our basement finished and all the old junk hauled away. Arnit handled both — no need to hire a separate junk removal company. Saved us time and money. Rrahman is a straight shooter.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-arnit-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-arnit-red" />
              <span className="text-sm font-bold tracking-wider text-arnit-red uppercase">
                Customer Reviews
              </span>
              <div className="w-10 h-[2px] bg-arnit-red" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-arnit-black tracking-tight text-balance">
              What Wisconsin Homeowners Say
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-arnit-red text-arnit-red" />
                ))}
              </div>
              <span className="text-base font-bold text-arnit-black">5.0</span>
              <span className="text-sm text-gray-500">— based on local reviews</span>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-arnit-gray-border rounded-lg p-6 lg:p-7"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-arnit-red text-arnit-red" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed text-[15px]">"{review.text}"</p>
              <div className="mt-5 pt-4 border-t border-arnit-gray-border flex items-center justify-between">
                <div>
                  <div className="font-bold text-arnit-black text-sm">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Project</div>
                  <div className="text-xs font-semibold text-arnit-black">{review.project}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
