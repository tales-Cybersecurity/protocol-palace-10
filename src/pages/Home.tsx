import { Link, useParams } from 'react-router-dom';
import { useTranslation } from '../i18n';
import type { Locale } from '../store/slices/uiSlice';
import { categories } from '../data/protocols';
import { Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const { locale = 'en' } = useParams<{ locale: string }>();
  const loc = locale as Locale;
  const { t } = useTranslation(loc);
  const totalProtocols = categories.reduce((s, c) => s + c.protocols.length, 0);

  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono cyber-border">
          <Shield className="w-4 h-4" />
          <span>NetSec Academy</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-foreground leading-tight">
          {t('home.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('home.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={`/${locale}/protocols`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity cyber-glow"
          >
            {t('home.cta')} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to={`/${locale}/progress`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
          >
            {t('home.ctaProgress')}
          </Link>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
        {[
          { value: totalProtocols, label: t('home.stats.protocols') },
          { value: categories.length, label: t('home.stats.categories') },
          { value: '93', label: t('home.stats.questions') },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="cyber-card p-4 text-center"
          >
            <div className="text-3xl font-mono font-bold text-primary">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { icon: '📖', title: t('home.features.learn'), desc: t('home.features.learnDesc') },
          { icon: '✅', title: t('home.features.quiz'), desc: t('home.features.quizDesc') },
          { icon: '🏆', title: t('home.features.test'), desc: t('home.features.testDesc') },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="cyber-card p-6 space-y-3"
          >
            <span className="text-3xl">{f.icon}</span>
            <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Category preview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">{t('protocols.title')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.05 }}
            >
              <Link
                to={`/${locale}/protocols/${cat.slug}`}
                className="cyber-card p-5 block hover:border-primary/40 transition-colors group"
              >
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="mt-2 font-semibold text-foreground group-hover:text-primary transition-colors">
                  {t(`categories.${cat.slug}.name`)}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {cat.protocols.length} {t('protocols.protocolCount')}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
