// pages/login.tsx
'use client'
import { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import styles from './page.module.css';
import TopBar from '../../components/TopBar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container className={styles.container}>
      <TopBar goBackTo="/" pageTitle="ログイン" />
      <div className={styles.inputWrap}>
        <TextField
          className={styles.inputField}
          label="メールアドレス"
          variant="outlined"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={styles.inputField}
          label="パスワード"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.buttonWrap}>
          <Button
            variant="contained"
            className={styles.button}
            disabled={!email || !password}
          >
            ログイン
          </Button>
        </div>
      </div>
    </Container>
  );
}

