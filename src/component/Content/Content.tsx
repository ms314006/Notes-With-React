import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DisplaySetting from './DisplaySetting';
import NoteList from './NoteList';
import styles from './index.scss';

const Content = () => (
  <div className={styles.contentBlock}>
    <Switch>
      <Route path="/" component={NoteList} />
    </Switch>
  </div>
);

export default Content;
