import React from 'react';
import SearchInput from './SearchInput';
import styles from './index.scss';

const Header = () => {
  return (
    <div className={styles.headerBlock}>
      <div>會員照片</div>
      <SearchInput />
      <div>切換</div>
    </div>
  );
};

export default Header;
