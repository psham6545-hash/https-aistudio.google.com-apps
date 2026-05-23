import { useState } from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, Instagram, Facebook, Send } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div id="contact" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Have questions or ready to start? Reach out to us through any of the platforms below or fill out the application form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-500">Mobile Number</h3>
                  <p className="text-lg font-semibold text-slate-900 mt-1">+91 8308638546</p>
                </div>
              </div>

              <a href="https://wa.me/918308638546" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-50 text-green-600 rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-500">WhatsApp</h3>
                  <p className="text-lg font-semibold text-slate-900 mt-1">Chat With Us Now</p>
                </div>
              </a>

              <a href="https://instagram.com/shampatil_official23" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-pink-50 text-pink-600 rounded-full group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-500">Instagram</h3>
                  <div className="flex flex-col mt-1">
                    <span className="text-lg font-semibold text-slate-900">shampatil_ official 23</span>
                    <span className="text-sm text-pink-600 font-medium">Send Us A DM</span>
                  </div>
                </div>
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full group-hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-500">Facebook</h3>
                  <div className="flex flex-col mt-1">
                    <span className="text-lg font-semibold text-slate-900">sham Patil</span>
                    <span className="text-sm text-blue-600 font-medium">Message Us Anytime</span>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Application Sent!</h3>
                <p className="text-slate-600">Thank you for reaching out. We will review your details and contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-indigo-600 hover:text-indigo-700 font-medium bg-indigo-50 px-6 py-2 rounded-full"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-100 pb-8 mb-8">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Application Form</h3>
                  <p className="text-sm text-slate-500">Fill in your details below to get started.</p>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input required type="text" id="name" name="name" className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow" placeholder="John Doe" />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-slate-700">Mobile Number</label>
                  <input required type="tel" id="mobile" name="mobile" className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow" placeholder="+91 0000000000" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-slate-700">City</label>
                    <input required type="text" id="city" name="city" className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow" />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-slate-700">State</label>
                    <input required type="text" id="state" name="state" className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label htmlFor="age" className="block text-sm font-medium text-slate-700">Age</label>
                    <input required min="18" type="number" id="age" name="age" className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow" placeholder="18+" />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-slate-700">Address</label>
                    <input required type="text" id="address" name="address" className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
