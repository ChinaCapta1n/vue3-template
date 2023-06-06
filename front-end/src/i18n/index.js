import { createI18n } from "vue-i18n";
import en from './en/index.js';
import tc from './tc/index.js';

const i18n = createI18n({
    legacy: false,
    locale: "tc",
    fallbackLocale: 'tc',
    messages: {
        tc,
        en
    }
});

export default i18n;