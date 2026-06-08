import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Character, StoryDb, Stats, Choice } from '../types';
import { Terminal, BatteryCharging, AlertTriangle, Fingerprint } from 'lucide-react';

interface StoryEngineProps {
  storyDb: StoryDb;
  character: Character;
  onReset: () => void;
}

const COLOR_MAP: Record<string, { text: string; bg: string; border: string; hex: string }> = {
  orange: { text: 'text-[#FF5500]', bg: 'bg-[#FF5500]', border: 'border-[#FF5500]', hex: '#FF5500' },
  cyan: { text: 'text-[#00FFCC]', bg: 'bg-[#00FFCC]', border: 'border-[#00FFCC]', hex: '#00FFCC' },
  pink: { text: 'text-[#FF00FF]', bg: 'bg-[#FF00FF]', border: 'border-[#FF00FF]', hex: '#FF00FF' },
  gray: { text: 'text-[#AAAAAA]', bg: 'bg-[#AAAAAA]', border: 'border-[#AAAAAA]', hex: '#AAAAAA' },
};

export function StoryEngine({ storyDb, character, onReset }: StoryEngineProps) {
  const [currentNodeId, setCurrentNodeId] = useState<string>('start');
  const [stats, setStats] = useState<Stats>({
    rebellion: 0,
    alienation: 0,
    conformity: 0,
    expression: 0,
  });
  
  const [history, setHistory] = useState<string[]>([]);
  const theme = COLOR_MAP[character.color] || COLOR_MAP.orange;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentNodeId]);

  const currentNode = storyDb[currentNodeId];
  if (!currentNode) {
    return (
      <div className="h-screen bg-[#0c0c0c] text-white flex items-center justify-center font-mono">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-[#ff4e00]" />
          <h1 className="text-4xl font-bold">FATAL ERROR: NODE NOT FOUND</h1>
          <p className="mt-4">Node ID: {currentNodeId}</p>
          <button onClick={onReset} className="mt-8 border-2 border-white px-8 py-3 hover:bg-white hover:text-black">REBOOT</button>
        </div>
      </div>
    );
  }

  const handleChoice = (choice: Choice) => {
    if (choice.impact) {
      setStats(prev => ({
        rebellion: prev.rebellion + (choice.impact?.rebellion || 0),
        alienation: prev.alienation + (choice.impact?.alienation || 0),
        conformity: prev.conformity + (choice.impact?.conformity || 0),
        expression: prev.expression + (choice.impact?.expression || 0),
      }));
    }
    
    setHistory(prev => [...prev, currentNodeId]);
    setCurrentNodeId(choice.next);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f0f0f0] font-sans flex flex-col p-4 md:p-6 gap-4 md:gap-6 selection:bg-[#ff4e00] selection:text-black select-none pb-20">
      <header className="flex justify-between items-end border-b-4 border-white md:border-[#ff4e00] pb-2 shrink-0">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-white md:text-[#ff4e00] font-bold">Subculture Narrative Engine v1.0.4</span>
          <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter leading-none">CHOOSE LIFE.</h1>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-xs opacity-50 uppercase">Scenario: Active</div>
          <div className="text-xl font-mono uppercase truncate max-w-[250px]">ST_AGE_02 // {currentNodeId}</div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto flex flex-col gap-6">
        
        {/* Top Info Bar: Character Visualizer & Stats horizontally on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Character Visualizer */}
          <section className="flex-1 bg-[#1a1a1a] border-2 border-white flex flex-col relative overflow-hidden shrink-0">
            <div className="absolute top-0 left-0 bg-white text-black text-[10px] px-2 font-bold uppercase tracking-tighter z-10">Visual_ID</div>
            <div className="flex-1 flex flex-col bg-gradient-to-t from-black to-zinc-800 p-6 pt-12 relative items-center justify-center">
              <div className={`w-24 h-24 rounded-full border-4 mb-4 bg-zinc-900 ${theme.border} shadow-[0px_0px_20px_0px_currentColor]`} style={{ color: theme.hex }}></div>
              <div className="text-center w-full">
                <div className={`text-2xl font-black uppercase mb-1 ${theme.text}`}>
                  {character.name}
                </div>
                <div className="text-[10px] opacity-60 font-mono text-white leading-relaxed uppercase underline decoration-[#ff4e00] decoration-2 underline-offset-4 mb-3">
                  PRONOUNS: {character.pronouns}
                </div>
              </div>
            </div>
            <div className="p-2 border-t-2 border-white text-[10px] font-mono leading-tight bg-black hidden md:block">
              INITIATING NEURAL LINK... | ALIGNMENT: SUB-VERT
            </div>
          </section>

          {/* Stats & Inventory */}
          <section className="flex-1 bg-[#ff4e00] text-black p-4 flex flex-col justify-between border-2 border-black shrink-0 relative shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
            <div className="uppercase text-[10px] font-black tracking-widest border-b border-black pb-1 mb-4 flex items-center gap-2">
               Status_Monitoring
            </div>
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              <StatBar label="Rebellion 叛逆" value={stats.rebellion} bgClass="bg-white" textClass="text-black" barBgClass="bg-black" />
              <StatBar label="Alienation 异化" value={stats.alienation} bgClass="bg-white" textClass="text-black" barBgClass="bg-black" />
              <StatBar label="Conformity 顺从" value={stats.conformity} bgClass="bg-white" textClass="text-black" barBgClass="bg-black" />
              <StatBar label="Expression 表现力" value={stats.expression} bgClass="bg-white" textClass="text-black" barBgClass="bg-black" />
            </div>
          </section>
        </div>

        {/* Narrative Box */}
        <section className={`bg-white text-black p-6 md:p-8 flex flex-col justify-between relative shadow-[8px_8px_0px_0px_#ff4e00] border-2 ${currentNode.choices[0]?.next === 'start' ? 'border-[#ff4e00]' : 'border-transparent'}`}>
          <div className="absolute -top-3 right-4 bg-black text-white px-3 py-1 text-xs italic font-bold z-10 hidden sm:block border-2 border-[#ff4e00]">
            STORY_NODE: 0x{currentNodeId.substring(0, 4).toUpperCase()}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNodeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col justify-center"
            >
              {currentNode.choices[0]?.next === 'start' && (
                <div className="mb-6 pb-4 border-b-4 border-black inline-block">
                  <h2 className="text-3xl md:text-5xl font-black italic uppercase text-[#ff4e00]">
                    {currentNode.choices[0]?.label.split('\n')[0] || "ENDING REACHED"}
                  </h2>
                  <p className="text-sm font-bold tracking-widest uppercase mt-2">Simulation Terminated</p>
                </div>
              )}
              
              <div className="text-lg md:text-xl leading-relaxed space-y-4">
                {currentNode.text.split('\n').filter(l => l.trim().length > 0).map((line, i) => (
                  <p key={i} className={line.match(/^[a-zA-Z]/) ? "font-serif italic text-xl md:text-2xl text-black font-bold" : "font-sans font-medium text-lg text-black/80 tracking-widest mt-1 mb-6"}>
                    {line}
                  </p>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#ff4e00] mt-8 pt-4 border-t-2 border-black/10">
                <span className="animate-pulse">●</span> SYSTEM_WAITING_FOR_INPUT
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Choices Section */}
        <section className="flex flex-col gap-3">
          <AnimatePresence mode="wait">
            {currentNode.choices.map((choice, i) => {
              const isReset = choice.next === 'start';
              return (
                <motion.button
                  key={`${currentNodeId}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => isReset ? onReset() : handleChoice(choice)}
                  className={`border-2 flex flex-col md:flex-row items-start md:items-center p-5 md:p-6 transition-colors group relative overflow-hidden text-left
                    ${isReset 
                      ? 'bg-zinc-900 border-[#ff4e00] text-[#ff4e00] hover:bg-[#ff4e00] hover:text-black shadow-[4px_4px_0px_0px_#ff4e00]' 
                      : 'bg-[#1a1a1a] border-white text-white hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-none translate-y-0 hover:translate-y-[4px] hover:translate-x-[4px]'}
                  `}
                >
                  {!isReset && (
                    <span className="text-3xl md:text-4xl font-black md:mr-6 mb-2 md:mb-0 opacity-30 group-hover:opacity-100 transition-opacity">
                      0{i + 1}
                    </span>
                  )}
                  <div className="flex flex-col relative z-10 w-full">
                    {choice.label.split(/[-|\n]/).map((part, idx) => {
                      if (isReset && idx === 0) return null; // Hide the "ENDING: xxx" from the button itself
                      return (
                        <span key={idx} className={`${idx === 0 || (isReset && idx === 1) ? 'text-lg font-black uppercase' : 'text-sm font-medium opacity-80 mt-1'} leading-snug`}>
                          {part.replace('[RESTART] ', '').trim()}
                        </span>
                      );
                    })}
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </section>

        {/* Log/History */}
        <section className="bg-zinc-900 border-l-4 border-zinc-700 p-4 shrink-0">
          <div className="text-[9px] font-mono text-zinc-500 uppercase mb-2 tracking-widest border-b border-zinc-800 pb-2">Recent_Events</div>
          <div className="text-[10px] font-mono text-zinc-400 space-y-1 flex flex-col-reverse">
             <div className="flex text-white font-bold"><span className="text-[#ff4e00] mr-2">[{String(history.length + 1).padStart(2, '0')}]</span> SYSTEM: AWAITING INPUT</div>
             {history.slice().reverse().slice(0, 5).map((nodeId, idx) => (
                <div key={idx} className="flex opacity-60"><span className="text-zinc-600 mr-2">[{String(history.length - idx).padStart(2, '0')}]</span> DEPARTED NODE: {nodeId.toUpperCase()}</div>
             ))}
          </div>
        </section>

      </main>
    </div>
  );
}

function StatBar({ label, value, bgClass, textClass, barBgClass }: { label: string, value: number, bgClass: string, textClass: string, barBgClass?: string }) {
  const maxVal = 10;
  const percentage = Math.min((value / maxVal) * 100, 100);
  
  return (
    <div className="w-full">
      <div className={`flex justify-between font-mono text-[10px] uppercase font-bold mb-1 ${textClass}`}>
        <span>{label}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className={`h-2 w-full overflow-hidden relative ${barBgClass || 'bg-neutral-900'}`}>
        <motion.div 
          className={`h-full absolute left-0 top-0 ${bgClass}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}