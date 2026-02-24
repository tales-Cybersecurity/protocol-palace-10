import type { Locale } from '../store/slices/uiSlice';
import type { ProtocolContent } from './protocols';
import { getEnContent } from './content/en';
import { getFrContent } from './content/fr';
import { getPtBRContent } from './content/pt-br';

export function getProtocolContent(slug: string, locale: Locale): ProtocolContent | undefined {
  switch (locale) {
    case 'fr': return getFrContent(slug);
    case 'pt-BR': return getPtBRContent(slug);
    default: return getEnContent(slug);
  }
}
