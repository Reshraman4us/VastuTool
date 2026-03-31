'use client';

import { useState } from 'react';
import { Calculator, RefreshCw, Info, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function CGPACalculator() {
  const [cgpa, setCgpa] = useState<string>('');
  const [percentage, setPercentage] = useState<number | null>(null);
  const [multiplier, setMultiplier] = useState<number>(9.5);

  const calculate = () => {
    const val = parseFloat(cgpa);
    if (!isNaN(val)) {
      setPercentage(val * multiplier);
    } else {
      setPercentage(null);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500">
            <Calculator size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-display">CGPA to Percentage</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Standard Academic Conversion Tool</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-semibold mb-3 text-zinc-700 dark:text-zinc-300">
              Enter CGPA (Scale of 10)
            </label>
            <div className="relative">
              <input 
                type="number" 
                step="0.01"
                min="0"
                max="10"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                placeholder="e.g. 8.5"
                className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-xl font-medium"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 font-medium">
                / 10
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-3 text-zinc-700 dark:text-zinc-300">
              Conversion Multiplier
            </label>
            <select 
              value={multiplier}
              onChange={(e) => setMultiplier(parseFloat(e.target.value))}
              className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
            >
              <option value={9.5}>CBSE / Standard (9.5)</option>
              <option value={10}>Standard (10.0)</option>
              <option value={9.3}>Custom (9.3)</option>
            </select>
          </div>

          <button 
            onClick={calculate}
            className="w-full py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-zinc-500/10 flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} />
            Convert Now
          </button>

          {percentage !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 bg-amber-500 rounded-3xl text-white text-center shadow-lg shadow-amber-500/30"
            >
              <p className="text-sm font-medium uppercase tracking-widest mb-2 opacity-80">Equivalent Percentage</p>
              <h3 className="text-5xl font-black font-display">{percentage.toFixed(2)}%</h3>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium bg-white/20 py-2 px-4 rounded-full w-fit mx-auto">
                <CheckCircle2 size={14} />
                Calculated using {multiplier} multiplier
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      <div className="bg-zinc-50 dark:bg-zinc-800/30 p-6 border-t border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
        <Info size={18} className="text-amber-500 shrink-0 mt-0.5" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
          <strong>Note:</strong> Most universities (like CBSE) use 9.5 as the standard multiplier. Check your university&apos;s specific guidelines for the most accurate conversion.
        </p>
      </div>
    </div>
  );
}
