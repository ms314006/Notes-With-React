import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
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
  const { theme } = useSelector(state => state);
  return (
    <div
      className={
        `${styles.newNoteListBlock}
        ${noteListStyle.nodeList}
        ${theme === 'light'
          ? `${themeStyle.fontColorLight} ${themeStyle.borderColorLight}`
          : `${themeStyle.fontColorDark} ${themeStyle.borderColorDark}`
        }`
      }
    >
      <AddIcon classes={{ root: classes.icon, }} />
      <span className={styles.topicText}>
        新增筆記
      </span>
    </div>
  );
};

export default CreateNote;
