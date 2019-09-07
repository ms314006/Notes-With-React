import React from 'react';
import SearchInput from './SearchInput';
import Member from './Member';
import SwitchTheme from './SwitchTheme';
import styles from './index.scss';

const Header = () => {
  return (
    <div className={styles.headerBlock}>
      <Member />
      <SearchInput />
      <SwitchTheme />
    </div>
  );
};

export default Header;
