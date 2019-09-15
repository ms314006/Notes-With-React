import React from 'react';
import { useSelector } from 'react-redux';
import DisplaySetting from './DisplaySetting';
import CreateNote from './CreateNote';
import Note from './Note';
import styles from './index.scss';
import { INote } from '../../../interface/INote';

const NoteList = () => {
  const { filterStar, searchWord, notes, } = useSelector(state => state);
  return (
    <>
      <DisplaySetting />
      <div className={styles.nodeListBlock}>
        <CreateNote />
        {
          notes
            .filter((note: INote) => (filterStar ? note.important : true))
            .filter((note: INote) => (note.name.indexOf(searchWord) !== -1))
            .map((note: INote) => <Note key={note.id} note={note} />)
        }
      </div>
    </>
  );
};

export default NoteList;
