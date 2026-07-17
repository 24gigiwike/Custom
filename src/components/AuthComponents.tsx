import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

export interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function InputField({ label, id, type = 'text', placeholder, value, onChange, required }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={id} className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#6daead]/50 focus:border-[#6daead] transition-all bg-slate-50/50 hover:bg-slate-50 focus:bg-white"
      />
    </div>
  );
}

export function PasswordInput({ label, id, placeholder, value, onChange, required }: Omit<InputFieldProps, 'type'>) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1.5 w-full relative">
      {label && (
        <label htmlFor={id} className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={id}
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-3 pr-11 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#6daead]/50 focus:border-[#6daead] transition-all bg-slate-50/50 hover:bg-slate-50 focus:bg-white"
        />
        <button
          id={`${id}-toggle-btn`}
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

export function GoogleButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      id="google-auth-btn"
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100/80 transition-all hover:border-slate-300 active:scale-[0.99]"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1, 0, 0, 1, 0, 0)">
          <path
            d="M21.35,11.1H12v2.7h5.38C17,15.17,15.14,16.5,12,16.5c-3.1,0-5.63-2.53-5.63-5.63S8.9,5.24,12,5.24c1.35,0,2.5.47,3.46,1.4l2.58-2.58C16.48,2.6,14.39,1.5,12,1.5,6.75,1.5,2.5,5.75,2.5,11S6.75,20.5,12,20.5c5,0,9.5-3.6,9.5-9.5C21.5,10.4,21.43,9.75,21.35,11.1Z"
            fill="#4285F4"
          />
          <path
            d="M3.4,6.75l2.76,2.07c.72-2,2.6-3.48,4.84-3.48c1.35,0,2.5.47,3.46,1.4l2.58-2.58C15.48,2.6,13.39,1.5,11,1.5,7.7,1.5,4.8,3.65,3.4,6.75Z"
            fill="#EA4335"
          />
          <path
            d="M12,20.5c2.4,0,4.5-1.1,6-2.65l-2.66-2.12c-.93.63-2.12,1.02-3.34,1.02c-2.24,0-4.12-1.48-4.84-3.48L4.4,15.34C5.8,18.35,8.7,20.5,12,20.5Z"
            fill="#34A853"
          />
          <path
            d="M21.35,11.1H12v2.7h5.38C17,15.17,15.14,16.5,12,16.5c-1.22,0-2.41-.39-3.34-1.02L6.1,17.85c1.5,1.55,3.6,2.65,6,2.65c5,0,9.5-3.6,9.5-9.5C21.5,10.4,21.43,9.75,21.35,11.1Z"
            fill="#FBBC05"
          />
        </g>
      </svg>
      {children}
    </button>
  );
}

export function Divider() {
  return (
    <div className="relative my-6 w-full flex items-center justify-center">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-200"></div>
      </div>
      <span className="relative px-4 text-[10px] font-bold text-slate-400 bg-white tracking-widest uppercase">
        OR
      </span>
    </div>
  );
}

export function AuthFooter({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <footer className="mt-auto py-8 w-full border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-slate-500 order-2 sm:order-1">
        © 2026 Custom by BroadBrand. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 order-1 sm:order-2">
        <a href="#privacy" className="text-xs text-slate-600 hover:text-teal-600 transition-colors">
          Privacy Policy
        </a>
        <a href="#terms" className="text-xs text-slate-600 hover:text-teal-600 transition-colors">
          Terms
        </a>
        <a href="#help" className="text-xs text-slate-600 hover:text-teal-600 transition-colors">
          Help Center
        </a>
        <a href="#contact" className="text-xs text-slate-600 hover:text-teal-600 transition-colors">
          Contact
        </a>
      </div>
    </footer>
  );
}

export function AuthHeader({ onBack }: { onBack: () => void }) {
  return (
    <header className="py-6 flex items-center justify-between w-full mb-4 sm:mb-8">
      <img
        id="auth-brand-logo"
        src="https://res.cloudinary.com/dtkluxukm/image/upload/v1784208065/custom-transparent_fanqbk.png"
        alt="Custom by BroadBrand"
        className="h-7 w-auto object-contain select-none cursor-pointer"
        onClick={onBack}
        referrerPolicy="no-referrer"
      />
      <button
        id="auth-back-to-home-btn"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-wider"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Home
      </button>
    </header>
  );
}
