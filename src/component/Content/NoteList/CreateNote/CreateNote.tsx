import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import CreateNoteWindow from './CreateNoteWindow';
import styles from './index.scss';
import noteListStyle from '../index.scss';
import themeStyle from '../../../../style/theme.scss';

const useStyles = makeStyles({
  icon: {
    fontSize: '48px',
    margin: '12px',
  },
});

const CreateNote = () => {
  const classes = useStyles({});
  const [openCreateNoteWindow, setOpenCreateNoteWindow] = useState(false);
  const { theme, displayNotesMode, } = useSelector(state => state);
  return (
    <>
      <div
        className={
          `${styles.newNoteListBlock}
          ${displayNotesMode === 'module'
            ? `${noteListStyle.nodeList}`
            : `${noteListStyle.nodeListSmall}`
          }
          ${theme === 'light'
            ? `${themeStyle.fontColorLight} ${themeStyle.borderColorLight}`
            : `${themeStyle.fontColorDark} ${themeStyle.borderColorDark}`
          }`
        }
        onKeyDown={() => {}}
        onClick={() => { setOpenCreateNoteWindow(true); }}
      >
        <AddIcon classes={{ root: classes.icon, }} />
        <span className={styles.topicText}>
          新增筆記
        </span>
      </div>
      <CreateNoteWindow
        open={openCreateNoteWindow}
        handleClose={() => { setOpenCreateNoteWindow(false); }}
      />
    </>
  );
};

export default CreateNote;
