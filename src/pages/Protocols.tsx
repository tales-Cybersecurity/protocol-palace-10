import { Link, useParams } from 'react-router-dom';
import { useTranslation } from '../i18n';
import type { Locale } from '../store/slices/uiSlice';
import { categories } from '../data/protocols';
import { useAppSelector } from '../store/hooks';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Protocols() {
  const { locale = 'en' } = useParams<{ locale: string }>();
  const loc = locale as Locale;
  const { t } = useTranslation(loc);
  const completed = useAppSelector(s => s.quiz.completedLessons);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">{t('protocols.title')}</h1>
        <p className="text-muted-foreground">{t('protocols.subtitle')}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((cat, i) => {
          const done = cat.protocols.filter(p => completed.includes(p.slug)).length;
          return (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/${locale}/protocols/${cat.slug}`}
                className="cyber-card p-6 block group hover:border-primary/40 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-3xl">{cat.icon}</span>
                    <h2 className="mt-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {t(`categories.${cat.slug}.name`)}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">{t(`categories.${cat.slug}.description`)}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-2" />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${cat.protocols.length ? (done / cat.protocols.length) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{done}/{cat.protocols.length}</span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
