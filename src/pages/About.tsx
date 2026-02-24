import { motion } from 'framer-motion';
import { Shield, Github, Linkedin, Globe, GraduationCap, ExternalLink } from 'lucide-react';

const skills = [
  'C', 'C++', 'Shell', 'Unix', 'Algoritmos', 'Redes',
  'Docker', 'TypeScript', 'Python', 'React',
];

const focusAreas = [
  'Reconhecimento & OSINT',
  'Enumeração de Redes',
  'Pentesting',
  'Kali Linux',
  'nmap',
  'Wireshark',
  'Metasploit',
  'Burp Suite',
  'C / C++',
  'Python',
  'Shell Script',
  'React',
  'TypeScript',
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono cyber-border mb-2">
          <Shield className="w-3 h-3" />
          <span>WHOAMI</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Tales Lima de Paula</h1>
        <p className="text-primary font-mono text-lg">Cybersecurity Student &amp; Developer</p>
      </motion.section>

      {/* Sobre Mim */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="cyber-card p-6 space-y-3"
      >
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="text-primary font-mono">&lt;/&gt;</span> Sobre Mim
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Desenvolvedor e estudante de segurança cibernética. Concluí o{' '}
          <a
            href="https://42luxembourg.lu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Common Core da École 42 Luxembourg
          </a>{' '}
          — onde dominei C, C++, Shell, algoritmos, redes e Docker através de projetos como
          Minishell, ft_irc e ft_transcendence — e atualmente estou cursando a{' '}
          <a
            href="https://42luxembourg.lu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Especialização em Cybersecurity na 42 Luxembourg
          </a>{' '}
          e Cybersecurity na{' '}
          <a
            href="https://www.unigran.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Unigran Bruxelas
          </a>
          .
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Este projeto é parte da minha jornada de aprendizado — um laboratório interativo para
          praticar técnicas de enumeração ética e documentar o processo de reconhecimento em
          ambientes controlados.
        </p>
      </motion.div>

      {/* Formação + Links */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Formação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="cyber-card p-6 space-y-5"
        >
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" /> Formação
          </h2>

          {/* 42 Luxembourg - Atual */}
          <div className="border-l-2 border-primary pl-4 space-y-1">
            <span className="text-xs font-mono text-primary">Atual</span>
            <p className="font-semibold text-foreground text-sm">École 42 Luxembourg</p>
            <p className="text-xs text-muted-foreground">Especialização em Cybersecurity</p>
          </div>

          {/* Common Core */}
          <div className="border-l-2 border-border pl-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground">Concluído</span>
              <span className="text-xs text-muted-foreground">· École 42 Luxembourg</span>
            </div>
            <p className="font-semibold text-foreground text-sm">Common Core</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Libft · ft_printf · get_next_line · Born2BeRoot · Pipex · Push_swap ·
              Philosophers · Minishell · NetPractice · Cub3D · C++ Modules (00–09) ·
              ft_irc · Inception · ft_transcendence
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {skills.map(s => (
                <span
                  key={s}
                  className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Unigran */}
          <div className="border-l-2 border-primary pl-4 space-y-1">
            <span className="text-xs font-mono text-primary">Atual</span>
            <p className="font-semibold text-foreground text-sm">Unigran Bruxelas</p>
            <p className="text-xs text-muted-foreground">Cybersecurity</p>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="cyber-card p-6 space-y-4"
        >
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" /> Links
          </h2>

          <a
            href="https://www.linkedin.com/in/tales-lima-de-paula"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-secondary transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p className="text-xs text-muted-foreground font-mono">tales-lima-de-paula</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a
            href="https://github.com/tales1982"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-secondary transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">GitHub</p>
                <p className="text-xs text-muted-foreground font-mono">tales1982</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a
            href="https://tales-snowy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-secondary transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Portfólio</p>
                <p className="text-xs text-muted-foreground font-mono">tales-snowy.vercel.app</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>

      {/* Foco de Estudos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="cyber-card p-6 space-y-4"
      >
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" /> Foco de Estudos
        </h2>
        <div className="flex flex-wrap gap-2">
          {focusAreas.map(area => (
            <span
              key={area}
              className="text-xs px-3 py-1.5 rounded-full border border-primary/40 text-primary font-mono hover:bg-primary/10 transition-colors cursor-default"
            >
              {area}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-xs text-muted-foreground font-mono"
      >
        &gt; Este site é um projeto de aprendizado em constante evolução.
      </motion.p>
    </div>
  );
}
