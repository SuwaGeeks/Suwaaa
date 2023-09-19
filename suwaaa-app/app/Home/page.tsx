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
      name: 'Suwaaa茅野本店',
      genre: 'ラーメン',
      message: '学生の皆さんお待ちしております',
      thumbnail: '/test.jpeg',
    },
    {
      id: '2',
      name: '店舗2',
      genre: 'ジャンル2',
      message: '一言メッセージ2',
      thumbnail: 'thumbnail2.jpg',
    },
    {
        id: '3',
        name: '店舗3',
        genre: 'ジャンル2',
        message: '一言メッセージ2',
        thumbnail: 'thumbnail2.jpg',
    },
    {
        id: '4',
        name: '店舗4',
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
