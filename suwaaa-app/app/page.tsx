import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Start() {
  return (
    <Container className={styles.container}>
      <Box className={styles.logoBox}>
        <Image
          src="/image_green.png"
          width={670}
          height={480}
          objectFit="contain"
          alt="Background"
          className={styles.backgroundImage}
        />
        <Image
          src="/Suwaaa-logo.png"
          width={500}
          height={500}
          objectFit="contain"
          alt="Suwaaa Logo"
          className={styles.logo}
        />
      </Box>
      <div className={styles.buttonContainer}>
        <Link href="/signup" passHref>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#217178',
              color: 'white',
            }}
            className={styles.button}
          >
            はじめて利用する
          </Button>
        </Link>
        <Link href="/login" passHref>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#D9D9D9',
              color: 'black',
            }}
            className={styles.button}
          >
            アカウントを持っている
          </Button>
        </Link>
      </div>
      <Typography variant="body2" className={styles.footer}>
        本サービスの利用開始により、
        <Link href="/terms" passHref>
          <Typography
            component="span"
            variant="body2"
            style={{
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            利用規約
          </Typography>
        </Link>
        とプライバシーポリシーに同意したことになります。
      </Typography>
    </Container>
  );
}
