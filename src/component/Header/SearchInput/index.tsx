import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { changeSearchWord } from '../../../action/notes';

const useStyles = makeStyles({
  iCon: {
    color: '#000',
  },
  searchInput: {
    width: '220px',
    border: '1px solid #000000',
    borderRadius: '20px',
    padding: '0px 12px',
  },
});

const SearchInput = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const { searchWord, } = useSelector(state => state);
  return (
    <TextField
      InputProps={{
        value: searchWord,
        disableUnderline: true,
        classes: {
          root: classes.searchInput,
        },
        startAdornment: (
          <InputAdornment position="start">
            <VisibilityIcon
              classes={{ root: classes.iCon, }}
            />
          </InputAdornment>
        ),
      }}
      onChange={(event) => {
        dispatch(changeSearchWord(event.target.value));
      }}
    />
  );
};

export default SearchInput;
