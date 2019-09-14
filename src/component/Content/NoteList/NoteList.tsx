import React from 'react';
import { useSelector } from 'react-redux';
import CreateNote from './CreateNote';
import Note from './Note';
import styles from './index.scss';

const NoteList = () => {
  const { filterStar, notes, } = useSelector(state => state);
  return (
    <div className={styles.nodeListBlock}>
      <CreateNote />
      {
        notes
          .filter(note => (filterStar ? note.important : true))
          .map(note => <Note key={note.id} note={note} />)
      }
    </div>
  );
};

export default NoteList;
