import React from 'react';
import { useSelector } from 'react-redux';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import themeStyle from '../../../../style/theme.scss';
import noteListStyle from '../index.scss';
import styles from './index.scss';

const Note = (props: any) => {
  const { note, } = props;
  const { theme, displayNotesMode, } = useSelector(state => state);
  return (
    <div
      className={
        `${styles.nodeList}
        ${displayNotesMode === 'module'
          ? `${noteListStyle.nodeList}`
          : `${noteListStyle.nodeListSmall}`}
        ${theme === 'light'
            ? `${themeStyle.blockColorLight}`
            : `${themeStyle.blockColorDark}`}
        ${theme === 'dark' && displayNotesMode !== 'module'
              ? `${themeStyle.fontColorDark}`
              : `${themeStyle.fontColorLight}`}
        `
      }
      style={
        displayNotesMode === 'module'
          ? { backgroundImage: `url(./static/images/noteBackground/${note.image}.jpg)`, }
          : {}
      }
    >
      <div>{note.name}</div>
      <div>
        {note.important ? <StarIcon /> : <StarBorderIcon />}
      </div>
    </div>
  );
};

export default Note;
