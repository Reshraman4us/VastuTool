'use client';

import { useState } from 'react';
import { Search, ArrowRight, GraduationCap, Code, FileText, Zap } from 'lucide-react';
import Link from 'next/link';

const ALL_TOOLS = [
  { id: 'cgpa-to-percentage', title: 'CGPA to Percentage Converter', category: 'Academic', icon: GraduationCap, description: 'Convert CGPA to percentage for CBSE and other universities.' },
  { id: 'percentage-to-cgpa', title: 'Percentage to CGPA Converter', category: 'Academic', icon: GraduationCap, description: 'Convert percentage to CGPA on a 10-point scale.' },
  { id: 'xml-to-json', title: 'XML to JSON Converter', category: 'Developer', icon: Code, description: 'Convert XML data to JSON format instantly.' },
  { id: 'json-to-xml', title: 'JSON to XML Converter', category: 'Developer', icon: Code, description: 'Convert JSON objects to XML strings.' },
  { id: 'word-counter', title: 'Word Counter', category: 'Text', icon: FileText, description: 'Count words, characters, and reading time.' },
  { id: 'case-converter', title: 'Case Converter', category: 'Text', icon: FileText, description: 'Change text to UPPERCASE, lowercase, Title Case, etc.' },
  { id: 'qr-generator', title: 'QR Code Generator', category: 'Utility', icon: Zap, description: 'Generate high-quality QR codes for free.' },
  { id: 'password-generator', title: 'Password Generator', category: 'Utility', icon: Zap, description: 'Create strong, secure passwords instantly.' },
  // ... more tools would be added here
];

const CATEGORIES = ['All', 'Academic', 'Developer', 'Text', 'Utility'];

export default function ToolsList() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTools = ALL_TOOLS.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black font-display mb-6">All <span className="text-amber-500">Tools</span></h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Browse our collection of 200+ high-precision tools designed for academic excellence and developer productivity.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for a tool (e.g. CGPA, JSON, QR)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-16 pr-6 py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl shadow-zinc-500/5 focus:ring-2 focus:ring-amber-500 outline-none transition-all text-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Link 
              key={tool.id} 
              href={tool.id === 'cgpa-to-percentage' ? '/' : '#'} 
              className="group p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                  <tool.icon size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-500">
                  {tool.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">{tool.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                {tool.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Open Tool <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500">No tools found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
