'use client';

import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, GraduationCap, Code, RefreshCw, FileText, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const TOOL_CATEGORIES = [
  {
    name: 'Academic',
    icon: GraduationCap,
    tools: [
      { name: 'CGPA to Percentage', href: '/' },
      { name: 'Percentage to CGPA', href: '/tools/percentage-to-cgpa' },
      { name: 'SGPA to CGPA', href: '/tools/sgpa-to-cgpa' },
      { name: 'GPA Calculator', href: '/tools/gpa-calculator' },
    ]
  },
  {
    name: 'Developer',
    icon: Code,
    tools: [
      { name: 'JSON Formatter', href: '/tools/json-formatter' },
      { name: 'XML to JSON', href: '/tools/xml-to-json' },
      { name: 'Base64 Encoder', href: '/tools/base64-encoder' },
      { name: 'JWT Decoder', href: '/tools/jwt-decoder' },
    ]
  },
  {
    name: 'Converters',
    icon: RefreshCw,
    tools: [
      { name: 'CSV to JSON', href: '/tools/csv-to-json' },
      { name: 'YAML to JSON', href: '/tools/yaml-to-json' },
      { name: 'Excel to CSV', href: '/tools/excel-to-csv' },
      { name: 'JSON to CSV', href: '/tools/json-to-csv' },
    ]
  },
  {
    name: 'Text Tools',
    icon: FileText,
    tools: [
      { name: 'Word Counter', href: '/tools/word-counter' },
      { name: 'Case Converter', href: '/tools/case-converter' },
      { name: 'Remove Spaces', href: '/tools/remove-spaces' },
      { name: 'Text Diff', href: '/tools/text-diff' },
    ]
  },
  {
    name: 'Utilities',
    icon: Zap,
    tools: [
      { name: 'QR Generator', href: '/tools/qr-generator' },
      { name: 'Password Gen', href: '/tools/password-generator' },
      { name: 'Age Calculator', href: '/tools/age-calculator' },
      { name: 'Unit Converter', href: '/tools/unit-converter' },
    ]
  }
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
      if (shouldBeDark) {
        setTimeout(() => {
          setIsDark(true);
          document.documentElement.classList.add('dark');
        }, 0);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu('tools');
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Vastu<span className="text-amber-500">Tool</span>
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
              
              <div 
                className="relative h-16 flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 hover:text-amber-500 transition-colors">
                  Tools <ChevronDown size={14} className={`transition-transform duration-200 ${activeMegaMenu === 'tools' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeMegaMenu === 'tools' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-16 left-1/2 -translate-x-1/2 w-[800px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl p-8 grid grid-cols-5 gap-6"
                    >
                      {TOOL_CATEGORIES.map((cat) => (
                        <div key={cat.name}>
                          <div className="flex items-center gap-2 text-amber-500 mb-4">
                            <cat.icon size={18} />
                            <span className="font-bold text-xs uppercase tracking-widest">{cat.name}</span>
                          </div>
                          <ul className="space-y-2">
                            {cat.tools.map((tool) => (
                              <li key={tool.name}>
                                <Link 
                                  href={tool.href}
                                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors block py-1"
                                >
                                  {tool.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="hover:text-amber-500 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              className="md:hidden p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              <Link href="/" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
              
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Tools Categories</p>
                <div className="grid grid-cols-2 gap-4">
                  {TOOL_CATEGORIES.map((cat) => (
                    <div key={cat.name} className="space-y-2">
                      <p className="text-sm font-bold text-amber-500">{cat.name}</p>
                      <ul className="space-y-1">
                        {cat.tools.slice(0, 3).map((tool) => (
                          <li key={tool.name}>
                            <Link 
                              href={tool.href} 
                              className="text-sm text-zinc-600 dark:text-zinc-400"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {tool.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/about" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/contact" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
