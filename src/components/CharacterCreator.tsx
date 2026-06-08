import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Character } from '../types';

interface CharacterCreatorProps {
  onComplete: (char: Character) => void;
}

const COLOR_OPTIONS = [
  { id: 'orange', name: 'Neon Orange', bg: 'bg-[#FF5500]', text: 'text-[#FF5500]', border: 'border-[#FF5500]', accent: 'accent-[#FF5500]' },
  { id: 'cyan', name: 'Cyber Cyan', bg: 'bg-[#00FFCC]', text: 'text-[#00FFCC]', border: 'border-[#00FFCC]', accent: 'accent-[#00FFCC]' },
  { id: 'pink', name: 'Synth Pink', bg: 'bg-[#FF00FF]', text: 'text-[#FF00FF]', border: 'border-[#FF00FF]', accent: 'accent-[#FF00FF]' },
  { id: 'gray', name: 'Void Gray', bg: 'bg-[#AAAAAA]', text: 'text-[#AAAAAA]', border: 'border-[#AAAAAA]', accent: 'accent-[#AAAAAA]' },
];

export function CharacterCreator({ onComplete }: CharacterCreatorProps) {
  const [name, setName] = useState('');
  const [pronouns, setPronouns] = useState('they/them');
  const [colorId, setColorId] = useState(COLOR_OPTIONS[0].id);

  const selectedColor = COLOR_OPTIONS.find(c => c.id === colorId)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onComplete({ name, pronouns, color: colorId });
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f0f0f0] flex flex-col p-6 font-sans select-none pb-12 sm:pb-6">
      <header className="flex justify-between items-end border-b-4 border-[#ff4e00] pb-2 shrink-0">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-[#ff4e00] font-bold">Subculture Narrative Engine v1.0.4</span>
        </div>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 selection:bg-[#ff4e00] selection:text-black">
        <motion.div
// ... existing code in CharacterCreator.tsx
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className={`w-full max-w-2xl bg-white text-black border-2 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_#ff4e00] relative`}
        >
          <div className="absolute top-0 right-0 md:-top-3 md:right-4 bg-black text-white px-3 py-1 text-xs italic font-bold z-10">SETUP_SEQUENCE</div>
          
          <div className="space-y-2 mb-8 border-b-2 border-black pb-6">
            <h2 className={`text-4xl md:text-5xl font-black uppercase tracking-tighter italic ${selectedColor.text}`}>
              Identity Genesis
            </h2>
            <p className="font-bold opacity-80 mb-1">Define your parameters before entering the grid.</p>
            <p className="text-sm font-bold text-zinc-500">在进入网格之前定义你的参数。</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="block text-sm font-black uppercase tracking-widest flex justify-between items-end">
                <span>Alias</span>
                <span className="text-xs text-zinc-500 font-bold">代号</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#1a1a1a] border-2 border-black p-4 text-xl text-white focus:outline-none focus:border-[#ff4e00] transition-colors"
                placeholder="e.g. Zero, K, Angel..."
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black uppercase tracking-widest flex justify-between items-end">
                <span>Pronouns</span>
                <span className="text-xs text-zinc-500 font-bold">人称代词</span>
              </label>
              <input
                type="text"
                value={pronouns}
                onChange={(e) => setPronouns(e.target.value)}
                className="w-full bg-[#1a1a1a] border-2 border-black p-4 text-xl text-white focus:outline-none focus:border-[#ff4e00] transition-colors"
                placeholder="he/him, she/her, they/them, it/its..."
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black uppercase tracking-widest flex justify-between items-end">
                <span>Signature Color</span>
                <span className="text-xs text-zinc-500 font-bold">标志色彩</span>
              </label>
              <div className="flex space-x-4">
                {COLOR_OPTIONS.map(c => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setColorId(c.id)}
                    className={`w-12 h-12 rounded-full border-4 transition-transform ${c.bg} ${colorId === c.id ? `scale-125 border-black shadow-[4px_4px_0px_0px_black]` : 'border-transparent'}`}
                    aria-label={`Select color ${c.name}`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-8">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full py-4 text-2xl font-black uppercase transition-colors disabled:opacity-50 border-4 border-black ${selectedColor.bg} text-black shadow-[8px_8px_0px_0px_black] hover:shadow-none translate-y-0 hover:translate-y-[8px] hover:translate-x-[8px] flex flex-col items-center justify-center gap-1`}
                disabled={!name.trim()}
              >
                <span>Initialize Sequence</span>
                <span className="text-sm tracking-widest font-bold">启动序列</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
