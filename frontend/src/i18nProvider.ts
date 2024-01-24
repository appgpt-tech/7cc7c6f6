// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Players":{"name":"players","fields":{"Name":"Name","Position":"Position","Nationality":"Nationality","Stats":"Stats","Id":"Id"}},"Matches":{"name":"matches","fields":{"Date":"Date","Opponent":"Opponent","Score":"Score","Location":"Location","Id":"Id"}},"News":{"name":"news","fields":{"Headline":"Headline","Content":"Content","Author":"Author","Date":"Date","Id":"Id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    