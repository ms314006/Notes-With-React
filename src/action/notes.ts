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
