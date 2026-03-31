import CGPACalculator from '@/components/CGPACalculator';
import { ArrowRight, Zap, Shield, Globe, GraduationCap, Code, FileText, Settings, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(245,158,11,0.05)_0%,transparent_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-8">
            <Zap size={14} />
            Free Online Academic Tools
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-zinc-900 dark:text-white mb-6">
            Convert CGPA to <span className="text-amber-500">Percentage</span> Free
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            The most accurate and professional CGPA to Percentage converter for CBSE, VTU, Mumbai University, and more. Instant results with standard academic multipliers.
          </p>
          
          <CGPACalculator />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold font-display mb-8">How to Convert CGPA to Percentage?</h2>
            <p className="text-lg leading-relaxed mb-6">
              Converting your Cumulative Grade Point Average (CGPA) to a percentage is a common requirement for job applications, university admissions, and competitive exams. While different universities may have slight variations, the standard formula used by major boards like CBSE is:
            </p>
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-700 text-center mb-8">
              <p className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Standard Formula</p>
              <p className="text-3xl font-bold font-display">Percentage (%) = CGPA × 9.5</p>
            </div>
            <p className="mb-6">
              For example, if your CGPA is 8.5, your equivalent percentage would be 8.5 × 9.5 = 80.75%. Our <strong>free CGPA to percentage converter</strong> automates this process, ensuring you get accurate results instantly without manual calculation errors.
            </p>
            
            <h3 className="text-2xl font-bold mt-12 mb-6">Why Use VastuTool Converter?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-2">100% Accurate</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Uses verified academic multipliers for precise conversions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Global Standards</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Supports CBSE, VTU, Anna University, and international scales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Explore 200+ Professional Tools</h2>
            <p className="text-zinc-600 dark:text-zinc-400">High-performance utilities for every digital task.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Academic Calculators', icon: GraduationCap, count: 40, color: 'bg-blue-500' },
              { title: 'Developer Utilities', icon: Code, count: 47, color: 'bg-emerald-500' },
              { title: 'Data Converters', icon: RefreshCw, count: 49, color: 'bg-amber-500' },
              { title: 'Text & String Tools', icon: FileText, count: 35, color: 'bg-rose-500' },
            ].map((cat, i) => (
              <Link key={i} href="/tools" className="group p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/5">
                <div className={`w-12 h-12 rounded-2xl ${cat.color}/10 flex items-center justify-center ${cat.color.replace('bg-', 'text-')} mb-6 group-hover:scale-110 transition-transform`}>
                  <cat.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-sm text-zinc-500 mb-4">{cat.count}+ Tools available</p>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-widest">
                  Browse Category <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
