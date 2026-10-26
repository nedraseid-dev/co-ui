import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Mail, Moon, Sun, UserRound } from 'lucide-react';

interface AuthPageProps {
  mode?: 'signin' | 'signup' | 'waitlist';
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ theme, onToggleTheme }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const isDark = theme === 'dark';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  return (
    <main
      className={`grid h-dvh w-full grid-cols-1 overflow-hidden lg:grid-cols-2 ${
        isDark ? 'bg-[#080808] text-white' : 'bg-[#f4f3f0] text-zinc-950'
      }`}
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Right Brand Column */}
      <aside className="order-2 hidden h-dvh items-center justify-center border-l border-white/20 bg-transparent px-8 lg:flex">
        <div className="flex w-full max-w-xl flex-col items-center text-center">
          <div className="mb-8 flex flex-col items-center gap-3" aria-hidden="true">
            <div className="flex gap-2">
              {Array.from({ length: 4 }, (_, index) => (
                <span key={index} className="h-10 w-10 bg-[#ff3b00]" />
              ))}
            </div>
            <div className="flex gap-2">
              {Array.from({ length: 3 }, (_, index) => (
                <span key={index} className="h-10 w-10 bg-[#ff3b00]" />
              ))}
            </div>
            <div className="flex gap-2">
              {Array.from({ length: 2 }, (_, index) => (
                <span key={index} className="h-10 w-10 bg-[#ff3b00]" />
              ))}
            </div>
          </div>
          <a
            href="/"
            aria-label="Parsim home"
            className="font-['Poppins',sans-serif] text-5xl font-extrabold leading-[0.8] tracking-[-0.07em] text-[#f4f4f5] sm:text-6xl"
          >
            parsim<span className="text-[#ff3b00]">.</span>
          </a>
          <p className="mt-8 text-center text-xs font-bold tracking-[0.2em] text-white/90 sm:text-sm">
            FEWER TOKENS. CHEAPER INFERENCE.
          </p>
          <p className="mt-4 max-w-md text-center text-xs leading-relaxed text-white/85 sm:text-sm">
            Give advanced AI more room to reason. Parsim makes long-context inference more efficient, so models can think further while using fewer tokens.
          </p>
        </div>
      </aside>

      {/* Left Form Column */}
      <section
        className={`order-1 flex h-dvh min-h-0 items-center justify-center overflow-hidden px-6 py-6 sm:px-10 lg:px-16 ${
          isDark ? 'bg-black/65 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md shadow-2xl'
        }`}
      >
        <div className="w-full max-w-md">
          {/* Top Bar Navigation */}
          <div className="mb-6 flex items-center justify-between">
            <a
              href="/"
              className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#ff3b00] ${
                isDark ? 'text-neutral-300' : 'text-zinc-800'
              }`}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </a>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                isDark
                  ? 'border-neutral-700 text-neutral-200 hover:bg-neutral-800'
                  : 'border-zinc-400 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 shadow-sm'
              }`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {!submitted ? (
            <>
              {/* Header */}
              <header className="mb-6 text-center">
                <span className="inline-block rounded-full bg-[#ff3b00]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff3b00] mb-3 border border-[#ff3b00]/30">
                  Early Access
                </span>
                <h1
                  className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${
                    isDark ? 'text-white' : 'text-zinc-950'
                  }`}
                >
                  Join the Waitlist
                </h1>
                <p
                  className={`mt-2 text-xs font-semibold sm:text-sm ${
                    isDark ? 'text-neutral-300' : 'text-zinc-700'
                  }`}
                >
                  Be the first to access next-gen context compaction.
                </p>
              </header>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <label
                  className={`block space-y-1.5 text-xs font-bold ${
                    isDark ? 'text-neutral-200' : 'text-zinc-900'
                  }`}
                >
                  Full Name (Optional)
                  <span className="relative block">
                    <UserRound
                      className={`pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 ${
                        isDark ? 'text-neutral-400' : 'text-zinc-600'
                      }`}
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`h-11 w-full rounded-xl border pl-11 pr-4 text-sm font-medium outline-none transition-all focus:border-[#ff3b00] focus:ring-1 focus:ring-[#ff3b00] ${
                        isDark
                          ? 'border-neutral-700 bg-[#141414] text-white placeholder:text-neutral-500'
                          : 'border-zinc-300 bg-white text-zinc-950 placeholder:text-zinc-400 shadow-sm'
                      }`}
                    />
                  </span>
                </label>

                <label
                  className={`block space-y-1.5 text-xs font-bold ${
                    isDark ? 'text-neutral-200' : 'text-zinc-900'
                  }`}
                >
                  Work / Personal Email
                  <span className="relative block">
                    <Mail
                      className={`pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 ${
                        isDark ? 'text-neutral-400' : 'text-zinc-600'
                      }`}
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`h-11 w-full rounded-xl border pl-11 pr-4 text-sm font-medium outline-none transition-all focus:border-[#ff3b00] focus:ring-1 focus:ring-[#ff3b00] ${
                        isDark
                          ? 'border-neutral-700 bg-[#141414] text-white placeholder:text-neutral-500'
                          : 'border-zinc-300 bg-white text-zinc-950 placeholder:text-zinc-400 shadow-sm'
                      }`}
                    />
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-2 flex h-11 w-full cursor-pointer items-center justify-center rounded-xl bg-[#ff3b00] text-xs font-extrabold uppercase tracking-wider text-white shadow-md shadow-[#ff3b00]/20 transition-all hover:bg-[#e03400] active:scale-[0.99]"
                >
                  Request Early Access
                </button>
              </form>
            </>
          ) : (
            /* Success / Position Confirmed State */
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ff3b00]/15 text-[#ff3b00]">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2
                className={`text-2xl font-extrabold ${
                  isDark ? 'text-white' : 'text-zinc-950'
                }`}
              >
                You're on the list!
              </h2>
              <p
                className={`text-xs leading-relaxed max-w-sm mx-auto font-medium ${
                  isDark ? 'text-neutral-300' : 'text-zinc-700'
                }`}
              >
                We’ve received your request for{' '}
                <span className="font-bold text-[#ff3b00]">{formData.email}</span>. We are onboarding teams in batches and will reach out soon.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className={`mt-4 inline-block text-xs font-bold underline underline-offset-4 hover:text-[#ff3b00] ${
                  isDark ? 'text-neutral-300' : 'text-zinc-800'
                }`}
              >
                Submit another email
              </button>
            </div>
          )}

          {/* Footer note */}
          <p
            className={`mt-6 border-t pt-4 text-center text-[11px] font-semibold tracking-wide ${
              isDark ? 'border-neutral-800 text-neutral-400' : 'border-zinc-300 text-zinc-700'
            }`}
          >
            Prioritizing AI engineering labs & enterprise infra teams.
          </p>
        </div>
      </section>
    </main>
  );
};