// pages/signup.tsx
'use client';
import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Container,
  TextField,
  Stack,
  Box,
  Typography,
  Alert,
  AlertTitle,
  IconButton,
} from '@mui/material';
import Link from 'next/link';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from './page.module.css';

export default function Signup() {
  const _router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [_email, setEmail] = useState('');
  const [_schoolEmail, setSchoolEmaill] = useState('');
  const [_password, setPassword] = useState('');
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isCharacterValid, setIsCharacterValid] =
    useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidSchoolEmail, setIsValidSchoolEmail] =
    useState(false);

  const handleSchoolEmailChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const schoolEmail = e.target.value;
    setSchoolEmaill(schoolEmail);
    setIsValidSchoolEmail(
      /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@ed.sus.ac.jp/.test(
        schoolEmail
      )
    );
  };
  const handleEmailChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const email = e.target.value;
    setEmail(email);
    setIsValidEmail(
      /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(
        email
      )
    );
  };
  const handlePasswordChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const password = e.target.value;
    setPassword(password);
    setIsLengthValid(password.length >= 6);

    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialCharacter =
      /[!@#$%^&*()_+\-={};"|,.<>/?]+/.test(password);
    setIsCharacterValid(
      hasUppercase && hasSpecialCharacter
    );
  };

  const _signup = async (
    email: string,
    password: string
  ) => {
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      console.log(res);
      // router.push('/home')
    } catch (e) {
      alert('ログインに失敗しました');
    }
  };

  return (
    <Box component="div">
      <Box
        component="header"
        sx={{
          height: '1.5em',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        my={2}
        mx={1}
      >
        <Link href="/">
          <IconButton aria-label="back">
            <ArrowBackIosNewIcon />
          </IconButton>
        </Link>
        <Typography
          sx={{
            width: 'calc(100% - 80px)',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          新規登録
        </Typography>
      </Box>
      <Container className={styles.container}>
        <Stack gap={3} pt={5}>
          {showAlert ? (
            <Alert severity="info">
              <AlertTitle>新規登録</AlertTitle>
              <Typography
                fontSize="small"
                sx={{ display: 'flex', flexWrap: 'wrap' }}
              >
                <span>大学メールアドレスに届いた</span>
                <span>
                  確認メールのリンクをクリックして
                </span>
                <span>有効化してください</span>
              </Typography>
            </Alert>
          ) : (
            <></>
          )}
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Stack gap={2}>
              <TextField
                className={styles.inputField}
                label="大学メールアドレス"
                variant="outlined"
                size="small"
                type="email"
                onChange={handleSchoolEmailChange}
                autoComplete="on"
              />
              <TextField
                className={styles.inputField}
                label="個人メールアドレス"
                variant="outlined"
                type="email"
                onChange={handleEmailChange}
                autoComplete="on"
                size="small"
              />
              <TextField
                className={styles.inputField}
                label="パスワード"
                variant="outlined"
                type="password"
                onChange={handlePasswordChange}
                autoComplete="on"
                size="small"
              />
            </Stack>
          </Box>
          <Stack>
            <Box sx={{ display: 'flex' }}>
              <DoneIcon
                sx={{
                  color: isValidSchoolEmail
                    ? '#217178'
                    : '#B1B1B1',
                }}
              />
              <Typography ml={1}>
                有効な大学メールアドレスを入力
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <DoneIcon
                sx={{
                  color: isValidEmail
                    ? '#217178'
                    : '#B1B1B1',
                }}
              />
              <Typography ml={1}>
                有効な個人メールアドレスを入力
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <DoneIcon
                sx={{
                  color: isLengthValid
                    ? '#217178'
                    : '#B1B1B1',
                }}
              />
              <Typography ml={1}>
                パスワードは6文字以上
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <DoneIcon
                sx={{
                  color: isCharacterValid
                    ? '#217178'
                    : '#B1B1B1',
                }}
              />
              <Typography
                ml={1}
                sx={{ display: 'flex', flexWrap: 'wrap' }}
              >
                <span>パスワードは大文字と特殊文字が</span>
                <span>含まれている</span>
              </Typography>
            </Box>
          </Stack>
          <Box className={styles.buttonBox}>
            <Button
              variant="contained"
              className={
                isValidEmail &&
                isLengthValid &&
                isCharacterValid &&
                isValidSchoolEmail
                  ? styles.buttonEnabled
                  : styles.buttonDisabled
              }
              disabled={
                !(
                  isValidEmail &&
                  isLengthValid &&
                  isCharacterValid &&
                  isValidSchoolEmail
                )
              }
              onClick={() => {
                setShowAlert(true);
              }}
            >
              メールアドレスで登録
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
