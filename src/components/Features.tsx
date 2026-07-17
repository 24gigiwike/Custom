import { motion } from 'motion/react';

export default function Features() {
  const words = ['TEMPLATE', 'CUSTOMIZE', 'MOCKUP', 'PUBLISH'];

  return (
    <div id="features" className="w-full bg-[#9cd3c3] p-0 m-0 overflow-hidden">
      {/* Features Stencil Container Card - Full screen edge-to-edge representation */}
      <motion.div
        id="features-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full bg-[#9cd3c3] overflow-hidden flex flex-col justify-center p-0 m-0"
      >
        {/* Subtle decorative background light to give depth */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none select-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-950/5 rounded-full blur-3xl pointer-events-none select-none" />

        {/* Stenciled stacked display text - Zero spacing, zero margins, edge to edge */}
        <div className="flex flex-col gap-0 relative z-10 select-none w-full p-0 m-0">
          {words.map((word, index) => (
            <motion.div
              id={`feature-word-${word.toLowerCase()}`}
              key={word}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
              className="group relative w-full overflow-hidden p-0 m-0 leading-none"
            >
              {/* Massive background text that fills the screen width perfectly */}
              <span className="block w-full text-left text-[12.8vw] font-black leading-[0.8] tracking-[-0.05em] text-slate-800/15 group-hover:text-slate-900/35 transition-all duration-300 cursor-default select-none p-0 m-0">
                {word}
              </span>

              {/* Elegant floating metadata description on hover */}
              <div className="absolute left-6 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm font-medium text-teal-950/70 pointer-events-none uppercase tracking-widest bg-white/35 backdrop-blur-sm px-2 py-0.5 rounded">
                {word === 'TEMPLATE' && 'Browse responsive layouts built by designers'}
                {word === 'CUSTOMIZE' && 'Tailor every visual aspect in real time'}
                {word === 'MOCKUP' && 'Generate instant AI website visuals'}
                {word === 'PUBLISH' && 'Launch instantly with superfast global CDN'}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
