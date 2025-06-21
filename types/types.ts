export interface Spec {
  title: string;
  description: string;
}

export type Language = 'en' | 'pl';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}
