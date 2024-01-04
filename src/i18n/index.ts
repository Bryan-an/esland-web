import english from './en.json';
import spanish from './es.json';

const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es',
} as const;

export const getI18n = ({
  currentLocale = 'en',
}: {
  currentLocale?: string;
}) => {
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
  return english;
};
