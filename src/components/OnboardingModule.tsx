import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  Monitor, 
  Laptop, 
  Smartphone, 
  Search, 
  Filter, 
  ArrowLeft, 
  Calendar, 
  Sliders, 
  Download, 
  Send, 
  Clock,
  ExternalLink,
  SlidersHorizontal,
  Check,
  RefreshCw
} from 'lucide-react';

type OnboardingStep = 'welcome' | 'form' | 'ready' | 'marketplace' | 'consultation' | 'mockup_studio';

interface OnboardingModuleProps {
  onBackToLanding: () => void;
  userEmail?: string;
  workspaceNameInit?: string;
}

export default function OnboardingModule({ onBackToLanding, userEmail = 'user@example.com', workspaceNameInit = '' }: OnboardingModuleProps) {
  const [step, setStep] = useState<OnboardingStep>('welcome');
  const [workspaceName, setWorkspaceName] = useState(workspaceNameInit);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // States for interactive Template Marketplace
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedTemplate, setSelectedTemplate] = useState<any | null>(null);
  const [customAccent, setCustomAccent] = useState('#6DAEAD');

  // States for interactive Consultation Flow
  const [siteType, setSiteType] = useState('SaaS Landing');
  const [stylePreference, setStylePreference] = useState('Minimal');
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [consultationNotes, setConsultationNotes] = useState('');

  // States for interactive AI Mockup Studio
  const [mockupUrl, setMockupUrl] = useState('https://mybrand.com');
  const [mockupDevice, setMockupDevice] = useState<'desktop' | 'laptop' | 'mobile'>('laptop');
  const [mockupBg, setMockupBg] = useState('#849693');
  const [mockupPadding, setMockupPadding] = useState('p-12');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCount, setGeneratedCount] = useState(0);

  // Success indicator toast
  const [toast, setToast] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // Welcome screen auto-transition
  useEffect(() => {
    if (step === 'welcome') {
      const timer = setTimeout(() => {
        setStep('form');
      }, 3400); // Allow animated words to finish sequence
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Handle Workspace Form submit
  const handleWorkspaceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workspaceName.trim()) {
      triggerToast('Please enter a workspace name.');
      return;
    }
    setStep('ready');
  };

  // Handle Final Option continue
  const handleOptionContinue = () => {
    if (!selectedOption) return;
    if (selectedOption === 'templates') {
      setStep('marketplace');
    } else if (selectedOption === 'scratch') {
      setStep('consultation');
    } else if (selectedOption === 'mockup') {
      setStep('mockup_studio');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans relative selection:bg-teal-100">
      
      {/* Premium custom Toast notifications */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -40, x: '-50%' }}
            className="fixed top-6 left-1/2 z-50 bg-slate-950 text-white px-5 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase border border-slate-800 shadow-xl flex items-center gap-2.5"
          >
            <div className="h-2 w-2 rounded-full bg-[#94CEBB] animate-pulse" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen 1: Welcome (Smooth Word Animation) */}
      {step === 'welcome' && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <div className="flex flex-col items-center gap-16 max-w-lg px-4 text-center">
            {/* Centered Brand Logo */}
            <motion.img
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              src="https://res.cloudinary.com/dtkluxukm/image/upload/v1784208065/custom-transparent_fanqbk.png"
              alt="Custom"
              className="h-10 w-auto object-contain select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />

            {/* Slow, Smooth Elegant Word Fade-In */}
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-none flex flex-col gap-3 font-display">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block text-slate-400 font-medium text-3xl sm:text-4xl"
              >
                Welcome
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-slate-400 font-light text-2xl sm:text-3xl italic"
              >
                to
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
                className="block text-slate-900 tracking-tight"
              >
                Custom
              </motion.span>
            </h1>
          </div>
        </div>
      )}

      {/* Main navigation header for subsequent onboarding views */}
      {step !== 'welcome' && (
        <header className="py-6 border-b border-slate-100 bg-white sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dtkluxukm/image/upload/v1784208065/custom-transparent_fanqbk.png"
                alt="Custom Logo"
                className="h-7 w-auto object-contain cursor-pointer"
                onClick={onBackToLanding}
                referrerPolicy="no-referrer"
              />
              <span className="h-4 w-px bg-slate-200" />
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                {step === 'form' && 'Step 1: Identity'}
                {step === 'ready' && 'Step 2: Workspace Setup'}
                {step === 'marketplace' && 'Template Marketplace'}
                {step === 'consultation' && 'Consultation Desk'}
                {step === 'mockup_studio' && 'AI Mockup Studio'}
              </span>
            </div>
            
            <button
              id="onboarding-back-to-home"
              onClick={onBackToLanding}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Exit Onboarding
            </button>
          </div>
        </header>
      )}

      {/* Step 2: Create Your Workspace Form */}
      {step === 'form' && (
        <div className="flex-grow flex flex-col justify-center py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md w-full mx-auto bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display mb-2">
                Create Your Workspace
              </h1>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Your workspace is where you'll manage your websites, templates and projects.
              </p>
            </div>

            <form onSubmit={handleWorkspaceSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="workspace-name-input" className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                  Workspace Name
                </label>
                <input
                  id="workspace-name-input"
                  type="text"
                  required
                  placeholder="Enter your business or brand name"
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#6daead]/40 focus:border-[#6daead] transition-all bg-slate-50/50 hover:bg-slate-50 focus:bg-white"
                />
                <span className="text-xs text-slate-400 mt-1">
                  This will be the name of your workspace inside Custom.
                </span>
              </div>

              <button
                id="workspace-submit-btn"
                type="submit"
                className="w-full mt-4 py-3.5 px-6 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5 active:scale-[0.99] shadow-sm cursor-pointer"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Step 3: Workspace Ready */}
      {step === 'ready' && (
        <div className="flex-grow flex flex-col justify-center py-12 px-4 sm:px-6">
          <div className="max-w-5xl w-full mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display mb-3">
                Your workspace is ready.
              </h1>
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                Choose how you'd like to begin your journey with <span className="text-slate-800 font-bold">Custom</span>.
              </p>
            </div>

            {/* Three Selectable Option Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-10">
              
              {/* Card 1: Browse Templates */}
              <button
                id="option-browse-templates"
                type="button"
                onClick={() => setSelectedOption('templates')}
                className={`text-left rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative select-none h-full group ${
                  selectedOption === 'templates'
                    ? 'border-[#6daead] bg-[#9cd3c3]/10 ring-1 ring-[#6daead]'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950 tracking-tight mb-2 flex items-center justify-between">
                    Browse Templates
                    {selectedOption === 'templates' && (
                      <span className="h-4.5 w-4.5 rounded-full bg-teal-600 flex items-center justify-center text-white">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Explore professionally designed website templates that you can personalize without writing code.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 w-full flex items-center gap-1 text-xs font-bold text-[#689aa1] group-hover:text-slate-950 transition-colors">
                  <span>Explore Catalog</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>

              {/* Card 2: Start From Scratch */}
              <button
                id="option-start-scratch"
                type="button"
                onClick={() => setSelectedOption('scratch')}
                className={`text-left rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative select-none h-full group ${
                  selectedOption === 'scratch'
                    ? 'border-[#6daead] bg-[#9cd3c3]/10 ring-1 ring-[#6daead]'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950 tracking-tight mb-2 flex items-center justify-between">
                    Start From Scratch
                    {selectedOption === 'scratch' && (
                      <span className="h-4.5 w-4.5 rounded-full bg-teal-600 flex items-center justify-center text-white">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Work directly with a Custom designer and developer to create a completely original website tailored to your business.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 w-full flex items-center gap-1 text-xs font-bold text-[#689aa1] group-hover:text-slate-950 transition-colors">
                  <span>Book Free Consultation</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>

              {/* Card 3: Explore AI Mockup Studio */}
              <button
                id="option-explore-mockups"
                type="button"
                onClick={() => setSelectedOption('mockup')}
                className={`text-left rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative select-none h-full group ${
                  selectedOption === 'mockup'
                    ? 'border-[#6daead] bg-[#9cd3c3]/10 ring-1 ring-[#6daead]'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  {/* Premium Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-extrabold text-slate-950 tracking-tight flex items-center gap-2">
                      Explore AI Mockup Studio
                    </h3>
                    <span className="shrink-0 bg-slate-950 text-[#94cebb] text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase">
                      PREMIUM
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Generate premium presentation mockups for your website using AI.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 w-full flex items-center gap-1 text-xs font-bold text-[#689aa1] group-hover:text-slate-950 transition-colors">
                  {selectedOption === 'mockup' && (
                    <span className="h-4.5 w-4.5 rounded-full bg-teal-600 flex items-center justify-center text-white order-last">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                  )}
                  <span>Launch Studio</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>

            </div>

            {/* Primary Continue Button */}
            <div className="flex flex-col items-center gap-3">
              <button
                id="onboarding-continue-button"
                onClick={handleOptionContinue}
                disabled={!selectedOption}
                className={`px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer flex items-center gap-2 ${
                  selectedOption
                    ? 'bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.99]'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-slate-400 font-medium">
                {!selectedOption ? 'Please select an option above to unlock the platform.' : `Enter into the ${selectedOption === 'templates' ? 'Template Marketplace' : selectedOption === 'scratch' ? 'Consultation Request' : 'AI Mockup Studio'}`}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* EXPERIENCE 1: Template Marketplace */}
      {step === 'marketplace' && (
        <div className="flex-grow bg-slate-50 flex flex-col md:flex-row">
          {/* Marketplace Sidebar */}
          <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-slate-100 p-6 flex flex-col gap-6">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Current Workspace
              </h3>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-xs font-extrabold text-slate-800 border border-slate-100">
                <Layers className="h-3.5 w-3.5 text-slate-500" />
                <span className="truncate">{workspaceName || 'My Custom Brand'}</span>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Categories
              </h3>
              <div className="flex flex-col gap-1.5">
                {['All', 'Portfolio', 'Agency', 'SaaS', 'E-Commerce'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      triggerToast(`Filtered templates: ${filter}`);
                    }}
                    className={`text-left px-3 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                      activeFilter === filter
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-slate-100">
              <button
                onClick={() => setStep('ready')}
                className="w-full py-2.5 px-3 border border-slate-200 hover:bg-slate-50 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5"
              >
                <ArrowLeft className="h-3 w-3" />
                Back to Options
              </button>
            </div>
          </aside>

          {/* Catalog Grid Area */}
          <main className="flex-grow p-6 sm:p-8">
            <div className="max-w-6xl mx-auto">
              
              {/* Header block */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight font-display">
                    Premium Templates
                  </h1>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">
                    Select a layout to customize on your brand's white-label subdomain
                  </p>
                </div>

                <div className="relative w-full sm:w-64">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Search className="h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search premium styles..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400"
                  />
                </div>
              </div>

              {/* Template grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { id: 't1', title: 'Aura Portfolio', cat: 'Portfolio', desc: 'Serene, clean layout with display serif headings.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
                  { id: 't2', title: 'Apex Agency', cat: 'Agency', desc: 'Sleek dark aesthetics for multi-service design teams.', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80' },
                  { id: 't3', title: 'Verve SaaS', cat: 'SaaS', desc: 'Bento Grid layout focused on technical presentation.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80' },
                  { id: 't4', title: 'Boutique Shop', cat: 'E-Commerce', desc: 'Highly modern product cards and elegant checkout.', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
                  { id: 't5', title: 'Minimalist Creative', cat: 'Portfolio', desc: 'Swiss typographic focus with deep generous padding.', img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80' },
                  { id: 't6', title: 'Stripe Studio', cat: 'SaaS', desc: 'Premium, interactive landing featuring visual mockups.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
                ]
                  .filter((item) => activeFilter === 'All' || item.cat === activeFilter)
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
                    >
                      <div className="h-44 bg-slate-100 overflow-hidden relative">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-bold tracking-widest text-slate-800 uppercase">
                          {item.cat}
                        </span>
                      </div>
                      <div className="p-5 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="font-extrabold text-slate-900 tracking-tight mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedTemplate(item);
                            triggerToast(`Configuring preview for ${item.title}`);
                          }}
                          className="mt-5 w-full py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-[#689aa1] transition-colors cursor-pointer"
                        >
                          Personalize Template
                        </button>
                      </div>
                    </motion.div>
                  ))}
              </div>

            </div>
          </main>

          {/* Interactive Modal Customizer Preview */}
          <AnimatePresence>
            {selectedTemplate && (
              <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl"
                >
                  {/* Left Controls */}
                  <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-slate-100 p-6 flex flex-col gap-6">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Workspace: {workspaceName || 'Custom'}
                      </span>
                      <h2 className="text-xl font-black text-slate-900 font-display mt-1">
                        {selectedTemplate.title}
                      </h2>
                    </div>

                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                        Accent Theme Color
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {['#708595', '#689AA1', '#6DAEAD', '#849693', '#94CEBB', '#000000', '#2E5B5B', '#4A5568', '#E53E3E', '#3182CE'].map((color) => (
                          <button
                            key={color}
                            onClick={() => setCustomAccent(color)}
                            className="h-8 rounded-lg border transition-all hover:scale-105"
                            style={{ 
                              backgroundColor: color,
                              borderColor: customAccent === color ? '#000000' : 'transparent',
                              borderWidth: customAccent === color ? '2px' : '1px'
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                        Custom Domain slug
                      </label>
                      <div className="flex items-center text-xs font-semibold text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <span className="text-slate-900">
                          {(workspaceName || 'brand').toLowerCase().replace(/[^a-z0-9]/g, '')}
                        </span>
                        <span>.broadbrand.net</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 flex flex-col gap-2">
                      <button
                        onClick={() => {
                          triggerToast('Your website has been built & launched!');
                          setSelectedTemplate(null);
                        }}
                        className="w-full py-3 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        Publish Live Brand Site
                      </button>
                      <button
                        onClick={() => setSelectedTemplate(null)}
                        className="w-full py-2.5 border border-slate-200 text-slate-600 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>

                  {/* Right Realtime interactive Preview iframe mimic */}
                  <div className="flex-grow bg-slate-100 p-6 flex flex-col justify-between relative min-h-[300px]">
                    <div className="bg-white rounded-2xl flex-grow flex flex-col overflow-hidden shadow-inner border border-slate-200">
                      
                      {/* Browser-bar decoration */}
                      <div className="bg-slate-50 px-4 py-2 flex items-center gap-2 border-b border-slate-100">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                        </div>
                        <div className="mx-auto bg-white border border-slate-200/60 rounded px-4 py-0.5 text-[10px] font-mono text-slate-400 w-1/2 text-center truncate">
                          https://{(workspaceName || 'brand').toLowerCase().replace(/[^a-z0-9]/g, '')}.broadbrand.net
                        </div>
                      </div>

                      {/* Render preview */}
                      <div className="p-8 flex-grow flex flex-col justify-center text-center">
                        <span 
                          className="mx-auto text-[10px] font-extrabold tracking-widest px-2.5 py-1 rounded-full uppercase"
                          style={{ backgroundColor: `${customAccent}15`, color: customAccent }}
                        >
                          {selectedTemplate.cat} Layout
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display mt-3 mb-2">
                          We Craft Elegance
                        </h3>
                        <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                          This live preview updates in real-time as you tweak accent colors and workspace variables.
                        </p>

                        <button 
                          className="mt-6 mx-auto px-6 py-2.5 rounded-lg text-xs font-bold text-white transition-all shadow-sm"
                          style={{ backgroundColor: customAccent }}
                        >
                          Explore Brand
                        </button>
                      </div>

                    </div>
                  </div>

                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* EXPERIENCE 2: Consultation Request Flow */}
      {step === 'consultation' && (
        <div className="flex-grow bg-[#849693]/10 flex flex-col justify-center py-16 px-4">
          <div className="max-w-2xl w-full mx-auto">
            
            <AnimatePresence mode="wait">
              {!consultationSubmitted ? (
                <motion.div
                  key="consultation-form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col gap-8"
                >
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Custom Studio Desk
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-1">
                      Start From Scratch
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-relaxed">
                      Let's design a completely bespoke web layout tailored specifically to your company by BroadBrand designers and engineers.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Site Type Select */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                        What are we building?
                      </label>
                      <select 
                        value={siteType} 
                        onChange={(e) => setSiteType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-slate-400 bg-slate-50"
                      >
                        <option>SaaS Landing Page</option>
                        <option>Luxury Portfolio</option>
                        <option>Agency Showcase</option>
                        <option>Bespoke E-commerce</option>
                        <option>Corporate Platform</option>
                      </select>
                    </div>

                    {/* Aesthetic Preference Select */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                        Styling Vibe
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Minimal', 'Tech Bold', 'Editorial Serif', 'Warm Organic'].map((vibe) => (
                          <button
                            key={vibe}
                            type="button"
                            onClick={() => setStylePreference(vibe)}
                            className={`py-2 rounded-lg border text-xs font-semibold text-center transition-all ${
                              stylePreference === vibe
                                ? 'bg-slate-900 border-slate-900 text-white font-bold'
                                : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            {vibe}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                      Project Notes / Special Features Needed
                    </label>
                    <textarea
                      placeholder="e.g. Real-time scheduling modules, dark-mode styling, white-label client portal..."
                      rows={3}
                      value={consultationNotes}
                      onChange={(e) => setConsultationNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400"
                    />
                  </div>

                  <div className="border-t border-slate-100 pt-6 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setStep('ready')}
                      className="px-5 py-3 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Back to Choices
                    </button>

                    <button
                      onClick={() => {
                        setConsultationSubmitted(true);
                        triggerToast('Request dispatched successfully!');
                      }}
                      className="px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      Dispatched Consultation
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="consultation-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-white border border-slate-100 rounded-3xl p-10 sm:p-14 shadow-sm text-center flex flex-col items-center gap-6"
                >
                  <div className="h-16 w-16 bg-[#6daead]/10 rounded-full flex items-center justify-center text-teal-800 animate-pulse">
                    <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                      Consultation Requested
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-sm mx-auto">
                      Our BroadBrand designer-engineer team has been notified. A coordinator will email you at <span className="font-bold text-slate-800">{userEmail}</span> within 24 hours.
                    </p>
                  </div>

                  <div className="w-full max-w-xs mt-4 flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setConsultationSubmitted(false);
                        setConsultationNotes('');
                        setStep('ready');
                      }}
                      className="w-full py-3 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                    >
                      Return to Workspace Ready
                    </button>
                    <button
                      onClick={onBackToLanding}
                      className="w-full py-2.5 border border-slate-200 text-slate-600 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      Exit to Homepage
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      )}

      {/* EXPERIENCE 3: AI Mockup Studio */}
      {step === 'mockup_studio' && (
        <div className="flex-grow bg-slate-50 flex flex-col lg:flex-row">
          
          {/* Controls Panel (Left side) */}
          <aside className="w-full lg:w-96 bg-white border-b lg:border-b-0 lg:border-r border-slate-200 p-6 sm:p-8 flex flex-col gap-6 shrink-0">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Custom AI Engine v1
                </span>
                <span className="bg-slate-950 text-[#94cebb] text-[8px] font-extrabold px-1.5 py-0.5 rounded uppercase">
                  Premium
                </span>
              </div>
              <h1 className="text-xl font-black text-slate-900 font-display">
                AI Mockup Studio
              </h1>
            </div>

            {/* Input URL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                Source Website URL
              </label>
              <input
                type="url"
                value={mockupUrl}
                onChange={(e) => setMockupUrl(e.target.value)}
                placeholder="e.g. https://brand.com"
                className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-slate-400 bg-slate-50"
              />
            </div>

            {/* Device select */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                Target Frame device
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'desktop', label: 'Monitor', icon: Monitor },
                  { id: 'laptop', label: 'MacBook', icon: Laptop },
                  { id: 'mobile', label: 'iPhone', icon: Smartphone },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setMockupDevice(item.id as any);
                      triggerToast(`Switched to ${item.label} mockup layout`);
                    }}
                    className={`py-2 px-1 rounded-lg border text-center flex flex-col items-center justify-center gap-1.5 transition-all ${
                      mockupDevice === item.id
                        ? 'border-slate-950 bg-slate-950 text-white font-bold'
                        : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-[10px] font-semibold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Background Color Picker */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                Frame Presentation Backing
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { color: '#849693', name: 'Sage' },
                  { color: '#708595', name: 'Slate' },
                  { color: '#689AA1', name: 'Teal' },
                  { color: '#1E293B', name: 'Charcoal' },
                  { color: '#F8FAFC', name: 'White' },
                ].map((item) => (
                  <button
                    key={item.color}
                    onClick={() => setMockupBg(item.color)}
                    className="h-8 rounded-lg border transition-all hover:scale-105 flex items-center justify-center"
                    style={{ 
                      backgroundColor: item.color,
                      borderColor: mockupBg === item.color ? '#000000' : 'transparent',
                      borderWidth: mockupBg === item.color ? '2px' : '1px'
                    }}
                    title={item.name}
                  >
                    {mockupBg === item.color && (
                      <span className={`h-1 w-1 rounded-full ${item.name === 'White' ? 'bg-slate-900' : 'bg-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Padding slider */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 uppercase tracking-widest">
                <span>Viewport Cushioning</span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {mockupPadding === 'p-4' ? 'Tight' : mockupPadding === 'p-12' ? 'Balanced' : 'Generous'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'p-4', label: 'Tight' },
                  { id: 'p-12', label: 'Standard' },
                  { id: 'p-24', label: 'Deep' },
                ].map((pad) => (
                  <button
                    key={pad.id}
                    onClick={() => setMockupPadding(pad.id)}
                    className={`py-1.5 text-[10px] font-bold rounded border transition-all ${
                      mockupPadding === pad.id
                        ? 'bg-slate-900 border-slate-900 text-white'
                        : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                    }`}
                  >
                    {pad.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-auto pt-6 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsGenerating(true);
                  triggerToast('AI generating premium presentation mockup...');
                  setTimeout(() => {
                    setIsGenerating(false);
                    setGeneratedCount((prev) => prev + 1);
                    triggerToast('Mockup generated & saved to workspace catalog!');
                  }, 2400);
                }}
                disabled={isGenerating}
                className="w-full py-3.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                    <span>Processing Render...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Generate Presentation</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setStep('ready')}
                className="w-full py-2.5 border border-slate-200 text-slate-600 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-1"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Onboarding
              </button>
            </div>
          </aside>

          {/* Device Mockup Stage Area (Right side) */}
          <main className="flex-grow p-6 sm:p-10 flex flex-col items-center justify-center">
            
            <div className="w-full max-w-4xl flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Mockup Output Sandbox
                  </h3>
                  <span className="text-[10px] text-slate-500 font-mono mt-1 block">
                    Workspace: {(workspaceName || 'custom').toLowerCase().replace(/[^a-z0-9]/g, '')}.broadbrand.net
                  </span>
                </div>
                
                {generatedCount > 0 && (
                  <button
                    onClick={() => triggerToast('Successfully exported presentation package to downloads.')}
                    className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-[10px] font-bold text-slate-700 transition-colors uppercase tracking-widest cursor-pointer"
                  >
                    <Download className="h-3 w-3" />
                    Export Render ({generatedCount})
                  </button>
                )}
              </div>

              {/* Dynamic Presentation Frame Stage */}
              <div 
                className={`w-full rounded-3xl transition-all duration-500 flex items-center justify-center overflow-hidden min-h-[400px] border border-slate-200/50 relative shadow-inner ${mockupPadding}`}
                style={{ backgroundColor: mockupBg }}
              >
                {/* Visual backdrop ambient sphere */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-white/5 to-transparent pointer-events-none" />

                {/* Simulated Device Frame rendering */}
                <AnimatePresence mode="wait">
                  {mockupDevice === 'desktop' && (
                    <motion.div
                      key="desktop"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full max-w-xl flex flex-col relative z-10"
                    >
                      {/* Desktop screen frame */}
                      <div className="bg-slate-900 rounded-t-2xl p-2.5 pb-2 border-t border-x border-slate-800 shadow-2xl flex flex-col">
                        <div className="bg-white rounded-lg overflow-hidden flex flex-col min-h-[220px]">
                          {/* Inner preview content */}
                          <div className="bg-slate-50 border-b border-slate-100 px-3 py-1.5 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                            <div className="mx-auto w-32 bg-white border border-slate-200/60 rounded text-[8px] font-mono text-slate-400 text-center truncate">
                              {mockupUrl}
                            </div>
                          </div>
                          
                          {/* Content splash */}
                          <div className="p-8 text-center flex-grow flex flex-col justify-center bg-slate-950 text-white font-sans relative">
                            <div className="absolute inset-0 opacity-10 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&q=80')]" />
                            <span className="text-[8px] font-extrabold tracking-widest uppercase text-teal-400 relative z-10">
                              CUSTOM ARCHITECTURE
                            </span>
                            <h4 className="text-lg font-black tracking-tight font-display mt-1 mb-2 relative z-10">
                              Crafting the Future
                            </h4>
                            <p className="text-[10px] text-slate-400 max-w-xs mx-auto relative z-10 font-mono">
                              Subdomain: {workspaceName || 'My Brand'}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Desktop stand base */}
                      <div className="w-24 h-12 bg-slate-800 mx-auto relative border-t border-slate-700" />
                      <div className="w-40 h-2 bg-slate-900 mx-auto rounded-b-xl shadow-lg" />
                    </motion.div>
                  )}

                  {mockupDevice === 'laptop' && (
                    <motion.div
                      key="laptop"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full max-w-md flex flex-col relative z-10"
                    >
                      {/* Laptop Screen */}
                      <div className="bg-[#1e293b] rounded-t-xl p-3 border-t border-x border-slate-700 shadow-2xl">
                        <div className="bg-white rounded-md overflow-hidden flex flex-col min-h-[180px]">
                          <div className="bg-slate-50 border-b border-slate-100 px-3 py-1 flex items-center justify-between">
                            <div className="flex gap-1">
                              <span className="h-1 w-1 rounded-full bg-slate-300" />
                              <span className="h-1 w-1 rounded-full bg-slate-300" />
                            </div>
                            <div className="w-28 bg-white border border-slate-200/50 rounded text-[7px] font-mono text-slate-400 text-center truncate">
                              {mockupUrl}
                            </div>
                            <span className="w-2" />
                          </div>
                          
                          {/* Inner Content */}
                          <div className="p-6 text-center flex-grow flex flex-col justify-center bg-slate-900 text-slate-100 relative">
                            <div className="absolute inset-0 bg-cover bg-center opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80')]" />
                            <span className="text-[7px] font-bold tracking-widest uppercase text-teal-300 relative z-10">
                              BROADBRAND BRANDING v1.0
                            </span>
                            <h4 className="text-sm font-black tracking-tight font-display mt-1 mb-1.5 relative z-10">
                              Elegance without limits.
                            </h4>
                            <p className="text-[9px] text-slate-400 max-w-xs mx-auto relative z-10">
                              Tailored specifically for modern digital founders.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Laptop keyboard deck base */}
                      <div className="bg-slate-800 h-3 rounded-b-xl border-t border-slate-700 shadow-xl flex items-center justify-center relative">
                        {/* Notch notch */}
                        <div className="w-16 h-1 bg-slate-950 rounded-b absolute top-0" />
                      </div>
                    </motion.div>
                  )}

                  {mockupDevice === 'mobile' && (
                    <motion.div
                      key="mobile"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-48 bg-[#090d16] rounded-[2.5rem] p-3 border-[4px] border-[#1f2937] shadow-2xl relative z-10 flex flex-col"
                    >
                      {/* Phone Dynamic island */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full z-20 flex items-center justify-end pr-1">
                        <span className="h-1 w-1 bg-blue-900 rounded-full animate-pulse" />
                      </div>

                      {/* Screen content */}
                      <div className="bg-white rounded-[2rem] overflow-hidden flex-grow flex flex-col min-h-[260px]">
                        <div className="bg-slate-900 text-white flex-grow p-4 pt-8 text-center flex flex-col justify-center relative">
                          <div className="absolute inset-0 bg-cover bg-center opacity-15 bg-[url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=300&q=80')]" />
                          <span className="text-[6px] font-bold tracking-widest text-[#94cebb] uppercase relative z-10">
                            MOBILE PORTFOLIO
                          </span>
                          <h4 className="text-xs font-black tracking-tight font-display mt-0.5 mb-1 relative z-10">
                            Pristine Code.
                          </h4>
                          <p className="text-[8px] text-slate-400 relative z-10 max-w-[120px] mx-auto leading-relaxed">
                            Bespoke websites built directly for creators.
                          </p>
                          
                          <button className="mt-4 mx-auto bg-white/20 hover:bg-white/30 backdrop-blur text-[7px] font-extrabold tracking-widest uppercase py-1.5 px-3 rounded-full text-white relative z-10">
                            View Work
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </main>
        </div>
      )}

    </div>
  );
}
