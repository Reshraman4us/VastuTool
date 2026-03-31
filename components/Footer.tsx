import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Vastu<span className="text-amber-500">Tool</span>
              </span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              VastuTool provides high-precision academic calculators and developer utilities designed for students, professionals, and creators worldwide. Our mission is to simplify complex calculations with elegance and speed.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-zinc-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/tools" className="hover:text-amber-500 transition-colors">All Tools</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-zinc-900 dark:text-white">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-amber-500 transition-colors">Disclaimer</Link></li>
              <li><Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} VastuTool. All rights reserved. Precision Meets Harmony.
          </p>
          <div className="flex items-center gap-6">
            {/* Social Icons Placeholder */}
            <span className="text-xs text-zinc-400 uppercase tracking-widest">Global Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
