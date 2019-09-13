import React from 'react';
import CreateNote from './CreateNote';
import styles from './index.scss';

const NoteList = () => {
  const notes = [
    {
      id: '1', name: '筆記 1', image: '01', content: 'andrej-lisakov-V2OyJtFqEtY-unsplash',
    }, {
      id: '1', name: '筆記 1', image: '01', content: 'andrej-lisakov-V2OyJtFqEtY-unsplash',
    }, {
      id: '1', name: '筆記 1', image: '01', content: 'andrej-lisakov-V2OyJtFqEtY-unsplash',
    }, {
      id: '1', name: '筆記 1', image: '01', content: 'andrej-lisakov-V2OyJtFqEtY-unsplash',
    }, {
      id: '1', name: '筆記 1', image: '01', content: 'andrej-lisakov-V2OyJtFqEtY-unsplash',
    },
  ];
  return (
    <div className={styles.nodeListBlock}>
      <CreateNote />
    </div>
  );
};

export default NoteList;
