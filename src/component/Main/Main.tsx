import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BackgroundObject from './BackgroundObject';
import Header from '../Header';
import Content from '../Content';
import styles from './index.scss';
import themeStyle from '../../style/theme.scss';

const Main = (): JSX.Element => {
  const { theme, } = useSelector(state => state);
  const [backgroundObjCount, setBackgroundObjCount] = useState(0);
  const calculationBackgroundObjCount = () => {
    setBackgroundObjCount(Math.ceil((window.innerHeight - 200) / 268));
  };
  useEffect(() => {
    calculationBackgroundObjCount();
    window.addEventListener('resize', calculationBackgroundObjCount);
    return () => {
      window.removeEventListener('resize', calculationBackgroundObjCount);
    };
  }, []);
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
        {
          [...new Array(backgroundObjCount)]
            .map(
              (v, i) => (
                <BackgroundObject
                  key={i}
                  topPosition={52 + ((i + 1) * 268)}
                />
              )
            )
        }
      </div>
      <div className={styles.mainContent}>
        <Header />
        <Content />
      </div>
    </>
  );
};

export default Main;
