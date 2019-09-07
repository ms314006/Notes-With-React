import React from 'react';
import Header from '../Header';
import styles from './index.scss';
import theme from '../../style/theme.scss';

const Main = (): JSX.Element => (
  <>
    <div
      className={styles.backgroundBlock}
      data-testid="main_block"
    >
      <div className={styles.backgroundObject} />
      <div className={styles.backgroundObject} />
    </div>
    <div className={styles.mainContent}>
      <Header />
    </div>
  </>
);

export default Main;
