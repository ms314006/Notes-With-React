import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import styles from './index.scss';
import themeStyle from '../../../style/theme.scss';

const Member = () => {
  const { theme, } = useSelector(state => state);
  return (
    <div
      className={
        `${styles.memberBlock}
        ${theme === 'light'
          ? themeStyle.fontColorLight
          : themeStyle.fontColorDark}`
      }
    >
      <Avatar
        alt="Remy Sharp"
        src="./static/images/member.png"
      />
      <span className={styles.memberName}>神 Q 超人</span>
    </div>
  )
};

export default Member;
