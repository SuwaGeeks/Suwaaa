// pages/signup.tsx
'use client'
import { useState } from 'react';
import { Button, Container, TextField, Checkbox, FormControlLabel } from '@mui/material';
import styles from './page.module.css';
import TopBar from '../../components/TopBar';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isCharacterValid, setIsCharacterValid] = useState(false);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Check if password length is 6 or more
    setIsLengthValid(newPassword.length >= 6);

    // Check if password contains at least one uppercase letter and one special character
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(newPassword);
    setIsCharacterValid(hasUppercase && hasSpecialCharacter);
  };

  return (
    <Container className={styles.container}>
      <TopBar goBackTo="/start" pageTitle="サインアップ" />
      <div className={styles.inputContainer}>
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
          onChange={handlePasswordChange}
        />
      </div>
      <div className={styles.checkboxContainer}>
        <FormControlLabel
          control={<Checkbox checked={isLengthValid} />}
          label="パスワードは6文字以上"
        />
        <FormControlLabel
          control={<Checkbox checked={isCharacterValid} />}
          label="パスワードには大文字と特殊文字が含まれている"
        />
      </div>
      <Button
        variant="contained"
        className={isLengthValid && isCharacterValid ? styles.buttonEnabled : styles.buttonDisabled}
        disabled={!(isLengthValid && isCharacterValid)}
      >
        メールアドレスで登録
      </Button>
    </Container>
  );
}