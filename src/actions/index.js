export function toggleThemeSwitcher() {
  return {
    type: 'TOGGLE_THEME_SWITCHER',
  }
}

export function changeTheme(theme) {
  return {
    type: 'CHANGE_THEME',
    theme,
  }
}
