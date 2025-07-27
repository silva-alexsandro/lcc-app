import { initTaskEvents } from './tasks/tasks.js';
import { initSwitchTheme } from "./ui/themeSwitch.js";
$(document).ready(function () {
  initSwitchTheme();
  const taskHandlers = initTaskEvents();
});