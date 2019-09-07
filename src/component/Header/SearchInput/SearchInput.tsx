import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { changeSearchWord } from '../../../action/notes';
import styles from './index.scss';
import themeStyle from '../../../style/theme.scss';

const useStyles = makeStyles({
  searchInput: {
    width: '220px',
    borderRadius: '20px',
    padding: '0px 12px',
  },
});

const SearchInput = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const { theme, searchWord, } = useSelector(state => state);
  return (
    <div className={styles.searchBlock}>
      <TextField
        InputProps={{
          value: searchWord,
          disableUnderline: true,
          classes: {
            root: classes.searchInput,
          },
          className: theme === 'light'
            ? themeStyle.searchInputLight
            : themeStyle.searchInputDark,
          style: { color: `${theme === 'light' ? '#000' : '#fff'}`, },
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon
                className={
                  theme === 'light'
                    ? themeStyle.fontColorLight
                    : themeStyle.fontColorDark
                }
              />
            </InputAdornment>
          ),
        }}
        onChange={(event) => {
          dispatch(changeSearchWord(event.target.value));
        }}
      />
    </div>
  );
};

export default SearchInput;
