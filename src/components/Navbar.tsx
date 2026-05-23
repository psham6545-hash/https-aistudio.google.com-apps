import { motion } from "motion/react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">W</span>
            </div>
            <span className="font-display font-semibold text-xl text-gray-900">CareerPortal</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#why-us" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Why Us</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
