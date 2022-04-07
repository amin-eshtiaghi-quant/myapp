import routes from './router';
import store from './store';

function loadLocaleMessages(i18nInstance) {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
    locales.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            i18nInstance.mergeLocaleMessage(locale, locales(key));
        }
    });
}

export default {
    install(Vue, options) {
        options.router.addRoutes(routes);
        options.store.registerModule('programs', store);
        loadLocaleMessages(options.i18n);
    },
};