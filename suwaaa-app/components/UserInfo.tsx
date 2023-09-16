// components/UserInfoBar.tsx
import React from 'react';
import styles from './UserInfo.module.css';
import { Button } from '@mui/material';

interface UserInfoBarProps {
  userName: string;
  userId: string;
  onSettingClick: () => void;
}

const UserInfoBar: React.FC<UserInfoBarProps> = ({ userName, userId, onSettingClick }) => {
  return (
    <div className={styles.userInfoBar}>
      <div className={styles.userInfo}>
        <div>{userName}</div>
        <div>Suwaaa ID: {userId}</div>
      </div>
      <div className={styles.settingButton}>
        <Button variant="outlined" onClick={onSettingClick}>
          設定
        </Button>
      </div>
    </div>
  );
};

export default UserInfoBar;
