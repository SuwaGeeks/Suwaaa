// pages/login.tsx
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button, Container, TextField } from '@mui/material';
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
      <TopBar goBackTo="/" pageTitle="ログイン" />
      <form className={styles.inputWrap}>
        <TextField
          className={styles.inputField}
          label="メールアドレス"
          variant="outlined"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="on"
        />
        <TextField
          className={styles.inputField}
          label="パスワード"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="on"
        />
      </form>
      <div className={styles.buttonWrap}>
        <Button
          variant="contained"
          className={styles.button}
          disabled={!email || !password}
          onClick={() => {login(email, password)}}
        >
          ログイン
        </Button>
      </div>
    </Container>
  );
}

