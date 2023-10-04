// pages/signup.tsx
'use client'
import { useState, ChangeEvent } from 'react';
import { Button, Container, TextField, Checkbox, FormControlLabel } from '@mui/material';
import styles from './page.module.css';
import TopBar from '../../components/TopBar';

export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isCharacterValid, setIsCharacterValid] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(newEmail.includes('@'));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsLengthValid(newPassword.length >= 6);

    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(newPassword);
    setIsCharacterValid(hasUppercase && hasSpecialCharacter);
  };

  const signup = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/signup',
        {
          method: 'POST',
          body: JSON.stringify({ email, password })
        }
      )
      console.log(res)
      // router.push('/home')
    } catch(e) {
      alert('ログインに失敗しました')
    }
  }

  return (
    <Container className={styles.container}>
      <TopBar goBackTo="/" pageTitle="サインアップ" />
      <form className={styles.inputWrap}>
          <TextField
            className={styles.inputField}
            label="メールアドレス"
            variant="outlined"
            type="email"
            onChange={handleEmailChange}
            autoComplete="on"
          />
          <TextField
            className={styles.inputField}
            label="パスワード"
            variant="outlined"
            type="password"
            onChange={handlePasswordChange}
            autoComplete="on"
          />
      </form>
      <div className={styles.validateWrap}>
        <FormControlLabel
          control={<Checkbox checked={isValidEmail} />}
          label="有効なメールアドレスを入力"
        />
        <FormControlLabel
          control={<Checkbox checked={isLengthValid} />}
          label="パスワードは6文字以上"
        />
        <FormControlLabel
          control={<Checkbox checked={isCharacterValid} />}
          label="パスワードには大文字と特殊文字が含まれている"
        />
      </div>
      <div className={styles.buttonWrap}>
        <Button
          variant="contained"
          className={isValidEmail && isLengthValid && isCharacterValid ? styles.buttonEnabled : styles.buttonDisabled}
          disabled={!(isValidEmail && isLengthValid && isCharacterValid)}
          onClick={() => {signup(email, password)}}
        >
          メールアドレスで登録
        </Button>
      </div>
    </Container>
  );
}
