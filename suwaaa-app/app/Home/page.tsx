// /home/page.tsx
import React from 'react';
import UserInfo from '../../components/UserInfo';
import StoreList from '../../components/StoreList';
import styles from './page.module.css';

const Home: React.FC = () => {
  // 仮のデータ
  const stores = [
    {
      id: '1',
      name: '店舗1',
      genre: 'ジャンル1',
      message: '一言メッセージ1',
      thumbnail: 'thumbnail1.jpg',
    },
    {
      id: '2',
      name: '店舗2',
      genre: 'ジャンル2',
      message: '一言メッセージ2',
      thumbnail: 'thumbnail2.jpg',
    },
  ];

  const userInfo = {
    userName: 'Kento',
    userId: 'Kento210',
  };

  return (
    <div className={styles.container}>
      <UserInfo userName={userInfo.userName} userId={userInfo.userId} />
      <StoreList stores={stores} />
    </div>
  );
};

export default Home;
