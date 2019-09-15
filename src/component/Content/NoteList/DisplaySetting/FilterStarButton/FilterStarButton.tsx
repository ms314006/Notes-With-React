import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import * as actions from '../../../../../action/notes';

const useStyles = makeStyles({
  icon: {
    marginRight: '4px',
  },
});

const FilterStarButton = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const { filterStar, theme } = useSelector(state => state);
  return (
    <Button
      onClick={() => { dispatch(actions.filterStarNotes()); }}
      style={{
        background: theme === 'light' ? '#eee' : '#424255',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      {
        filterStar
          ? <StarIcon classes={{ root: classes.icon, }} />
          : <StarBorderIcon classes={{ root: classes.icon, }} />
      }
      顯示星號筆記
    </Button>
  );
};

export default FilterStarButton;
