import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, BadgeCheck, MessageSquare } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  project: string;
  text: string;
  rating: number;
}

export default function Reviews() {
  // Lazy-initialize state from localStorage so customer reviews persist across reloads
  const [reviewsList, setReviewsList] = useState<Review[]>(() => {
    if (typeof window !== 'undefined') {
      const savedReviews = localStorage.getItem('arnit_customer_reviews');
      return savedReviews ? JSON.parse(savedReviews) : [];
    }
    return [];
  });
  
  // Form input state management
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [project, setProject] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  // Sync state to localStorage whenever the reviews list updates
  useEffect(() => {
    localStorage.setItem('arnit_customer_reviews', JSON.stringify(reviewsList));
  }, [reviewsList]);

  // Dynamic metrics calculation
  const totalReviews = reviewsList.length;
  const averageRating = totalReviews > 0 
    ? (reviewsList.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
    : '0.0';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !text || !project) {
      alert("Please fill in your name, project type, and review text.");
      return;
    }

    const newReview: Review = {
      name,
      location: location || 'Wisconsin',
      project,
      text,
      rating,
    };

    // Prepend the new review to show instantly at the top of the feed layout
    setReviewsList([newReview, ...reviewsList]);

    // Reset form field inputs
    setName('');
    setLocation('');
    setProject('');
    setText('');
    setRating(5);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-arnit-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Dynamic Counter Statistics Banner */}
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
            
            {/* Dynamic Live Counter Dashboard */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-arnit-black bg-white border border-arnit-gray-border px-4 py-2 rounded-full w-max mx-auto shadow-sm">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((starIdx) => (
                  <Star 
                    key={starIdx} 
                    className={`w-4 h-4 ${
                      starIdx <= Math.round(Number(averageRating)) ? 'fill-arnit-red text-arnit-red' : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-base font-bold text-arnit-black">{averageRating} Stars</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">Total Reviews: <strong className="text-arnit-black font-extrabold text-base">{totalReviews}</strong></span>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Reviews Listing Area */}
        <div className="mb-16">
          {totalReviews === 0 ? (
            /* Empty State Display when counter is exactly 0 */
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 border-2 border-dashed border-arnit-gray-border rounded-xl max-w-xl mx-auto bg-white/50 backdrop-blur-sm"
            >
              <MessageSquare className="w-10 h-10 text-gray-400 mx-auto mb-3 stroke-[1.5]" />
              <h3 className="text-base font-bold text-arnit-black mb-1">No reviews submitted yet</h3>
              <p className="text-sm text-gray-500 max-w-sm mx-auto px-4">Be the first to share your experience with Rrahman and the Arnit Remodel crew using the form below!</p>
            </motion.div>
          ) : (
            /* Grid View displaying the customer submissions */
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              <AnimatePresence mode="popLayout">
                {reviewsList.map((review, i) => (
                  <motion.div
                    key={`${review.name}-${i}`}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-arnit-gray-border rounded-lg p-6 lg:p-7 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-0.5">
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
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Review Submission Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white border border-arnit-gray-border rounded-lg p-6 lg:p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold text-arnit-black mb-2 text-center">Share Your Experience</h3>
          <p className="text-sm text-gray-500 mb-6 text-center">Submit your review below to update our live project counters instantly.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Your Name *</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-arnit-gray-border rounded text-sm focus:outline-none focus:border-arnit-red" 
                  placeholder="e.g. Sarah M."
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Location</label>
                <input 
                  type="text" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-arnit-gray-border rounded text-sm focus:outline-none focus:border-arnit-red" 
                  placeholder="e.g. Sheboygan, WI"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Project Type *</label>
              <input 
                type="text" 
                value={project} 
                onChange={(e) => setProject(e.target.value)}
                className="w-full px-3 py-2 border border-arnit-gray-border rounded text-sm focus:outline-none focus:border-arnit-red" 
                placeholder="e.g. Kitchen Remodel, Deck Build"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Rating</label>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <button
                    type="button"
                    key={starValue}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHoverRating(starValue)}
                    onMouseLeave={() => setHoverRating(0)}


