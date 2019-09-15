import React from 'react';
import FilterStarButton from './FilterStarButton';
import NoteDisplayMode from './NoteDisplayMode';
import styles from './index.scss';

const DisplaySetting = () => (
  <div className={styles.displaySettingBlock}>
    <FilterStarButton />
    <NoteDisplayMode />
  </div>
);

export default DisplaySetting;
