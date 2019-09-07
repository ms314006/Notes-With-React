import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chageTheme } from '../../../action/notes';
import styles from './index.scss';
import themeStyle from '../../../style/theme.scss';

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const { theme, } = useSelector(state => state);
  return (
    <div className={styles.switchThemeBlock}>
      <div
        className={
          `${styles.switchTheme}
           ${theme === 'light'
            ? themeStyle.switchThemeLight
            : themeStyle.switchThemeDark}`
        }
        onKeyDown={() => {}}
        onClick={() => {
          dispatch(chageTheme(theme === 'light' ? 'dark' : 'light'));
        }}
      />
    </div>
  );
};

export default SwitchTheme;
