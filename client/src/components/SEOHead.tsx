import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../i18n';
import { useLanguageFromUrl } from './LanguageRouter';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  pagePath?: string; // e.g., '/', '/signals-app'
}

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage,
  pagePath = '/'
}: SEOHeadProps) {
  const { t } = useTranslation();
  const currentLanguage = useLanguageFromUrl();
  const baseUrl = 'https://goldsniper.replit.app';

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }

    // Update keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update canonical URL with language
    const canonicalUrl = canonical || `${baseUrl}/${currentLanguage}${pagePath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Update language meta tag
    let langMeta = document.querySelector('meta[http-equiv="content-language"]');
    if (langMeta) {
      langMeta.setAttribute('content', currentLanguage);
    }

    // Update hreflang tags for all supported languages
    const updateHreflangTags = () => {
      // Remove existing hreflang tags
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(tag => {
        tag.remove();
      });

      // Add hreflang tags for all languages
      Object.keys(supportedLanguages).forEach(lang => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = `${baseUrl}/${lang}${pagePath}`;
        document.head.appendChild(link);
      });

      // Add x-default hreflang
      const xDefaultLink = document.createElement('link');
      xDefaultLink.rel = 'alternate';
      xDefaultLink.hreflang = 'x-default';
      xDefaultLink.href = `${baseUrl}/en${pagePath}`;
      document.head.appendChild(xDefaultLink);
    };

    updateHreflangTags();

    // Update Open Graph tags
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      }
    }

    if (description) {
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }

    const ogUrl = canonical || `${baseUrl}/${currentLanguage}${pagePath}`;
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute('content', ogUrl);
    }

    if (ogImage) {
      let ogImg = document.querySelector('meta[property="og:image"]');
      if (ogImg) {
        ogImg.setAttribute('content', ogImage);
      }
    }

    // Update og:locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', currentLanguage);
    }

  }, [title, description, keywords, canonical, ogImage, pagePath, currentLanguage, baseUrl]);

  return null;
}