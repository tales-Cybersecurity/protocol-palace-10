export interface FinalQuestion {
  id: number;
  question: string;
  protocol: string;
  category: string;
  type: 'multiple-choice' | 'true-false';
  options: string[];
  correctAnswer: string;
}

export const questionBank: FinalQuestion[] = [
  // DNS (1-10)
  { id: 1, question: 'What port does DNS primarily use for queries?', protocol: 'dns', category: 'core-services', type: 'multiple-choice', options: ['TCP 80', 'UDP 53', 'TCP 443', 'UDP 67'], correctAnswer: 'UDP 53' },
  { id: 2, question: 'DNS translates domain names to IP addresses.', protocol: 'dns', category: 'core-services', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 3, question: 'Which DNS record type maps a domain to an IPv4 address?', protocol: 'dns', category: 'core-services', type: 'multiple-choice', options: ['MX', 'CNAME', 'A', 'TXT'], correctAnswer: 'A' },
  { id: 4, question: 'DNSSEC provides encryption for DNS queries.', protocol: 'dns', category: 'core-services', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 5, question: 'What is a DNS zone transfer used for?', protocol: 'dns', category: 'core-services', type: 'multiple-choice', options: ['Encrypting DNS', 'Replicating DNS data between servers', 'Blocking malicious domains', 'Caching DNS responses'], correctAnswer: 'Replicating DNS data between servers' },
  { id: 6, question: 'DNS cache poisoning inserts false records into a resolver.', protocol: 'dns', category: 'core-services', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 7, question: 'Which command performs a DNS lookup on Linux?', protocol: 'dns', category: 'core-services', type: 'multiple-choice', options: ['ping', 'dig', 'netstat', 'ifconfig'], correctAnswer: 'dig' },
  { id: 8, question: 'DNS over HTTPS (DoH) encrypts DNS queries.', protocol: 'dns', category: 'core-services', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 9, question: 'What does TTL mean in DNS?', protocol: 'dns', category: 'core-services', type: 'multiple-choice', options: ['Total Transfer Length', 'Time To Live', 'Transfer To Location', 'Trusted Transport Layer'], correctAnswer: 'Time To Live' },
  { id: 10, question: 'AAAA records map domains to IPv6 addresses.', protocol: 'dns', category: 'core-services', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  // DHCP (11-20)
  { id: 11, question: 'What does DORA stand for in DHCP?', protocol: 'dhcp', category: 'core-services', type: 'multiple-choice', options: ['Discover, Offer, Request, Acknowledge', 'Data, Offer, Read, Accept', 'Discover, Open, Relay, Ack', 'Direct, Offer, Request, Apply'], correctAnswer: 'Discover, Offer, Request, Acknowledge' },
  { id: 12, question: 'DHCP uses TCP for reliable configuration delivery.', protocol: 'dhcp', category: 'core-services', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 13, question: 'Which port does the DHCP server use?', protocol: 'dhcp', category: 'core-services', type: 'multiple-choice', options: ['UDP 53', 'UDP 67', 'UDP 68', 'TCP 80'], correctAnswer: 'UDP 67' },
  { id: 14, question: 'DHCP snooping prevents rogue DHCP servers.', protocol: 'dhcp', category: 'core-services', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 15, question: 'What information does DHCP NOT typically provide?', protocol: 'dhcp', category: 'core-services', type: 'multiple-choice', options: ['IP address', 'Default gateway', 'Web server content', 'DNS server address'], correctAnswer: 'Web server content' },
  { id: 16, question: 'DHCP leases are permanent by default.', protocol: 'dhcp', category: 'core-services', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 17, question: 'Which command releases a DHCP lease on Windows?', protocol: 'dhcp', category: 'core-services', type: 'multiple-choice', options: ['ipconfig /release', 'netstat -r', 'ping /release', 'route delete'], correctAnswer: 'ipconfig /release' },
  { id: 18, question: 'A DHCP starvation attack exhausts the IP address pool.', protocol: 'dhcp', category: 'core-services', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 19, question: 'What is a DHCP relay agent used for?', protocol: 'dhcp', category: 'core-services', type: 'multiple-choice', options: ['Encrypting DHCP', 'Forwarding DHCP across VLANs', 'Blocking rogue servers', 'Caching IP addresses'], correctAnswer: 'Forwarding DHCP across VLANs' },
  { id: 20, question: 'The DHCP client uses UDP port 68.', protocol: 'dhcp', category: 'core-services', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  // TCP (21-30)
  { id: 21, question: 'What is the correct TCP three-way handshake order?', protocol: 'tcp', category: 'transport', type: 'multiple-choice', options: ['SYN, SYN-ACK, ACK', 'ACK, SYN, SYN-ACK', 'SYN, ACK, FIN', 'FIN, ACK, SYN'], correctAnswer: 'SYN, SYN-ACK, ACK' },
  { id: 22, question: 'TCP is a connectionless protocol.', protocol: 'tcp', category: 'transport', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 23, question: 'Which TCP flag gracefully terminates a connection?', protocol: 'tcp', category: 'transport', type: 'multiple-choice', options: ['RST', 'FIN', 'SYN', 'URG'], correctAnswer: 'FIN' },
  { id: 24, question: 'TCP guarantees in-order delivery of data.', protocol: 'tcp', category: 'transport', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 25, question: 'What does a SYN flood attack target?', protocol: 'tcp', category: 'transport', type: 'multiple-choice', options: ['DNS resolution', 'TCP connection table', 'UDP ports', 'SSL certificates'], correctAnswer: 'TCP connection table' },
  { id: 26, question: 'SYN cookies help mitigate SYN flood attacks.', protocol: 'tcp', category: 'transport', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 27, question: 'What is the TCP window size used for?', protocol: 'tcp', category: 'transport', type: 'multiple-choice', options: ['Encryption', 'Flow control', 'Authentication', 'Routing'], correctAnswer: 'Flow control' },
  { id: 28, question: 'TCP uses checksums for data integrity.', protocol: 'tcp', category: 'transport', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 29, question: 'What command shows active TCP connections?', protocol: 'tcp', category: 'transport', type: 'multiple-choice', options: ['dig', 'nslookup', 'netstat', 'traceroute'], correctAnswer: 'netstat' },
  { id: 30, question: 'TCP operates at the Network layer of the OSI model.', protocol: 'tcp', category: 'transport', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  // HTTP (31-40)
  { id: 31, question: 'What HTTP status code means "OK"?', protocol: 'http', category: 'web', type: 'multiple-choice', options: ['100', '200', '301', '404'], correctAnswer: '200' },
  { id: 32, question: 'HTTP is a stateful protocol.', protocol: 'http', category: 'web', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 33, question: 'Which HTTP method submits data to a server?', protocol: 'http', category: 'web', type: 'multiple-choice', options: ['GET', 'POST', 'HEAD', 'OPTIONS'], correctAnswer: 'POST' },
  { id: 34, question: 'HTTP traffic on port 80 is encrypted by default.', protocol: 'http', category: 'web', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 35, question: 'What does a 301 status code indicate?', protocol: 'http', category: 'web', type: 'multiple-choice', options: ['Not Found', 'Moved Permanently', 'Internal Server Error', 'OK'], correctAnswer: 'Moved Permanently' },
  { id: 36, question: 'HTTP/2 supports multiplexing multiple requests.', protocol: 'http', category: 'web', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 37, question: 'Which HTTP header prevents XSS attacks?', protocol: 'http', category: 'web', type: 'multiple-choice', options: ['Cache-Control', 'Content-Security-Policy', 'Accept-Language', 'Host'], correctAnswer: 'Content-Security-Policy' },
  { id: 38, question: 'REST APIs typically use HTTP as their transport.', protocol: 'http', category: 'web', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 39, question: 'What does a 500 status code indicate?', protocol: 'http', category: 'web', type: 'multiple-choice', options: ['Success', 'Redirect', 'Client Error', 'Server Error'], correctAnswer: 'Server Error' },
  { id: 40, question: 'HTTP/3 uses QUIC protocol over UDP.', protocol: 'http', category: 'web', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  // HTTPS (41-50)
  { id: 41, question: 'What port does HTTPS use by default?', protocol: 'https', category: 'web', type: 'multiple-choice', options: ['80', '443', '8080', '22'], correctAnswer: '443' },
  { id: 42, question: 'HTTPS provides both encryption and authentication.', protocol: 'https', category: 'web', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 43, question: 'What does HSTS stand for?', protocol: 'https', category: 'web', type: 'multiple-choice', options: ['HTTP Strict Transport Security', 'HTTPS Security Token Service', 'HTTP Secure Transfer System', 'Host Security Transport Standard'], correctAnswer: 'HTTP Strict Transport Security' },
  { id: 44, question: 'SSL stripping downgrades HTTPS to HTTP.', protocol: 'https', category: 'web', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 45, question: 'Which TLS version is currently recommended?', protocol: 'https', category: 'web', type: 'multiple-choice', options: ['SSL 3.0', 'TLS 1.0', 'TLS 1.2', 'TLS 1.3'], correctAnswer: 'TLS 1.3' },
  { id: 46, question: 'HTTPS content is visible in Wireshark without session keys.', protocol: 'https', category: 'web', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 47, question: 'What provides free TLS certificates?', protocol: 'https', category: 'web', type: 'multiple-choice', options: ['Microsoft', 'Let\'s Encrypt', 'Cloudflare only', 'ICANN'], correctAnswer: 'Let\'s Encrypt' },
  { id: 48, question: 'The TLS handshake happens before any HTTP data is sent.', protocol: 'https', category: 'web', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 49, question: 'What does SNI in TLS allow?', protocol: 'https', category: 'web', type: 'multiple-choice', options: ['Multiple certificates on one IP', 'Faster encryption', 'UDP support', 'Certificate revocation'], correctAnswer: 'Multiple certificates on one IP' },
  { id: 50, question: 'Certificate pinning is a defense against rogue certificates.', protocol: 'https', category: 'web', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  // SSH (51-60)
  { id: 51, question: 'What port does SSH use?', protocol: 'ssh', category: 'remote-access', type: 'multiple-choice', options: ['21', '22', '23', '25'], correctAnswer: '22' },
  { id: 52, question: 'SSH encrypts all communication between client and server.', protocol: 'ssh', category: 'remote-access', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 53, question: 'Which key algorithm is recommended for SSH?', protocol: 'ssh', category: 'remote-access', type: 'multiple-choice', options: ['RSA-1024', 'DSA', 'Ed25519', 'DES'], correctAnswer: 'Ed25519' },
  { id: 54, question: 'SSH can create encrypted tunnels for other protocols.', protocol: 'ssh', category: 'remote-access', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 55, question: 'What does ssh-copy-id do?', protocol: 'ssh', category: 'remote-access', type: 'multiple-choice', options: ['Generates keys', 'Copies public key to server', 'Creates SSH tunnel', 'Connects to server'], correctAnswer: 'Copies public key to server' },
  { id: 56, question: 'Password authentication is more secure than key-based SSH.', protocol: 'ssh', category: 'remote-access', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 57, question: 'What tool blocks brute force SSH attempts?', protocol: 'ssh', category: 'remote-access', type: 'multiple-choice', options: ['fail2ban', 'nmap', 'wireshark', 'tcpdump'], correctAnswer: 'fail2ban' },
  { id: 58, question: 'SCP uses SSH for secure file transfer.', protocol: 'ssh', category: 'remote-access', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 59, question: 'What is an SSH jump host (bastion)?', protocol: 'ssh', category: 'remote-access', type: 'multiple-choice', options: ['A DNS server', 'A relay server for internal access', 'A load balancer', 'A certificate authority'], correctAnswer: 'A relay server for internal access' },
  { id: 60, question: 'SSH local port forwarding uses the -L flag.', protocol: 'ssh', category: 'remote-access', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  // IP (61-65)
  { id: 61, question: 'IPv4 addresses are 32 bits long.', protocol: 'ip', category: 'fundamentals', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 62, question: 'How long is an IPv6 address?', protocol: 'ip', category: 'fundamentals', type: 'multiple-choice', options: ['32 bits', '64 bits', '128 bits', '256 bits'], correctAnswer: '128 bits' },
  { id: 63, question: 'IP operates at the Transport layer.', protocol: 'ip', category: 'fundamentals', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 64, question: 'What does NAT do?', protocol: 'ip', category: 'fundamentals', type: 'multiple-choice', options: ['Encrypts traffic', 'Translates private to public IPs', 'Assigns IP addresses', 'Routes email'], correctAnswer: 'Translates private to public IPs' },
  { id: 65, question: 'IP provides guaranteed delivery of packets.', protocol: 'ip', category: 'fundamentals', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  // ARP (66-70)
  { id: 66, question: 'ARP maps IP addresses to MAC addresses.', protocol: 'arp', category: 'fundamentals', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 67, question: 'At which OSI layer does ARP operate?', protocol: 'arp', category: 'fundamentals', type: 'multiple-choice', options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 7'], correctAnswer: 'Layer 2' },
  { id: 68, question: 'ARP spoofing can enable man-in-the-middle attacks.', protocol: 'arp', category: 'fundamentals', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 69, question: 'What defense protects against ARP spoofing?', protocol: 'arp', category: 'fundamentals', type: 'multiple-choice', options: ['DHCP snooping', 'Dynamic ARP Inspection', 'DNS over HTTPS', 'HSTS'], correctAnswer: 'Dynamic ARP Inspection' },
  { id: 70, question: 'ARP works across different network subnets.', protocol: 'arp', category: 'fundamentals', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  // ICMP (71-75)
  { id: 71, question: 'Which command uses ICMP echo requests?', protocol: 'icmp', category: 'fundamentals', type: 'multiple-choice', options: ['dig', 'ping', 'curl', 'ssh'], correctAnswer: 'ping' },
  { id: 72, question: 'ICMP is used for error reporting and diagnostics.', protocol: 'icmp', category: 'fundamentals', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 73, question: 'What does traceroute use to map the network path?', protocol: 'icmp', category: 'fundamentals', type: 'multiple-choice', options: ['TCP SYN', 'ICMP TTL exceeded', 'DNS queries', 'ARP requests'], correctAnswer: 'ICMP TTL exceeded' },
  { id: 74, question: 'A ping flood is a type of DoS attack using ICMP.', protocol: 'icmp', category: 'fundamentals', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 75, question: 'ICMP operates at which OSI layer?', protocol: 'icmp', category: 'fundamentals', type: 'multiple-choice', options: ['Layer 2', 'Layer 3', 'Layer 4', 'Layer 7'], correctAnswer: 'Layer 3' },
  // UDP (76-80)
  { id: 76, question: 'UDP is connection-oriented like TCP.', protocol: 'udp', category: 'transport', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 77, question: 'Which application commonly uses UDP?', protocol: 'udp', category: 'transport', type: 'multiple-choice', options: ['SSH', 'DNS queries', 'HTTP', 'SMTP'], correctAnswer: 'DNS queries' },
  { id: 78, question: 'UDP guarantees delivery of packets.', protocol: 'udp', category: 'transport', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 79, question: 'Why is UDP faster than TCP?', protocol: 'udp', category: 'transport', type: 'multiple-choice', options: ['Better encryption', 'No handshake or retransmission overhead', 'Larger packets', 'More ports available'], correctAnswer: 'No handshake or retransmission overhead' },
  { id: 80, question: 'VoIP and video streaming often use UDP.', protocol: 'udp', category: 'transport', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  // Mixed protocols (81-93)
  { id: 81, question: 'What port does FTP control channel use?', protocol: 'ftp', category: 'file-sharing', type: 'multiple-choice', options: ['TCP 20', 'TCP 21', 'TCP 22', 'TCP 25'], correctAnswer: 'TCP 21' },
  { id: 82, question: 'SFTP runs over SSH on port 22.', protocol: 'sftp', category: 'file-sharing', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 83, question: 'What port does SMB use?', protocol: 'smb', category: 'file-sharing', type: 'multiple-choice', options: ['TCP 139', 'TCP 445', 'TCP 80', 'TCP 25'], correctAnswer: 'TCP 445' },
  { id: 84, question: 'SMTP is used to receive emails from a server.', protocol: 'smtp', category: 'email', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' },
  { id: 85, question: 'What port does SMTP submission use?', protocol: 'smtp', category: 'email', type: 'multiple-choice', options: ['TCP 25', 'TCP 110', 'TCP 587', 'TCP 993'], correctAnswer: 'TCP 587' },
  { id: 86, question: 'IMAP allows accessing email on multiple devices.', protocol: 'imap', category: 'email', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 87, question: 'What does SPF protect against?', protocol: 'spf-dkim-dmarc', category: 'email', type: 'multiple-choice', options: ['SQL injection', 'Email spoofing', 'DNS poisoning', 'XSS attacks'], correctAnswer: 'Email spoofing' },
  { id: 88, question: 'Telnet transmits data in plaintext including passwords.', protocol: 'telnet', category: 'remote-access', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 89, question: 'What port does RDP use?', protocol: 'rdp', category: 'remote-access', type: 'multiple-choice', options: ['TCP 22', 'TCP 23', 'TCP 3389', 'TCP 8080'], correctAnswer: 'TCP 3389' },
  { id: 90, question: 'WebSocket provides full-duplex communication.', protocol: 'websocket', category: 'web', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 91, question: 'What does the TLS handshake establish?', protocol: 'tls-ssl', category: 'security-identity', type: 'multiple-choice', options: ['IP address', 'Shared encryption keys', 'DNS records', 'MAC addresses'], correctAnswer: 'Shared encryption keys' },
  { id: 92, question: 'LDAP is commonly used for directory services.', protocol: 'ldap', category: 'security-identity', type: 'true-false', options: ['True', 'False'], correctAnswer: 'True' },
  { id: 93, question: 'What does Kerberos use for authentication?', protocol: 'kerberos', category: 'security-identity', type: 'multiple-choice', options: ['Certificates', 'Tickets', 'Tokens', 'Passwords only'], correctAnswer: 'Tickets' },
];

export function getRandomQuestions(count: number = 30): FinalQuestion[] {
  const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
