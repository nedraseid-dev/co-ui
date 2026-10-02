import React, { useState } from 'react';
import './Footer.css';

interface FooterProps {
  onOpenContact?: () => void;
  onNavigateSection?: (id: string) => void;
  onOpenTemplatePage?: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-media" aria-hidden="true">
        <video 
          className="footer-bg" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto" 
          poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/4f690bd1-881a-4192-82f2-d714d34c8fb9.png"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260901_122529_931c22c8-8d2d-47c0-ad51-b97f56a91e42.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="brand">
            <div className="brand-lockup">
              <svg 
                className="brand-mark" 
                viewBox="0 0 96 120" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                aria-hidden="true"
              >
                <ellipse cx="48" cy="60" rx="45" ry="57"/>
                <path d="M48 88V46" strokeLinecap="round"/>
                <path d="M48 58c-8-2-14-8-16-16 9 0 15 5 16 16Zm0 0c8-2 14-8 16-16-9 0-15 5-16 16Z"/>
                <path d="M48 74c-9-2-15-8-17-17 10 0 16 6 17 17Zm0 0c9-2 15-8 17-17-10 0-16 6-17 17Z"/>
                <path d="M48 46c-6-3-9-9-8-16 6 3 9 9 8 16Zm0 0c6-3 9-9 8-16-6 3-9 9-8 16Z"/>
                <path d="M30 44c-5 1-9-1-12-5 5-2 9-1 12 5Zm36 0c5 1 9-1 12-5-5-2-9-1-12 5Z"/>
              </svg>
              <span className="brand-name">Heritage Grove</span>
            </div>
            
            <p className="brand-blurb">
              Crafting digital experiences that connect, delight, and leave a lasting imprint
            </p>

            <ul className="contact-list">
              <li>
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:care@heritage.com">care@heritage.com</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href="tel:+910000000000">+91 00000 00000</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>India</span>
              </li>
            </ul>
          </div>

          {/* Column 1: Shop */}
          <nav className="col" aria-label="Shop">
            <h2 className="col-title">Shop</h2>
            <ul className="link-list">
              <li><a href="#shop">Full Collection</a></li>
              <li><a href="#vases">Vases</a></li>
              <li><a href="#tableware">Tableware</a></li>
              <li><a href="#decor">Decor</a></li>
              <li><a href="#limited">Limited Releases</a></li>
              <li><a href="#gifts">Gift Sets</a></li>
            </ul>
          </nav>

          {/* Column 2: Heritage */}
          <nav className="col" aria-label="Heritage">
            <h2 className="col-title">Heritage</h2>
            <ul className="link-list">
              <li><a href="#roots">Our Roots</a></li>
              <li><a href="#craftwork">Our Craftwork</a></li>
              <li><a href="#responsibility">Responsibility</a></li>
              <li><a href="#join">Join Us</a></li>
              <li><a href="#media">Media Enquiry</a></li>
            </ul>
          </nav>

          {/* Column 3: Care & Service */}
          <nav className="col" aria-label="Care and service">
            <h2 className="col-title">Care &amp; Service</h2>
            <ul className="link-list">
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#shipping">Shipping &amp; Dispatch</a></li>
              <li><a href="#order">Where&rsquo;s My Order</a></li>
              <li><a href="#talk">Talk To Us</a></li>
            </ul>
          </nav>

          {/* Column 4: The Letter */}
          <div className="newsletter">
            <h2 className="col-title">The Letter</h2>
            <p>Sign up for early notice on new arrivals, stories &amp; members-only offers.</p>
            <form className="subscribe" onSubmit={handleSubscribe}>
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input 
                id="nl-email" 
                type="email" 
                name="email" 
                placeholder="Leave your email" 
                autoComplete="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" aria-label="Subscribe">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12h15M13 6l6 6-6 6"/>
                </svg>
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs font-medium text-[#D4A359] animate-fadeIn" style={{ margin: '0.5rem 0 0 0' }}>
                Thank you for subscribing to The Letter.
              </p>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="socials">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.63 13.77 5.63c1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 3H13.1v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <nav className="legal" aria-label="Legal">
            <a href="#privacy">Privacy Notice</a>
            <a href="#terms">Terms &amp; Policies</a>
            <a href="#cookies">Cookie Notice</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
