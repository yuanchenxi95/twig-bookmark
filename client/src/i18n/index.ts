import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { resources, translationKeys, languages } from './translations';

i18n.use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });

export { i18n, translationKeys, languages };
