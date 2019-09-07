import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.scss';
import themeStyle from '../../../style/theme.scss';

const BackgroundObject = () => {
  const { theme } = useSelector(state => state);
  return (
    <div
      className={
        `${styles.backgroundObject}
        ${theme === 'light'
          ? themeStyle.backgroungObjLight
          : themeStyle.backgroungObjDark}`
      }
    />
  );
};

export default BackgroundObject;
