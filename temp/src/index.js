import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from "i18next";
import en from './i18n/en'

i18n
  .init({
    resources: {
      en: { translation: en }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(<App />, document.getElementById('root'));
