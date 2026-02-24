import { useParams, Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import type { Locale } from '../store/slices/uiSlice';
import { getProtocolBySlug } from '../data/protocols';
import { getProtocolContent } from '../data/contentLoader';
import Quiz from '../components/Quiz';
import { ArrowLeft, Terminal, Shield, Eye, Lightbulb, Layers, Radio, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProtocolPage() {
  const { locale = 'en', category = '', protocol = '' } = useParams();
  const loc = locale as Locale;
  const { t } = useTranslation(loc);
  const proto = getProtocolBySlug(protocol);
  const content = getProtocolContent(protocol, loc);

  if (!proto || !content) return <div className="text-center py-20 text-muted-foreground">Protocol not found</div>;

  const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-3">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
        {icon} {title}
      </h2>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </motion.div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <Link to={`/${locale}/protocols/${category}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" /> {t('lesson.backToCategory')}
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-foreground cyber-glow-text">{content.title}</h1>
        <div className="flex flex-wrap gap-3 mt-4">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono cyber-border">{content.osiLayer}</span>
          <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-mono">{content.tcpIpLayer}</span>
          {content.ports !== 'N/A' && content.ports !== 'N/A (protocol, not port-based)' && content.ports !== 'N/A (not port-based)' && (
            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-mono">{content.ports}</span>
          )}
        </div>
      </motion.div>

      <div className="space-y-8">
        <Section icon={<Globe className="w-5 h-5 text-primary" />} title={t('lesson.whatItIs')}>
          <p>{content.whatItIs}</p>
        </Section>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="cyber-card p-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" /> {t('lesson.osiLayer')}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 font-mono">{content.osiLayer}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{content.tcpIpLayer}</p>
          </div>
          <div className="cyber-card p-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Radio className="w-4 h-4 text-primary" /> {t('lesson.ports')}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 font-mono">{content.ports}</p>
          </div>
        </div>

        <Section icon={<Globe className="w-5 h-5 text-primary" />} title={t('lesson.realLife')}>
          <p>{content.realLife}</p>
        </Section>

        <Section icon={<Shield className="w-5 h-5 text-destructive" />} title={t('lesson.securityRisks')}>
          <p>{content.securityRisks}</p>
        </Section>

        <Section icon={<Eye className="w-5 h-5 text-primary" />} title={t('lesson.wireshark')}>
          <div className="cyber-card p-4 space-y-2">
            <p className="font-mono text-xs">
              <span className="text-primary">{t('lesson.filterTip')}</span> <code className="bg-muted px-2 py-0.5 rounded">{content.wiresharkFilter}</code>
            </p>
            <p className="text-sm">{content.wiresharkTip}</p>
          </div>
        </Section>

        <Section icon={<Terminal className="w-5 h-5 text-accent" />} title={t('lesson.commands')}>
          <div className="space-y-4">
            {content.commands.map((cmd, i) => (
              <div key={i} className="cyber-card p-4 space-y-2">
                <code className="block bg-muted rounded px-3 py-2 text-xs font-mono text-primary overflow-x-auto">
                  $ {cmd.command}
                </code>
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">{t('lesson.commandExplanation')}</span> {cmd.explanation}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <div className="cyber-card p-6 border-l-4 border-l-accent space-y-3">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <Lightbulb className="w-5 h-5 text-accent" /> {t('lesson.keyTakeaways')}
          </h2>
          <ul className="space-y-2">
            {content.keyTakeaways.map((kta, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-accent mt-0.5">▸</span> {kta}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quiz section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">{t('lesson.quiz')}</h2>
        <Quiz questions={content.quiz} protocolSlug={protocol} locale={loc} />
      </div>
    </div>
  );
}
