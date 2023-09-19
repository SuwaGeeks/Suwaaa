// components/StoreList.tsx
import React from 'react';
import styles from './StoreList.module.css';
import Link from 'next/link';

interface Store {
  id: string;
  name: string;
  genre: string;
  message: string;
  thumbnail: string;
}

interface StoreListProps {
  stores: Store[];
}

const StoreList: React.FC<StoreListProps> = ({ stores }) => {
  return (
    <div className={styles.storeList}>
      {stores.map((store) => (
        <Link key={store.id} href={`/StorePage/${store.id}`} passHref>
          <div className={styles.storeCard}>
            <img src={store.thumbnail} alt={store.name} className={styles.storeImage} />
            <div className={styles.storeInfo}>
              <div><strong>{store.name}</strong></div>
              <div>{store.genre}</div>
              <div>{store.message}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StoreList;
