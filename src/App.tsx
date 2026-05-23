import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FAQ />
        <Contact />
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">W</span>
            </div>
            <span className="font-display font-semibold text-xl text-white">CareerPortal</span>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} CareerPortal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
