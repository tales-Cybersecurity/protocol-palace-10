import { useParams } from 'react-router-dom';
import { useTranslation } from '../i18n';
import type { Locale } from '../store/slices/uiSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { resetAllProgress } from '../store/slices/quizSlice';
import { clearTestHistory } from '../store/slices/finalTestSlice';
import { allProtocols } from '../data/protocols';
import { useState } from 'react';
import { Trash2, Trophy, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Progress() {
  const { locale = 'en' } = useParams<{ locale: string }>();
  const loc = locale as Locale;
  const { t } = useTranslation(loc);
  const dispatch = useAppDispatch();
  const { results, completedLessons } = useAppSelector(s => s.quiz);
  const { attempts } = useAppSelector(s => s.finalTest);
  const [confirmReset, setConfirmReset] = useState(false);

  const scores = Object.values(results);
  const avgScore = scores.length ? Math.round(scores.reduce((s, r) => s + (r.score / r.total) * 100, 0) / scores.length) : 0;

  const handleReset = () => {
    if (confirmReset) {
      dispatch(resetAllProgress());
      dispatch(clearTestHistory());
      setConfirmReset(false);
    } else {
      setConfirmReset(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">{t('progress.title')}</h1>
        <p className="text-muted-foreground">{t('progress.subtitle')}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: <BookOpen className="w-5 h-5" />, value: completedLessons.length, label: t('progress.completedLessons'), sub: `/ ${allProtocols.length}` },
          { icon: <Target className="w-5 h-5" />, value: `${avgScore}%`, label: t('progress.averageScore'), sub: '' },
          { icon: <Trophy className="w-5 h-5" />, value: attempts.length, label: t('progress.finalTestHistory'), sub: '' },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="cyber-card p-4 text-center">
            <div className="text-primary mx-auto w-fit">{s.icon}</div>
            <div className="text-2xl font-mono font-bold text-foreground mt-2">{s.value}<span className="text-sm text-muted-foreground">{s.sub}</span></div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {scores.length === 0 ? (
        <div className="cyber-card p-8 text-center text-muted-foreground">{t('progress.noProgress')}</div>
      ) : (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{t('progress.quizResults')}</h2>
          <div className="space-y-2">
            {scores.map((r, i) => (
              <motion.div key={r.protocolSlug} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }} className="cyber-card p-4 flex items-center justify-between">
                <span className="font-medium text-foreground">{r.protocolSlug.toUpperCase()}</span>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${(r.score / r.total) * 100}%` }} />
                  </div>
                  <span className="font-mono text-sm text-primary w-12 text-right">{r.score}/{r.total}</span>
                  <span className="text-xs text-muted-foreground w-20 text-right">{new Date(r.completedAt).toLocaleDateString()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Final test history */}
      {attempts.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{t('progress.finalTestHistory')}</h2>
          {attempts.map((a, i) => (
            <div key={i} className="cyber-card p-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{t('progress.attempt')} {i + 1}</span>
              <span className="font-mono text-primary">{a.score}/{a.total}</span>
              <span className="text-xs text-muted-foreground">{new Date(a.completedAt).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      )}

      {/* Reset */}
      <div className="text-center pt-4">
        <button
          onClick={handleReset}
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            confirmReset ? 'bg-destructive text-destructive-foreground' : 'border border-border text-muted-foreground hover:text-destructive hover:border-destructive'
          }`}
        >
          <Trash2 className="w-4 h-4" />
          {confirmReset ? t('progress.resetConfirm') : t('progress.reset')}
        </button>
      </div>
    </div>
  );
}
