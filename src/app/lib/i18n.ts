import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../../public/locales/en.json';
import de from '../../../public/locales/de.json';

const resources = {
  en: { translation: en },
  de: { translation: de },
};

// Helper function to get the initial language
const getInitialLanguage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem('language') || 'en'; // Default to 'en' if not set
  }
  return 'en'; // Fallback for server-side rendering
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(), // Use the helper function here
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes values to prevent XSS
  },
});

export default i18n;
