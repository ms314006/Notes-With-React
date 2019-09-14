import React from 'react';
import { useSelector, } from 'react-redux';
import CreateNote from './CreateNote';
import Note from './Note';
import styles from './index.scss';

const NoteList = () => {
  const { filterStar, } = useSelector(state => state);
  const notes = [
    {
      id: '1', name: '筆記 1', image: 'andrej-lisakov-V2OyJtFqEtY-unsplash', content: 'asdfasdfsdfa', important: true,
    }, {
      id: '2', name: '筆記 2', image: 'annie-spratt-0ZPSX_mQ3xI-unsplash', content: 'qwerqw', important: true,
    }, {
      id: '3', name: '筆記 3', image: 'bharath-g-s-aLGiPJ4XRO4-unsplash', content: 'zxcvxcv', important: false,
    }, {
      id: '4', name: '筆記 4', image: 'ivan-gromov-Y3vPEuNlf7w-unsplash', content: 'ytiutyiuh', important: true,
    }, {
      id: '5', name: '筆記 5', image: 'pawel-czerwinski-dgJT71cXlC4-unsplash', content: 'jkjlkjlj', important: true,
    }
  ];
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
