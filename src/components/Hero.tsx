import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartBuilding?: () => void;
  onBrowseTemplates?: () => void;
}

export default function Hero({ onStartBuilding, onBrowseTemplates }: HeroProps) {
  return (
    <div className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Brand Wordmark Banner */}
        <motion.div
          id="brand-banner-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-16 sm:mb-20 md:mb-24"
        >
          <img
            id="brand-wordmark-large"
            src="https://res.cloudinary.com/dtkluxukm/image/upload/v1784208065/custom-transparent_fanqbk.png"
            alt="Custom by BroadBrand"
            className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-4xl h-auto object-contain select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Hero Card Container */}
        <motion.div
          id="hero-card"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[450px] sm:min-h-[550px] md:min-h-[620px] flex items-center justify-center"
        >
          {/* Background Image with Blending and Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              id="hero-bg-image"
              src="https://res.cloudinary.com/dtkluxukm/image/upload/v1784208105/pawel-czerwinski-nEEEkEEIltA-unsplash_hampzj.jpg"
              alt="Abstract green waves background"
              className="w-full h-full object-cover transform scale-105 select-none"
              referrerPolicy="no-referrer"
            />
            {/* 0.5 opacity gradient overlay with colors #94cebb, #6daead, #689aa1 */}
            <div 
              className="absolute inset-0 opacity-50 z-10"
              style={{ backgroundImage: 'linear-gradient(135deg, #94cebb, #6daead, #689aa1)' }}
            />
            {/* Subtle dark overlay underneath to maintain high legibility for white text */}
            <div className="absolute inset-0 bg-slate-900/35 z-0 mix-blend-multiply" />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-20 md:py-24 text-center flex flex-col items-center justify-center gap-6 sm:gap-8">
            
            {/* Top Subtitle Text */}
            <motion.p
              id="hero-subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/95 text-base sm:text-lg md:text-xl font-medium tracking-wide max-w-2xl leading-relaxed text-center drop-shadow-sm"
            >
              Create stunning websites, manage your digital presence, and launch with confidence—all from one platform.
            </motion.p>

            {/* Main Heading Text */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[1.02] max-w-5xl font-display mt-2 drop-shadow-md"
            >
              Everything Your Brand Needs<br />
              to Show Up Online.
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              id="hero-cta-buttons"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 w-full sm:w-auto"
            >
              <button
                id="hero-cta-browse"
                onClick={(e) => {
                  e.preventDefault();
                  if (onBrowseTemplates) {
                    onBrowseTemplates();
                  } else {
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-900 bg-[#9cd3c3] hover:bg-[#85ccb8] cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Browse Templates
              </button>
              <button
                id="hero-cta-start"
                onClick={(e) => {
                  e.preventDefault();
                  if (onStartBuilding) onStartBuilding();
                }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-900 bg-white hover:bg-slate-50 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Building
              </button>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
