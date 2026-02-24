import { useState } from 'react';
import type { QuizQuestion } from '../data/protocols';
import { useTranslation } from '../i18n';
import type { Locale } from '../store/slices/uiSlice';
import { useAppDispatch } from '../store/hooks';
import { submitQuizResult } from '../store/slices/quizSlice';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Props {
  questions: QuizQuestion[];
  protocolSlug: string;
  locale: Locale;
}

export default function Quiz({ questions, protocolSlug, locale }: Props) {
  const { t } = useTranslation(locale);
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[currentIndex];

  const handleCheck = () => {
    if (!selected) return;
    setChecked(true);
    const newAnswers = { ...answers, [currentIndex]: selected };
    setAnswers(newAnswers);
    const isCorrect = selected === q.correctAnswer;
    if (isCorrect) setScore(s => s + 1);

    if (currentIndex === questions.length - 1) {
      const finalScore = score + (isCorrect ? 1 : 0);
      dispatch(submitQuizResult({
        protocolSlug,
        score: finalScore,
        total: questions.length,
        answers: newAnswers,
        completedAt: new Date().toISOString(),
      }));
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelected(null);
      setChecked(false);
    } else {
      setFinished(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelected(null);
    setChecked(false);
    setAnswers({});
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="cyber-card p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-primary cyber-glow-text">{t('quiz.completed')}</h3>
        <p className="text-4xl font-mono font-bold text-foreground">
          {score}<span className="text-muted-foreground text-lg">/{questions.length}</span>
        </p>
        <p className="text-muted-foreground">{t('quiz.score')}</p>
        <button
          onClick={handleRetry}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          <RotateCcw className="w-4 h-4" />
          {t('quiz.retry')}
        </button>
      </div>
    );
  }

  return (
    <div className="cyber-card p-6 space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-mono text-muted-foreground">
          {t('quiz.question')} {currentIndex + 1} {t('quiz.of')} {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${
              i < currentIndex ? (answers[i] === questions[i].correctAnswer ? 'bg-success' : 'bg-destructive')
              : i === currentIndex ? 'bg-primary' : 'bg-muted'
            }`} />
          ))}
        </div>
      </div>

      <p className="text-lg font-medium text-foreground">{q.question}</p>

      <div className="space-y-3">
        {q.options.map(opt => {
          let optionStyle = 'border-border hover:border-primary/50 hover:bg-primary/5';
          if (checked) {
            if (opt === q.correctAnswer) optionStyle = 'border-success bg-success/10';
            else if (opt === selected) optionStyle = 'border-destructive bg-destructive/10';
            else optionStyle = 'border-border opacity-50';
          } else if (opt === selected) {
            optionStyle = 'border-primary bg-primary/10';
          }
          return (
            <button
              key={opt}
              onClick={() => !checked && setSelected(opt)}
              disabled={checked}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm ${optionStyle}`}
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

      {checked && selected !== q.correctAnswer && (
        <p className="text-sm text-muted-foreground">
          {t('quiz.correctAnswer')} <span className="text-success font-medium">{q.correctAnswer}</span>
        </p>
      )}

      <div className="flex justify-end">
        {!checked ? (
          <button
            onClick={handleCheck}
            disabled={!selected}
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium disabled:opacity-40 hover:opacity-90 transition-opacity"
          >
            {t('quiz.checkAnswer')}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            {currentIndex < questions.length - 1 ? t('quiz.next') : t('quiz.score')}
          </button>
        )}
      </div>
    </div>
  );
}
