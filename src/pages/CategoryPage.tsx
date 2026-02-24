import { Link, useParams } from 'react-router-dom';
import { useTranslation } from '../i18n';
import type { Locale } from '../store/slices/uiSlice';
import { getCategoryBySlug } from '../data/protocols';
import { useAppSelector } from '../store/hooks';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CategoryPage() {
  const { locale = 'en', category = '' } = useParams<{ locale: string; category: string }>();
  const loc = locale as Locale;
  const { t } = useTranslation(loc);
  const cat = getCategoryBySlug(category);
  const completed = useAppSelector(s => s.quiz.completedLessons);
  const results = useAppSelector(s => s.quiz.results);

  if (!cat) return <div className="text-center py-20 text-muted-foreground">Category not found</div>;

  return (
    <div className="space-y-8">
      <Link to={`/${locale}/protocols`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" /> {t('category.backToCategories')}
      </Link>

      <div>
        <span className="text-4xl">{cat.icon}</span>
        <h1 className="text-3xl font-bold text-foreground mt-2">{t(`categories.${cat.slug}.name`)}</h1>
        <p className="text-muted-foreground mt-1">{t(`categories.${cat.slug}.description`)}</p>
      </div>

      <div className="space-y-4">
        {cat.protocols.map((proto, i) => {
          const done = completed.includes(proto.slug);
          const result = results[proto.slug];
          return (
            <motion.div
              key={proto.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/${locale}/protocols/${category}/${proto.slug}`}
                className="cyber-card p-5 flex items-center justify-between group hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  {done ? (
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{proto.name}</h3>
                    {result && (
                      <span className="text-xs font-mono text-muted-foreground">
                        Quiz: {result.score}/{result.total}
                      </span>
                    )}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
