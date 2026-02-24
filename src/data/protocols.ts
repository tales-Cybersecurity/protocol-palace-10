export interface ProtocolInfo {
  slug: string;
  name: string;
  categorySlug: string;
}

export interface Category {
  slug: string;
  icon: string;
  protocols: ProtocolInfo[];
}

export const categories: Category[] = [
  {
    slug: 'fundamentals',
    icon: '🌐',
    protocols: [
      { slug: 'ip', name: 'IP (IPv4/IPv6)', categorySlug: 'fundamentals' },
      { slug: 'arp', name: 'ARP', categorySlug: 'fundamentals' },
      { slug: 'icmp', name: 'ICMP', categorySlug: 'fundamentals' },
    ],
  },
  {
    slug: 'transport',
    icon: '🔄',
    protocols: [
      { slug: 'tcp', name: 'TCP', categorySlug: 'transport' },
      { slug: 'udp', name: 'UDP', categorySlug: 'transport' },
    ],
  },
  {
    slug: 'core-services',
    icon: '⚙️',
    protocols: [
      { slug: 'dns', name: 'DNS', categorySlug: 'core-services' },
      { slug: 'dhcp', name: 'DHCP', categorySlug: 'core-services' },
    ],
  },
  {
    slug: 'web',
    icon: '🌍',
    protocols: [
      { slug: 'http', name: 'HTTP', categorySlug: 'web' },
      { slug: 'https', name: 'HTTPS', categorySlug: 'web' },
      { slug: 'websocket', name: 'WebSocket', categorySlug: 'web' },
    ],
  },
  {
    slug: 'remote-access',
    icon: '🖥️',
    protocols: [
      { slug: 'ssh', name: 'SSH', categorySlug: 'remote-access' },
      { slug: 'rdp', name: 'RDP', categorySlug: 'remote-access' },
      { slug: 'telnet', name: 'Telnet', categorySlug: 'remote-access' },
    ],
  },
  {
    slug: 'file-sharing',
    icon: '📁',
    protocols: [
      { slug: 'ftp', name: 'FTP', categorySlug: 'file-sharing' },
      { slug: 'sftp', name: 'SFTP', categorySlug: 'file-sharing' },
      { slug: 'smb', name: 'SMB', categorySlug: 'file-sharing' },
    ],
  },
  {
    slug: 'email',
    icon: '📧',
    protocols: [
      { slug: 'smtp', name: 'SMTP', categorySlug: 'email' },
      { slug: 'imap', name: 'IMAP', categorySlug: 'email' },
      { slug: 'spf-dkim-dmarc', name: 'SPF/DKIM/DMARC', categorySlug: 'email' },
    ],
  },
  {
    slug: 'security-identity',
    icon: '🔒',
    protocols: [
      { slug: 'tls-ssl', name: 'TLS/SSL', categorySlug: 'security-identity' },
      { slug: 'ldap', name: 'LDAP', categorySlug: 'security-identity' },
      { slug: 'kerberos', name: 'Kerberos', categorySlug: 'security-identity' },
    ],
  },
];

export const allProtocols = categories.flatMap(c => c.protocols);

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}

export function getProtocolBySlug(protocolSlug: string) {
  return allProtocols.find(p => p.slug === protocolSlug);
}

export function getCategoryForProtocol(protocolSlug: string) {
  return categories.find(c => c.protocols.some(p => p.slug === protocolSlug));
}

export interface CommandExample {
  command: string;
  explanation: string;
}

export interface QuizQuestion {
  question: string;
  type: 'multiple-choice' | 'true-false';
  options: string[];
  correctAnswer: string;
}

export interface ProtocolContent {
  title: string;
  whatItIs: string;
  osiLayer: string;
  tcpIpLayer: string;
  ports: string;
  realLife: string;
  securityRisks: string;
  wiresharkFilter: string;
  wiresharkTip: string;
  commands: CommandExample[];
  keyTakeaways: string[];
  quiz: QuizQuestion[];
}
