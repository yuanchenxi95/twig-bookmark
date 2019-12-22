import { Resource } from 'i18next';

const translationKeys = {
    welcome: 'welcome',
    homePage: 'Home Page',
    login: 'Login',
};

const languages = {
    en: 'en',
    zh: 'zh',
};

const enTranslation = {
    [translationKeys.welcome]: 'Welcome',
    [translationKeys.login]: 'Login',
};

const zhTranslation = {
    [translationKeys.welcome]: '欢迎',
    [translationKeys.login]: '登录',
};

const resources: Resource = {
    [languages.en]: {
        translation: enTranslation,
    },
    [languages.zh]: {
        translation: zhTranslation,
    },
};

export { translationKeys, languages, resources };
