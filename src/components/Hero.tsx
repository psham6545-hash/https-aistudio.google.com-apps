import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, MessageCircle, PlayCircle } from "lucide-react";

const benefits = [
  "No Experience Needed",
  "Free Professional Training",
  "Work From Anywhere",
  "Students 18+ Welcome"
];

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-50 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute inset-0 max-w-7xl mx-auto">
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
        <div className="absolute top-1/4 -right-10 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 ring-1 ring-inset ring-indigo-500/20 mb-8">
            Start Your Journey Today
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 mb-6">
            Work From Home <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Opportunity</span>
          </h1>
          <p className="text-lg sm:text-xl leading-8 text-slate-600 mb-10">
            Start your online journey with premium training, flexible work opportunities, and personal growth — even if you have no experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all shadow-sm hover:shadow-md group"
            >
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/918308638546" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-green-50 hover:border-green-200 hover:text-green-700 rounded-full transition-all shadow-sm"
            >
              <MessageCircle className="mr-2 w-5 h-5 text-green-600" />
              Join WhatsApp
            </a>
            <a 
              href="#faq"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 bg-transparent hover:bg-slate-100 rounded-full transition-all"
            >
              <PlayCircle className="mr-2 w-5 h-5 text-indigo-600" />
              Watch Free Training
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={benefit}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm border border-slate-100"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
