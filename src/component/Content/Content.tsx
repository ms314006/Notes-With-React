import React from 'react';
import DisplaySetting from './DisplaySetting';
import NoteList from './NoteList';
import styles from './index.scss';

const Content = () => (
  <div className={styles.contentBlock}>
    <DisplaySetting />
    <NoteList />
  </div>
);

export default Content;
