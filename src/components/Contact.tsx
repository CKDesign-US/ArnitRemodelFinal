import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, User, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';


const services = [
  'Full Home Renovation / Remodeling',
  'Interior & Exterior Painting',
  'Flooring Installation & Repair',
  'Siding Installation & Repair',
  'Junk Removal & Site Cleanout',
  'General Contractor Services',
  'Other / Not Sure',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      full_name: formData.get('full_name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      service_needed: formData.get('service_needed') as string,
      location: formData.get('location') as string,
      message: formData.get('message') as string,
    };

    const { error } = await console.log("Form submitted", formData);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong submitting your request. Please try again or call us directly.');
    } else {
      setStatus('success');
      e.currentTarget.reset();
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-arnit-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left — info sidebar */}
          <div className="lg:col-span-4">
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
                Fill out the form and Rrahman will get back to you to schedule a free
                on-site visit. We come to you — no obligation.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+19205550100"
                  className="flex items-center gap-4 p-4 bg-white border border-arnit-gray-border rounded-lg hover:border-arnit-red/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-md bg-arnit-red flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Call Us</div>
                    <div className="text-base font-bold text-arnit-black">(920) 555-0100</div>
                  </div>
                </a>

                <a
                  href="mailto:info@arnitremodeling.com"
                  className="flex items-center gap-4 p-4 bg-white border border-arnit-gray-border rounded-lg hover:border-arnit-red/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-md bg-arnit-black flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Email Us</div>
                    <div className="text-base font-bold text-arnit-black">info@arnitremodeling.com</div>
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

          {/* Right — form */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-arnit-gray-border rounded-xl p-6 lg:p-8 shadow-sm"
            >
              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-9 h-9 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-arnit-black">Quote Request Sent!</h3>
                  <p className="mt-3 text-gray-600 max-w-md mx-auto">
                    Thank you — Rrahman will review your request and contact you shortly to
                    schedule your free on-site estimate.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-3 bg-arnit-black text-white font-bold rounded-md hover:bg-arnit-black-deep transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-arnit-black mb-1.5">
                        Full Name <span className="text-arnit-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-arnit-gray-border rounded-md text-arnit-black focus:border-arnit-red focus:ring-2 focus:ring-arnit-red/20 focus:outline-none transition-all text-[15px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-arnit-black mb-1.5">
                        Phone Number <span className="text-arnit-red">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(920) 555-0100"
                        className="w-full px-4 py-3 border border-arnit-gray-border rounded-md text-arnit-black focus:border-arnit-red focus:ring-2 focus:ring-arnit-red/20 focus:outline-none transition-all text-[15px]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-arnit-black mb-1.5">
                        Email <span className="text-arnit-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-arnit-gray-border rounded-md text-arnit-black focus:border-arnit-red focus:ring-2 focus:ring-arnit-red/20 focus:outline-none transition-all text-[15px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-arnit-black mb-1.5">
                        City / Location <span className="text-arnit-red">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="location"
                          required
                          placeholder="Sheboygan, WI"
                          className="w-full pl-10 pr-4 py-3 border border-arnit-gray-border rounded-md text-arnit-black focus:border-arnit-red focus:ring-2 focus:ring-arnit-red/20 focus:outline-none transition-all text-[15px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-arnit-black mb-1.5">
                      Service Required <span className="text-arnit-red">*</span>
                    </label>
                    <select
                      name="service_needed"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 border border-arnit-gray-border rounded-md text-arnit-black focus:border-arnit-red focus:ring-2 focus:ring-arnit-red/20 focus:outline-none transition-all text-[15px] bg-white"
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-arnit-black mb-1.5">
                      Project Details / Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project — what needs done, timeline, any specific concerns..."
                      className="w-full px-4 py-3 border border-arnit-gray-border rounded-md text-arnit-black focus:border-arnit-red focus:ring-2 focus:ring-arnit-red/20 focus:outline-none transition-all text-[15px] resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-md">
                      <AlertCircle className="w-5 h-5 text-arnit-red shrink-0 mt-0.5" />
                      <p className="text-sm text-arnit-red font-semibold">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-arnit-red text-white text-base font-bold rounded-md hover:bg-arnit-red-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-arnit-red/20"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Quote Request
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    We'll get back to you within 24 hours. Your information is never shared.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
