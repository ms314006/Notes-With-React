import * as actions from '../action/notes';

const initState = {
  theme: 'light',
  searchWord: '',
  filterStar: false,
  displayNotesMode: 'module',
};

const notesReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actions.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };
    case actions.CHANGE_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload.searchWord,
      };
    case actions.CHANGE_FILTER_STAR_NOTES:
      return {
        ...state,
        filterStar: !state.filterStar,
      };
    case actions.CHANGE_DISPLAY_NOTES_MODE:
      return {
        ...state,
        displayNotesMode: action.payload.displayNotesMode,
      };
    default:
      return state;
  }
};

export default notesReducer;
