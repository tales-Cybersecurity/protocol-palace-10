import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import type { Locale } from '../store/slices/uiSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { submitTestAttempt, setCurrentQuestions } from '../store/slices/finalTestSlice';
import { getRandomQuestions, type FinalQuestion } from '../data/questions';
import { CheckCircle, XCircle, RotateCcw, Clock, ArrowRight } from 'lucide-react';
import { getCategoryForProtocol } from '../data/protocols';
import { motion } from 'framer-motion';

export default function FinalTest() {
  const { locale = 'en' } = useParams<{ locale: string }>();
  const loc = locale as Locale;
  const { t } = useTranslation(loc);
  const dispatch = useAppDispatch();
  const attempts = useAppSelector(s => s.finalTest.attempts);

  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<FinalQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (started && !finished) {
      const interval = setInterval(() => setElapsed(Date.now() - startTime), 1000);
      return () => clearInterval(interval);
    }
  }, [started, finished, startTime]);

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    const qs = getRandomQuestions(30);
    setQuestions(qs);
    dispatch(setCurrentQuestions(qs.map(q => q.id)));
    setStarted(true);
    setStartTime(Date.now());
  };

  const handleCheck = () => {
    if (!selected) return;
    setChecked(true);
    const newAnswers = { ...answers, [currentIndex]: selected };
    setAnswers(newAnswers);
    if (selected === questions[currentIndex].correctAnswer) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelected(null);
      setChecked(false);
    } else {
      setFinished(true);
      const missedProtocols = questions
        .filter((q, i) => answers[i] !== q.correctAnswer && i < questions.length - 1 || (i === questions.length - 1 && selected !== q.correctAnswer))
        .map(q => q.protocol);
      const uniqueMissed = [...new Set(missedProtocols)];
      dispatch(submitTestAttempt({
        score: score + (selected === questions[currentIndex].correctAnswer ? 1 : 0),
        total: questions.length,
        answers,
        missedTopics: uniqueMissed,
        completedAt: new Date().toISOString(),
      }));
    }
  };

  const handleRetake = () => {
    setStarted(false);
    setFinished(false);
    setCurrentIndex(0);
    setSelected(null);
    setChecked(false);
    setAnswers({});
    setScore(0);
  };

  // Not started
  if (!started) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6 py-12">
        <h1 className="text-3xl font-bold text-foreground">{t('finalTest.title')}</h1>
        <p className="text-muted-foreground">{t('finalTest.subtitle')}</p>
        <p className="text-sm text-muted-foreground">{t('finalTest.questionsCount')}</p>
        <button
          onClick={handleStart}
          className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity cyber-glow"
        >
          {t('finalTest.start')}
        </button>
        {attempts.length > 0 && (
          <div className="mt-8 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">{t('progress.finalTestHistory')}</h3>
            {attempts.slice(-5).reverse().map((a, i) => (
              <div key={i} className="cyber-card p-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{t('progress.attempt')} {attempts.length - i}</span>
                <span className="font-mono text-primary">{a.score}/{a.total}</span>
                <span className="text-xs text-muted-foreground">{new Date(a.completedAt).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Finished
  if (finished) {
    const lastAttempt = attempts[attempts.length - 1];
    const missedTopics = lastAttempt?.missedTopics || [];
    return (
      <div className="max-w-2xl mx-auto space-y-8 py-8">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">{t('finalTest.results')}</h2>
          <div className="text-6xl font-mono font-bold text-primary cyber-glow-text">
            {lastAttempt?.score || score}<span className="text-2xl text-muted-foreground">/{questions.length}</span>
          </div>
          <p className="text-muted-foreground">{t('finalTest.timeElapsed')}: {formatTime(elapsed)}</p>
        </motion.div>

        {missedTopics.length > 0 && (
          <div className="cyber-card p-6 space-y-4">
            <h3 className="font-semibold text-foreground">{t('finalTest.suggestedReview')}</h3>
            <div className="flex flex-wrap gap-2">
              {missedTopics.map(slug => {
                const cat = getCategoryForProtocol(slug);
                return (
                  <Link
                    key={slug}
                    to={`/${locale}/protocols/${cat?.slug}/${slug}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-medium hover:bg-destructive/20 transition-colors"
                  >
                    {slug.toUpperCase()} <ArrowRight className="w-3 h-3" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={handleRetake}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <RotateCcw className="w-4 h-4" /> {t('finalTest.retake')}
          </button>
        </div>
      </div>
    );
  }

  // In progress
  const q = questions[currentIndex];
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-mono text-muted-foreground">
          {t('finalTest.questionOf', { current: currentIndex + 1, total: questions.length })}
        </span>
        <span className="flex items-center gap-1 text-sm font-mono text-muted-foreground">
          <Clock className="w-4 h-4" /> {formatTime(elapsed)}
        </span>
      </div>

      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
      </div>

      <div className="cyber-card p-6 space-y-6">
        <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground">{q.protocol.toUpperCase()}</span>
        <p className="text-lg font-medium text-foreground">{q.question}</p>

        <div className="space-y-3">
          {q.options.map(opt => {
            let style = 'border-border hover:border-primary/50 hover:bg-primary/5';
            if (checked) {
              if (opt === q.correctAnswer) style = 'border-success bg-success/10';
              else if (opt === selected) style = 'border-destructive bg-destructive/10';
              else style = 'border-border opacity-50';
            } else if (opt === selected) {
              style = 'border-primary bg-primary/10';
            }
            return (
              <button
                key={opt}
                onClick={() => !checked && setSelected(opt)}
                disabled={checked}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm ${style}`}
              >
                <div className="flex items-center gap-3">
                  {checked && opt === q.correctAnswer && <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />}
                  {checked && opt === selected && opt !== q.correctAnswer && <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />}
                  <span>{opt}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-end">
          {!checked ? (
            <button onClick={handleCheck} disabled={!selected} className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium disabled:opacity-40 hover:opacity-90">
              {t('quiz.checkAnswer')}
            </button>
          ) : (
            <button onClick={handleNext} className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90">
              {currentIndex < questions.length - 1 ? t('quiz.next') : t('finalTest.submit')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
