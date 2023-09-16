// pages/start.tsx
import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import styles from './page.module.css';

export default function Start() {
    return (
      <Container className={styles.container}>
        <div className={styles.imageContainer}>
          {/* 背景画像 */}
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/signup" passHref>
            <Button variant="contained" style={{ backgroundColor: '#217178', color: 'white' }}>
              はじめて利用する
            </Button>
          </Link>
          <Button variant="contained" style={{ backgroundColor: '#D9D9D9', color: 'black' }}>
            アカウントを持っている
          </Button>
        </div>
        <Typography variant="body2" className={styles.footer}>
          本サービスの利用開始により、
          <Link href="/start/policy" passHref>
            <Typography component="span" variant="body2" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              利用規約
            </Typography>
          </Link>
          とプライバシーポリシーに同意したことになります。
        </Typography>
      </Container>
    );
  }
