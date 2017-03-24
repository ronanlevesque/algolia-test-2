const initialState = {
  dropDownIsOpen: false,
  theme: 'default',
}

export default function smallReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_THEME_SWITCHER':
      return Object.assign({}, state, {
        dropDownIsOpen: !state.dropDownIsOpen,
      });
    case 'CHANGE_THEME':
      return Object.assign({}, state, {
        theme: action.theme,
        dropDownIsOpen: false,
      });
    default:
      return state;
  }
}
