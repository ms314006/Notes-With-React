import React from 'react';
import NewNoteList from './NewNoteList';
import styles from './index.scss';

const NoteList = () => {
  return (
    <div className={styles.nodeListBlock}>
      <NewNoteList />
    </div>
  );
};

export default NoteList;
