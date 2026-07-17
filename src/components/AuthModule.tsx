import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Check, ArrowRight, Sparkles, RefreshCw, CheckCircle2, ChevronRight, Globe, Layers } from 'lucide-react';
import { InputField, PasswordInput, GoogleButton, Divider, AuthFooter, AuthHeader } from './AuthComponents';

type AuthView = 'signup' | 'login' | 'forgot' | 'verify' | 'success' | 'workspace_setup';

interface AuthModuleProps {
  onBackToLanding: () => void;
  onAuthComplete: (email: string) => void;
  initialView?: AuthView;
}

export default function AuthModule({ onBackToLanding, onAuthComplete, initialView = 'signup' }: AuthModuleProps) {
  const [currentView, setCurrentView] = useState<AuthView>(initialView);
  
  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  // Custom workspace creation state
  const [workspaceName, setWorkspaceName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [primaryUse, setPrimaryUse] = useState('portfolio');

  // Success indicators / toast triggers
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      showNotification('Please agree to the Terms & Privacy Policy to continue.');
      return;
    }
    if (password !== confirmPassword) {
      showNotification('Passwords do not match.');
      return;
    }
    if (!fullName || !email || !password) {
      showNotification('Please fill in all fields.');
      return;
    }
    // Transition to email verification
    setCurrentView('verify');
  };

  const handleLogIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showNotification('Please enter both email and password.');
      return;
    }
    // Transition directly to onboarding welcome
    onAuthComplete(email);
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showNotification('Please enter your email address.');
      return;
    }
    showNotification(`A password reset link was sent to ${email}`);
    setTimeout(() => {
      setCurrentView('login');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-teal-200 selection:text-slate-900">
      
      {/* Dynamic Toast Notification Banner */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-sm px-5 py-3 rounded-xl shadow-lg flex items-center gap-2.5 font-medium border border-slate-800"
          >
            <div className="h-2 w-2 rounded-full bg-[#9cd3c3] animate-pulse" />
            <span>{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-grow flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Consistent Top Brand Navigation */}
        <AuthHeader onBack={onBackToLanding} />

        <div className="flex-grow flex flex-col justify-center py-4 sm:py-8">
          <AnimatePresence mode="wait">
            
            {/* Split Screen Views: Sign Up and Log In */}
            {(currentView === 'signup' || currentView === 'login') && (
              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch min-h-[550px]"
              >
                {/* Left Side: Premium Hero Value Proposition */}
                <div className="lg:col-span-5 hidden lg:flex flex-col justify-between relative rounded-3xl overflow-hidden p-8 text-white">
                  <div className="absolute inset-0 z-0">
                    <img
                      src="https://res.cloudinary.com/dtkluxukm/image/upload/v1784208105/pawel-czerwinski-nEEEkEEIltA-unsplash_hampzj.jpg"
                      alt="Premium Abstract waves background"
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/80 to-transparent" />
                  </div>

                  {/* Top corner label */}
                  <div className="relative z-10 flex items-center gap-2 text-[#9cd3c3]">
                    <Sparkles className="h-4.5 w-4.5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Custom Platform v1.0</span>
                  </div>

                  {/* High fidelity proposition text */}
                  <div className="relative z-10 mt-auto flex flex-col gap-4">
                    <h2 className="text-3xl xl:text-4xl font-extrabold tracking-tight font-display leading-tight">
                      Build a Better <br />Digital Presence.
                    </h2>
                    <p className="text-sm text-slate-200/90 leading-relaxed max-w-sm">
                      Create professional websites, tell your story, and launch your brand—all without writing code.
                    </p>
                  </div>
                </div>

                {/* Right Side: Authentication Card */}
                <div className="lg:col-span-7 flex flex-col justify-center items-center">
                  <div className="w-full max-w-md bg-white p-2 sm:p-6 flex flex-col gap-6">
                    
                    {/* Header titles */}
                    <div className="flex flex-col gap-1.5 text-left w-full">
                      <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
                        {currentView === 'signup' ? 'Create your account' : 'Welcome Back'}
                      </h1>
                      <p className="text-sm text-slate-500 font-medium">
                        {currentView === 'signup' 
                          ? 'Start building your online presence today.' 
                          : 'Sign in to continue building your digital presence.'}
                      </p>
                    </div>

                    {/* Google OAuth Option (Primary CTA) */}
                    <GoogleButton onClick={() => onAuthComplete(email || 'googleuser@example.com')}>
                      {currentView === 'signup' ? 'Continue with Google' : 'Continue with Google'}
                    </GoogleButton>

                    <Divider />

                    {/* Authentication Form */}
                    {currentView === 'signup' ? (
                      <form id="signup-form" onSubmit={handleSignUp} className="flex flex-col gap-4 w-full">
                        <InputField
                          id="signup-name"
                          label="Full Name"
                          type="text"
                          placeholder="Jane Doe"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                        />
                        <InputField
                          id="signup-email"
                          label="Email Address"
                          type="email"
                          placeholder="jane@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <PasswordInput
                          id="signup-password"
                          label="Password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <PasswordInput
                          id="signup-confirm-password"
                          label="Confirm Password"
                          placeholder="••••••••"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />

                        {/* Terms checkbox */}
                        <label className="flex items-start gap-3 mt-1.5 cursor-pointer select-none">
                          <input
                            id="signup-terms-checkbox"
                            type="checkbox"
                            checked={agreeTerms}
                            onChange={(e) => setAgreeTerms(e.target.checked)}
                            className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 accent-teal-600"
                          />
                          <span className="text-xs text-slate-500 leading-normal font-medium">
                            I agree to the{' '}
                            <a href="#terms" className="text-slate-800 hover:text-teal-600 underline font-semibold transition-colors">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#privacy" className="text-slate-800 hover:text-teal-600 underline font-semibold transition-colors">
                              Privacy Policy
                            </a>.
                          </span>
                        </label>

                        {/* Primary Submit Button */}
                        <button
                          id="signup-submit-btn"
                          type="submit"
                          className="mt-2 w-full py-3.5 px-4 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 transition-all active:scale-[0.99] flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          Create Account
                        </button>
                      </form>
                    ) : (
                      <form id="login-form" onSubmit={handleLogIn} className="flex flex-col gap-4.5 w-full">
                        <InputField
                          id="login-email"
                          label="Email Address"
                          type="email"
                          placeholder="jane@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <div className="flex flex-col gap-1.5 w-full">
                          <div className="flex justify-between items-center">
                            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                              Password
                            </label>
                            <button
                              id="forgot-password-link"
                              type="button"
                              onClick={() => setCurrentView('forgot')}
                              className="text-xs font-semibold text-teal-600 hover:text-teal-700 hover:underline transition-all"
                            >
                              Forgot Password?
                            </button>
                          </div>
                          <PasswordInput
                            id="login-password"
                            label=""
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>

                        {/* Remember me checkbox */}
                        <label className="flex items-center gap-3 mt-1.5 cursor-pointer select-none">
                          <input
                            id="login-remember-checkbox"
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 accent-teal-600"
                          />
                          <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                            Remember Me
                          </span>
                        </label>

                        {/* Primary Submit Button */}
                        <button
                          id="login-submit-btn"
                          type="submit"
                          className="mt-2 w-full py-3.5 px-4 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 transition-all active:scale-[0.99] flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          Log In
                        </button>
                      </form>
                    )}

                    {/* Bottom switcher link */}
                    <div className="text-center mt-3 text-xs sm:text-sm text-slate-500 font-medium">
                      {currentView === 'signup' ? (
                        <>
                          Already have an account?{' '}
                          <button
                            id="switch-to-login-btn"
                            onClick={() => setCurrentView('login')}
                            className="text-slate-900 hover:text-teal-600 font-bold hover:underline transition-colors ml-1"
                          >
                            Log In
                          </button>
                        </>
                      ) : (
                        <>
                          Don't have an account?{' '}
                          <button
                            id="switch-to-signup-btn"
                            onClick={() => setCurrentView('signup')}
                            className="text-slate-900 hover:text-teal-600 font-bold hover:underline transition-colors ml-1"
                          >
                            Create one
                          </button>
                        </>
                      )}
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* Screen 3 — Forgot Password */}
            {currentView === 'forgot' && (
              <motion.div
                key="forgot"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="max-w-md mx-auto w-full bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight font-display">
                    Forgot your password?
                  </h1>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Enter your email address and we'll send you instructions to reset your password.
                  </p>
                </div>

                <form id="forgot-form" onSubmit={handleForgot} className="flex flex-col gap-5">
                  <InputField
                    id="forgot-email"
                    label="Email Address"
                    type="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <button
                    id="forgot-submit-btn"
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 transition-all active:scale-[0.99] flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    Send Reset Link
                  </button>
                </form>

                <button
                  id="forgot-back-to-login-btn"
                  onClick={() => setCurrentView('login')}
                  className="text-xs font-bold text-slate-500 hover:text-slate-900 text-center uppercase tracking-wider transition-colors py-1.5"
                >
                  Back to Login
                </button>
              </motion.div>
            )}

            {/* Screen 4 — Email Verification */}
            {currentView === 'verify' && (
              <motion.div
                key="verify"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="max-w-md mx-auto w-full bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 flex flex-col gap-7 items-center text-center"
              >
                {/* Large checkmark illustration */}
                <div className="h-16 w-16 rounded-full bg-[#9cd3c3]/20 flex items-center justify-center text-teal-800 animate-bounce">
                  <Mail className="h-7 w-7 stroke-[2.5]" />
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight font-display">
                    Check your inbox
                  </h1>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    We've sent a verification email to your address. Click the link inside to activate your workspace.
                  </p>
                </div>

                <button
                  id="open-email-app-btn"
                  onClick={() => {
                    showNotification('Redirecting to your default email client...');
                    setTimeout(() => setCurrentView('success'), 1500);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 transition-all active:scale-[0.99] flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Open Email App
                </button>

                <div className="flex flex-col gap-1 items-center">
                  <span className="text-xs text-slate-400">Didn't receive the email?</span>
                  <button
                    id="resend-verification-btn"
                    onClick={() => showNotification('A new verification email has been dispatched.')}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline uppercase tracking-wider transition-all"
                  >
                    Resend Email
                  </button>
                </div>
              </motion.div>
            )}

            {/* Screen 5 — Success Screen */}
            {currentView === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-md mx-auto w-full bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 flex flex-col gap-8 items-center text-center"
              >
                {/* Visual success splash */}
                <div className="h-20 w-20 rounded-full bg-emerald-50 flex items-center justify-center relative">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                  <span className="absolute -top-1.5 -right-1.5 text-2xl animate-pulse">🎉</span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
                    Welcome to Custom
                  </h1>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Your account has been verified successfully. Let's configure your branding workspace.
                  </p>
                </div>

                <button
                  id="success-continue-btn"
                  onClick={() => onAuthComplete(email || 'user@example.com')}
                  className="w-full py-4 px-4 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 transition-all active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm"
                >
                  Continue to Workspace Setup
                  <ChevronRight className="h-4 w-4" />
                </button>
              </motion.div>
            )}

            {/* Premium Extra: Workspace Setup Screen (Future-Proofing!) */}
            {currentView === 'workspace_setup' && (
              <motion.div
                key="workspace_setup"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-xl mx-auto w-full bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 flex flex-col gap-8"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-teal-600 mb-1">
                    <Layers className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Step 1 of 2 — Workspace</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
                    Initialize Workspace
                  </h1>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    This will act as your premium white-label headquarters where you manage sites and domains.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <InputField
                    id="setup-workspace-name"
                    label="Workspace / Brand Name"
                    type="text"
                    placeholder="My Luxury Agency"
                    value={workspaceName}
                    onChange={(e) => {
                      setWorkspaceName(e.target.value);
                      // Auto-slugify for subdomain preview
                      setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''));
                    }}
                    required
                  />

                  <div className="flex flex-col gap-1.5 w-full">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Desired custom subdomain
                    </label>
                    <div className="relative w-full flex items-center">
                      <input
                        id="setup-workspace-subdomain"
                        type="text"
                        placeholder="brandname"
                        value={subdomain}
                        onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''))}
                        className="w-full pl-4 pr-32 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#6daead]/50 focus:border-[#6daead] transition-all bg-slate-50/50 hover:bg-slate-50 focus:bg-white"
                        required
                      />
                      <span className="absolute right-3 text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                        .broadbrand.net
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Primary Use Case
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'portfolio', label: 'Portfolio', desc: 'Creators' },
                        { id: 'agency', label: 'Agency', desc: 'White-label' },
                        { id: 'business', label: 'Business', desc: 'Standard' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPrimaryUse(item.id)}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                            primaryUse === item.id
                              ? 'border-[#6daead] bg-[#9cd3c3]/15 text-slate-900 font-bold'
                              : 'border-slate-100 hover:border-slate-300 bg-slate-50/50 text-slate-600'
                          }`}
                        >
                          <span className="text-xs font-bold">{item.label}</span>
                          <span className="text-[10px] text-slate-400 font-medium">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    id="setup-workspace-submit"
                    onClick={() => {
                      showNotification('Workspace successfully deployed! Directing you back to homepage...');
                      setTimeout(() => {
                        onBackToLanding();
                      }, 2500);
                    }}
                    className="mt-2 w-full py-4 px-4 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 transition-all active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm"
                  >
                    Launch Workspace
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Minimalized Authentication footer */}
        <AuthFooter onNavigate={(view) => setCurrentView(view as AuthView)} />
      </div>
    </div>
  );
}
