/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import AuthModule from './components/AuthModule';
import OnboardingModule from './components/OnboardingModule';

export default function App() {
  const [activeView, setActiveView] = useState<'landing' | 'auth' | 'onboarding'>('landing');
  const [authSubView, setAuthSubView] = useState<'signup' | 'login'>('signup');
  const [userEmail, setUserEmail] = useState('');

  const triggerAuth = (view: 'signup' | 'login') => {
    setAuthSubView(view);
    setActiveView('auth');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAuthComplete = (email: string) => {
    setUserEmail(email);
    setActiveView('onboarding');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activeView === 'onboarding') {
    return (
      <OnboardingModule
        userEmail={userEmail}
        onBackToLanding={() => setActiveView('landing')}
      />
    );
  }

  if (activeView === 'auth') {
    return (
      <AuthModule
        initialView={authSubView}
        onBackToLanding={() => setActiveView('landing')}
        onAuthComplete={handleAuthComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-teal-200 selection:text-slate-900">
      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero & Brand Section */}
        <Hero 
          onStartBuilding={() => triggerAuth('signup')}
          onBrowseTemplates={() => triggerAuth('login')}
        />

        {/* Core Feature Showcase (Stacked Terms) */}
        <Features />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
