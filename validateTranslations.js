// validateTranslations.js
// Utility to check for non-string values in your translation object
import { messages } from './src/i18n/translations.js'

function checkTranslations(obj, path = []) {
  for (const key in obj) {
    const value = obj[key];
    const currentPath = [...path, key].join('.');
    if (typeof value === 'object' && value !== null) {
      checkTranslations(value, [...path, key]);
    } else if (typeof value !== 'string') {
      console.warn(`[i18n] Non-string value found at: ${currentPath} | Value:`, value);
    }
  }
}

console.log('[i18n] Validating translation messages...');
checkTranslations(messages);
console.log('[i18n] Validation complete.');
