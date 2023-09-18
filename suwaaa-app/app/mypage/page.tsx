// pages/login.tsx
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button, Container } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from './page.module.css';
import TopBar from '../../components/TopBar';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/login',
        {
          method: 'POST',
          body: JSON.stringify({ email, password })
        }
      )
      console.log(res)
      router.push('/home')
    } catch(e) {
      alert('ログインに失敗しました')
    }
  }

  return (
    <Container className={styles.container}>
      <div className={styles.profileWrap}>
        <div>
          <img className={styles.profileImg} />
        </div>
        <div>
          <h4>Kento</h4>
          <span>SuwaaaID: Kento210</span>
        </div>
        <div>
          <Button variant="outlined">
            <MoreHorizIcon />
          </Button>
        </div>
      </div>
      <div className={styles.likeWrap}>
        <h2>
          お気に入り
        </h2>
        <div className={styles.shopsWrap}>
          <div className={styles.shopCard}>
            <img />
            <p>店舗名</p>
          </div>
          <div className={styles.shopCard}>
            <img />
            <p>店舗名</p>
          </div>
          <div className={styles.shopCard}>
            <img />
            <p>店舗名</p>
          </div>
          <div className={styles.shopCard}>
            <img />
            <p>店舗名</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

