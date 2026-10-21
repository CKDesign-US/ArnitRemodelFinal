import { motion } from 'framer-motion';
import { Phone, Mail, Clock, User } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-arnit-gray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-arnit-red" />
            <span className="text-sm font-bold tracking-wider text-arnit-red uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-arnit-black tracking-tight text-balance">
            Request Your Free Estimate
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Rrahman will get back to you to schedule a free on-site visit. 
            We come to you — no obligation.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="tel:+19202540681"
              className="flex items-center gap-4 p-4 bg-white border border-arnit-gray-border rounded-lg hover:border-arnit-red/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-md bg-arnit-red flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold">Call Us</div>
                <div className="text-base font-bold text-arnit-black">(920) 254-0681</div>
              </div>
            </a>

            <a
              href="mailto:zyra0280@gmail.com"
              className="flex items-center gap-4 p-4 bg-white border border-arnit-gray-border rounded-lg hover:border-arnit-red/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-md bg-arnit-black flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold">Email Us</div>
                <div className="text-base font-bold text-arnit-black">zyra0280@gmail.com</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-white border border-arnit-gray-border rounded-lg">
              <div className="w-11 h-11 rounded-md bg-arnit-black flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold">Business Hours</div>
                <div className="text-sm font-bold text-arnit-black">Mon–Fri: 7am–6pm</div>
                <div className="text-sm font-bold text-arnit-black">Sat: 8am–2pm</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-arnit-black rounded-lg">
              <div className="w-11 h-11 rounded-md bg-arnit-red flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold">Owner & Operator</div>
                <div className="text-base font-bold text-white">Rrahman Blakqori</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
