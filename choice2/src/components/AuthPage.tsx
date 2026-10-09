import React, { useState } from 'react';
import { Chrome, Github, LockKeyhole, Mail, UserRound } from 'lucide-react';

interface AuthPageProps {
  mode: 'signin' | 'signup';
}

export const AuthPage: React.FC<AuthPageProps> = ({ mode }) => {
  const [message, setMessage] = useState('');
  const isSignup = mode === 'signup';

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
    <main className="grid h-dvh w-full grid-cols-1 overflow-hidden bg-white text-[#111111] lg:grid-cols-2">
      <aside className="hidden h-dvh items-center justify-center border-r border-neutral-200 bg-white px-8 lg:flex">
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
          <a href="/" aria-label="Parsim home" className="font-['Poppins',sans-serif] text-7xl font-extrabold leading-[0.8] tracking-[-0.07em] text-[#101010]">
            parsim<span className="text-[#ff3b00]">.</span>
          </a>
          <p className="mt-9 text-center text-sm font-semibold tracking-[0.16em] text-neutral-500">
            FEWER TOKENS. CHEAPER INFERENCE.
          </p>
          <p className="mt-3 max-w-sm text-center text-[13px] leading-relaxed text-neutral-500">
            Give advanced AI more room to reason. Parsim makes long-context inference more efficient, so models can think further while using fewer tokens.
          </p>
        </div>
      </aside>

      <section className="flex h-dvh min-h-0 items-center justify-center overflow-hidden bg-white px-4 py-3 sm:px-8 lg:px-10">
        <div className="w-full max-w-[440px] rounded-[28px] border border-neutral-200 bg-white px-6 py-5 shadow-[0_16px_50px_rgba(17,17,17,0.07)] sm:px-7 sm:py-6">
        <header className="mb-5 text-center sm:mb-6">
          <h1 className="text-[30px] font-bold leading-tight text-[#171717] sm:text-[32px]">
            {isSignup ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="mt-2 text-xs font-semibold text-neutral-500 sm:text-[13px]">
            {isSignup ? 'Create your Parsim workspace.' : 'Sign in to continue to your workspace.'}
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-3">
          {isSignup && (
            <label className="block space-y-1.5 text-[11px] font-medium text-neutral-600">
              Name
              <span className="relative block">
                <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#777777]" aria-hidden="true" />
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Full name"
                  className="h-12 w-full rounded-[13px] border border-neutral-300 bg-neutral-50 pl-10 pr-4 text-[13px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#ff3b00]"
                />
              </span>
            </label>
          )}
          <label className="block space-y-1.5 text-[11px] font-medium text-neutral-600">
            Email
            <span className="relative block">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#777777]" aria-hidden="true" />
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Email Address"
                className="h-12 w-full rounded-[13px] border border-neutral-300 bg-neutral-50 pl-10 pr-4 text-[13px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#ff3b00]"
              />
            </span>
          </label>
          <label className="block space-y-1.5 text-[11px] font-medium text-neutral-600">
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
                className="h-12 w-full rounded-[13px] border border-neutral-300 bg-neutral-50 pl-10 pr-4 text-[13px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#ff3b00]"
              />
            </span>
          </label>
          <button
            type="submit"
            className="flex h-[50px] w-full items-center justify-center rounded-[13px] bg-[#ff3b00] text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#f0440c]"
          >
            {isSignup ? 'Create Account' : 'Sign In'}
          </button>
          <p role="status" aria-live="polite" className="min-h-0 text-center text-[11px] leading-4 text-neutral-500">{message}</p>
        </form>

        <div className="my-4 flex items-center gap-3" aria-hidden="true">
          <span className="h-px flex-1 bg-neutral-200" />
          <span className="bg-white px-1 text-[10px] font-bold uppercase tracking-wide text-neutral-500">Or continue with</span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleProviderSignIn('Google')}
            className="flex h-[50px] items-center justify-center gap-2 rounded-[13px] border border-neutral-300 bg-white text-[11px] font-bold uppercase tracking-[0.1em] text-[#111111] transition-colors hover:bg-neutral-50"
          >
            <Chrome className="h-4 w-4" aria-hidden="true" />
            Google
          </button>
          <button
            type="button"
            onClick={() => handleProviderSignIn('GitHub')}
            className="flex h-[50px] items-center justify-center gap-2 rounded-[13px] border border-neutral-300 bg-white text-[11px] font-bold uppercase tracking-[0.1em] text-[#111111] transition-colors hover:bg-neutral-50"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </button>
        </div>

        <p className="mt-5 border-t border-neutral-200 pt-4 text-center text-[11px] font-medium text-neutral-500">
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