import { loadSavedTheme, applyTheme, saveTheme } from '../themes/darkMode.js';

export function initSwitchTheme() {
  const isDark = loadSavedTheme();
  applyTheme(isDark);
  $('#switch').prop('checked', isDark);

  $('#switch').on('change', function () {
    const newTheme = $(this).is(':checked');
    applyTheme(newTheme);
    saveTheme(newTheme);
  });
}
