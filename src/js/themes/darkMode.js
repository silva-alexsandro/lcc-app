import { loadInLocalStorageItem, saveInLocalStorage } from "../db/handleLocalStorage.js";

const KEY_THEME = 'theme';

export function saveTheme(isDark) {
  saveInLocalStorage(KEY_THEME, isDark ? 'dark_mode' : '');
}

export function loadSavedTheme() {
  const hasDark = loadInLocalStorageItem(KEY_THEME);
  return hasDark === 'dark_mode';
}

export function applyTheme(isDark) {
  $('body').toggleClass('dark_mode', isDark);
  $('#moon').toggleClass('hidden', isDark);
  $('#sun').toggleClass('hidden', !isDark);
}