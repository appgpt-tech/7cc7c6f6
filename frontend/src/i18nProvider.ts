// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Products":{"name":"products","fields":{"Title":"Title","Description":"Description","Price":"Price","Category":"Category","Id":"Id"}},"Categories":{"name":"categories","fields":{"Name":"Name","Id":"Id"}},"Users":{"name":"users","fields":{"Name":"Name","Email":"Email","Password":"Password","Id":"Id"}},"Orders":{"name":"orders","fields":{"Userid":"Userid","Productid":"Productid","Quantity":"Quantity","Total":"Total","Id":"Id"}},"Payments":{"name":"payments","fields":{"Orderid":"Orderid","Transactionid":"Transactionid","Status":"Status","Id":"Id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    