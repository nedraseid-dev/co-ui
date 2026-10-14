import React, { useState } from 'react';
import { ArrowLeft, Chrome, Github, LockKeyhole, Mail, Moon, Sun, UserRound } from 'lucide-react';

interface AuthPageProps {
  mode: 'signin' | 'signup';
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ mode, theme, onToggleTheme }) => {
  const [message, setMessage] = useState('');
  const isSignup = mode === 'signup';
  const isDark = theme === 'dark';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(isSignup
      ? 'Account creation is not connected in this preview.'
      : 'Authentication is not connected in this preview.');
  };

  const handleProviderSignIn = (provider: 'Google' | 'GitHub') => {
    setMessage(`${provider} sign-in is not connected in this preview.`);
  };

  return (
    <main
      className={`grid h-dvh w-full grid-cols-1 overflow-hidden lg:grid-cols-2 ${isDark ? 'bg-[#080808] text-white' : 'bg-white text-[#111111]'}`}
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <aside className="order-2 hidden h-dvh items-center justify-center border-l border-white/20 bg-transparent px-8 lg:flex">
        <div className="flex w-full max-w-xl flex-col items-center text-center">
          <div className="mb-8 flex flex-col items-center gap-3" aria-hidden="true">
            <div className="flex gap-2">
              {Array.from({ length: 4 }, (_, index) => <span key={index} className="h-9 w-9 bg-[#ff3b00]" />)}
            </div>
            <div className="flex gap-2">
              {Array.from({ length: 3 }, (_, index) => <span key={index} className="h-9 w-9 bg-[#ff3b00]" />)}
            </div>
            <div className="flex gap-2">
              {Array.from({ length: 2 }, (_, index) => <span key={index} className="h-9 w-9 bg-[#ff3b00]" />)}
            </div>
          </div>
          <a href="/" aria-label="Parsim home" className="font-['Poppins',sans-serif] text-5xl font-extrabold leading-[0.8] tracking-[-0.07em] text-[#f4f4f5] sm:text-6xl">
            parsim<span className="text-[#ff3b00]">.</span>
          </a>
          <p className="mt-8 text-center text-[10px] font-semibold tracking-[0.16em] text-white/80 sm:text-xs">
            FEWER TOKENS. CHEAPER INFERENCE.
          </p>
          <p className="mt-3 max-w-sm text-center text-[11px] leading-relaxed text-white/75 sm:text-xs">
            Give advanced AI more room to reason. Parsim makes long-context inference more efficient, so models can think further while using fewer tokens.
          </p>
        </div>
      </aside>

      <section className={`order-1 flex h-dvh min-h-0 items-center justify-center overflow-hidden px-4 py-3 sm:px-8 lg:px-14 ${isDark ? 'bg-black/55 backdrop-blur-sm' : 'bg-white/70 backdrop-blur-sm'}`}>
        <div className="w-full max-w-sm">
        <div className="mb-3 flex items-center justify-between">
          <a href="/" className={`inline-flex items-center gap-1.5 text-[11px] font-medium transition-colors hover:text-[#ff3b00] ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to Home
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className={`flex h-8 w-8 items-center justify-center border transition-colors ${isDark ? 'border-neutral-700 text-neutral-300 hover:bg-neutral-800' : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100'}`}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
        <header className="mb-4 text-center">
          <h1 className={`text-[22px] font-bold leading-tight sm:text-2xl ${isDark ? 'text-white' : 'text-[#171717]'}`}>
            {isSignup ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className={`mt-1.5 text-[10px] font-semibold sm:text-[11px] ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {isSignup ? 'Create your Parsim workspace.' : 'Sign in to continue to your workspace.'}
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-2">
          {isSignup && (
            <label className={`block space-y-1 text-[9px] font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Name
              <span className="relative block">
                <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#777777]" aria-hidden="true" />
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Full name"
                  className={`h-10 w-full rounded-[11px] border pl-10 pr-4 text-[11px] outline-none placeholder:text-neutral-500 focus:border-[#ff3b00] ${isDark ? 'border-neutral-700 bg-[#171717] text-white' : 'border-neutral-300 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400'}`}
                />
              </span>
            </label>
          )}
          <label className={`block space-y-1 text-[9px] font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Email
            <span className="relative block">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#777777]" aria-hidden="true" />
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Email Address"
                className={`h-10 w-full rounded-[11px] border pl-10 pr-4 text-[11px] outline-none placeholder:text-neutral-500 focus:border-[#ff3b00] ${isDark ? 'border-neutral-700 bg-[#171717] text-white' : 'border-neutral-300 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400'}`}
              />
            </span>
          </label>
          <label className={`block space-y-1 text-[9px] font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Password
            <span className="relative block">
              <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#777777]" aria-hidden="true" />
              <input
                type="password"
                name="password"
                autoComplete={isSignup ? 'new-password' : 'current-password'}
                minLength={8}
                required
                placeholder="Password"
                className={`h-10 w-full rounded-[11px] border pl-10 pr-4 text-[11px] outline-none placeholder:text-neutral-500 focus:border-[#ff3b00] ${isDark ? 'border-neutral-700 bg-[#171717] text-white' : 'border-neutral-300 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400'}`}
              />
            </span>
          </label>
          <button
            type="submit"
            className="flex h-10 w-full items-center justify-center rounded-[11px] bg-[#ff3b00] text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#f0440c]"
          >
            {isSignup ? 'Create Account' : 'Sign In'}
          </button>
          <p role="status" aria-live="polite" className={`min-h-0 text-center text-[10px] leading-4 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{message}</p>
        </form>

        <div className="my-3 flex items-center gap-3" aria-hidden="true">
          <span className={`h-px flex-1 ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
          <span className={`px-1 text-[9px] font-bold uppercase tracking-wide ${isDark ? 'bg-[#080808] text-neutral-400' : 'bg-white text-neutral-500'}`}>Or continue with</span>
          <span className={`h-px flex-1 ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleProviderSignIn('Google')}
            className={`flex h-10 items-center justify-center gap-2 rounded-[11px] border text-[9px] font-bold uppercase tracking-[0.1em] transition-colors ${isDark ? 'border-neutral-700 bg-[#171717] text-white hover:bg-[#222222]' : 'border-neutral-300 bg-white text-[#111111] hover:bg-neutral-50'}`}
          >
            <Chrome className="h-4 w-4" aria-hidden="true" />
            Google
          </button>
          <button
            type="button"
            onClick={() => handleProviderSignIn('GitHub')}
            className={`flex h-10 items-center justify-center gap-2 rounded-[11px] border text-[9px] font-bold uppercase tracking-[0.1em] transition-colors ${isDark ? 'border-neutral-700 bg-[#171717] text-white hover:bg-[#222222]' : 'border-neutral-300 bg-white text-[#111111] hover:bg-neutral-50'}`}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </button>
        </div>

        <p className={`mt-4 border-t pt-3 text-center text-[9px] font-medium ${isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'}`}>
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <a href={isSignup ? '/auth' : '/signup'} className="font-bold text-[#ff4b0b] hover:text-[#ff6938]">
            {isSignup ? 'Sign In' : 'Sign Up'}
          </a>
        </p>
        </div>
      </section>
    </main>
  );
};