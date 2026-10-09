import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

  return (
    <main className="grid min-h-screen bg-white text-[#111111] lg:grid-cols-2">
      <aside className="flex min-h-[38vh] items-center justify-center border-b border-neutral-200 bg-white px-6 py-12 lg:min-h-screen lg:border-b-0 lg:border-r">
        <a href="/" aria-label="Parsim home" className="flex w-full max-w-xl flex-col items-center text-center">
          <div className="mb-10 flex flex-col items-center gap-[14px]" aria-hidden="true">
            <div className="flex gap-[10px]">
              {Array.from({ length: 4 }, (_, index) => <span key={index} className="h-10 w-10 bg-[#ff3b00]" />)}
            </div>
            <div className="flex gap-[10px]">
              {Array.from({ length: 3 }, (_, index) => <span key={index} className="h-10 w-10 bg-[#ff3b00]" />)}
            </div>
            <div className="flex gap-[10px]">
              {Array.from({ length: 2 }, (_, index) => <span key={index} className="h-10 w-10 bg-[#ff3b00]" />)}
            </div>
          </div>
          <div className="flex items-baseline font-['Poppins',sans-serif] text-[clamp(4.5rem,10vw,8.5rem)] font-extrabold leading-[0.8] tracking-[-0.07em] text-[#101010]">
            <span>parsim</span><span className="text-[#ff3b00]">.</span>
          </div>
          <p className="mt-10 text-center text-xs font-semibold tracking-[0.22em] text-neutral-500 sm:text-base">
            FEWER TOKENS. CHEAPER INFERENCE.
          </p>
        </a>
      </aside>

      <section className="flex min-h-[62vh] items-center justify-center bg-[#fafaf9] px-6 py-14 sm:px-10 lg:min-h-screen lg:px-14">
        <div className="w-full max-w-md">
          <a href="/" className="mb-12 inline-flex items-center gap-2 text-xs font-medium text-neutral-500 transition-colors hover:text-[#ff3b00]">
            <ArrowLeft className="h-4 w-4" />
            Back to Parsim
          </a>

          <div className="mb-8">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#e63708]">
              <span className="h-1.5 w-1.5 bg-[#ff3b00]" />
              Parsim access
            </div>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              {isSignup ? 'Create your account.' : 'Welcome back.'}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              {isSignup ? 'Set up your Parsim workspace.' : 'Sign in to continue to your workspace.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignup && (
              <label className="block space-y-2 text-xs font-medium text-neutral-700">
                Full name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-[#ff3b00]"
                  placeholder="Your full name"
                />
              </label>
            )}
            <label className="block space-y-2 text-xs font-medium text-neutral-700">
              Email address
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-[#ff3b00]"
                placeholder="you@company.com"
              />
            </label>
            <label className="block space-y-2 text-xs font-medium text-neutral-700">
              Password
              <input
                type="password"
                name="password"
                autoComplete={isSignup ? 'new-password' : 'current-password'}
                minLength={8}
                required
                className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-[#ff3b00]"
                placeholder={isSignup ? 'Create a password' : 'Enter your password'}
              />
            </label>
            <button
              type="submit"
              className="group flex w-full items-center justify-between bg-[#ff3b00] px-4 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#ff6a36]"
            >
              {isSignup ? 'Create account' : 'Sign in'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p role="status" aria-live="polite" className="min-h-5 text-xs text-neutral-500">{message}</p>
          </form>

          <p className="mt-5 border-t border-neutral-200 pt-5 text-xs leading-relaxed text-neutral-500">
            {isSignup ? 'Already have an account? ' : "Don't have an account? "}
            <a
              href={isSignup ? '/auth' : '/signup'}
              className="font-semibold text-neutral-800 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-[#e63708]"
            >
              {isSignup ? 'Sign in' : 'Sign up'}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};