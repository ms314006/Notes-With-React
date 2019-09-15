import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import styles from './index.scss';

const Content = () => (
  <div className={styles.contentBlock}>
    <Switch>
      <Route exact path="/" component={NoteList} />
      <Route exact path="/note/:id" component={NoteEditor} />
    </Switch>
  </div>
);

export default Content;
