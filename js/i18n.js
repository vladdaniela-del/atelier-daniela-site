// Language switcher — applies window.translations to elements marked with data-i18n*
(function () {
  var LANG_KEY = 'atelier-daniela-lang';
  var SUPPORTED = ['ro', 'en', 'it'];

  function getStoredLang() {
    var stored = null;
    try { stored = localStorage.getItem(LANG_KEY); } catch (e) {}
    return SUPPORTED.indexOf(stored) !== -1 ? stored : 'ro';
  }

  function getNested(obj, path) {
    return path.split('.').reduce(function (o, k) {
      return (o && o[k] !== undefined) ? o[k] : undefined;
    }, obj);
  }

  function applyLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'ro';
    var dict = window.translations && window.translations[lang];
    if (!dict) return;

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = getNested(dict, el.getAttribute('data-i18n'));
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = getNested(dict, el.getAttribute('data-i18n-html'));
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = getNested(dict, el.getAttribute('data-i18n-placeholder'));
      if (val !== undefined) el.setAttribute('placeholder', val);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var val = getNested(dict, el.getAttribute('data-i18n-title'));
      if (val !== undefined) document.title = val;
    });
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      var val = getNested(dict, el.getAttribute('data-i18n-content'));
      if (val !== undefined) el.setAttribute('content', val);
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });
    applyLanguage(getStoredLang());
  });
})();
