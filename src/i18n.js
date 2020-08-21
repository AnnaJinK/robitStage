import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const req = require.context('./static/locales', true, /\.json$/);

const resources = req.keys().reduce((resources, filePath) => {
    const [, , lang, name] = filePath.split(/\/|\./);
    const contents = req(filePath);

    if (!resources[lang]) {
        resources[lang] = {};
    }

    resources[lang][name] = contents;

    return resources;
}, {});

const getLanguageCode = () => {
    const languageCode = navigator.language.includes('ko') ? 'ko' : 'en';

    localStorage.setItem('localeInfo', languageCode);
    localStorage.setItem('isFirst', true);
    
    return languageCode;;
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: getLanguageCode(),
        fallbackLng: 'ko',
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
