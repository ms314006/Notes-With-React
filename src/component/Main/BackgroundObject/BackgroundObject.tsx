import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.scss';
import themeStyle from '../../../style/theme.scss';

const BackgroundObject = (props) => {
  const { topPosition, } = props;
  const { theme, } = useSelector(state => state);
  return (
    <div
      className={
        `${styles.backgroundObject}
        ${theme === 'light'
          ? themeStyle.backgroungObjLight
          : themeStyle.backgroungObjDark}`
      }
      style={{ top: topPosition, }}
    />
  );
};

export default BackgroundObject;
