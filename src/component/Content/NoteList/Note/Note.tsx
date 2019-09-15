import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { setImportWithNote } from '../../../../action/notes';
import themeStyle from '../../../../style/theme.scss';
import mainStyle from '../../../../style/index.scss';
import noteListStyle from '../index.scss';
import styles from './index.scss';

const Note = (props: any) => {
  const { note, } = props;
  const dispatch = useDispatch();
  const { theme, displayNotesMode, } = useSelector(state => state);
  return (
    <Link
      to={`/note/${note.id}`}
      className={mainStyle.removeLinkStyle}
    >
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
            ? { backgroundImage: `url(./static/images/noteBackground/${note.background}.jpg)`, }
            : {}
        }
      >
        <div>{note.name}</div>
        <div>
          <IconButton
            style={{ color: '#000', }}
            onClick={(e) => {
              dispatch(setImportWithNote(note.id));
              e.stopPropagation();
            }}
          >
            {note.important ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Link>
  );
};

export default Note;
