import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from 'src/utils/languages/en.json';

import vietnamese from 'src/utils/languages/vn.json';

const resources = {
  vn: {
    translation: vietnamese,
  },
  en: {
    translation: english,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vn',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
