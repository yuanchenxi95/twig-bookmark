import { Resource } from 'i18next';

const translationKeys = {
    welcome: 'welcome',
};

const languages = {
    en: 'en',
    zh: 'zh',
};

const resources: Resource = {
    [languages.en]: {
        translation: {
            [translationKeys.welcome]: 'Welcome',
        },
    },
    [languages.zh]: {
        translation: {
            [translationKeys.welcome]: '欢迎',
        },
    },
};

export { translationKeys, languages, resources };
