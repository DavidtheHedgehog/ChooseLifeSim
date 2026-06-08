import { motion } from 'motion/react';

interface TitleScreenProps {
  onStart: () => void;
}

export function TitleScreen({ onStart }: TitleScreenProps) {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f0f0f0] flex flex-col p-6 font-sans select-none pb-12 sm:pb-6">
      <header className="flex justify-between items-end border-b-4 border-[#ff4e00] pb-2 shrink-0">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-[#ff4e00] font-bold">Subculture Narrative Engine v1.0.4</span>
        </div>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center p-8 selection:bg-[#ff4e00] selection:text-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-6xl md:text-9xl font-black mb-6 leading-none italic tracking-tighter text-white drop-shadow-[8px_8px_0px_#ff4e00]">
            CHOOSE<br />LIFE.
          </h1>
          <p className="flex flex-col gap-2 text-lg md:text-xl text-white font-bold mb-12 max-w-2xl mx-auto normal-case tracking-normal border-2 border-white p-4 shadow-[4px_4px_0px_0px_#ff4e00] bg-[#1a1a1a] italic">
            <span>A subculture identity simulator. Navigate the underground. Find your truth. Break the system.</span>
            <span className="text-zinc-400 font-normal italic text-sm md:text-base">亚文化身份模拟器。在地下网络中穿梭，寻找真实的自我，打破系统的枷锁。</span>
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ff4e00", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="bg-[#1a1a1a] text-white border-2 border-white px-12 py-4 text-2xl font-black transition-colors uppercase tracking-widest hover:border-[#ff4e00] shadow-[8px_8px_0px_0px_currentColor] hover:shadow-[8px_8px_0px_0px_black] flex flex-col items-center gap-1 mx-auto"
          >
            <span>[ INIT SEQUENCE ]</span>
            <span className="text-sm font-bold opacity-80">启动序列</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
