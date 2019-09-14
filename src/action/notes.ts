export const CHANGE_THEME = 'CHANGE_THEME';

export const chageTheme = (theme: string) => ({
  type: CHANGE_THEME,
  payload: {
    theme,
  },
});

export const CHANGE_SEARCH_WORD = 'CHANGE_SEARCH_WORD';

export const changeSearchWord = (searchWord: string) => ({
  type: CHANGE_SEARCH_WORD,
  payload: {
    searchWord,
  },
});

export const CHANGE_FILTER_STAR_NOTES = 'CHANGE_FILTER_STAR_NOTES';

export const filterStarNotes = () => ({
  type: CHANGE_FILTER_STAR_NOTES,
});

export const CHANGE_DISPLAY_NOTES_MODE = 'CHANGE_DISPLAY_NOTES_MODE';

export const changeDisplayNotesMode = (mode: string) => ({
  type: CHANGE_DISPLAY_NOTES_MODE,
  payload: {
    displayNotesMode: mode,
  },
});

export const CREATE_NOTE = 'CREATE_NOTE';

export const createNote = (noteName: string, noteBackground: string) => ({
  type: CREATE_NOTE,
  payload: {
    noteName,
    noteBackground,
  },
});

export const SET_IMPORT_WITH_NOTE = 'SET_IMPORT_WITH_NOTE';

export const setImpotyWithNote = (noteId: string) => ({
  type: SET_IMPORT_WITH_NOTE,
  payload: {
    noteId,
  },
});
