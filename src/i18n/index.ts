import en from './en.json';
import fr from './fr.json';
import ptBR from './pt-BR.json';
import type { Locale } from '../store/slices/uiSlice';

const translations: Record<Locale, typeof en> = { en, fr, 'pt-BR': ptBR };

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export function useTranslation(locale: Locale) {
  const t = translations[locale] || translations.en;

  const translate = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: any = t;
    for (const k of keys) {
      value = value?.[k];
    }
    if (typeof value !== 'string') return key;
    if (params) {
      return Object.entries(params).reduce(
        (str, [k, v]) => str.replace(`{${k}}`, String(v)),
        value
      );
    }
    return value;
  };

  return { t: translate, translations: t };
}

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  'pt-BR': 'Português',
};

export const locales: Locale[] = ['en', 'fr', 'pt-BR'];
