// pages/signup.tsx
'use client'
import { useState } from 'react';
import { Button, Container, TextField, Checkbox, FormControlLabel } from '@mui/material';
import styles from './page.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const checkPassword = (password) => {
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    return hasNumber && hasLetter && password.length >= 6;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValid(checkPassword(newPassword));
  };

  return (
    <Container className={styles.container}>
      <TextField
        label="メールアドレス"
        variant="outlined"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="パスワード"
        variant="outlined"
        type="password"
        onChange={handlePasswordChange}
      />
      <FormControlLabel
        control={<Checkbox checked={isValid} />}
        label="パスワードは6文字以上"
      />
      <FormControlLabel
        control={<Checkbox checked={isValid} />}
        label="パスワードには半角英数字が含まれている"
      />
      <Button
        variant="contained"
        className={isValid ? styles.button : styles.disabledButton}
        disabled={!isValid}
      >
        メールアドレスで登録
      </Button>
    </Container>
  );
}
