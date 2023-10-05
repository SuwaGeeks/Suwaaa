// pages/login.tsx
'use client';
import { useState } from 'react';
import Image from 'next';
import { Button, Container } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from './page.module.css';

export default function Login() {
  const [name, _setName] = useState('');
  const [id, _setId] = useState('');
  const [likes, _setLikes] = useState([
    {
      name: '店舗1',
    },
    {
      name: '店舗1',
    },
    {
      name: '店舗1',
    },
  ]);

  return (
    <Container className={styles.container}>
      <div className={styles.profileWrap}>
        <div>
          <Image
            className={styles.profileImg}
            alt="user-icon"
          />
        </div>
        <div>
          <h4>{name}</h4>
          <span>SuwaaaID: {id}</span>
        </div>
        <div>
          <Button variant="outlined">
            <MoreHorizIcon />
          </Button>
        </div>
      </div>
      <div className={styles.likeWrap}>
        <h2>お気に入り</h2>
        <div className={styles.shopsWrap}>
          {likes.map((like, index) => {
            return (
              <div className={styles.shopCard} key={index}>
                <Image alt="shop-image" />
                <p>{like.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
