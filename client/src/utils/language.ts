import { supportedLanguages, defaultLanguage } from '../i18n';

export const getLanguageFromPath = (pathname: string): string => {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && Object.keys(supportedLanguages).includes(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLanguage;
};

export const removeLanguageFromPath = (pathname: string): string => {
  const segments = pathname.split('/').filter(Boolean);
  const supportedLangCodes = Object.keys(supportedLanguages);
  
  if (segments[0] && supportedLangCodes.includes(segments[0])) {
    segments.shift();
  }
  
  return '/' + segments.join('/');
};

export const addLanguageToPath = (pathname: string, language: string): string => {
  const cleanPath = removeLanguageFromPath(pathname);
  
  if (language === defaultLanguage) {
    return cleanPath || '/';
  }
  
  return `/${language}${cleanPath}`;
};

export const getLocalizedPath = (path: string, language: string): string => {
  if (language === defaultLanguage) {
    return path;
  }
  
  return `/${language}${path}`;
};

export const generateHreflangLinks = (currentPath: string) => {
  return Object.keys(supportedLanguages).map(lang => ({
    hreflang: lang,
    href: `${window.location.origin}${getLocalizedPath(currentPath, lang)}`
  }));
};