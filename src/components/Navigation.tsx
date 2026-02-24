import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation, localeNames, locales } from '../i18n';
import type { Locale } from '../store/slices/uiSlice';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Navigation() {
  const { locale = 'en' } = useParams<{ locale: string }>();
  const loc = locale as Locale;
  const { t } = useTranslation(loc);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const switchLocale = (newLocale: Locale) => {
    const path = location.pathname.replace(`/${locale}`, `/${newLocale}`);
    navigate(path);
    setLangOpen(false);
  };

  const navLinks = [
    { to: `/${locale}`, label: t('nav.home') },
    { to: `/${locale}/protocols`, label: t('nav.protocols') },
    { to: `/${locale}/final-test`, label: t('nav.finalTest') },
    { to: `/${locale}/progress`, label: t('nav.progress') },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to={`/${locale}`} className="flex items-center gap-2 text-primary font-mono font-bold text-lg">
          <span className="cyber-glow-text">⟨/⟩</span>
          <span className="hidden sm:inline">NetSec Academy</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{localeNames[loc]}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-40 rounded-lg border border-border bg-card shadow-xl py-1 z-50">
                {locales.map(l => (
                  <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      l === loc ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {localeNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === link.to
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
