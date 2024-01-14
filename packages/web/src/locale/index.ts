import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import zh from './zh/common.json';
import en from './en/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    zh: {
      translation: zh,
    },
  },
  lng: 'zh', // 默认语言
  fallbackLng: 'zh', // 当当前语言的翻译缺失时回退到该语言
  interpolation: {
    escapeValue: false, // react已经安全了
  },
});
