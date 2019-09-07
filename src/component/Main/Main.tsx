import React from 'react';
import { useSelector } from 'react-redux';
import BackgroundObject from './BackgroundObject';
import Header from '../Header';
import Content from '../Content';
import styles from './index.scss';
import themeStyle from '../../style/theme.scss';

const Main = (): JSX.Element => {
  const { theme } = useSelector(state => state);
  return (
    <>
      <div
        className={
          `${styles.backgroundBlock}
          ${theme === 'light'
            ? themeStyle.backgroungLight
            : themeStyle.backgroungDark}`
        }
        data-testid="main_block"
      >
        <BackgroundObject />
        <BackgroundObject />
      </div>
      <div className={styles.mainContent}>
        <Header />
        <Content />
      </div>
    </>
  );
};

export default Main;
