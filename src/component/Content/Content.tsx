import React from 'react';
import DisplaySetting from './DisplaySetting';
import styles from './index.scss';

const Content = () => (
  <div className={styles.contentBlock}>
    <DisplaySetting />
    <div>list</div>
  </div>
);

export default Content;
